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

    //test name, literals, javamethod, conditionalExpression
    javaMethodTest : function(test){
        var parseString = "!blah(something,Int 5)";
        var startRule = "ablExpression";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1,result.length);
        test.ok(result[0].varType === "javaMethod");
        test.ok(result[0].value.type === "javaMethod");
        test.ok(result[0].value.bang === true);
        test.ok(result[0].value.name === "blah");
        test.ok(result[0].value.params.length === 2);        
        test.done();
    },

    conditionalMethodTest : function(test){
        var parseString = "(!blah(something,Int 5))";
        var startRule = "ablExpression";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1,result.length);
        test.ok(result[0].type === "ablExpression",result[0].type);
        test.ok(result[0].varType === "conditionalExpression");
        test.ok(result[0].value.type === "conditionalExpression",result[0].value.type);
        test.ok(result[0].value.clauses[0][0].type === "binaryOp",result[0].value.clauses[0][0].type);
        test.ok(result[0].value.clauses[0][1] === "default");
        
        test.ok(result[0].value.clauses[0][0].expression.length === 1);
        test.ok(result[0].value.clauses[0][0].expression[0].varType === "javaMethod");

        test.ok(result[0].value.clauses[0][0].expression[0].value.bang === true);

        test.ok(result[0].value.clauses[0][0].expression[0].value.name === "blah");
        test.ok(result[0].value.clauses[0][0].expression[0].value.params.length === 2);
        test.done();
    },

};
