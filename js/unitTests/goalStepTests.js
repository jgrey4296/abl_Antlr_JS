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
        var parseString = "joint subgoal blah (Int x, 5) at somewhere;";
        var startRule = "goalStep";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "goalStep",result[0].type);
        test.ok(result[0].joint === true);
        test.ok(result[0].goalType === "sub");
        test.ok(result[0].at === "somewhere");
        test.ok(result[0].goalName === "blah");
        test.ok(result[0].params instanceof Array);
        test.ok(result[0].params.length === 2);

        test.ok(result[0].params[0].type === "param");
        test.ok(result[0].params[0].varType === "Int");
        test.ok(result[0].params[0].value.type === "ablExpression");
        test.ok(result[0].params[0].value.value === "x");
        test.ok(result[0].params[1].type === "param");
        test.ok(result[0].params[1].varType === undefined);
        test.ok(result[0].params[1].value.type === "ablExpression");
        test.ok(result[0].params[1].value.varType === "ablLiteral");
        test.ok(result[0].params[1].value.value.varType === "int");
        test.done();
    },


    
};
