/**
   @module ABLParser
   @module UnitTests
*/
var ABLModule = require('../ABLModule');

//Example Strings:
/*
  ! blah = ( BlahWME someParam < 5 )

*/

/**
   Checks clause parsing for part of conditional expressions
   a simplifying construct to aggregate bools, names,
   javamethods and binaryOps
   @class UnitTests.clauseTests 
*/
exports.clauseTests = {

    //Needs to test:
    //bool
    //name
    //javaMethod
    //binaryOp
    
    /**
       initial smoke test
       @method simple
    */
    simple : function(test){
        var parseString = "True";
        var startRule = "clause";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "clause");
        test.ok(result[0].child.type == "binaryOp");
        test.done();
    },

    //test false:
    testLiteralFalse : function(test){
        var parseString = "False";
        var startRule = "clause";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1,result.length);
        test.ok(result[0].type === "clause");
        test.ok(result[0].child.type === "binaryOp");
        test.done();
    },

    //test name:
    nameTest : function(test){
        var parseString = "thisIsAName";
        var startRule = "clause";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "clause");
        //test.ok(result[0].child === "thisIsAName");
        test.ok(result[0].child.type === "binaryOp");
        test.done();
    },

    //test a java method:
    javaMethodTest : function(test){
        var parseString = "!testThis.something()";
        var startRule = "clause";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "clause");
        test.ok(result[0].type === "binaryOp");
        // test.ok(result[0].child.type === "javaMethod");
        // test.ok(result[0].child.bang === true);
        // test.ok(result[0].child.name === "testThis.something");
        // test.ok(result[0].child.params.length === 0);
        test.done();
    },

    //test binary ops
    binaryOpTest : function(test){
        var parseString = "! something <= 5.6";
        var startRule = "clause";
        var result = ABLModule.parse(parseString, startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "clause");
        test.ok(result[0].child.type === "binaryOp");
        // test.ok(result[0].child.expression.length === 2);
        // test.ok(result[0].child.operator.type === "operator");
        // test.ok(result[0].child.operator.opType === "lessEqual");
        // test.ok(result[0].child.expression[0].type === "ablExpression");
        // test.ok(result[0].child.expression[0].value === "something");
        // test.ok(result[0].child.expression[1].type === "ablExpression");
        // test.ok(result[0].child.expression[1].value.type === "ablLiteral");
        // test.ok(result[0].child.expression[1].value.varType === "float");
        // test.ok(result[0].child.expression[1].value.value === "5.6");
        test.done();
    },

};
