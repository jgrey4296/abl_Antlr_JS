
/**
   @module ABLParser
 */
var ELListener = require('./ELList');


/**
   The JGListener constructor
   @class JGListener
   @constructor
 */
var CustomisedListener = function(){
    //Not ABLListener.call:
    ELListener.ELListener.call(this);
    this.parsedStack = [];
    return this;
};

//Not ABLListener.prototype, just ABLListener
//Setup the prototype chain:
CustomisedListener.prototype = Object.create(ELListener.ELListener.prototype);
CustomisedListener.prototype.constructor = CustomisedListener;

//------------------------------
//PARSING METHODS:





exports.CustomisedListener = CustomisedListener;
