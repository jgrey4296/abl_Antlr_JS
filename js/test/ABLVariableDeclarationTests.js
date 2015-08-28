var ABLModule = require('../ABLModule');

exports.ABLVariableDeclarationTests = {

    //simple smoke test
    simpleDeclaration : function(test){
        var parseString = "String Test;";
        var startRule = "AblVariableDeclaration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "AblVariableDeclaration");
        test.ok(result[0].name === "Test");
        test.ok(result[0].varType === "String");
        
        test.done();
    },

    multipleDeclaration : function(test){
        var parseString = "String Test, Blah;";
        var startRule = "AblVariableDeclaration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 2);
        test.ok(result[0].type === "AblVariableDeclaration");
        test.ok(result[1].type === "AblVariableDeclaration");
        test.ok(result[0].name === "Test");
        test.ok(result[1].name === "Blah");
        test.ok(result[0].varType === "String");
        test.ok(result[1].varType === "String");
        
        test.done();
    },

};
