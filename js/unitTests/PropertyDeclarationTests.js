/**
   @module ABLParser
   @submodule UnitTests
 */
var ABLModule = require('../ABLModule');

/**
   Checks property declarations,
   of the form "property String Test;"
   @class UnitTests.propertyDeclarationTests 
 */
exports.propertyDeclarationTests = {

    /**
       Initial Smoke Test
       @method simpleDeclaration
     */
    simpleDeclaration : function(test){
        var parseString = "property String test;";
        var startRule = "propertyDeclaration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "propertyDeclaration");
        test.ok(result[0].name === "test");
        test.ok(result[0].varType === "String");
        
        test.done();
    },

    //Multiple Property Declarations

    //Mispelled property declarations

    //different Type declarations
    

};
