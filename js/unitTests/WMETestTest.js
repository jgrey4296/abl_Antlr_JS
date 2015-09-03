/**
   @module ABLParser
   @module UnitTests
*/
var ABLModule = require('../ABLModule');

//Example Strings:
/*
  ! blah = ( BlahWME someParam < 5 )

*/

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
        var parseString = "test = ( BlahWME )";
        var startRule = "wmeTest";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "wmeTest");
        test.ok(result[0].bang === false);
        test.ok(result[0].name === "test");
        test.ok(result[0].wmeType === "BlahWME");
        test.ok(result[0].fieldTests.length === 0);
        
        test.done();
    },

    //test with bang
    withBangTest : function(test){
        var parseString = "! test = (BlahWME)";
        var startRule = "wmeTest";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "wmeTest");
        test.ok(result[0].bang === true);
        test.ok(result[0].name === "test");
        test.ok(result[0].wmeType === "BlahWME");
        test.ok(result[0].fieldTests.length === 0);

        
        test.done();
    }
    
    //test with field test:


    //test with multiple field tests:

};
