/**
   @module ABLParser
   @module UnitTests
 */
var ABLModule = require('../ABLModule');

/**
   Test WME Registration Statements
   @class UnitTests.WMERegistrationTests
 */
exports.WMERegistrationTests = {

    /**
       Initial Smoke Test
       @method simpleRegistration
     */
    simpleRegistration : function(test){
        var parseString = "register wme Test with Blah;";
        var startRule = "wmeRegistration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "WMERegistration");
        test.ok(result[0].wmeType === "Test");
        test.ok(result[0].target === "Blah");        
        test.done();
    },

    /**
       Check multiple wmes can be defined in a row
       @method multipleRegistrations
     */
    multipleRegistrations : function(test){
        var parseString = "register wme Test with Blah; register wme Bloo with Jam;";
        var startRule = "wmeRegistration_plural";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 2);
        test.ok(result[0].type === "WMERegistration");
        test.ok(result[0].wmeType === "Test");
        test.ok(result[0].target === "Blah");
        test.ok(result[1].type === "WMERegistration");
        test.ok(result[1].wmeType === "Bloo");
        test.ok(result[1].target === "Jam");        
        test.done();
    },

    /**
       Test what happens if a non-critical keyword is misspelled
       @method misspelledRegistration
    */
    misspelledRegistration : function(test){
        var parseString = "registar wme Test with Blah;";
        var startRule = "wmeRegistration";

        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "WMERegistration");
        test.ok(result[0].wmeType === "Test");
        test.ok(result[0].target === "Blah");                
        
        test.done();
    },

    /**
       Test what happens when a wme is not defined fully
       @method incompleteTest
    */
    incompleteTest : function(test){
        var parseString = "register wme Test;";
        var startRule = "wmeRegistration";
        test.throws(function(){
            var result = ABLModule.parse(parseString,startRule);
        });
        
        test.done();
    },

};
