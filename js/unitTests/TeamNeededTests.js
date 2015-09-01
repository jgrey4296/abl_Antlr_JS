/**
   @module ABLParser
   @submodule UnitTests
 */
var ABLModule = require('../ABLModule');

/**
   Performs tests on team needed statements
   @class UnitTests.teamNeededForSuccessTests 
 */
exports.teamNeededForSuccessTests = {

    /**
       Initial Smoke Test
       @method simpleTeamNeeded
    */
    simpleTeamNeeded : function(test){
        var parseString = "joint_goal_success_negotiation team_needed_for_success;";
        var startRule = "teamNeeded";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "teamNeededForSuccessDeclaration");
        test.ok(result[0].teamNeeded === true);
        test.ok(result[0].oneNeeded === false);
        
        test.done();
    },

    /**
       Tests 'One_needed_for_success'
       @method simpleOneNeeded
     */
    simpleOneNeeded : function(test){
        var parseString = "joint_goal_success_negotiation one_needed_for_success;";
        var startRule = "teamNeeded";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "teamNeededForSuccessDeclaration");
        test.ok(result[0].teamNeeded === false);
        test.ok(result[0].oneNeeded === true);
        
        test.done();
    },
    

};
