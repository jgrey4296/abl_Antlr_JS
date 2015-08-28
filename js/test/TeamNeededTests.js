var ABLModule = require('../ABLModule');

exports.teamNeededForSuccessTests = {

    //Simple Smoke test
    simpleTeamNeeded : function(test){
        var parseString = "team_needed_for_success;";
        var startRule = "teamNeededForSuccessDeclaration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "teamNeededForSuccessDeclaration");
        test.ok(result[0].teamNeeded === true);
        test.ok(result[0].oneNeeded === false);
        
        test.done();
    },

    //simple one needed test
    simpleOneNeeded : function(test){
        var parseString = "one_needed_for_success;";
        var startRule = "teamNeededForSuccessDeclaration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "teamNeededForSuccessDeclaration");
        test.ok(result[0].teamNeeded === false);
        test.ok(result[0].oneNeeded === true);
        
        test.done();
    },
    

};
