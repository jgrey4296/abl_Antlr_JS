/**
   @module ABLParser
   @submodule UnitTests
*/
var ABLModule = require('../ABLModule');

/**
   Tests the parsing of literals
   @class UnitTests.ablLiteralTests 
*/
exports.ablLiteralTests = {

    /**
       Initial Smoke Test
       @method simpleLiteral 
    */
    simpleLiteral : function(test){
        var parseString = "1";
        var startRule = "ablLiteral";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "ablLiteral");
        test.ok(result[0].value === "1");
        test.ok(result[0].varType === "int");
        
        test.done();
    },

    /**
       Test Floats
       @method simpleFloat 
    */
    simpleFloat : function(test){
        var parseString = "1124.9124";
        var startRule = "ablLiteral";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "ablLiteral");
        test.ok(result[0].value === "1124.9124");
        test.ok(result[0].varType === "float");
        
        test.done();
    },

    /**
       simpleString
       @method simpleString 
    */
    simpleString : function(test){
        var parseString = '"this is a test"';
        var startRule = "ablLiteral";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "ablLiteral");
        test.ok(result[0].value === '"this is a test"');
        test.ok(result[0].varType === "string");
        
        test.done();
    },

    exampleString : function(test){
        var parseString = '";)"';
        var startRule = "ablLiteral";
        var result = ABLModule.parse(parseString,startRule);
        test.ok(result.length === 1);
        test.ok(result[0].type === "ablLiteral");
        test.ok(result[0].varType === "string");
        test.ok(result[0].value === '";)"');
        test.done();
    },
    
    /**
       simpleBool
       @method simpleBool
    */
    simpleBool : function(test){
        var parseString = "True";
        var startRule = "ablLiteral";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "ablLiteral");
        test.ok(result[0].value === "True");
        test.ok(result[0].varType === "bool");
        
        test.done();
    },

    /**
       simpleBoolFalse
       @method simpleBoolFalse
    */
    simpleBoolFalse : function(test){
        var parseString = "False";
        var startRule = "ablLiteral";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "ablLiteral");
        test.ok(result[0].value === "False");
        test.ok(result[0].varType === "bool");
        
        test.done();
    },
    
    /**
       simpleNull
       @method simpleLiteral 
    */
    simpleNull : function(test){
        var parseString = "Null";
        var startRule = "ablLiteral";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "ablLiteral");
        test.ok(result[0].value === "Null");
        test.ok(result[0].varType === "null");
        
        test.done();
    },
    

};
