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
        var parseString = "initial_tree { fail; }"
        var startRule = "initialTree";
        var result = ABLModule.parse(parseString,startRule);

        
        test.ok(result.length === 1,result.length);
        test.ok(result[0].type === "initialTree");
        test.ok(result[0].steps instanceof Array);
        test.ok(result[0].steps.length === 1);
        test.ok(result[0].steps[0].type === "behaviourStep");
        test.ok(result[0].steps[0].modifiers.length === 0);
        test.ok(result[0].steps[0].step.type === "basicStep");
        test.ok(result[0].steps[0].step.value === "fail");
        
        
        test.done();
    },


    
};
