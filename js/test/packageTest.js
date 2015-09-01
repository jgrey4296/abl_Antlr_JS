var ABLModule = require('../ABLModule');

var startRule = "g_package";
exports.packageImportTests = {

    //Simple Smoke test
    simpleTest : function(test){
        var parseString = "package Blah;";
        var result = [];
        result = ABLModule.parse(parseString,startRule);
        test.ok(result.length === 1);
        test.ok(result[0].type === "package");
        test.ok(result[0].name === "Blah");        
        test.done();
    },

    //Simple Test to check for failing
    noPackageFail : function(test){
        var parseString = "package;";
        test.throws(function(){
            var result = ABLModule.parse(parseString,startRule);
        });
        test.done();
    },

    //Multiple Package declarations take only the first
    multiplePackageFail : function(test){
        var parseString = "package Blah; package Other;";
        var result = ABLModule.parse(parseString, startRule);

        test.ok(result.length === 1);
        test.ok(result[0].name === "Blah");
        test.ok(result[0].type === "package");
        
        test.done();
    },

    //Test for misspelled package
    //corrects /ignores the misspelling
    misspelledPackageCorrect : function(test){
        var parseString = "pacage Blah;";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].name === "Blah");
        test.ok(result[0].type === "package");
        
        test.done();
    },

    //Test of package from prog:
    progTest : function(test){
        var parseString = "package Blah;";
        var startRule = "prog";

        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].name === "Blah");
        test.ok(result[0].type === "package");
        
        test.done();
    },
    
};
