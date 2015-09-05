/**
   Unit Tests for the parser
   @module ABLParser
   @submodule UnitTests
*/
var ABLModule = require('../ABLModule');

/**
   test the grammar aggregate ablDeclaration
   @class UnitTests.behavingEntityTests 
*/
exports.ablDeclarationTests = {

    /**
       The simplest smoke test
       @method simple
    */
    simple : function(test){
        var parseString = "BLAH aName;"
        var startRule = "ablDeclaration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "ablDeclaration");
        test.ok(result[0].declare.type === "ablVariableDeclaration");

        test.done();
    },


    
};
