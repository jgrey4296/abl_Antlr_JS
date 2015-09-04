/**
   @module ABLParser
   @submodule UnitTests
 */
var ABLModule = require('../ABLModule');

/**
   Test the contextCondition Construct
   @class UnitTests.contextConditionTests 
 */
exports.contextConditionTests = {

    simpleSmokeTest : function(test){
        var parseString = "context_condition { (BlahWME) }";
        var startRule = "contextCondition";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "contextCondition");
        test.ok(result[0].testExpression.type === "testExpression");
        test.ok(result[0].testExpression.type === "testExpression");
        test.ok(result[0].testExpression.clauses.length === 1);
        test.ok(result[0].testExpression.clauses[0].type === "wmeTest");
        test.ok(result[0].testExpression.clauses[0].wmeType === "BlahWME");
        
        test.done();
    },


};
