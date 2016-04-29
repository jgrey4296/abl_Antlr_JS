/**
   @module ABLParser
   @submodule UnitTests
 */
var ABLModule = require('../ABLModule');

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
        var parseString = "";
        var startRule = "";
        var result = ABLModule.parse(parseString,startRule);
        test.done();
    },


};
