var ABLModule = require('../ABLModule');

exports.propertyDeclarationTests = {

    //Simple Smoke Test
    simpleDeclaration : function(test){
        var parseString = "property String Test;";
        var startRule = "propertyDeclaration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "propertyDeclaration");
        test.ok(result[0].name === "Test");
        test.ok(result[0].varType === "String");
        
        test.done();
    },

    //Multiple Property Declarations

    //Mispelled property declarations

    //different Type declarations
    

};
