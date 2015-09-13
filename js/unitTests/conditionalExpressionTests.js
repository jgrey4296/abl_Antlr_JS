/**
   @module ABLParser
   @module UnitTests
*/
var ABLModule = require('../ABLModule');


/**
   simple tests the make sure conditional expressions modify mixed calls into themselves
   @class UnitTests.conditionalExpressionTests 
*/
exports.conditionalExpressionTests = {

    /**
       initial smoke test
       @method simple
    */
    simple : function(test){
        var parseString = "(True)"
        var startRule = "conditionalExpression";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "conditionalExpression",result[0].type);
        test.ok(result[0].clauses.length === 1);
        test.ok(result[0].clauses[0][1] === "default");
        test.ok(result[0].clauses[0][0].type === "binaryOp");
        test.ok(result[0].clauses[0][0].expression[0].type === "ablExpression");
        test.ok(result[0].clauses[0][0].expression[0].type === "ablExpression");
        test.ok(result[0].clauses[0][0].expression[0].value.type === "ablLiteral");

        
        
        test.done();
    },

    //test two booleans AND'd
    andTest : function(test){
        var parseString = "(True && False)";
        var startRule = "conditionalExpression";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "conditionalExpression");
        test.ok(result[0].clauses.length === 2);
        test.ok(result[0].clauses[0][1] === "default");
        test.ok(result[0].clauses[0][0].type === "binaryOp");
        test.ok(result[0].clauses[1][0].type === "binaryOp");
        test.ok(result[0].clauses[1][1] === "and");
        
        test.done();
    },

    
    //test two booleans OR'd

    //Test more than two boolesn

    //Test names

    //test javaMethods

    //test binaryOps

};
