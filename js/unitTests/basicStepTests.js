/**
   Unit Tests for the parser
   @module ABLParser
   @submodule UnitTests
*/
var ABLModule = require('../ABLModule');

/**
   Test Basic Steps like succeeding, failing, and waiting
   @class UnitTests.basicStepTests 
*/
exports.basicStepTests = {

    /**
       The simplest possible expression
       @method simpleFailStep
    */
    simpleFailStep : function(test){
        var parseString = "fail;";
        var startRule = "basicStep";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "basicStep");
        test.ok(result[0].value === "fail");
        
        test.done();
    },

    /**
       simplest succeedStep
       @method simpleSucceedStep
    */
    simpleSucceedStep : function(test){
        var parseString = "succeed;";
        var startRule = "basicStep";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "basicStep");
        test.ok(result[0].value === "succeed");
        
        test.done();
    },

    /**
           simple wait step
       @method simpleWaitStep
    */
    simpleWaitStep : function(test){
        var parseString = "wait;";
        var startRule = "basicStep";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "basicStep");
        test.ok(result[0].value === "wait");
        
        test.done();
    },

    
};
