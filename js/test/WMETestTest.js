var ABLModule = require('../ABLModule');

exports.wmeTestTest = {

    //simple smoke test
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
