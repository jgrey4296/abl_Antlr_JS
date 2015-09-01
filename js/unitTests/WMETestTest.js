/**
   @module ABLParser
   @module UnitTests
*/
var ABLModule = require('../ABLModule');

/**
   Checks WMETests
   @class UnitTests.wmeTestTest 
 */
exports.wmeTestTest = {

    /**
       initial smoke test
       @method simple
    */
    simple : function(test){
        var parseString = "";
        var startRule = "";
        var result = ABLModule.parse(parseString,startRule);
        test.done();
    },

    //test with bang

    //test without bang

    //name assignment

    //variable number of wmeFieldTests

};
