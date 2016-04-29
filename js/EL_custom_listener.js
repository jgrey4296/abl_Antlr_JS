
/**
   @module ABLParser
 */
var ELListener = require('./ELListener');


/**
   The JGListener constructor
   @class JGListener
   @constructor
 */
var Listener = function(){
    //Not ABLListener.call:
    ELListener.ELListener.call(this);
    this.parsedStack = [];
    return this;
};

//Not ABLListener.prototype, just ABLListener
//Setup the prototype chain:
Listener.prototype = Object.create(ELListener.ELListener.prototype);
Listener.prototype.constructor = Listener;

//------------------------------
//PARSING METHODS:

Listener.prototype.enterEL_Program = function(ctx){
    console.log("ctx tostring:",ctx.getText());
    this.parsedStack.push("entered EL Program");
};



exports.CustomisedListener = Listener;
