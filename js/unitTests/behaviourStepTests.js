/**
   Unit Tests for the parser
   @module ABLParser
   @submodule UnitTests
*/
var ABLModule = require('../ABLModule');

/**
   //Test goalStep parsing
   @class UnitTests.goalStepTests 
*/
exports.goalStepTests = {

    /**
       simplest possibly act
       @method simpleGoalStep
    */
    simpleGoalStep : function(test){
        var parseString = "with ( effect_only, ignore_failure ) wait;";
        var startRule = "behaviourStep";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "behaviourStep");
        test.ok(result[0].modifiers instanceof Array);
        test.ok(result[0].modifiers.length === 2);
        test.ok(result[0].modifiers[0].type === 'stepModifier');
        test.ok(result[0].modifiers[0].modType === "effectOnly");
        test.ok(result[0].modifiers[1].type === "stepModifier");
        test.ok(result[0].modifiers[1].modType === "ignoreFailure");

        test.ok(result[0].step !== undefined);
        test.ok(result[0].step.type === "basicStep");
        test.ok(result[0].step.value === "wait");
        
        test.done();
    },

    //Test modifiers:
    //successTest
    //ignore failure
    //priority mod
    //effect only
    //persistence
    //effect only
    //named property
    //post
    //one needed
    //team needed


    //test basic steps (wait, succeed, fail)

    //test modifiable steps:
    //goal step

    //primitive act

    //mental act?
    
    
};
