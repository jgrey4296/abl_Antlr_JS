/**
   @module ABLParser
   @submodule UnitTests
 */
var ABLModule = require('../ABLModule');

/**
   Tests parameter declarations
   @class UnitTests.paramsTests 
 */
exports.paramsTests = {

    /**
       Initial Smoke Test
       @method simpleParameters
     */
    simpleParameters : function(test){
        var parseString = "(Test)";
        var startRule = "params";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "params");
        test.ok(result[0].names.length === 1);
        test.ok(result[0].names[0] === "Test");
        
        test.done();
    },

    /**
       Check that multiple parameters can be declared at once
       @method multipleParams
     */
    multipleParams : function(test){
        var parseString = "(Test,Blah,Bloo)";
        var startRule = "params";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "params");
        test.ok(result[0].names.length === 3);
        test.ok(result[0].names[0] === "Test");
        test.ok(result[0].names[1] === "Blah");
        test.ok(result[0].names[2] === "Bloo");        
        test.done();
    },

    /**
       Verify what happens with an empty param list
       @method emptyParams
    */
    emptyParams : function(test){
        var parseString = "()";
        var startRule = "params";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 0);
        test.done();
    },
    
    

};
