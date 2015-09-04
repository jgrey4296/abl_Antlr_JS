/**
   @module ABLParser
   @submodule UnitTests
 */
var ABLModule = require('../ABLModule');

/**
   Tests individual parameter declarations
   @class UnitTests.paramsTests 
 */
exports.paramTests = {

    /**
       Initial Smoke Test
       @method simpleParameters
     */
    simpleParameters : function(test){
        var parseString = "aSimpleName";
        var startRule = "param";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "param");
        test.ok(result[0].varType === undefined);
        test.ok(result[0].value.type === "ablExpression");
        test.ok(result[0].value.value === "aSimpleName");
        
        test.done();
    },

    /**
       a parameter with a type test
       @method paramAndTypeTest
     */
    paramAndTypeTest : function(test){
        var parseString = "String aSimpleName";
        var startRule = "param";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "param");
        test.ok(result[0].varType === "String");
        test.ok(result[0].value.type === "ablExpression");
        test.ok(result[0].value.value === "aSimpleName",result[0].value.type);
        
        test.done();
    },

    /**
       test a literal
       @method paramLiteralTest
     */
    paramLiteralTest : function(test){
        var parseString = "5";
        var startRule = "param";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "param");
        test.ok(result[0].value.type === "ablExpression");
        test.ok(result[0].value.varType === "ablLiteral");
        test.ok(result[0].value.value.type === "ablLiteral");
        test.ok(result[0].value.value.varType === "int");
        test.ok(result[0].value.value.value === "5");
        
        test.done();
    },

    
};
