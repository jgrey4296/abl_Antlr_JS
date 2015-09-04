/**
   Unit Tests for the parser
   @module ABLParser
   @submodule UnitTests
*/
var ABLModule = require('../ABLModule');

/**
   test priority modification
   @class UnitTests.priorityModifierTests 
 */
exports.priorityModifierTests = {

    /**
       The simplest possible expression
       @method simple
     */
    simple : function(test){
        var parseString = "priority 5";
        var startRule = "priorityModifier";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "priorityModifier",result[0].type);
        test.ok(result[0].value.type === "ablLiteral");
        test.ok(result[0].value.varType === "int");
        test.ok(result[0].value.value === "5");
        
        test.done();
    },

    simpleExplicitModifier : function(test){
        var parseString = "priority_modifier 5";
        var startRule = "priorityModifier";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "priorityModifier",result[0].type);
        test.ok(result[0].value.type === "ablLiteral");
        test.ok(result[0].value.varType === "int");
        test.ok(result[0].value.value === "5");
        
        test.done();
    },
 

};
