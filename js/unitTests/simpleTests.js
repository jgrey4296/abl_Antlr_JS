/**
   @module ABLParser
   @submodule UnitTests
*/
"use strict";
var ELModule = require('../ELModule');

/**
   A Template Unit Test for parsing
   @class UnitTests.TEMPLATE 
 */
exports.importDeclarationTests = {
    /**
       A stub test
       @method stub
     */
    simpleDeclaration : function(test){
        let parseString = ".this.is.a.test",
            result = ELModule.parse(parseString);
        console.log(result);
        test.ok(result.type === 'declaration');
        test.ok(result.action === 'assert');
        test.ok(result.data instanceof Array);
        test.ok(result.data.length === 4);
        test.done();
    },

    simpleQuery : function(test){
        let queryString = ".this.is.a.test?",
            result = ELModule.parse(queryString);
        console.log(result);
        test.ok(result.type === "query");
        test.ok(result.data instanceof Array);
        test.ok(result.data.length === 4);
        test.done();
    },

    simpleExclusion : function(test){
        let declarationString = ".this.is!a.test",
            result = ELModule.parse(declarationString);
        console.log(result);
        test.ok(result.type === 'declaration');
        test.ok(result.data instanceof Array);
        test.ok(result.data.length === 4);
        test.ok(result.data[2].type === 'BANG');
        test.ok(result.data[2].value === 'a');
        test.done();
    },

    retract_declaration : function(test){
        let s = "!!.this.is.a.test",
            result = ELModule.parse(s);
        console.log(result);
        test.ok(result.action === 'retract');
        test.done();
    },

    negated_query : function(test){
        let s = "!!.this.is.a.test?",
            result = ELModule.parse(s);
        console.log(result);
        test.ok(result.type === 'query');
        test.ok(result.negated === true);
        
        test.done();
    },

    /*
      .this.is->x.a.test->b
     */
    
    bind_at_end : function(test){
        let s = ".this.is.a.test.x->blah",
            result = ELModule.parse(s);
        console.log(result);
        test.ok(result.data.length === 5);
        test.ok(result.data[4].type === 'DOT');
        test.ok(result.data[4].value === 'x');
        test.ok(result.data[4].bind === 'blah');
        test.done();
    },

    multiple_bind : function(test){
        let s = ".this.is->x.a.test->y",
            result = ELModule.parse(s);
        console.log(result);
        test.ok(result.data.length === 4);
        test.ok(result.data[1].bind === 'x');
        test.ok(result.data[3].bind === 'y');        
        test.done();
    },

    recall_bind : function(test){
        let s = "${x}.is.a.test",
            result = ELModule.parse(s);
        console.log(result);
        test.ok(result.data[0].type === 'recall');
        test.ok(result.data[0].value === 'x');
        test.done();
    },
    

    utility_test : function(test){
        let s = ".this.is.a.test?#2/5",
            result = ELModule.parse(s);
        console.log(result);
        test.ok(result.utilityTrue === '2');
        test.ok(result.utilityFalse === '5');        
        test.done();
    },
    
};
