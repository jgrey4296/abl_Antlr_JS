/**
   @module ABLParser
   @module UnitTests
*/
var ABLModule = require('../ABLModule');

/**
   @class UnitTests.binaryOpTests 
*/
exports.binaryOpTests = {

    /**
       initial smoke test
       @method simple
    */
    simple : function(test){
        var parseString = "! something == 5";
        var startRule = "binaryOp";
        var result = ABLModule.parse(parseString,startRule);
        test.ok(result.length === 1);
        test.ok(result[0].type === "binaryOp");
        test.ok(result[0].bang === true);
        test.ok(result[0].expression.length == 2);
        test.ok(result[0].expression[0].type === "ablExpression");
        test.ok(result[0].expression[0].value === "something");
        test.ok(result[0].expression[1].type === "ablExpression");
        test.ok(result[0].expression[1].value.type === "ablLiteral");
        test.ok(result[0].expression[1].value.value === "5");
        test.ok(result[0].expression[1].value.varType === "int");

        test.ok(result[0].operator.type === "operator");
        test.ok(result[0].operator.opType === "equal");
        
        test.done();
    },

};
