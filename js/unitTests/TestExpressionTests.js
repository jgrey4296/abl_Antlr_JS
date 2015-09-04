/**
   @module ABLModule
   @module UnitTests
*/
var ABLModule = require('../ABLModule');

/**
   Checks the parsing of test expressions
   @class UnitTests.testExpressionTests 
 */
exports.testExpressionTests = {

    /**
       Initial Smoke Test
       @method simple 
       @todo
     */
    simple : function(test){
        var parseString = "{ (BlahWME) }";
        var startRule = "testExpression";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "testExpression",result[0].type);
        test.ok(result[0].clauses.length === 1);
        test.ok(result[0].clauses[0].type === "wmeTest");
        test.ok(result[0].clauses[0].bang === false);
        test.ok(result[0].clauses[0].name === undefined);
        test.ok(result[0].clauses[0].wmeType === "BlahWME");
        test.done();
    },

    //identifier
    //no ident

    //wmeTestSequence:
    //{ident,wmeTest & conditionalExpression }
    
    //wmeTest
    
    //( conditional Expression )

    //wmeTests:
    //bang
    //name assign
    //single and multiple fieldTests
    
};
