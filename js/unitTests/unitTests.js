/**
   @module ABLParser
   @submodule UnitTests
 */
var ABLModule = require('../ABLModule');

/**
   Verify that the ABLModule throws basic errors
   @class UnitTests.throwErrorTests 
 */
exports.throwErrorTests = {

    /**
       Check that an error is throw when a nonexistent rule
       is passed to the parse function
       @method throw_Error_On_No_Start_Rule
     */
    throw_Error_On_No_Start_Rule : function(test){
        test.throws(function(){
            ABLModule.parse("blah blah blah","nonexistentRule");
        });
        test.done();
    },

    /**
       Check that an error is thrown on no string to parse
       @method throw_eror_on_no_input_text
     */
    throw_error_on_no_input_text : function(test){
        test.throws(function(){
            ABLModule.parse("");
        });
        test.done();
    },
};


