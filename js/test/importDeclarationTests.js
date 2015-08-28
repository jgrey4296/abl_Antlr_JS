var ABLModule = require('../ABLModule');

exports.importDeclarationTests = {

    //Basic Smoke Test
    simpleImport : function(test){
        var parseString = "import Blah";
        var startRule = "importDeclaration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "importDeclaration");
        test.ok(result[0].name === "Blah");                
        
        test.done();
    },

    //simple dotted import
    simpleDotImport : function(test){
        var parseString = "import Blah.something";
        var startRule = "importDeclaration";
        var result = ABLModule.parse(parseString, startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "importDeclaration");
        test.ok(result[0].name === "Blah.something");

        test.done();
    }

    //repeat dotted import:
    repeatedDotImport : function(test){
        var parseString = "import Blah.something.else.wooo";
        var startRule = "importDeclaration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "importDeclaration");
        test.ok(result[0].name === "Blah.something.else.woo");

        test.done();
    },
    
    //simple starred import
    starredImport : function(test){
        var parseString = "import Blah.*";
        var startRule = "importDeclaration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "importDeclaration");
        test.ok(result[0].name === "Blah");
        test.ok(result[0].starred === true);
        test.done();
    },

    //Simple Multiple imports:
    multipleImports : function(test){
        var parseString = "import Blah; import Bloo; import Something.else;";
        var startRule = "importDeclaration";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 3);
        test.ok(result[0].type === "importDeclaration");
        test.ok(result[1].type === "importDeclaration");
        test.ok(result[2].type === "importDeclaration");

        test.ok(result[0].name === "Blah");
        test.ok(result[1].name === "Bloo");
        test.ok(result[2].name === "Something.else");
        test.done();
    },

    //simple import fail
    failOnNoImport : function(test){
        var parseString = "import;";
        var startRule = "importDeclaration";
        test.throws(function(){
            var result = ABLModule.parse(parseString,startRule);
        });
        test.done();
    },

    //Fail on mispelling
    failOnMispelling : function(test){
        var parseString = "impart blah;";
        var startRule = "importDeclaration";
        test.throws(function(){
            var result = ABLModule.parse(parseString,startRule);
        });
        test.done();
    },

    
};
