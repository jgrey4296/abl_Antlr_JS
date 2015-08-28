var ABLModule = require('../ABLModule');

exports.wmeTestSequenceTests = {

    //simple smoke test
    simple : function(test){
        var parseString = "{ CharacterWME  }";
        var startRule = "";
        var result = ABLModule.parse(parseString,startRule);
        test.done();
    },

    //Variations to test:
    //{identifier, wmeTest}
    //{identifier, ConditionalExpression}
    //{identifier, wmeTest WmeTest}
    //{identifier, ConditionalExpression ConditionalExpression}
    //{identifier, wmeTest ConditionalExpression

    //wmeTest
    //(conditionalExpression)

};
