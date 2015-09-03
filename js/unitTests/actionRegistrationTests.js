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
        test.ok(result[0].params.type === "params");
        test.ok(result[0].params.names.length === 0);
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
        test.ok(result[0].params.type === "params");
        test.ok(result[0].params.names.length === 3);
        test.ok(result[0].params.names[0].type === "Blah");
        test.ok(result[0].params.names[0].name === undefined);
        test.ok(result[0].params.names[1].type === "Something");
        test.ok(result[0].params.names[2].type === "Else");
        

        test.done();
    },
    
    //Test with typed and named parameters

    
    //Add failures
};
