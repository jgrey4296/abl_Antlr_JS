/**
   Unit Tests for the parser
   @module ABLParser
   @submodule UnitTests
*/
var ABLModule = require('../ABLModule');

/**
   behaviourModifierTests
   @class UnitTests.behaviourModifierTests 
*/
exports.behaviourModifierTests = {

    /**
       The simplest smoke test
       @method simple
    */
    simple : function(test){
        var parseString = "specificity 5;"
        var startRule = "behaviourModifier";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "behaviourModifier",result[0].type);
        test.ok(result[0].value.type === "specificity");
        test.ok(result[0].value.value.type === "ablLiteral");
        test.ok(result[0].value.value.value === "5");
        test.ok(result[0].value.value.varType === "int");
        test.done();
    },


    
};
