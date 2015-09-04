/**
   @module ABLParser
   @submodule UnitTests
 */
var ABLModule = require('../ABLModule');

/**
   Test the entryCondition Construct
   @class UnitTests.entryConditionTests 
 */
exports.entryConditionTests = {

    simpleSmokeTest : function(test){
        var parseString = "entry_condition { (BlahWME) }";
        var startRule = "entryCondition";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "entryCondition");
        test.ok(result[0].testExpression.type === "testExpression");
        test.ok(result[0].testExpression.type === "testExpression");
        test.ok(result[0].testExpression.clauses.length === 1);
        test.ok(result[0].testExpression.clauses[0].type === "wmeTest");
        test.ok(result[0].testExpression.clauses[0].wmeType === "BlahWME");
        
        test.done();
    },


};
