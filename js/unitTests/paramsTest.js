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
        test.ok(result[0].names.length === 1,result[0].names.length);
        test.ok(result[0].names[0].type === "Test");
        
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
        test.ok(result[0].names[0].type === "Test");
        test.ok(result[0].names[1].type === "Blah");
        test.ok(result[0].names[2].type === "Bloo");        
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

        test.ok(result.length === 1);
        test.ok(result[0].type === "params");
        test.ok(result[0].names.length === 0);
        test.done();
    },

    /**
       check that both types and names are a recognised
       @method paramsOfTYPEandName
     */
    paramsOfTYPEandName : function(test){
        var parseString = "( String blah)";
        var startRule = "params";
        var result = ABLModule.parse(parseString,startRule);
        
        test.ok(result.length === 1);
        test.ok(result[0].type === "params");
        test.ok(result[0].names.length === 1);
        test.ok(result[0].names[0].type === "String");
        test.ok(result[0].names[0].name === "blah");
        
        test.done();
    },


    /**
       check that multiples of types and names are recognised
       @method paramsOfTYPEandNameMULTIPLE
     */
    paramsOfTYPEandNameMULTIPLE : function(test){
        var parseString = "( String blah, Something else, One more)";
        var startRule = "params";
        var result = ABLModule.parse(parseString,startRule);
        
        test.ok(result.length === 1);
        test.ok(result[0].type === "params");
        test.ok(result[0].names.length === 3);
        test.ok(result[0].names[0].type === "String");
        test.ok(result[0].names[0].name === "blah");
        test.ok(result[0].names[1].type === "Something");
        test.ok(result[0].names[1].name === "else");
        test.ok(result[0].names[2].type === "One");
        test.ok(result[0].names[2].name === "more");
        
        test.done();
    },


    
};
