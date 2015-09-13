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
exports.behaviourStepTests = {

    /**
       simplest possibly act
       @method simpleGoalStep
    */
    simpleGoalStep : function(test){
        var parseString = "wait;";
        var startRule = "behaviourStep";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "behaviourStep");
        test.ok(result[0].modifiers instanceof Array);
        test.ok(result[0].modifiers.length === 0);

        test.ok(result[0].step !== undefined);
        test.ok(result[0].step.type === "basicStep");
        test.ok(result[0].step.value === "wait");
        
        test.done();
    },

    //Test modifiers:
    //successTest
    successTestBehaviourStepTest : function(test){
        var parseString = "with (success_test { (TestWME) }) succeed;";
        var startRule = "behaviourStep";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "behaviourStep");
        test.ok(result[0].step.type === "basicStep");
        test.ok(result[0].step.value === "succeed");
        test.ok(result[0].modifiers instanceof Array);
        test.ok(result[0].modifiers.length === 1);
        test.ok(result[0].modifiers[0].type === "stepModifier");
        test.ok(result[0].modifiers[0].modType === "successTest");
        test.ok(result[0].modifiers[0].modValue.type === "successTest");
        test.ok(result[0].modifiers[0].modValue.testExpression.clauses.length === 1);
        test.ok(result[0].modifiers[0].modValue.testExpression.clauses[0].type === "wmeTest");

                
        test.done();
    },
    
    //ignore failure
    ignoreFailureBehaviourStepTest : function(test){
        var parseString = "with ( ignore_failure) fail;";
        var startRule = "behaviourStep";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "behaviourStep");
        test.ok(result[0].modifiers.length === 1);
        test.ok(result[0].modifiers[0].type === "stepModifier");
        test.ok(result[0].modifiers[0].modType === "ignoreFailure",result[0].modifiers[0].modType);
        test.ok(result[0].step.type === "basicStep");
        test.ok(result[0].step.value === "fail");
        test.done();
    },
    
    //priority mod
    priorityModBehaviourStepTest : function(test){
        var parseString = "with (priority 5) wait;";
        var startRule = "behaviourStep";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "behaviourStep");
        test.ok(result[0].modifiers.length === 1);
        test.ok(result[0].modifiers[0].type === "stepModifier");
        test.ok(result[0].modifiers[0].modType === "priorityModifier");
        test.ok(result[0].modifiers[0].modValue.value.type === "ablLiteral",result[0].modifiers[0].modValue.type);
        test.ok(result[0].modifiers[0].modValue.value.value === "5");
        test.done();
    },
    
    //test modifiable steps:
    //goal step
    goalStepTest : function(test){
        var parseString = "with ( persistent ) joint subgoal blah (x,y) at someWhere;";
        var startRule = "behaviourStep";
        var result = ABLModule.parse(parseString,startRule);

        
        test.ok(result.length === 1,result.length);
        test.ok(result[0].type === "behaviourStep");
        test.ok(result[0].modifiers.length === 1);
        test.ok(result[0].modifiers[0].type === "stepModifier");
        test.ok(result[0].modifiers[0].modType === "persistence");
        test.ok(result[0].modifiers[0].modValue.type === "persistence");
        test.ok(result[0].modifiers[0].modValue.value === undefined);

        test.ok(result[0].step.type === "goalStep");
        test.ok(result[0].step.joint === true);
        test.ok(result[0].step.goalType === "sub");
        test.ok(result[0].step.at === "someWhere");
        test.ok(result[0].step.goalName === "blah");
        
        test.ok(result[0].step.params.length === 2);
        
        test.ok(result[0].step.params[0].type === "param");
        test.ok(result[0].step.params[0].varType === "x");
        test.ok(result[0].step.params[0].value === undefined);

        test.ok(result[0].step.params[1].type === "param");
        test.ok(result[0].step.params[1].varType === "y");
        test.ok(result[0].step.params[1].value === undefined);
        
        test.done();
    },
    
    
    //primitive act
    primitiveActTest : function(test){
        var parseString = "with ( one_needed_for_success ) act blah (5, bloo);";
        var startRule = "behaviourStep";
        var result = ABLModule.parse(parseString,startRule);

        
        test.ok(result.length === 1,result.length);
        test.ok(result[0].type === "behaviourStep");
        test.ok(result[0].modifiers.length === 1);
        test.ok(result[0].modifiers[0].type === "stepModifier");
        test.ok(result[0].modifiers[0].modType === "oneNeeded");
        test.ok(result[0].modifiers[0].modValue === 0);

        test.ok(result[0].step.type === "primitiveAct");
        test.ok(result[0].step.name === "blah");
        test.ok(result[0].step.params.length === 2);
        test.ok(result[0].step.params[0].type === "param");
        test.ok(result[0].step.params[0].varType === undefined);
        test.ok(result[0].step.params[0].value.type === "ablExpression");
        test.ok(result[0].step.params[0].value.value.type === "ablLiteral");

        test.ok(result[0].step.params[1].varType === "bloo");
        test.ok(result[0].step.params[1].value === undefined);

        
        test.done();
    },
    
    
    //TODO: mental act
};
