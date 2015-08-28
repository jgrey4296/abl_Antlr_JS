var ABLModule = require('../ABLModule');

exports.ablLiteralTests = {

    //simple smoke test
    simpleLiteral : function(test){
        var parseString = "1";
        var startRule = "AblLiteral";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "AblLiteral");
        test.ok(result[0].value === "1");
        test.ok(result[0].varType === "integer");
        
        test.done();
    },

    //test:
    //float,
    //double
    //string
    //boolean
    //null
    

};
