/**
   @module ABLParser
   @submodule UnitTests
 */
var ABLModule = require('../ABLModule');

/**
   Test the successCondition Construct
   @class UnitTests.successConditionTests 
 */
exports.successConditionTests = {

    simpleSmokeTest : function(test){
        var parseString = "success_condition { (BlahWME) }";
        var startRule = "successCondition";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "successCondition");
        test.ok(result[0].testExpression.type === "testExpression");
        test.ok(result[0].testExpression.type === "testExpression");
        test.ok(result[0].testExpression.clauses.length === 1);
        test.ok(result[0].testExpression.clauses[0].type === "wmeTest");
        test.ok(result[0].testExpression.clauses[0].wmeType === "BlahWME");
        
        test.done();
    },


};
