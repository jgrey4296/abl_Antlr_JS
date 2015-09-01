/**
   @module ABLParser
   @submodule UnitTests
 */
var ABLModule = require('../ABLModule');

/**
   Test the Precondition Construct
   @class UnitTests.preconditionTests 
 */
exports.preconditionTests = {

    stub : function(test){
        var parseString = "";
        var startRule = "";
        var result = ABLModule.parse(parseString,startRule);
        test.done();
    },


};
