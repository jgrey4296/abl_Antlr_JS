/**
   @module ABLParser
   @submodule UnitTests
 */
var ABLModule = require('../ABLModule');

var startRule = "constants";

/**
   Tests for constant declarations
   @class UnitTests.constantDeclarationTests 
 */
exports.constantDeclarationTests = {

    /**
       Simple Smoke Test
       @method simpleConstantDeclaration
     */
    simpleConstantDeclaration : function(test){
        var parseString = "constants Agent;";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "constantDeclaration");
        test.ok(result[0].name === "Agent");
                
        test.done();
    },

    /**
       Test if constants can be values in objects?
       @method simpleDotTest
     */
    simpleDotTest : function(test){
        var parseString = "constants Agent.blah;";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "constantDeclaration");
        test.ok(result[0].name === "Agent.blah");
        test.done();
    },

    //Simple Star Test removed due to
    //STARS SHOULD NOT BE PART OF CONSTANTS IN THE GRAMMAR

    /**
       Test that multiple constants can be defined in a row
       @method multipleDecTest
     */
    multipleDecTest : function(test){
        var parseString = "constants Agent; constants Blah; constants Bloo;";

        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 3);
        test.ok(result[0].type === "constantDeclaration");
        test.ok(result[1].type === "constantDeclaration");
        test.ok(result[2].type === "constantDeclaration");

        test.ok(result[0].name === "Agent");
        test.ok(result[1].name === "Blah");
        test.ok(result[2].name === "Bloo");
        
        test.done();
    },
    
    /**
       Verify what happens if a keyword is misspelled
       @method misspelledTest
     */
    misspelledTest : function(test){
        var parseString = "contants Agent;";
        var result = ABLModule.parse(parseString,startRule);
        
        test.ok(result.length === 1);
        test.ok(result[0].name === "Agent");
        test.ok(result[0].type === "constantDeclaration");

        test.done();
    },

    
    
};
