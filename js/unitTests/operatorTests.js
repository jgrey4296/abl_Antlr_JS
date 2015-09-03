/**
   Unit Tests for the parser
   @module ABLParser
   @submodule UnitTests
*/
var ABLModule = require('../ABLModule');

/**
   tests operator parsing
   @class UnitTests.operatorTests 
 */
exports.operatorTests = {

    /**
       bind test
       @method bindTest
     */
    bindTest : function(test){
        var parseString = "::";
        var startRule = "operator";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "operator");
        test.ok(result[0].opType === "_bind");
        
        test.done();
    },

    /**
       greaterThan test
       @method greaterThanTest
     */
    greaterThanTest : function(test){
        var parseString = ">";
        var startRule = "operator";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "operator");
        test.ok(result[0].opType === "greaterThan");
        
        test.done();
    },

    /**
       greaterEqual test
       @method greaterEqualTest
     */
    greaterEqualTest : function(test){
        var parseString = ">=";
        var startRule = "operator";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "operator");
        test.ok(result[0].opType === "greaterEqual");
        
        test.done();
    },

        /**
       lessThan test
       @method lessThanTest
     */
    lessThanTest : function(test){
        var parseString = "<";
        var startRule = "operator";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "operator");
        test.ok(result[0].opType === "lessThan");
        
        test.done();
    },

    /**
       lessEqual test
       @method lessEqualTest
     */
    lessEqualTest : function(test){
        var parseString = "<=";
        var startRule = "operator";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "operator");
        test.ok(result[0].opType === "lessEqual");
        
        test.done();
    },

    /**
       equal test
       @method equalTest
     */
    equalTest : function(test){
        var parseString = "==";
        var startRule = "operator";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "operator");
        test.ok(result[0].opType === "equal");
        
        test.done();
    },

    /**
       notEqual test
       @method notEqualTest
     */
    notEqualTest : function(test){
        var parseString = "!=";
        var startRule = "operator";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "operator");
        test.ok(result[0].opType === "notEqual");
        
        test.done();
    },

    

};
