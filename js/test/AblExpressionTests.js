var ABLModule = require('../ABLModule');

exports.ablExpressionTests = {

    //simple smoke test
    simple : function(test){
        var parseString = "Test";
        var startRule = "AblExpression";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result.type === "AblExpression");
        test.ok(result.value === "Test");
        
        test.done();
    },

    //simpleLiteral
    simpleLiteral : function(test){
        var parseString = "1";
        var startRule = "AblExpression";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result.type === "AblExpression");
        test.ok(result.value);
        test.ok(result.value.type === "AblLiteral");
        test.ok(result.value.value === "1");
        test.ok(result.value.varType === "integer");
        
        test.done();
    },

};
