
/**
   @module ABLParser
 */
var ABLListener = require('./ABLListener');


/**
   The JGListener constructor
   @class JGListener
   @constructor
 */
var JGListener = function(){
    //Not ABLListener.call:
    ABLListener.ABLListener.call(this);
    this.parsedStack = [];
    return this;
};

//Not ABLListener.prototype, just ABLListener
//Setup the prototype chain:
JGListener.prototype = Object.create(ABLListener.ABLListener.prototype);
JGListener.prototype.constructor = JGListener;

//------------------------------
//PARSING METHODS:

/**
   Enter the root rule of the ABL Grammar
   Sets up the parsedStack datastructure
   @method enterProg
 */
JGListener.prototype.enterProg = function(ctx){
    this.parsedStack = [];
};

/**
   Parses a package declaration
   @method enterG_package
 */
JGListener.prototype.enterG_package = function(ctx){
    if(ctx.TYPE().getText() === "<missing undefined>"){
        throw new Error("Package missing TYPE");
    }

    this.parsedStack.push(//["package",ctx.name().getText()]);
        {
            type : "package",
            name : ctx.TYPE().getText(),
        }
    );
};

/**
   Parses an import statement
   @method enterG_import
*/
JGListener.prototype.enterG_import = function(ctx){
    //console.log("import name:", ctx.name().getText());
    for(var x in ctx.TYPE()){
        var importName = ctx.TYPE()[x].getText();
        var star = false;
        if(ctx.STAR()){
            star = true;
            //remove the dot from the name:
            if(importName[importName.length-1] === "."){
                importName = importName.slice(0,-1);
            }
        }

        if(importName !== '<missing undefined>'){
            this.parsedStack.push({
                name : importName,
                type : "importDeclaration",
                starred : star,
            });
        }
    }
};

/**
   Parses constant declarations
   @method enterConstants
 */
JGListener.prototype.enterConstants = function(ctx){
    for(var x in ctx.TYPE()){
        var importName = ctx.TYPE()[x].getText();
        if(importName !== '<missing undefined>'){
            this.parsedStack.push({
                name : importName,
                type : "constantDeclaration",
            });
        }
    }
};

/**
   Parse team needed statements
   @method enterTeamNeeded
 */
JGListener.prototype.enterTeamNeeded = function(ctx){
    if(ctx.JOINTNEG()&& ctx.TEAMNEEDED()){
        this.parsedStack.push({
            teamNeeded : true,
            oneNeeded : false,
            type : "teamNeededForSuccessDeclaration"
            
        });
    }else if(ctx.JOINTNEG() && ctx.ONENEEDED()){
        this.parsedStack.push({
            teamNeeded : false,
            oneNeeded : true,
            type : "teamNeededForSuccessDeclaration"
        });
    }
};

/**
   Parse Conflict Declarations
   @method enterConflictDecl
 */
JGListener.prototype.enterConflictDecl = function(ctx){
    console.log("conflict Dec:");
    var secondObj = [];
    for(var i = 1; i < ctx.name().length; i++) {
        if(ctx.name(i).getText() != '<missing undefined>'){
            secondObj.push(ctx.name(i).getText());
        }
    }

    if(secondObj.length > 0){
        var newObj = {
            type : "conflictDeclaration",
            first : ctx.name(0).getText(),
            second : secondObj,
        };

        this.parsedStack.push(newObj);
    }
};

/**
   parse wmeRegistration
   @method enterWmeRegistration
 */
JGListener.prototype.enterWmeRegistration = function(ctx){

    if(ctx.TYPE(0).getText() !== '<missing undefined>' && ctx.TYPE(1).getText() !== '<missing undefined>'){
        this.parsedStack.push({
            type : "WMERegistration",
            wmeType : ctx.TYPE(0).getText(),
            target : ctx.TYPE(1).getText(),
        });
    }
};

/**
   Parse parameters
   @method enterParams
 */
JGListener.prototype.enterParams = function(ctx){
    var outObj = {
        type :"params",
        names: [],
    };
    for(var i = 0; i < ctx.param().length; i++){
        if(ctx.param(i)){
            var param = {
                type : "param",
            };
            param.varType =  ctx.param(i).TYPE() ? ctx.param(i).TYPE().getText() : undefined;
            param.name = ctx.param(i).name() ? ctx.param(i).name().getText() : undefined;
            
            outObj.names.push(param);
        }
    }
    this.parsedStack.push(outObj);
};


/**
   Parse an action registration
   EXIT method to be able to scoop up params
   @method exitActionRegistration
 */
JGListener.prototype.exitActionRegistration = function(ctx){
    var outObj = {
        type : "actionRegistration",
        name : undefined,
        target : undefined,
        params : undefined
    };

    if(ctx.TYPE(0) && ctx.TYPE(1)){
        outObj.name = ctx.TYPE(0).getText();
        outObj.target = ctx.TYPE(1).getText();
        outObj.params = this.parsedStack.pop();
        this.parsedStack.push(outObj);
    }
};


/**
   Parse a variable declaration
   @method enterAblVariableDeclaration
 */
JGListener.prototype.enterAblVariableDeclaration = function(ctx){
    for(var i = 0; i < ctx.name().length; i++){
        var outObj = {
            type : "ablVariableDeclaration",
            name : ctx.name(i).getText(),
            varType : ctx.TYPE().getText()
        };
    
        this.parsedStack.push(outObj);
    }
};

/**
   Parse, from the exit, a wme Declaration
   @method exitWMEDeclaration
 */
JGListener.prototype.exitWmeDeclaration = function(ctx){
    var extendedFromName,collectedVariables;
    collectedVariables = [];
    while(this.parsedStack[this.parsedStack.length-1]
          && this.parsedStack[this.parsedStack.length-1].type === "ablVariableDeclaration"){
        collectedVariables.push(this.parsedStack.pop());
    }
    if(ctx.TYPE(1)){
        extendedFromName = ctx.TYPE(1).getText();
    }

    
    if(ctx.TYPE(0)){
        this.parsedStack.push({
            type : "wmeDeclaration",
            name : ctx.TYPE(0).getText(),
            extendedFrom : extendedFromName,
            variables : collectedVariables
        });
    }
};


JGListener.prototype.enterPropertyDeclaration = function(ctx){
    if(ctx.name() && ctx.TYPE()){
        this.parsedStack.push({
            type : "propertyDeclaration",
            name : ctx.name().getText(),
            varType : ctx.TYPE().getText()
        });
    }    
};

JGListener.prototype.enterAblLiteral = function(ctx){
    var outObj = {
        type : 'ablLiteral',
        value : undefined,
        varType : undefined
    };

    if(ctx.INT()){
        outObj.varType = 'int';
        outObj.value = ctx.INT().getText();
    }else if(ctx.FLOAT()){
        outObj.varType = 'float';
        outObj.value = ctx.FLOAT().getText();
    }else if(ctx.string()){
        outObj.varType = 'string';
        outObj.value = ctx.string().getText();
    }else if(ctx.BOOL()){
        outObj.varType = 'bool';
        outObj.value = ctx.BOOL().getText();
    }else if(ctx.NULL()){
        outObj.varType = 'null';
        outObj.value = ctx.NULL().getText();
    }

    if(outObj.value !== undefined &&
       outObj.varType !== undefined){
        this.parsedStack.push(outObj);
    }
    
};


//an EXIT method to take advantage of ablLiteral Parsing
JGListener.prototype.exitAblExpression = function(ctx){
    var outObj = {
        type : 'ablExpression',
        value : undefined
    };

    if(ctx.name()){
        outObj.value = ctx.name().getText();
        this.parsedStack.push(outObj);
    }else if(ctx.ablLiteral()
             && this.parsedStack[this.parsedStack.length-1].type === "ablLiteral"){
        outObj.value = this.parsedStack.pop();
        this.parsedStack.push(outObj);
    }
};

JGListener.prototype.enterOperator = function(ctx){
    var outObj = {
        type : "operator",
        opType : undefined
    };

    if(ctx.BIND()){
        outObj.opType = "_bind";
    }else if(ctx.GT()){
        outObj.opType = "greaterThan";
    }else if(ctx.GE()){
        outObj.opType = "greaterEqual";
    }else if(ctx.LT()){
        outObj.opType = "lessThan";
    }else if(ctx.LE()){
        outObj.opType = "lessEqual";
    }else if(ctx.EQ()){
        outObj.opType = "equal";
    }else if(ctx.NE()){
        outObj.opType = "notEqual";
    }

    if(outObj.opType !== undefined){
        this.parsedStack.push(outObj);
    }
};

JGListener.prototype.exitWmeFieldTest = function(ctx){
    var outObj = {
        type : "wmeFieldTest",
        name : undefined,
        operator : undefined,
        expression : undefined
    };

    if(ctx.name()){
        outObj.name = ctx.name().getText();
    }

    if(ctx.ablExpression() &&
       this.parsedStack[this.parsedStack.length-1].type === "ablExpression"){
        outObj.expression = this.parsedStack.pop();
    }

    if(ctx.operator() &&
       this.parsedStack[this.parsedStack.length-1].type === "operator"){
        outObj.operator = this.parsedStack.pop();
    }

    if(ctx.name() && ctx.operator() && ctx.ablExpression()){
        this.parsedStack.push(outObj);
    }    
};

//As usual: exit to use pre-parsed sections
JGListener.prototype.exitWmeTest = function(ctx){
    var outObj = {
        type : "wmeTest",
        bang : false,
        name : undefined,
        wmeType : undefined,
        fieldTests : []
    };

    if(ctx.name()){
        outObj.name = ctx.name().getText();
    }

    if(ctx.TYPE()){
        outObj.wmeType = ctx.TYPE().getText();
    }
    
    if(ctx.BANG()){
        outObj.bang = true;
    }

    if(ctx.wmeFieldTest()){
        while(this.parsedStack[this.parsedStack.length-1]
              && this.parsedStack[this.parsedStack.length-1].type == "wmeFieldTest"){
            outObj.fieldTests.push(this.parsedStack.pop());
        }
    }
    
    if(outObj.wmeType !== undefined){
        this.parsedStack.push(outObj);
    }
};

//Binary Op:
JGListener.prototype.exitBinaryOp = function(ctx){
    var outObj = {
        type : "binaryOp",
        bang : false,
        expressions : [],
        operator : undefined
    };

    if(ctx.BANG()){
        outObj.bang = true;
    }

    if(ctx.operator() && ctx.ablExpression().length === 2
       && this.parsedStack[this.parsedStack.length-1].type === "ablExpression"
       && this.parsedStack[this.parsedStack.length-2].type === "operator"){
        outObj.expressions[1] = this.parsedStack.pop();
        outObj.operator = this.parsedStack.pop();
    }

    if(ctx.ablExpression(0)
       && this.parsedStack[this.parsedStack.length-1]){
        outObj.expressions[0] = this.parsedStack.pop();
        this.parsedStack.push(outObj);
    }
};

JGListener.prototype.exitJavaMethod = function(ctx){
    var outObj = {
        type : "javaMethod",
        bang : false,
        name : undefined,
        params : undefined,
    };

    if(ctx.BANG()){
        outObj.bang = true;
    }

    if(ctx.name()){
        outObj.name = ctx.name().getText();
    }

    if(ctx.params() && this.parsedStack[this.parsedStack.length-1].type === "params"){
        outObj.params = this.parsedStack.pop();
    }

    if(outObj.name && outObj.params){
        this.parsedStack.push(outObj);
    }
    
};

JGListener.prototype.exitClause = function(ctx){
    var outObj = {
        type : 'clause',
        child : undefined
    };

    if(ctx.BOOL()){
        if(ctx.BOOL().getText() === "True"){
            outObj.child = true;
        }else{
            outObj.child = false;
        }
    }else if(ctx.name()){
        outObj.child = ctx.name().getText();
    }else if(ctx.javaMethod()
             && this.parsedStack[this.parsedStack.length-1].type === "javaMethod"){
        outObj.child = this.parsedStack.pop();
    }else if(ctx.binaryOp()
             && this.parsedStack[this.parsedStack.length-1].type === "binaryOp"){
        outObj.child = this.parsedStack.pop();
    }    

    if(outObj.child !== undefined){
        this.parsedStack.push(outObj);
    }    
};

JGListener.prototype.enterBooleanHelper = function(ctx){
    var outObj = {
        type : "booleanHelper",
        value : undefined
    };

    if(ctx.AND()){
        outObj.value = "and";
        this.parsedStack.push(outObj);
    }else{
        outObj.value = "or";
        this.parsedStack.push(outObj);
    }
    
};

JGListener.prototype.exitMixedCall = function(ctx){
    var outObj = {
        type : "mixedCall",
        clauses : [],
    };

    while(this.parsedStack.length > 1 && this.parsedStack[this.parsedStack.length-1].type === "clause" && this.parsedStack[this.parsedStack.length-2].type === "booleanHelper"){
        var clause = this.parsedStack.pop();
        var op = this.parsedStack.pop();
        outObj.clauses.unshift([clause,op.value]);
    }

    if(this.parsedStack.length >= 1 && this.parsedStack[this.parsedStack.length-1].type === "clause"){
        outObj.clauses.unshift([this.parsedStack.pop(),"default"]);
        this.parsedStack.push(outObj);
    }
};

JGListener.prototype.exitConditionalExpression = function(ctx){
    if(this.parsedStack.length > 0 && this.parsedStack[this.parsedStack.length-1].type === "mixedCall"){
        this.parsedStack[this.parsedStack.length-1].type = "conditionalExpression";
    }
};

JGListener.prototype.exitWmeTestSequence = function(ctx){
    var outObj = {
        type : "wmeTestSequence",
        clauses : []
    };

    while(this.parsedStack.length > 0
          && (this.parsedStack[this.parsedStack.length-1].type === "wmeTest" || this.parsedStack[this.parsedStack.length-1].type === "conditionalExpression")){
        outObj.clauses.unshift(this.parsedStack.pop());
    }
    
    if(outObj.clauses.length > 0){
        this.parsedStack.push(outObj);
    }
};

JGListener.prototype.exitTestExpression = function(ctx){
    if(this.parsedStack.length > 0
       && this.parsedStack[this.parsedStack.length-1].type === "wmeTestSequence"){
        this.parsedStack[this.parsedStack.length-1].type = "testExpression";
    }

};

JGListener.prototype.exitPrecondition = function(ctx){
    if(this.parsedStack.length > 0
       && this.parsedStack[this.parsedStack.length-1].type === "testExpression"){
        this.parsedStack.push({
            type : "precondition",
            testExpression : this.parsedStack.pop()
        });
    }
};


JGListener.prototype.exitContextCondition = function(ctx){
    if(this.parsedStack.length > 0
       && this.parsedStack[this.parsedStack.length-1].type === "testExpression"){
        this.parsedStack.push({
            type : "contextCondition",
            testExpression : this.parsedStack.pop()
        });
    }
};


JGListener.prototype.exitEntryCondition = function(ctx){
    if(this.parsedStack.length > 0
       && this.parsedStack[this.parsedStack.length-1].type === "testExpression"){
        this.parsedStack.push({
            type : "entryCondition",
            testExpression : this.parsedStack.pop()
        });
    }
};


JGListener.prototype.exitSuccessCondition = function(ctx){
    if(this.parsedStack.length > 0
       && this.parsedStack[this.parsedStack.length-1].type === "testExpression"){
        this.parsedStack.push({
            type : "successCondition",
            testExpression : this.parsedStack.pop()
        });
    }
};


JGListener.prototype.exitStateCondition = function(ctx){
    if(this.parsedStack.length > 0
       && this.parsedStack[this.parsedStack.length-1].type === "testExpression"){
        this.parsedStack.push({
            type : "stateCondition",
            testExpression : this.parsedStack.pop()
        });
    }
};


JGListener.prototype.exitSuccessTest = function(ctx){
    if(this.parsedStack.length > 0
       && this.parsedStack[this.parsedStack.length-1].type === "testExpression"){
        this.parsedStack.push({
            type : "successTest",
            testExpression : this.parsedStack.pop()
        });
    }
};

JGListener.prototype.exitNumberNeededForSuccess = function(ctx){
    if(ctx.ablLiteral()
       && this.parsedStack[this.parsedStack.length-1].type === "ablLiteral"){
        this.parsedStack.push({
            type : "numberNeededForSuccess",
            value : this.parsedStack.pop()
        });
    }    
};

JGListener.prototype.exitTeamMemberSpecifier = function(ctx){
    var outObj = {
        type : "teamMemberSpecifier",
        names : []
    };

    for(var i = 0; i < ctx.name().length; i++){
        outObj.names.push(ctx.name(i).getText());
    }

    if(outObj.names.length > 0){
        this.parsedStack.push(outObj);
    }
};

JGListener.prototype.exitPriorityModifier = function(ctx){
    var outObj = {
        type : "priorityModifier",
        value : undefined
    };

    if(ctx.ablLiteral()
       && this.parsedStack[this.parsedStack.length-1].type === "ablLiteral"){
        outObj.value = this.parsedStack.pop();
        this.parsedStack.push(outObj);
    }
    
};

JGListener.prototype.exitPersistence = function(ctx){
    var outObj = {
        type : "persistence",
        value : undefined
    };

    if(ctx.WHEN_FAILS()){
        outObj.value = "whenFails";
    }else if(ctx.WHEN_SUCCEEDS()){
        outObj.value = "whenSucceeds";
    }

    if(outObj.value !== undefined){
        this.parsedStack.push(outObj);
    }
};


JGListener.prototype.exitNamedProperty = function(ctx){
    var outObj = {
        type : "namedProperty",
        name : undefined,
        value : undefined
    };

    if(ctx.name()){
        outObj.name = ctx.name().getText();
    }

    if(ctx.ablExpression()
       && this.parsedStack[this.parsedStack.length-1].type === "ablExpression"){
        outObj.value = this.parsedStack.pop();
    }

    if(outObj.name !== undefined
       && outObj.value !== undefined){
        this.parsedStack.push(outObj);
    }
    
};

JGListener.prototype.exitStepModifier = function(ctx){
    var outObj = {
        type : 'stepModifier',
        modType : undefined,
        modValue : undefined
    };

    if(this.parsedStack.length < 1) return;
    
    var prevValue = this.parsedStack[this.parsedStack.length-1];
    
    if(ctx.IGNORE_FAILURE()){
        outObj.modType = "ignoreFailure";
        outObj.modValue = 0;
    }else if(ctx.EFFECT_ONLY()){
        outObj.modType = "effectOnly";
        outObj.modValue = 0;
    }else if(ctx.POST()){
        outObj.modType = "post";
        outObj.modValue = 0;
    }else if(ctx.POST_TO() && ctx.name()){
        outObj.modType = "postTo";
        outObj.modValue = ctx.name().getText();
    }else if(ctx.TEAMNEEDED()){
        outObj.modType = "teamNeeded";
        outObj.modValue = 0;
    }else if(ctx.ONENEEDED()){
        outObj.modType = "oneNeeded";
        outObj.modValue = 0;
    }else if(ctx.priorityModifier()){
        if(prevValue.type === "priorityModifier"){
            this.parsedStack.pop();
            outObj.modType = "priorityModifier";
            outObj.modValue = prevValue;
        }
    }else if(ctx.persistence()){
        if(prevValue.type === "persistence"){
            this.parsedStack.pop();
            outObj.modType = "persistence";
            outObj.modValue = prevValue;
        }
    }else if(ctx.namedProperty()){
        if(prevValue.type === "namedProperty"){
            this.parsedStack.pop();
            outObj.modType = "namedProperty";
            outObj.modValue = prevValue;
        }           
    }else if(ctx.successTest()){
        if(prevValue.type === "successTest"){
            this.parsedStack.pop();
            outObj.modType = "successTest";
            outObj.modValue = prevValue;
        }
    }

    
    if(outObj.modType !== undefined
       && outObj.modValue !== undefined){
        this.parsedStack.push(outObj);
    }    
};


exports.JGListener = JGListener;
