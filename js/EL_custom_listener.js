/**
   @module ABLParser
*/
if(typeof define !== 'function'){
    var define = require('amdefine')(module);
}

define(['./ELListener'],function(ELListener){
    "use strict";
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
        
    };

    Listener.prototype.enterDotBangPair = function(ctx){
        let dotBang = ctx.DOT() !== undefined ? 'DOT' : 'BANG';
        this.parsedStack.push([dotBang,ctx.STRING().getText()]);
    };

    return Listener;
});
