/**
   Unit Tests for the parser
   @module ABLParser
   @submodule UnitTests
*/
var ABLModule = require('../ABLModule');

/**
   Test Behaviour Definition parsing. The Big one.
   @class UnitTests.behaviourDefinitionTests 
*/
exports.behaviourDefinitionTests = {

    /**

       @method simple
    */
    simple : function(test){
        var parseString = "atomic sequential behaviour blah (x,y) { precondition { (TestWME) } subgoal other();";
        var startRule = "behaviourDefinition";
        var result = ABLModule.parse(parseString,startRule);

        
        test.ok(result.length === 1,result.length);
        test.ok(result[0].type === "behaviourDefinition");
        test.ok(result[0].name === "blah");
        test.ok(result[0].behType === "sequential");
        test.ok(result[0].joint === false,result[0].joint);
        test.ok(result[0].atomic === true,result[0].atomic);
        test.ok(result[0].adaptive === false,result[0].adaptive);
        test.ok(result[0].params instanceof Array);
        test.ok(result[0].params.length === 2);
        test.ok(result[0].modifiers instanceof Array);
        test.ok(result[0].modifiers.length === 1);
        test.ok(result[0].modifiers[0].type === "behaviourModifier");
        test.ok(result[0].modifiers[0]);
                
        
        test.done();
    },


    
};
