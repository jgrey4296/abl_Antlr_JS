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
        var parseString = "decision_cycle_sm_call blah;";
        var startRule = "decisionCycleSMCallDeclaration";
        var result = ABLModule.parse(parseString,startRule);

        
        test.ok(result.length === 1,result.length);
        test.ok(result[0].type === "decisionCycleSMCall");
        test.ok(result[0].name === "blah");
        
        
        test.done();
    },


    
};
