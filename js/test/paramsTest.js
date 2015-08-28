var ABLModule = require('../ABLModule');

exports.paramsTests = {

    //Simple Smoke Test
    simpleParameters : function(test){
        var parseString = "(Test)";
        var startRule = "params";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "params");
        test.ok(result[0].names.length === 1);
        test.ok(result[0].names[0] === "Test");
        
        test.done();
    },

    //simple multiple params test
    multipleParams : function(test){
        var parseString = "(Test,Blah,Bloo)";
        var startRule = "params";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "params");
        test.ok(result[0].names.length === 3);
        test.ok(result[0].names[0] === "Test");
        test.ok(result[0].names[1] === "Blah");
        test.ok(result[0].names[2] === "Bloo");        
        test.done();
    },

    //Simple empty test:
    emptyParams : function(test){
        var parseString = "()";
        var startRule = "params";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 0);
        test.done();
    },
    
    

};
