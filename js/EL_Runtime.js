/* jshint esversion : 6 */
if(typeof define !== 'function'){
    var define = require('amdefine')(module);
}

define(['lodash','./ELModule'],function(_,ELModule){
    "use strict";
    let parser = ELModule.parse;
    
    let ELBase = function(artificialRoot){
        if(artificialRoot){
            this.root = artificialRoot
        }else{
            this.root = new Map();
            this.root.exclusive = false;
        }

        //the status of current bindings
        this.currentState = new Map();
    };

    ELBase.prototype.parse = function(string){
        let parseObj = parser(string),
            successStatus = false;
        if(parseObj.type === 'declaration'){
            if(parseObj.action === 'retract'){
                successStatus = this.retract(parseObj);
            }else if(parseObj.action === 'assert'){
                successStatus = this.assert(parseObj);
            }
        }else if(parseObj.type === 'query'){
            successStatus = this.query(parseObj);
        }

        //todo: return bindings
        if(parseObj.utilityTrue && successStatus){
            return parseObj.utilityTrue;
        }else if(parseObj.utilityFalse && !successStatus){
            return parseObj.utilityFalse;
        }
        //default return:
        return successStatus;
    };
    
    ELBase.prototype.assert = function(assertObj){
        //loop through the data of the obj
        let current = this.root,
            data = _.clone(assertObj.data),
            successStatus = true;
        while(successStatus && data.length > 0){
            let next = data.shift();
            //if starting from a bound point
            if(next.type === 'recall' && this.currentState.has(next.value)){
                current = this.currentState.get(next.value);
            }else if(next.type === 'BANG' && current.exclusive){
                //if exclusive. eg: .this!is
                if(current.has(next.value)){
                    current = current.get(next.value);
                }else{
                    current.clear();
                    let newMap = new Map();
                    current.set(next.value,newMap);
                    current = newMap;
                }
            }else if(next.type === 'DOT' && !current.exclusive){
                if(current.has(next.value)){
                    current = current.get(next.value);
                }else{
                    let newMap = new Map();
                    current.set(next.value,newMap);
                    current = newMap;
                }
            }else if(next.type === 'DOT' && current.exclusive){
                successStatus = false;
            }else if(next.type === 'BANG' && !current.exclusive){
                let theMap;
                if(current.has(next.value)){
                    theMap = current.get(next.value);
                }else{
                    theMap = new Map();
                }
                   current.clear();
                   current.exclusive = true;
                   current.set(next.value,theMap);
                   current = theMap;
            }else{
                throw new Error("unrecognised instruction");
            }
        }
        return successStatus;            
    };

    
    ELBase.prototype.retract = function(retractObj){
        //go through each data element, and delete the last

        
    };

    ELBase.prototype.query = function(queryObj){
        let queryStatus = true,
            data = _.clone(queryObj.data),
            current = this.root;
        while(queryStatus && data.length > 0){
            let next = data.shift();
            if(current.exclusive && next.type === 'BANG'){
                if(current.has(next.value)){
                    current = current.get(next.value);
                }else{
                    queryStatus = false;
                }
            }else if(current.exclusive && next.type === 'DOT'){
                queryStatus = false;
            }else if(!current.exclusive && next.type === 'BANG'){
                queryStatus = false;
            }else if(!current.exclusive && next.type === 'DOT'){
                if(current.has(next.value)){
                    current = current.get(next.value);
                }else{
                    queryStatus = false;
                }
            }
        }
        return queryStatus;
    };

    ELBase.prototype.clearState = function(){
        this.currentState = {};
    };

    return ELBase;
});
