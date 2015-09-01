var ABLListener = require('./ABLListener');

var JGListener = function(){
    //Not ABLListener.call:
    ABLListener.ABLListener.call(this);
    this.parsedStack = [];
    return this;
};

//Not ABLListener.prototype, just ABLListener
JGListener.prototype = Object.create(ABLListener.ABLListener.prototype);
JGListener.prototype.constructor = JGListener;

//------------------------------
//PARSING METHODS:

JGListener.prototype.enterProg = function(ctx){
    this.parsedStack = [];
};

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

