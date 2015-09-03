/**
   Unit Tests for the parser
   @module ABLParser
   @submodule UnitTests
*/
var ABLModule = require('../ABLModule');

/**
   Test declaration of team members
   @class UnitTests.teamMemberSpecifierTests 
 */
exports.teamMemberSpecifierTests = {

    /**
       The simplest possible expression
       @method simple
     */
    simple : function(test){
        var parseString = "teammembers bob jill jane";
        var startRule = "teamMemberSpecifier";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "teamMemberSpecifier");
        test.ok(result[0].names.length === 3);
        test.ok(result[0].names[0] === "bob");
        test.ok(result[0].names[1] === "jill");
        test.ok(result[0].names[2] === "jane");
        
        test.done();
    },

 

};
