/**
   Unit Tests for the parser
   @module ABLParser
   @submodule UnitTests
*/
var ABLModule = require('../ABLModule');

/**
   test persistence declaration
   @class UnitTests.persistenceTests 
 */
exports.persistenceTests = {

    /**
       The simplest possible expression
       @method simple
     */
    simpleWhenSucceeds : function(test){
        var parseString = "persistent when_succeeds";
        var startRule = "persistence";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "persistence",result[0].type);
        test.ok(result[0].value === "whenSucceeds");
        
        test.done();
    },

    simpleWhenFails : function(test){
        var parseString = "persistent when_fails";
        var startRule = "persistence";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "persistence",result[0].type);
        test.ok(result[0].value === "whenFails");
        
        test.done();
    },
 

};
