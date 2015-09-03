/**
   @module ABLParser
   @module UnitTests
*/
var ABLModule = require('../ABLModule');
/**
   tests parsing of java method like calls
   @class UnitTests.javaMethod 
*/
exports.conditionalExpressionTests = {

    /**
       initial smoke test
       @method simple
    */
    simple : function(test){
        var parseString = "!something.somethingElse(x,y)"
        var startRule = "javaMethod";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "javaMethod");
        test.ok(result[0].bang === true);
        test.ok(result[0].name === "something.somethingElse");
        test.ok(result[0].params.names.length === 2);
        test.ok(result[0].params.names[0].varType === undefined);
        test.ok(result[0].params.names[0].name === "x");
        test.ok(result[0].params.names[1].varType === undefined);
        test.ok(result[0].params.names[1].name === "y");
        
        test.done();
    },

    //test with bang
    withBangTest : function(test){
        var parseString = "! test(BlahWME)";
        var startRule = "javaMethod";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "javaMethod");
        test.ok(result[0].bang === true);
        test.ok(result[0].name === "test");
        test.ok(result[0].params.names[0].varType === "BlahWME");
        
        test.done();
    }
    
    //test with field test:


    //test with multiple field tests:

};
