/* jshint esversion : 6 */
if(typeof define !== 'function'){
    var define = require('amdefine')(module);
}

define(['lodash','./ELModule'],function(_,ELModule){
    "use strict";
    let parser = ELModule.parse,
        //symbols:
        BANG = Symbol('bang'),
        DOT = Symbol('dot'),
        //Lookup:
        elState = new Map([
            ['BANG',BANG],
            ['DOT',DOT]
        ]);
    
    let ELBase = function(artificialRoot){
        if(artificialRoot){
            this.root = artificialRoot
        }else{
            this.root = new Map();
            this.root.exclusive = DOT;
        }

        //the status of current bindings
        this.currentState = new Map();
    };

    /**
       @param string : A String to parse for actions
    */
    ELBase.prototype.parse = function(string,log){
        let parseObj = parser(string),
            result = false;
        if(log){
            console.log(parseObj);
        }        
        if(parseObj.type === 'declaration'){
            //DECLARATIONS
            if(parseObj.action === 'retract'){
                result = this.retract(parseObj);
            }else if(parseObj.action === 'assert'){
                result = this.assert(parseObj);
            }
        }else if(parseObj.type === 'query'){
            //QUERIES
            result = this.query(parseObj);
        }

        //todo: return bindings
        if(parseObj.utilityTrue && result){
            return parseObj.utilityTrue;
        }else if(parseObj.utilityFalse && result === false){
            return parseObj.utilityFalse;
        }
        //default return:
        return result;
    };
    
    ELBase.prototype.assert = function(assertObj){
        //loop through the data of the obj
        let current = this.root,
            data = _.clone(assertObj.data),
            successStatus = true;
        while(successStatus && data.length > 0){
            let next = data.shift();
            //if starting from a bound point
            if(next.type === 'recall'){
                let selected = _.sample(next.value);
                if(!this.currentState.has(selected)){
                    throw new Error('unrecognised binding');
                }
                current = this.currentState.get(selected);
            }else if(elState.get(next.type) === current.exclusive){
                //ex type matches, check for value
                if(!current.has(next.value)){
                    //no value, create
                    if(elState.get(next.type) === BANG){
                        current.clear();
                    }
                    let newMap = new Map();
                    newMap.exclusive = DOT;
                    current.set(next.value,newMap);
                }
                    this.bindToCurrentState(next.bind,current.get(next.value));

                    current = current.get(next.value);
            }else if(elState.get(next.type) !== current.exclusive){
                //ex type mismatch
                if(elState.get(next.type) === BANG){
                    //update exclusivity
                    current.exclusive = BANG;
                }else{
                    //trying to downgrade, thus fail
                    successStatus = false;
                    break;
                }
                //continue by retrieving or creating:
                let theMap;
                if(current.has(next.value)){
                    theMap = current.get(next.value);
                }else{
                    theMap = new Map();
                    theMap.exclusive = DOT;
                }
                current.clear();
                current.set(next.value,theMap);
                current = theMap;
            }else{
                throw new Error("unrecognised instruction");
            }
        }
        return successStatus;            
    };

    
    //Return true for successfull retract,
    //false if the full retraction wasnt accomplished
    ELBase.prototype.retract = function(retractObj){
        //go through each data element, and delete the last
        let current = this.root,
            data = _.clone(retractObj.data),
            successStatus = true;

        while(successStatus && data.length > 1){
            let next = data.shift();
            //RECALL a location:
            if(next.type === 'recall'){
                let selected = _.sample(next.value);
                if(!this.currentState.has(selected)){
                    throw new Error('unrecognised binding');
                }
                current = this.currentState.get(selected);
            }else if(elState.get(next.type) === current.exclusive){
                if(current.has(next.value)){
                    current = current.get(next.value);
                }else{
                    successStatus = false;
                }
            }
        }
        
        //now retract the last thing remaining:
        if(successStatus && data.length === 1 && current.has(data[0].value) && elState.get(data[0].type) === current.exclusive){
            //actually retract here:
            current.delete(data[0].value);
            if(current.size === 0){
                //reset to dot if now empty
                current.exclusive = DOT;
            }            
        }else{
            successStatus = false;
        }

        return successStatus;
    };

    /**
       Query the EL Fact base for the given sequence
     */
    ELBase.prototype.query = function(queryObj){
        let queryStatus = true,
            data = _.clone(queryObj.data),
            current = this.root,
            bindings = {};
        while(queryStatus && data.length > 0){
            let next = data.shift();
            if(next.type === 'recall'){
                let selected = _.sample(_.shuffle(next.value));
                if(!this.currentState.has(selected)){
                    throw new Error('unrecognised binding');
                }
                current = this.currentState.get(selected);
                continue;//to the next iteration
            }
            //----------
            //Mismatch exclusion type:
            if(elState.get(next.type) !== current.exclusive){
                queryStatus = false;
                break;
            }
            //selection:
            if(next.selection && next.bind !== undefined && next.bind.length === next.value){
                let selectionAmnt = next.value,
                    potentialAmnt = current.size;
                if(selectionAmnt > potentialAmnt){
                    queryStatus = false;
                    break;
                }else{
                    //bind them:
                    let selection = _.sampleSize(Array.from(current.keys()),selectionAmnt),
                        selectionObj = _.zipObject(next.bind,selection);
                    bindings = _.assign(bindings,selectionObj);
                    this.bindObjToCurrentState(selectionObj,current);
                }
                //----------
            }else if(current.has(next.value)){
                //value containment:
                current = current.get(next.value);
                this.bindToCurrentState(next.bind,current);
                if(next.bind !== undefined){
                    next.bind.forEach(d=>{
                        bindings[d] = next.value;
                        this.currentState.set(d,current);
                    });
                }
            }else{
                queryStatus = false;
            }
        }

        if(queryObj.negated === true){
            return !queryStatus;
        }
        if(queryStatus && _.keys(bindings).length > 0){
            return bindings;
        }
        return queryStatus;        
    };

    ELBase.prototype.clearState = function(){
        this.currentState = {};
    };

    ELBase.prototype.bindToCurrentState = function(bindValues,node){
        if(bindValues){
            bindValues.forEach(d=>this.currentState.set(d,node));
        }
    };

    ELBase.prototype.bindObjToCurrentState = function(bindObj,current){
        _.toPairs(bindObj).forEach(d=>this.currentState.set(d[0],current.get(d[1])));
    };
    
    return ELBase;
});
