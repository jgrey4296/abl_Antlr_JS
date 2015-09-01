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
        var parseString = "";
        var startRule = "";
        var result = ABLModule.parse(parseString,startRule);
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
