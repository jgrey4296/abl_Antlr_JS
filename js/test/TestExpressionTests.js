var ABLModule = require('../ABLModule');

exports.testExpressionTests = {

    //simple smoke test
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
