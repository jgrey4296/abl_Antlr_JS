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
        test.ok(result[0].type === "stepModifier");
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
        test.done();
    },
    
    //team effect only
    teamEffectOnlyTest : function(test){
        var parseString = "property blah 5";
        var startRule = "stepModifier";
        var result = ABLModule.parse(parseString,startRule);
        test.ok(result.length === 1);
        test.ok(result[0].type === "stepModifier");

        test.ok(result[0].modType === "");
        test.ok(result[0].modValue === "");
        
        test.done();
    },

    //post
    postTest : function(test){
        var parseString = "property blah 5";
        var startRule = "stepModifier";
        var result = ABLModule.parse(parseString,startRule);
        test.ok(result.length === 1);
        test.ok(result[0].type === "stepModifier");

        test.ok(result[0].modType === "");
        test.ok(result[0].modValue === "");
        test.done();
    },

    //post_to
    postToTest : function(test){
        var parseString = "property blah 5";
        var startRule = "stepModifier";
        var result = ABLModule.parse(parseString,startRule);
        test.ok(result.length === 1);
        test.ok(result[0].type === "stepModifier");
        test.ok(result[0].modType === "");
        test.ok(result[0].modValue === "");
        test.done();
    },

    //teamneeded
    teamNeededTest : function(test){
        var parseString = "property blah 5";
        var startRule = "stepModifier";
        var result = ABLModule.parse(parseString,startRule);
        test.ok(result.length === 1);
        test.ok(result[0].type === "stepModifier");
        test.ok(result[0].modType === "");
        test.ok(result[0].modValue === "");
        test.done();
    },

    //oneneeded
    oneNeededTest : function(test){
        var parseString = "property blah 5";
        var startRule = "stepModifier";
        var result = ABLModule.parse(parseString,startRule);
        test.ok(result.length === 1);
        test.ok(result[0].type === "stepModifier");
        test.ok(result[0].modType === "");
        test.ok(result[0].modValue === "");
        test.done();
    },

    //priority modifier
    priorityModiferTest : function(test){
        var parseString = "property blah 5";
        var startRule = "stepModifier";
        var result = ABLModule.parse(parseString,startRule);
        test.ok(result.length === 1);
        test.ok(result[0].type === "stepModifier");
        test.ok(result[0].modType === "");
        test.ok(result[0].modValue === "");
        test.done();
    },

    //persistence
    persistenceTest : function(test){
        var parseString = "property blah 5";
        var startRule = "stepModifier";
        var result = ABLModule.parse(parseString,startRule);
        test.ok(result.length === 1);
        test.ok(result[0].type === "stepModifier");
        test.ok(result[0].modType === "");
        test.ok(result[0].modValue === "");
        test.done();
    },

    //namedProperty
    namedPropertyTest : function(test){
        var parseString = "property blah 5";
        var startRule = "stepModifier";
        var result = ABLModule.parse(parseString,startRule);
        test.ok(result.length === 1);
        test.ok(result[0].type === "stepModifier");
        test.ok(result[0].modType === "");
        test.ok(result[0].modValue === "");
        test.done();
    },
    
};
