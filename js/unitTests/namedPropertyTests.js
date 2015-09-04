/**
   Unit Tests for the parser
   @module ABLParser
   @submodule UnitTests
*/
var ABLModule = require('../ABLModule');

/**
   test property declaration
   @class UnitTests.namedPropertyTests 
 */
exports.namedPropertyTests = {

    /**
       The simplest possible expression
       @method simple
     */
    simple : function(test){
        var parseString = "property blah 5";
        var startRule = "namedProperty";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "namedProperty");
        test.ok(result[0].name === "blah");
        test.ok(result[0].value.type === "ablExpression");
        test.ok(result[0].value.value.type === "ablLiteral");
        test.ok(result[0].value.value.varType === "int");
        test.ok(result[0].value.value.value === "5");
        
        test.done();
    },

};
