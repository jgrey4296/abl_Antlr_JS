/**
   @module ABLParser
   @submodule UnitTests
 */
var ABLModule = require('../ABLModule');

/**
   Tests actionRegistrations
   @class UnitTests.actionRegistrationTests 
 */
exports.actionRegistrationTests = {

    /**
       Initial Smoke Test
       @method simpleActionRegistration 
     */
    simpleActionRegistration : function(test){
        var parseString = "register action Test () with Blah;";
        var startRule = "actionRegistration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "actionRegistration");
        test.ok(result[0].name === "Test");
        test.ok(result[0].target === "Blah");
        test.ok(result[0].params instanceof Array);
        test.ok(result[0].params.length === 0);
        test.done();
    },

    /**
       Check that actions can be registered with parameters
       @method withParamsTest 
    */
    withParamsTest : function(test){
        var parseString = "register action Test (Blah,Something,Else) with Bloo;";
        var startRule = "actionRegistration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "actionRegistration");
        test.ok(result[0].name === "Test");
        test.ok(result[0].target === "Bloo");
        test.ok(result[0].params instanceof Array);
        test.ok(result[0].params.length === 3);
        test.ok(result[0].params[0].type === "param");
        test.ok(result[0].params[0].varType === "Blah");
        test.ok(result[0].params[0].value === undefined);
        test.ok(result[0].params[1].type === "param");
        test.ok(result[0].params[1].varType === "Something");
        test.ok(result[0].params[1].value === undefined);
        test.ok(result[0].params[2].type === "param");
        test.ok(result[0].params[2].varType === "Else");
        test.ok(result[0].params[2].value === undefined);

        test.done();
    },
    
    //Test with typed and named parameters

    
    //Add failures
};
