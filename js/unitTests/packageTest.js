/**
   @module ABLParser
   @submodule UnitTests
 */
var ABLModule = require('../ABLModule');

/**
   Verify the behaviour of package imports
   @class UnitTests.packageImportTests 
 */
var startRule = "g_package";
exports.packageImportTests = {

    /**
       Initial Smoke test
       @method simpleTest 
     */
    simpleTest : function(test){
        var parseString = "package blah;";
        var result = [];
        result = ABLModule.parse(parseString,startRule);
        test.ok(result.length === 1);
        test.ok(result[0].type === "package");
        test.ok(result[0].name === "blah");        
        test.done();
    },

    fromAblExampleTest : function(test){
        var parseString = "package eis.ablsl.agents;";
        var result = ABLModule.parse(parseString,startRule);
        test.ok(result.length === 1);
        test.ok(result[0].type === "package");
        test.ok(result[0].name === "eis.ablsl.agents");
        test.done();
    },
    
    /**
       Verify behaviour of no value specified
       @method noPackageFail
     */
    noPackageFail : function(test){
        var parseString = "package;";
        test.throws(function(){
            var result = ABLModule.parse(parseString,startRule);
        });
        test.done();
    },

    /**
       Verify only the first package is recorded
       @method multiplePackageFail
     */
    multiplePackageFail : function(test){
        var parseString = "package blah; package other;";
        var result = ABLModule.parse(parseString, startRule);

        test.ok(result.length === 1);
        test.ok(result[0].name === "blah");
        test.ok(result[0].type === "package");
        
        test.done();
    },

    /**
       Verify behaviour of keyword being misspelled
       @method misspelledPackageCorrect
     */
    // misspelledPackageCorrect : function(test){
    //     var parseString = "pacage blah;";
    //     var result = ABLModule.parse(parseString,startRule);

    //     test.ok(result.length === 1);
    //     test.ok(result[0].name === "blah");
    //     test.ok(result[0].type === "package");
        
    //     test.done();
    // },

};
