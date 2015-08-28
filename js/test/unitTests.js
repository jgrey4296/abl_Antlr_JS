var ABLModule = require('../ABLModule');

//Throw error when a non-existing start rule is specified:
exports.throwErrorTests = {

    throw_Error_On_No_Start_Rule : function(test){
        test.throws(function(){
            ABLModule.parse("blah blah blah","nonexistentRule");
        });
        test.done();
    },

    throw_error_on_no_input_text : function(test){
        test.throws(function(){
            ABLModule.parse("");
        });
        test.done();
    },
};


