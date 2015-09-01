/**
   @module ABLParser
   @submodule UnitTests
 */
var ABLModule = require('../ABLModule');

/**
   Check wmeTestSequence construct
   @class UnitTests.wmeTestSequenceTests 
 */
exports.wmeTestSequenceTests = {

    /**
       initial smoke test
       @method simple
     */
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
