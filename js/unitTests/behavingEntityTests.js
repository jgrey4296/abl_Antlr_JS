/**
   Unit Tests for the parser
   @module ABLParser
   @submodule UnitTests
*/
var ABLModule = require('../ABLModule');

/**
   behaving entity parsing tests
   @class UnitTests.behavingEntityTests 
*/
exports.behavingEntityTests = {

    /**
       The simplest smoke test
       @method simple
    */
    simple : function(test){
        var parseString = "behaving_entity Blah { initial_tree { fail; } };"
        var startRule = "behavingEntity";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].name === "Blah");
        
        test.done();
    },


    
};
