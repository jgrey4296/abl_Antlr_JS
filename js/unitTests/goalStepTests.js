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
exports.primitiveActTests = {

    /**
       simplest possibly act
       @method simpleGoalStep
    */
    simpleGoalStep : function(test){
        var parseString = "joint subgoal blah (Int x, 5) at somehwere;";
        var startRule = "goalStep";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "goalStep");
        test.ok(result[0].joint === true);
        test.ok(result[0].goalType === "sub");
        test.ok(result[0].at === "somewhere");
        test.ok(result[0].goalName === "blah");
        test.ok(result[0].params != undefined);
        test.ok(result[0].params.type === "params");
        
        test.done();
    },


    
};
