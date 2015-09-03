/**
   @module ABLParser
   @submodule UnitTests
 */
var ABLModule = require('../ABLModule');

/**
   @class UnitTests.wmeDeclarationTests 
 */
exports.wmeDeclarationTests = {

    /**
       Initial Smoke Test
       @method simpleWMEDeclaration
     */
    simpleWmeDeclaration : function(test){
        var parseString = "wme Test {};";
        var startRule = "wmeDeclaration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1,result.length);
        test.ok(result[0].type === "wmeDeclaration");
        test.ok(result[0].name === "Test");
        test.ok(result[0].extendedFrom === undefined);
        test.ok(result[0].variables.length === 0);
        test.done();
    },

    /**
       Tests extension / inheritance of wmes
       @method extensionTest
    */
    extensionTest: function(test){
        var parseString = "wme Test extends Blah {};";
        var startRule = "wmeDeclaration";
        var result = ABLModule.parse(parseString,startRule);
        
        test.ok(result.length === 1);
        test.ok(result[0].type === "wmeDeclaration");
        test.ok(result[0].name === "Test");
        test.ok(result[0].extendedFrom === "Blah");
        test.ok(result[0].variables.length === 0);
        
        test.done();
    },


    /**
       Checks that WMEs can have fields
       @method variablesTest
     */
    variablesTest: function(test){
        var parseString = "wme Test { String testVar; };";
        var startRule = "wmeDeclaration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "wmeDeclaration");
        test.ok(result[0].name === "Test");
        test.ok(result[0].extendedFrom === undefined);
        test.ok(result[0].variables.length === 1);
        test.ok(result[0].variables[0].name === "testVar");
        test.ok(result[0].variables[0].type === "ablVariableDeclaration");
        test.ok(result[0].variables[0].varType === "String");
        
        test.done();
    },

    //Test multiple declarations
    
    //Test Extension with variables


    //Test mispellings

    //Test incorrect multiple extension
    
};
