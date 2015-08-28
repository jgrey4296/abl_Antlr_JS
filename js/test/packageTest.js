var ABLModule = require('../ABLModule');

exports.packageImportTests = {

    //Simple Smoke test
    simpleTest : function(test){
        var parseString = "package Blah;";
        var startRule = "package";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 0);
        test.ok(result[0].type === "package");
        test.ok(result[0].name === "Blah");        
        test.done();
    },

    //Simple Test to check for failing
    noPackageFail : function(test){
        var parseString = "package;";
        var startRule = "package";
        test.throws(function(){
            var result = ABLModule.parse(parseString,startRule);
        });
        
        test.done();
    },

    //Multiple Package declarations should complain
    multiplePackageFail : function(test){
        var parseString = "package Blah; package Other;";
        var startRule = "package";
        test.throws(function(){
            var result = ABLModule.parse(parseString, startRule);
        });
        
        test.done();
    },

    //Test for misspelled package
    misspelledPackageFail : function(test){
        var parseString = "pacage Blah;";
        var startRule = "package";
        test.throws(function(){
            var result = ABLModule.parse(parseString,startRule);
        });
        test.done();
    },
    
};
