var ABLModule = require('../ABLModule');

//Tests the grammar construct of 'wmeFieldTests'
exports.wmeFieldTestTests = {

    //simple smoke test
    simple : function(test){
        var parseString = "a == 5";
        var startRule = "WMEFieldTest";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "WMEFieldTest");
        test.ok(result[0].name === "a");
        test.ok(result[0].operator === "EQ");
        test.ok(result[0].value === "5");
        
        test.done();
    },

    //test identifier -> literal
    //test identifier -> Name
    
    //Test all the operators:
    //bind:

    //gt

    //lt

    //EQ

    //LE

    //GE

    //NE
    

};
