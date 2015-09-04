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
        test.ok(result[0].params[0].varType === undefined);
        test.ok(result[0].params[0].value.type === "ablExpression");
        test.ok(result[0].params[0].value.varType === "name");
        test.ok(result[0].params[0].value.value === "myName");
            
        
        test.done();
    },


    
};
