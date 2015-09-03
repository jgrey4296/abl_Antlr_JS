/**
   Unit Tests for the parser
   @module ABLParser
   @submodule UnitTests
 */
var ABLModule = require('../ABLModule');

/**
   Tests relating to the Variable Declarations,
   Such as "String Test;"
   @class UnitTests.ABLVariableDeclarationTests
 */
exports.ABLVariableDeclarationTests = {

    /**
       Tests the simplest possible variable declaration
       @method simpleDeclaration
     */
    simpleDeclaration : function(test){
        var parseString = "String test;";
        var startRule = "ablVariableDeclaration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "ablVariableDeclaration");
        test.ok(result[0].name === "test");
        test.ok(result[0].varType === "String");
        
        test.done();
    },

    /**
       Test for multiple variable declarations performed at once
       @method multipleDeclaration
     */
    multipleDeclaration : function(test){
        var parseString = "String test, blah;";
        var startRule = "ablVariableDeclaration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 2);
        test.ok(result[0].type === "ablVariableDeclaration");
        test.ok(result[1].type === "ablVariableDeclaration");
        test.ok(result[0].name === "test");
        test.ok(result[1].name === "blah");
        test.ok(result[0].varType === "String");
        test.ok(result[1].varType === "String");
        
        test.done();
    },

    //test on other types, more names
    
};
