/**
   @module ABLParser
   @submodule UnitTests
 */
var ABLModule = require('../ABLModule');

/**
   Test the successTest Construct
   @class UnitTests.successTestTests 
 */
exports.successTestTests = {

    simpleSmokeTest : function(test){
        var parseString = "success_test { (BlahWME) }";
        var startRule = "successTest";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "successTest");
        test.ok(result[0].testExpression.type === "testExpression");
        test.ok(result[0].testExpression.type === "testExpression");
        test.ok(result[0].testExpression.clauses.length === 1);
        test.ok(result[0].testExpression.clauses[0].type === "wmeTest");
        test.ok(result[0].testExpression.clauses[0].wmeType === "BlahWME");
        
        test.done();
    },


};
