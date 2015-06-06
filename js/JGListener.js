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
  //console.log("Package Rule", ctx.name().getText());
  this.parsedStack.push(["package",ctx.name().getText()]);
}

JGListener.prototype.enterG_import = function(ctx){
  //console.log("import name:", ctx.name().getText());
  this.parsedStack.push(["import",ctx.name().getText()]);
}

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

