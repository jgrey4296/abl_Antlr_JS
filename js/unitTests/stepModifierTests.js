/**
   Unit Tests for the parser
   @module ABLParser
   @submodule UnitTests
*/
var ABLModule = require('../ABLModule');

/**
   Aggregate of all the step modifiers
   @class UnitTests.stepModifierTests 
*/
exports.stepModifierTests = {

    /**
       The simplest possible expression
       @method simple
    */
    simple : function(test){
        var parseString = "property blah 5";
        var startRule = "stepModifier";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "stepModifier",result[0].type);
        test.ok(result[0].modType === "namedProperty");
        
        test.done();
    },

    //Test:
    //ignore failure
    ignoreFailureTest : function(test){
        var parseString = "ignore_failure";
        var startRule = "stepModifier";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "stepModifier");
        test.ok(result[0].modType === "ignoreFailure");
        test.ok(result[0].modValue === 0);
        test.done();
    },
    
    //effect only
    effectOnlyTest : function(test){
        var parseString = "effect_only";
        var startRule = "stepModifier";
        var result = ABLModule.parse(parseString,startRule);
        test.ok(result.length === 1);
        test.ok(result[0].type === "stepModifier");
        test.ok(result[0].modType === "effectOnly");
        test.ok(result[0].modValue === 0);
        test.done();
    },
    
    //team effect only
    teamEffectOnlyTest : function(test){
        var parseString = "team_effect_only";
        var startRule = "stepModifier";
        var result = ABLModule.parse(parseString,startRule);
        test.ok(result.length === 1,result.length);
        test.ok(result[0].type === "stepModifier");

        test.ok(result[0].modType === "teamEffectOnly");
        test.ok(result[0].modValue === 0);
        
        test.done();
    },

    //post
    postTest : function(test){
        var parseString = "post";
        var startRule = "stepModifier";
        var result = ABLModule.parse(parseString,startRule);
        test.ok(result.length === 1);
        test.ok(result[0].type === "stepModifier");

        test.ok(result[0].modType === "post");
        test.ok(result[0].modValue === 0);
        test.done();
    },

    //post_to
    postToTest : function(test){
        var parseString = "post_to blah";
        var startRule = "stepModifier";
        var result = ABLModule.parse(parseString,startRule);
        test.ok(result.length === 1);
        test.ok(result[0].type === "stepModifier");
        test.ok(result[0].modType === "postTo");
        test.ok(result[0].modValue === "blah");
        test.done();
    },

    //teamneeded
    teamNeededTest : function(test){
        var parseString = "team_needed_for_success";
        var startRule = "stepModifier";
        var result = ABLModule.parse(parseString,startRule);
        test.ok(result.length === 1);
        test.ok(result[0].type === "stepModifier");
        test.ok(result[0].modType === "teamNeeded");
        test.ok(result[0].modValue === 0);
        test.done();
    },

    //oneneeded
    oneNeededTest : function(test){
        var parseString = "one_needed_for_success";
        var startRule = "stepModifier";
        var result = ABLModule.parse(parseString,startRule);
        test.ok(result.length === 1);
        test.ok(result[0].type === "stepModifier");
        test.ok(result[0].modType === "oneNeeded");
        test.ok(result[0].modValue === 0);
        test.done();
    },

    //priority modifier
    priorityModiferTest : function(test){
        var parseString = "priority 5";
        var startRule = "stepModifier";
        var result = ABLModule.parse(parseString,startRule);
        test.ok(result.length === 1);
        test.ok(result[0].type === "stepModifier");
        test.ok(result[0].modType === "priorityModifier");
        test.ok(result[0].modValue.type === "priorityModifier",result[0].modValue.type);
        test.ok(result[0].modValue.value.type === "ablLiteral");
        test.ok(result[0].modValue.value.varType === "int");
        test.ok(result[0].modValue.value.value === "5");
        test.done();
    },

    //persistence
    persistenceTest : function(test){
        var parseString = "persistent";
        var startRule = "stepModifier";
        var result = ABLModule.parse(parseString,startRule);
        test.ok(result.length === 1);
        test.ok(result[0].type === "stepModifier");
        test.ok(result[0].modType === "persistence");
        test.ok(result[0].modValue.type === "persistence");
        test.ok(result[0].modValue.value === undefined);
        test.done();
    },

    persistenceWhenFailsTest : function(test){
        var parseString = "persistent when_fails";
        var startRule = "stepModifier";
        var result = ABLModule.parse(parseString,startRule);
        test.ok(result.length === 1);
        test.ok(result[0].type === "stepModifier");
        test.ok(result[0].modType === "persistence");
        test.ok(result[0].modValue.type === "persistence");
        test.ok(result[0].modValue.value === "whenFails");
        test.done();
    },


    persistenceWhenSucceedsTest : function(test){
        var parseString = "persistent when_succeeds";
        var startRule = "stepModifier";
        var result = ABLModule.parse(parseString,startRule);
        test.ok(result.length === 1);
        test.ok(result[0].type === "stepModifier");
        test.ok(result[0].modType === "persistence");
        test.ok(result[0].modValue.type === "persistence");
        test.ok(result[0].modValue.value === "whenSucceeds");
        test.done();
    },
    
    //namedProperty
    namedPropertyTest : function(test){
        var parseString = "property blah 5";
        var startRule = "stepModifier";
        var result = ABLModule.parse(parseString,startRule);
        test.ok(result.length === 1);
        test.ok(result[0].type === "stepModifier");
        test.ok(result[0].modType === "namedProperty");
        test.ok(result[0].modValue.type === "namedProperty");
        test.ok(result[0].modValue.name === "blah");
        test.ok(result[0].modValue.value.type === "ablExpression",result[0].modValue.value.type);
        test.ok(result[0].modValue.value.value.type === "ablLiteral");
        test.ok(result[0].modValue.value.value.value === "5");
        test.ok(result[0].modValue.value.value.varType === "int");
        test.done();
    },
    
};
