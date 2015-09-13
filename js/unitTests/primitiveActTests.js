/**
   Unit Tests for the parser
   @module ABLParser
   @submodule UnitTests
*/
var ABLModule = require('../ABLModule');

/**
   Test primitive acts like:
   "act blah(x,y);"
   @class UnitTests.primitiveActTests 
*/
exports.primitiveActTests = {

    /**
       simplest possibly act
       @method simplePrimitiveActTest
    */
    simplePrimitiveActTest : function(test){
        var parseString = "act walkToLocation(myName, targetLocation);";
        var startRule = "primitiveAct";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "primitiveAct");
        test.ok(result[0].name === "walkToLocation");
        test.ok(result[0].params.length === 2);
        test.ok(result[0].params[0].type === "param");
        test.ok(result[0].params[0].varType === "myName");
        test.ok(result[0].params[0].value === undefined);
        test.ok(result[0].params[1].varType === "targetLocation");
        test.ok(result[0].params[1].value === undefined);
            
        
        test.done();
    },


    
};
