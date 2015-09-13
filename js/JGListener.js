
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

JGListener.prototype.itemsOnStack = function(ctx){
    if(this.parsedStack.length > 0) return true;
    return false;
}

JGListener.prototype.lastOnStack = function(ctx){
    if(this.parsedStack.length > 0){
        return this.parsedStack[this.parsedStack.length-1];
    }else{
        return null;
    }
};

/**
   Parses a package declaration
   @method enterG_package
 */
JGListener.prototype.enterG_package = function(ctx){
    if(ctx.name().getText() === "<missing undefined>"){
        throw new Error("Package missing TYPE");
    }

    this.parsedStack.push({
            type : "package",
            name : ctx.name().getText(),
        });
};

/**
   Parses an import statement
   @method enterG_import
*/
JGListener.prototype.enterG_import = function(ctx){
    var outObj = {
        type : 'importDeclaration',
        starred : false,
        name : undefined
    };

    if(ctx.name() && ctx.name().getText() !== "<missing undefined>"){
        outObj.name = ctx.name().getText();
    }
    
    if(ctx.STAR()){
        outObj.starred = true;
        outObj.name = outObj.name.slice(0,-1);
    }

    if(outObj.name !== undefined){
        this.parsedStack.push(outObj);
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
   parse individual parameter
   @method exitParam
 */
JGListener.prototype.exitParam = function(ctx){
    var outObj = {
        type : "param",
        //explicit type
        varType : undefined,
        //either a name or a literal
        value : undefined
    };

    if(ctx.name() && ctx.ablExpression() && this.lastOnStack().type === "ablExpression"){
        outObj.value = this.parsedStack.pop();
        outObj.varType = ctx.name().getText();
    }else if(ctx.name()){
        outObj.varType = ctx.name().getText();
    }else if(ctx.ablExpression() && this.lastOnStack().type === "ablExpression"){
        outObj.value = this.parsedStack.pop();
    }

    if(outObj.varType !== undefined || outObj.value !== undefined){
        this.parsedStack.push(outObj);
    }
};


/**
   Parse parameters
   @method exitParams
 */
JGListener.prototype.exitParams = function(ctx){
    var outObj = {
        type :"params",
        params: [],
    };

    //transfer all individual param into the params array
    while(this.itemsOnStack() && this.lastOnStack().type === "param"){
        outObj.params.unshift(this.parsedStack.pop());
    };
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

    if(ctx.name() && ctx.TYPE() && this.itemsOnStack()
       && this.lastOnStack().type === "params"){
        outObj.name = ctx.name().getText();
        outObj.target = ctx.TYPE().getText();
        outObj.params = this.parsedStack.pop().params;
        this.parsedStack.push(outObj);
    }
};


/**
   Parse a variable declaration
   can declare multiple variables of the same type
   @method enterAblVariableDeclaration
 */
JGListener.prototype.enterAblVariableDeclarations = function(ctx){
    for(var i = 1; i < ctx.name().length; i++){
        var outObj = {
            type : "ablVariableDeclaration",
            name : ctx.name(i).getText(),
            varType : ctx.name(0).getText()
        };
    
        this.parsedStack.push(outObj);
    }
};

JGListener.prototype.exitAblVariableAssignment = function(ctx){
    var outObj = {
        type : "ablVariableDeclaration",
        name : undefined,
        varType : undefined,
        value : undefined
    };

    if(ctx.name(0)){
        outObj.varType = ctx.name(0).getText();
    }

    if(ctx.name(1)){
        outObj.name = ctx.name(1).getText();
    }

    if(ctx.classConstruction()){
        outObj.value = ctx.classConstruction().getText();
    }

    if(outObj.name !== undefined){
        this.parsedStack.push(outObj);
    }
};

JGListener.prototype.exitAblVariableLiteralAssignment = function(ctx){
    var outObj = {
        type : "ablVariableDeclaration",
        name : undefined,
        varType : undefined,
        value : undefined,
    };

    if(ctx.name(0)){
        outObj.varType = ctx.name(0).getText();
    }

    if(ctx.name(1)){
        outObj.name = ctx.name(1).getText();
    }

    if(this.lastOnStack().type === "ablLiteral"){
        outObj.value = this.parsedStack.pop();
    }

    if(outObj.name && outObj.varType && outObj.value){
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
    while(this.itemsOnStack() && this.lastOnStack().type === "ablVariableDeclaration"){
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
        varType : undefined,
        value : undefined        
    };

    //TODO: fold ablLiteral into the expression
    
    if(ctx.name()){
        outObj.value = ctx.name().getText();
        outObj.varType = "name";
        this.parsedStack.push(outObj);
    }else if(ctx.ablLiteral() && this.itemsOnStack() && this.lastOnStack().type === "ablLiteral"){
        outObj.value = this.parsedStack.pop();
        outObj.varType = "ablLiteral";
        this.parsedStack.push(outObj);
    }else if(ctx.javaMethod() && this.itemsOnStack() && this.lastOnStack().type === "javaMethod"){
        outObj.value = this.parsedStack.pop();
        outObj.varType = "javaMethod";
        this.parsedStack.push(outObj);
    }else if(ctx.conditionalExpression() && this.itemsOnStack() && this.lastOnStack().type === "conditionalExpression"){
        outObj.value = this.parsedStack.pop();
        outObj.varType = "conditionalExpression";
        this.parsedStack.push(outObj);
    }
};

JGListener.prototype.enterOperator = function(ctx){
    var outObj = {
        type : "operator",
        opType : undefined,
        possibleOps : ["_bind","greaterThan","greaterEqual",
                       "lessThan","lessEqual","equal","notEqual"]
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

    if(ctx.ablExpression() && this.itemsOnStack() &&
       this.lastOnStack().type === "ablExpression"){
        outObj.expression = this.parsedStack.pop();
    }

    if(ctx.operator() && this.itemsOnStack() && 
       this.lastOnStack().type === "operator"){
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
        while(this.lastOnStack()
              && this.lastOnStack().type == "wmeFieldTest"){
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
        expression : [],
        operator : undefined
    };


    if(ctx.ablExpression().length === 2 && this.itemsOnStack()
       && this.lastOnStack().type === "ablExpression"){
        outObj.expression.unshift(this.parsedStack.pop());
    }

    if(ctx.operator() && this.itemsOnStack()
       && this.lastOnStack().type === "operator"){
        outObj.operator = this.parsedStack.pop();
    }

    if(ctx.ablExpression(0) && this.itemsOnStack()
       && this.lastOnStack()){
        outObj.expression.unshift(this.parsedStack.pop());
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

    if(ctx.params() && this.lastOnStack().type === "params"){
        outObj.params = this.parsedStack.pop().params;
    }

    if(outObj.name && outObj.params){
        this.parsedStack.push(outObj);
    }
    
};

JGListener.prototype.exitClause = function(ctx){
    var outObj = {
        type : 'clause',
        child : undefined,
    };

    
    if(ctx.binaryOp() && this.lastOnStack() && this.lastOnStack().type === "binaryOp"){
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
        type : "mixedCall", //will become a conditionalExpression
        clauses : [],
    };

    while(this.parsedStack.length > 2 && this.lastOnStack().type === "binaryOp" && this.parsedStack[this.parsedStack.length-2].type === "booleanHelper"){
        var clause = this.parsedStack.pop();
        var op = this.parsedStack.pop();
        outObj.clauses.unshift([clause,op.value]);
    }

    if(this.parsedStack.length >= 1 && this.lastOnStack().type === "binaryOp"){
        outObj.clauses.unshift([this.parsedStack.pop(),"default"]);
        this.parsedStack.push(outObj);
    }
};

JGListener.prototype.exitConditionalExpression = function(ctx){
    if(this.itemsOnStack() && this.lastOnStack().type === "mixedCall"){
        this.lastOnStack().type = "conditionalExpression";
    }
};

JGListener.prototype.exitWmeTestSequence = function(ctx){
    var outObj = {
        type : "wmeTestSequence",
        clauses : []
    };

    while(this.itemsOnStack()
          && (this.lastOnStack().type === "wmeTest" || this.lastOnStack().type === "conditionalExpression")){
        outObj.clauses.unshift(this.parsedStack.pop());
    }
    
    if(outObj.clauses.length > 0){
        this.parsedStack.push(outObj);
    }
};

JGListener.prototype.exitTestExpression = function(ctx){
    if(this.itemsOnStack()
       && this.lastOnStack().type === "wmeTestSequence"){
        this.lastOnStack().type = "testExpression";
    }

};

JGListener.prototype.exitPrecondition = function(ctx){
    if(this.itemsOnStack()
       && this.lastOnStack().type === "testExpression"){
        this.parsedStack.push({
            type : "precondition",
            testExpression : this.parsedStack.pop()
        });
    }
};


JGListener.prototype.exitContextCondition = function(ctx){
    if(this.itemsOnStack()
       && this.lastOnStack().type === "testExpression"){
        this.parsedStack.push({
            type : "contextCondition",
            testExpression : this.parsedStack.pop()
        });
    }
};


JGListener.prototype.exitEntryCondition = function(ctx){
    if(this.itemsOnStack()
       && this.lastOnStack().type === "testExpression"){
        this.parsedStack.push({
            type : "entryCondition",
            testExpression : this.parsedStack.pop()
        });
    }
};


JGListener.prototype.exitSuccessCondition = function(ctx){
    if(this.itemsOnStack()
       && this.lastOnStack().type === "testExpression"){
        this.parsedStack.push({
            type : "successCondition",
            testExpression : this.parsedStack.pop()
        });
    }
};


JGListener.prototype.exitStateCondition = function(ctx){
    if(this.itemsOnStack()
       && this.lastOnStack().type === "testExpression"){
        this.parsedStack.push({
            type : "stateCondition",
            testExpression : this.parsedStack.pop()
        });
    }
};


JGListener.prototype.exitSuccessTest = function(ctx){
    if(this.itemsOnStack()
       && this.lastOnStack().type === "testExpression"){
        this.parsedStack.push({
            type : "successTest",
            testExpression : this.parsedStack.pop()
        });
    }
};

JGListener.prototype.exitNumberNeededForSuccess = function(ctx){
    if(ctx.ablLiteral()
       && this.lastOnStack().type === "ablLiteral"){
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
       && this.lastOnStack().type === "ablLiteral"){
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

    this.parsedStack.push(outObj);
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
       && this.lastOnStack().type === "ablExpression"){
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

    var prevValue;
    if(this.itemsOnStack()){
        prevValue = this.lastOnStack();
    }

    if(ctx.IGNORE_FAILURE()){
        outObj.modType = "ignoreFailure";
        outObj.modValue = 0;
    }else if(ctx.EFFECT_ONLY()){
        outObj.modType = "effectOnly";
        outObj.modValue = 0;
    }else if(ctx.TEAM_EFFECT_ONLY()){
        outObj.modType = "teamEffectOnly";
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
        if(prevValue && prevValue.type === "priorityModifier"){
            this.parsedStack.pop();
            outObj.modType = "priorityModifier";
            outObj.modValue = prevValue;
        }
    }else if(ctx.persistence()){
        if(prevValue && prevValue.type === "persistence"){
            this.parsedStack.pop();
            outObj.modType = "persistence";
            outObj.modValue = prevValue;
        }
    }else if(ctx.namedProperty()){
        if(prevValue && prevValue.type === "namedProperty"){
            this.parsedStack.pop();
            outObj.modType = "namedProperty";
            outObj.modValue = prevValue;
        }           
    }else if(ctx.successTest()){
        if(prevValue && prevValue.type === "successTest"){
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

JGListener.prototype.enterBasicStep = function(ctx){
    var outObj = {
        type : "basicStep",
        value : undefined
    };

    if(ctx.FAIL()){
        outObj.value = "fail";
    }else if(ctx.SUCCEED()){
        outObj.value = "succeed";
    }else if(ctx.WAIT()){
        outObj.value = "wait";
    }

    if(outObj.value !== undefined){
        this.parsedStack.push(outObj);
    }
};

JGListener.prototype.exitPrimitiveAct = function(ctx){
    var outObj = {
        type : "primitiveAct",
        name : undefined,
        params : undefined
    };

    if(ctx.name()){
        outObj.name = ctx.name().getText();
    }

    if(ctx.params()
       && this.lastOnStack().type === "params"){
        outObj.params = this.parsedStack.pop().params;
    }

    if(outObj.name !== undefined
       && outObj.params !== undefined){
        this.parsedStack.push(outObj);
    }
};


JGListener.prototype.exitGoalStep = function(ctx){
    var outObj = {
        type : 'goalStep',
        joint : false,
        goalType : undefined,
        at : undefined,
        goalName : undefined,
        params : undefined
    };

    if(ctx.JOINT()){
        outObj.joint = true;
    }

    if(ctx.SUBGOAL()){
        outObj.goalType = "sub";
    }else if(ctx.SPAWNGOAL()){
        outObj.goalType = "spawn";
    }

    if(ctx.name(0)){
        outObj.goalName = ctx.name(0).getText();
    }

    if(ctx.name(1)){
        outObj.at = ctx.name(1).getText();
    }

    if(this.lastOnStack().type === "params"){
        outObj.params = this.parsedStack.pop().params;
    }

    if(outObj.goalName !== undefined
       && outObj.goalType !== undefined){
        this.parsedStack.push(outObj);
    }
    
};

JGListener.prototype.enterMentalAct = function(ctx){
    this.parsedStack.push({
        type : "mentalAct",
    });
};

JGListener.prototype.exitBehaviourStep = function(ctx){
    var outObj = {
        type : "behaviourStep",
        modifiers : [],
        step : undefined
    };

    var prev = this.lastOnStack();
    
    if(this.itemsOnStack() && prev && (prev.type === "basicStep"
                                       || prev.type === "goalStep"
                                       || prev.type === "primitiveAct"
                                      || prev.type === "mentalAct")){
        outObj.step = this.parsedStack.pop();
    }

    while(this.itemsOnStack()
          && this.lastOnStack().type == "stepModifier"){
        outObj.modifiers.unshift(this.parsedStack.pop());
    }

    this.parsedStack.push(outObj);
    
};

JGListener.prototype.exitSpecificity = function(ctx){
    var outObj = {
        type : "specificity",
        value : undefined
    };

    if(ctx.ablLiteral()
       && this.lastOnStack().type === "ablLiteral"){
        outObj.value = this.parsedStack.pop();
        this.parsedStack.push(outObj);
    }

};



JGListener.prototype.exitBehaviourModifier = function(ctx){
    var prev = this.lastOnStack();

    if(["precondition","specificity","contextCondition","entryCondition","numberNeededForSuccess","teamMemberSpecifier","successCondition"].indexOf(prev.type) > -1){
        this.parsedStack.push({
            type : "behaviourModifier",
            value : this.parsedStack.pop()
        });
    }        
};


JGListener.prototype.exitBehaviourDefinition = function(ctx){
    var outObj = {
        type : 'behaviourDefinition',
        name : undefined,
        behType : undefined,
        joint : false,
        atomic : false,
        adaptive : false,
        params : [],
        modifiers : [],
        variables : [],
    };

    while(this.itemsOnStack() && (this.lastOnStack().type === "behaviourModifier" || this.lastOnStack().type === "ablVariableDeclaration" || this.lastOnStack().type === "behaviourStep" )){
        var prev = this.parsedStack.pop();
        if(prev.type === "behaviourModifier"){
            outObj.modifiers.unshift(prev);
        }else{
            outObj.variables.unshift(prev);
        }
    }

    if(this.itemsOnStack() && this.lastOnStack().type === "params"){
        outObj.params = this.parsedStack.pop().params;
    }

    if(ctx.name()){
        outObj.name = ctx.name().getText();
    }

    if(ctx.SEQ()){
        outObj.behType = "sequential";
    }else if(ctx.PAR()){
        outObj.behType = "parallel";
    }else if(ctx.COLL()){
        outObj.behType = "collection";
    }

    
    if(ctx.JOINT().length > 0){
        outObj.joint = true;
    }
    if(ctx.ATOMIC().length > 0){
        outObj.atomic = true;
    }
    if(ctx.ADAPTIVE().length > 0){
        outObj.adaptive = true;
    }
    

    if(outObj.name !== undefined){
        this.parsedStack.push(outObj);
    }    
};

JGListener.prototype.exitInitialTree = function(ctx){
    var outObj = {
        type : "initialTree",
        steps : []
    };

    while(this.itemsOnStack()
          && this.lastOnStack().type === "behaviourStep"){
        outObj.steps.push(this.parsedStack.pop());
    }

    if(outObj.steps.length > 0){
        this.parsedStack.push(outObj);
    }
};

JGListener.prototype.exitDecisionCycleSMCallDeclaration = function(ctx){
    if(ctx.name()){
        this.parsedStack.push({
            type : "decisionCycleSMCall",
            name : ctx.name().getText()
        });
    }
};

JGListener.prototype.exitAblDeclaration = function(ctx){
    var outObj = {
        type : 'ablDeclaration',
        declare : undefined
    };

    if(this.parsedStack.length === 0) return;
    
    var prev = this.lastOnStack();

    if(prev.type === "wmeRegistration"
       || prev.type === "actionRegistration"
       || prev.type === "wmeDeclaration"
       || prev.type === "propertyDeclaration"
       || prev.type === "ablVariableDeclaration"){
        outObj.declare = this.parsedStack.pop();
        this.parsedStack.push(outObj);
    };
};

JGListener.prototype.exitBehavingEntity = function(ctx){
    var outObj = {
        type : "behavingEntity",
        name : undefined,
        teamNeeded : undefined,
        decisionCycle : undefined,
        conflicts : [],
        declarations : [],
        behaviours : [],
        intitialTree : undefined
    };

    if(ctx.TYPE()){
        outObj.name = ctx.TYPE().getText();
    }
    
    if(this.itemsOnStack()
       && this.lastOnStack().type === "initialTree"){
        outObj.initialTree = this.parsedStack.pop();
    }

    while(this.itemsOnStack()){
        var current = this.parsedStack.pop();
        if(current.type === "initialTree"){
            outObj.initialTree = current;
        }else if(current.type === "behaviourDefinition"){
            outObj.behaviours.unshift(current);
        }else if(current.type === "ablDeclaration"){
            outObj.declarations.unshift(current);
        }else if(current.type === "conflictDecl"){
            outObj.conflicts.unshift(current);
        }else if(current.type === "decisionCycleSMCallDeclaration"){
            outObj.decisionCycle = current;
        }else if(current.type === "teamNeeded"){
            outObj.teamNeeded = current;
        }else{
            console.warn("Did not recognise:",current);
        }
    };
    
    this.parsedStack.push(outObj);
    
};


exports.JGListener = JGListener;
