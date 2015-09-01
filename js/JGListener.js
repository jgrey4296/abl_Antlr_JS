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

exports.JGListener = JGListener;

