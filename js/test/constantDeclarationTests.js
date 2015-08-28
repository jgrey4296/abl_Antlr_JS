var ABLModule = require('../ABLModule');

exports.constantDeclarationTests = {

    //Simple Smoke Test:
    simpleConstantDeclaration : function(test){
        var parseString = "constants Agent;";
        var startRule = "constantDeclaration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "constantDeclaration");
        test.ok(result[0].name === "Agent");
                
        test.done();
    },

    //Simple dotted test
    simpleDotTest : function(test){
        var parseString = "constants Agent.blah;";
        var startRule = "constantDeclaration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "constantDeclaration");
        test.ok(result[0].name === "Agent.blah");
        test.done();
    },

    //simple Starred test
    simpleStarTest : function(test){
        var parseString = "constants Agent.*;";
        var startRule = "constantDeclaration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "constantDeclaration");
        test.ok(result[0].name === "Agent");
        test.ok(result[0].starred === true);
        test.done()
    },

    //Simple Multiple Constants declaration test:
    multipleDecTest : function(test){
        var parseString = "constants Agent; constants Blah; constants Bloo;";
        var startRule = "constantDeclaration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 3);
        test.ok(result[0].type === "constantDeclaration");
        test.ok(result[1].type === "constantDeclaration");
        test.ok(result[2].type === "constantDeclaration");

        test.ok(result[0].name === "Agent");
        test.ok(result[1].name === "Blah");
        test.ok(result[2].name === "Bloo");
        
        test.done();
    },
    
    //simple misspelling test
    misspelledTest : function(test){
        var parseString = "contants Agent;";
        var startRule = "constantDeclaration";
        test.throws(function(){
            var result = ABLModule.parse(parseString,startRule);
        });

        test.done();
    },

    
    
};
