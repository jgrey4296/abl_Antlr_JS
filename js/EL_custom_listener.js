/* jshint esversion : 6 */
/**
   @module ABLParser
*/
if(typeof define !== 'function'){
    var define = require('amdefine')(module);
}

define(['lodash','./ELListener'],function(_,ELListener){
    "use strict";
    /**
       The custom listener constructor
       @class EL_Custom_Listener
       @constructor
    */
    var Listener = function(){
        //Not ABLListener.call:
        ELListener.ELListener.call(this);
        //used to build up info
        this.parseStack = [];
        //The main object being created:
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
        if(ctx.negation() !== null){
            this.parseObj.action = "retract";
        }else{
            this.parseObj.action = "assert";
        }
        //store the current size of the parseStack
        ctx.parseStackSize = this.parseStack.length;
    };

    Listener.prototype.exitEL_Declaration = function(ctx){
        while(this.parseStack.length > ctx.parseStackSize){
            this.parseObj.data.unshift(this.parseStack.pop());
        }
        
    };
    
    Listener.prototype.enterSelector = function(ctx){
        this.parseStack.push({
            type : "recall"
        });
    };

    Listener.prototype.exitSelector = function(ctx){
        let stringList = this.parseStack.pop();
        _.last(this.parseStack).value = stringList;
    };
    
    Listener.prototype.enterStringList = function(ctx){
        let strings = ctx.STRING();
        if(strings instanceof Array){
            this.parseStack.push(ctx.STRING().map(d=>d.getText()));
        }else{
            this.parseStack.push(strings.getText());
        }
    };
    
    Listener.prototype.enterDotBangPair = function(ctx){
        let dotBang = ctx.DOT() !== null ? 'DOT' : 'BANG',
            obj = {
                type : dotBang,
            };
        this.parseStack.push(obj);
    };

    Listener.prototype.enterSelection = function(ctx){
        if(ctx.NUMBER() !== null){
            _.last(this.parseStack).value = Number(ctx.NUMBER().getText());
            _.last(this.parseStack).selection = true;
        }else if(ctx.STRING() !== null){
            _.last(this.parseStack).value = ctx.STRING().getText();
        }
    };

    Listener.prototype.exitSelection = function(ctx){
        if(ctx.selector() !== null){
            let selector = this.parseStack.pop();
            _.last(this.parseStack).selection = true;
            _.last(this.parseStack).value = selector.value;
        }
    };
    
    Listener.prototype.exitDotBangPair = function(ctx){
        let obj,bindArray;
        if(ctx.ARROW() !== null){
            bindArray = this.parseStack.pop();
        }
        obj = _.last(this.parseStack);
        obj.bind = bindArray;
        //this.parseObj.data.push(obj);
        if(obj.selection === true && obj.type === 'BANG'){
            throw new Error("Invalid combination of selection and BANG");
        }
        
    };
        
    Listener.prototype.enterEL_Query = function(ctx){
        if(this.parseObj.type === undefined){
            this.parseObj.type = 'query';
        }
        if(ctx.negation() !== null){
            this.parseObj.negated = true;
        }
        if(ctx.PAIR() !== null){
            this.parseObj.pair = true;
        }
    };

    
    Listener.prototype.enterUtility = function(ctx){
        this.parseObj.utilityTrue = ctx.stringOrNum(0).getText();
        this.parseObj.utilityFalse = ctx.stringOrNum(1).getText();

    };
    
    return Listener;
});
