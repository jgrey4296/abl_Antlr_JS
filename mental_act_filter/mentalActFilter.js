/**
   Pre-process (ABL) strings to filter out mental acts
   @module mentalActFilter
*/
if(typeof define !== 'function'){
    var define = require('amdefine')(module);
}

define([],function(){

    var mentalActRegex = /mental_act/g;

    //Takes a string, finds the location of a mental act
    //and replaces it with 'mental_act{}';
    var filter = function(string){
        var outString = "";
        
        //Find the mental Act
        var match = mentalActRegex.exec(string);
        if(match){
            while(match){
                outString = "";
                //Append all thats before the mental act to the outString
                outString += string.slice(0,match.index);
                outString += "mental_act{}";
                
                //go through the mental act, counting '{'s.
                var current = match.index;
                var count = 0;
                while(current < string.length){
                    if(string[current] === "{"){
                        count += 1;
                    }else if(string[current] === "}"){
                        count -= 1;
                        if(count === 0){
                            break;
                        }
                    }
                    current += 1;
                }
                //current now equals the end point of the mental act
                if(current < string.length-1){
                    outString += string.slice(current+1);
                }
                string = outString;
                match = mentalActRegex.exec(string);
            }
        }else{
            outString = string;
        }
        return outString;
    };

    
    return filter;
});
