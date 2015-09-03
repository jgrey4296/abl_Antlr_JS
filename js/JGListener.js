
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
   @method enterParam
 */
JGListener.prototype.enterParams = function(ctx){
    var outObj = {
        type :"params",
        names: [],
    };
    for(var i = 0; i < ctx.param().length; i++){
        if(ctx.param(i) && ctx.param(i).TYPE()){
            var param = {
                type : "param",
                varType : ctx.param(i).TYPE().getText(),
                name : ctx.param(i).name() ? ctx.param(i).name().getText() : undefined,
            };
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
    
    if(outObj.name !== undefined
       && outObj.wmeType !== undefined){
        this.parsedStack.push(outObj);
    }
};


exports.JGListener = JGListener;
