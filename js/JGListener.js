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
}

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
}

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
    if(ctx.JOINTNEG()
       && ctx.TEAMNEEDED()){
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


JGListener.prototype.enterBehavingEntity = function(ctx){
    console.log("Entering Behaving entity");
    var be = {"name: ": ctx.TYPE().getText()};
    this.parsedStack.push(be);
}

JGListener.prototype.exitBehavingEntity = function(ctx){
    console.log("Exit BE:",ctx.TYPE().getText());
}

JGListener.prototype.enterBehaviorStep = function(ctx){
    console.log("Behaviour Step:",ctx.getText());
    this.parsedStack[this.parsedStack.length-1].step = ctx.getText();
}

JGListener.prototype.enterInitialTree = function(ctx){
    console.log("initial Tree");
    var it = {};
    this.parsedStack.push(it);
};


JGListener.prototype.exitInitialTree = function(ctx){
    var it = this.parsedStack.pop();
    this.parsedStack[this.parsedStack.length-1].initTree = it;
};

exports.JGListener = JGListener;

