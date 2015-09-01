/**
   @module ABLParser
   @submodule UnitTests
 */
var ABLModule = require('../ABLModule');

/**
   Tests conflict declarations
   @class UnitTests.conflictDeclarationTests
*/
exports.conflictDeclarationTests = {

    /**
       Initial Smoke Test
       @method simpleDeclaration
     */
    simpleDeclaration : function(test){
        var parseString = "conflict jumpToLocation walkToLocation;";
        var startRule = "conflictDecl";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "conflictDeclaration");
        test.ok(result[0].first === "jumpToLocation","Is Instead:" + result[0].first);
        test.ok(result[0].second.length === 1);
        test.ok(result[0].second[0] === "walkToLocation");
        
        test.done();
    },

    /**
       Test declaration of lists of conflicts
       @method multipleDeclaration
     */
    multipleDeclaration : function(test){
        var parseString = "conflict jumpToLocation walkToLocation blah somethingElse other abunchofConflicts;";
        var startRule = "conflictDecl";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "conflictDeclaration");
        test.ok(result[0].first === "jumpToLocation");
        test.ok(result[0].second.length === 5);
        test.ok(result[0].second[0] === "walkToLocation");
        test.ok(result[0].second[4] === "abunchofConflicts");

                
        test.done();
    },
    

};
