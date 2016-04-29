/**
   @module ABLParser
*/
if(typeof define !== 'function'){
    var define = require('amdefine')(module);
}

define(['./ELListener'],function(ELListener){
    "use strict";
    /**
       The custom listener constructor
       @class EL_Custom_Listener
       @constructor
    */
    var Listener = function(){
        //Not ABLListener.call:
        ELListener.ELListener.call(this);
        this.parseObj = {
            data : []
        };
        return this;
    };
    //Not ABLListener.prototype, just ABLListener
    //Setup the prototype chain:
    Listener.prototype = Object.create(ELListener.ELListener.prototype);
    Listener.prototype.constructor = Listener;

    Listener.prototype.finish = function(){
        return this.parseObj;
    };
    
    //------------------------------
    //PARSING METHODS:

    Listener.prototype.enterEL_Program = function(ctx){
        
    };

    Listener.prototype.enterEL_Declaration = function(ctx){
        if(this.parseObj.type === undefined){
            this.parseObj.type = 'declaration';
        }
        if(ctx.BANG(0) !== null && ctx.BANG(1) !== null){
            this.parseObj.action = "retract";
        }else{
            this.parseObj.action = "assert";
        }
    };

    Listener.prototype.enterStartPoint = function(ctx){
        this.parseObj.data.unshift({
            type : "recall",
            value : ctx.STRING().getText()
        });

    };

    
    Listener.prototype.enterDotBangPair = function(ctx){
        let dotBang = ctx.DOT() !== null ? 'DOT' : 'BANG',
            obj = {
                type : dotBang,
                value : ctx.STRING(0).getText()
            };
        if(ctx.ARROW() !== null){
            obj.bind = ctx.STRING(1).getText();
        }
            
        this.parseObj.data.push(obj);
    };

    Listener.prototype.enterEL_Query = function(ctx){
        if(this.parseObj.type === undefined){
            this.parseObj.type = 'query';
        }
        if(ctx.BANG(0) !== null && ctx.BANG(1) !== null){
            this.parseObj.negated = true;
        }
    };

    Listener.prototype.enterUtility = function(ctx){
        this.parseObj.utilityTrue = ctx.STRING(0).getText();
        this.parseObj.utilityFalse = ctx.STRING(1).getText();

    };
    
    return Listener;
});
