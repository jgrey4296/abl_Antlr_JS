var ABLModule = require('../ABLModule');

exports.importDeclarationTests = {

    stub : function(test){
        var parseString = "";
        var startRule = "";
        var result = ABLModule.parse(parseString,startRule);
        test.done();
    },


};
