/**
   @module ABLParser
   @submodule UnitTests
*/
var ABLModule = require('../ABLModule');

/**
   Tests the grammar construct of wmeFieldTest
   @class UnitTests.wmeFieldTestTests 
 */
exports.wmeFieldTestTests = {

    /**
       initial smoke test
       @method simple 
     */
    simple : function(test){
        var parseString = "a == 5";
        var startRule = "wmeFieldTest";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "wmeFieldTest");
        test.ok(result[0].name === "a");
        test.ok(result[0].operator.type === "operator");
        test.ok(result[0].operator.opType === "equal");
        test.ok(result[0].expression.type === "ablExpression");
        test.ok(result[0].expression.value.type === "ablLiteral");
        test.ok(result[0].expression.value.varType === "int");
        test.ok(result[0].expression.value.value === "5");
        
        test.done();
    },

    //test identifier -> literal
    //test identifier -> Name
    
    //Test all the operators:
    //bind:

    //gt

    //lt

    //EQ

    //LE

    //GE

    //NE
    

};
