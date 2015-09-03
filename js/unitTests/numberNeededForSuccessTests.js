/**
   @module ABLParser
   @submodule UnitTests
 */
var ABLModule = require('../ABLModule');

/**
   Test the numberNeededForSuccess construct
   @class UnitTests.numberNeededforSuccessTests
 */
exports.numberNeededForSuccessTests = {

    stub : function(test){
        var parseString = "number_needed_for_success 1;";
        var startRule = "numberNeededForSuccess";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "numberNeededForSuccess");
        test.ok(result[0].value.type === "ablLiteral");
        test.ok(result[0].value.varType === "int");
        test.ok(result[0].value.value === "1");


        
        test.done();
    },


};
