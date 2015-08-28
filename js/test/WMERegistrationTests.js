var ABLModule = require('../ABLModule');

exports.WMERegistrationTests = {

    //Simple Smoke test
    simpleRegistration : function(test){
        var parseString = "register wme Test with Blah;";
        var startRule = "WMERegistration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "WMERegistration");
        test.ok(result[0].wmeType === "Test");
        test.ok(result[0].target === "Blah");        
        test.done();
    },

    //multiple registrations:
    multipleRegistrations : function(test){
        var parseString = "register wme Test with Blah; register wme Bloo with Jam;";
        var startRule = "WMERegistration";
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

    //Misspelled test:
    misspelledRegistration : function(test){
        var parseString = "registar wme Test with Blah;";
        var startRule = "WMERegistration";

        test.throws(function(){
            var result = ABLModule.parse(parseString,startRule);
        });
        
        test.done();
    },

    //Incomplete Test:
    incompleteTest : function(test){
        var parseString = "register wme Test;"
        var startRule = "WMERegistration";
        test.throws(function(){
            var result = ABLModule.parse(parseString,startRule);
        });
        
        test.done();
    },

};
