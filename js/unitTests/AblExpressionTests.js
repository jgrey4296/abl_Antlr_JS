/**
   Unit Tests for the parser
   @module ABLParser
   @submodule UnitTests
*/
var ABLModule = require('../ABLModule');

/**
   Tests ABL Expression,
   Such as "Test"
   @class UnitTests.ablExpressionTests 
 */
exports.ablExpressionTests = {

    /**
       The simplest possible expression
       @method simple
     */
    simple : function(test){
        var parseString = "test";
        var startRule = "ablExpression";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "ablExpression");
        test.ok(result[0].value === "test");
        
        test.done();
    },

    /**
       Tests for recognition of simple literals
       @method simpleLiteral 
     */
    simpleLiteral : function(test){
        var parseString = "1";
        var startRule = "ablExpression";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "ablExpression");
        test.ok(result[0].value);
        test.ok(result[0].value.type === "ablLiteral");
        test.ok(result[0].value.value === "1");
        test.ok(result[0].value.varType === "int");
        
        test.done();
    },

};
