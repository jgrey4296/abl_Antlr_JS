var ABLModule = require('../ABLModule');

exports.conflictDeclarationTests = {

    //simple smoke test
    simpleDeclaration : function(test){
        var parseString = "conflict jumpToLocation walkToLocation;";
        var startRule = "conflictDeclaration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "conflictDeclaration");
        test.ok(result[0].first === "jumpToLocation");
        test.ok(result[0].second === "walkToLocation");
        
        test.done();
    },

    //multiple declarations
    multipleDeclaration : function(test){
        var parseString = "conflict jumpToLocation walkToLocation; conflict walkToLocation jumpToLocation;";
        var startRule = "conflictDeclaration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 2);
        test.ok(result[0].type === "conflictDeclaration");
        test.ok(result[1].type === "conflictDeclaration");
        test.ok(result[0].first === "jumpToLocation");
        test.ok(result[0].second === "walkToLocation");
        test.ok(result[1].first === "walkToLocation");
        test.ok(result[1].second === "jumpToLocation");
                
        test.done();
    },
    

};
