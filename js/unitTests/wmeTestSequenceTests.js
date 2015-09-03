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
        var parseString = "{ (CharacterWME)  }";
        var startRule = "wmeTestSequence";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "wmeTestSequence");
        test.ok(result[0].clauses.length === 1);
        test.ok(result[0].clauses[0].type === "wmeTest");
        test.ok(result[0].clauses[0].bang === false);
        test.ok(result[0].clauses[0].name === undefined);
        test.ok(result[0].clauses[0].wmeType === "CharacterWME");
        test.ok(result[0].clauses[0].fieldTests.length === 0);
        
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
