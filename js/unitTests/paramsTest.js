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
        test.ok(result[0].params.length === 1);
        test.ok(result[0].params[0].type === "param");
        test.ok(result[0].params[0].varType === "Test");
        test.ok(result[0].params[0].value === undefined);
        
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
        test.ok(result[0].params.length === 3);
        test.ok(result[0].params[0].type === "param");
        test.ok(result[0].params[0].varType === "Test");
        test.ok(result[0].params[0].value === undefined);
        test.ok(result[0].params[1].type === "param");
        test.ok(result[0].params[1].varType === "Blah");
        test.ok(result[0].params[1].value === undefined);
        test.ok(result[0].params[2].type === "param");
        test.ok(result[0].params[2].varType === "Bloo");
        test.ok(result[0].params[2].value === undefined);
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
        test.ok(result[0].params.length === 0);
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
        test.ok(result[0].params.length === 1);
        test.ok(result[0].params[0].type === "param");
        test.ok(result[0].params[0].varType === "String");
        test.ok(result[0].params[0].value.type === "ablExpression");
        test.ok(result[0].params[0].value.varType === "name");
        test.ok(result[0].params[0].value.value === "blah");
        
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

        test.ok(result[0].params.length === 3);
        
        test.ok(result[0].params[0].type === "param");
        test.ok(result[0].params[0].varType === "String");
        test.ok(result[0].params[0].value.type === "ablExpression");
        test.ok(result[0].params[0].value.varType === "name");
        test.ok(result[0].params[0].value.value === "blah");


        test.ok(result[0].params[1].type === "param");
        test.ok(result[0].params[1].varType === "Something");
        test.ok(result[0].params[1].value.type === "ablExpression");
        test.ok(result[0].params[1].value.varType === "name");
        test.ok(result[0].params[1].value.value === "else");

        
        test.ok(result[0].params[2].type === "param");
        test.ok(result[0].params[2].varType === "One");
        test.ok(result[0].params[2].value.type === "ablExpression");
        test.ok(result[0].params[2].value.varType === "name");
        test.ok(result[0].params[2].value.value === "more");

        
        test.done();
    },

    //add in tests where there isnt a type

    //TODO: TEST expressions / literals
    
};
