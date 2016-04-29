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
    stub : function(test){
        let parseString = ".this.is.a.test",
            result = ELModule.parse(parseString);
        console.log(result);
        test.ok(result[0] === 'entered EL Program');
        test.done();
    },

};
