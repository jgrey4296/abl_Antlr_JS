/**
   Unit Tests for the parser
   @module ABLParser
   @submodule UnitTests
*/
var ABLModule = require('../ABLModule');

/**
   tests for parsing specificity
   @class UnitTests.specificityTests 
*/
exports.specificityTests = {

    /**
       The simplest smoke test
       @method simple
    */
    simple : function(test){
        var parseString = "specificity 5;"
        var startRule = "specificity";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "specificity");
        test.ok(result[0].value.type === "ablLiteral");
        test.ok(result[0].value.value === "5");
        test.ok(result[0].value.varType === "int");
        test.done();
    },


    
};
