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
        test.ok(result[0].params.type === "params");
        test.ok(result[0].params.names.length === 2);
        test.ok(result[0].params.names[0].name === "myName");
        test.ok(result[0].params.names[1].name === "targetLocation");
        
        test.done();
    },


    
};
