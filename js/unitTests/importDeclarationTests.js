/**
   @module ABLParser
   @submodule UnitTests
 */
var ABLModule = require('../ABLModule');

var startRule = "g_import";

/**
   Checks that import statements work
   @class UnitTests.importDeclarationTests 
 */
exports.importDeclarationTests = {

    /**
       Initial Smoke Test
       @method simpleImport
     */
    simpleImport : function(test){
        var parseString = "import Blah;";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "importDeclaration");
        test.ok(result[0].name === "Blah");                
        
        test.done();
    },

    /**
       Check that imports can be subpackages
       @method simpleDotImport
     */
    simpleDotImport : function(test){
        var parseString = "import Blah.something;";

        var result = ABLModule.parse(parseString, startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "importDeclaration");
        test.ok(result[0].name === "Blah.something");

        test.done();
    },

    /**
       check that imports can be arbitrary length subpackages
       @method repeatedDotImport 
     */
    repeatedDotImport : function(test){
        var parseString = "import Blah.something.else.wooo;";

        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "importDeclaration");
        test.ok(result[0].name === "Blah.something.else.wooo");

        test.done();
    },

    /**
       Check that imports can cover everything in a package
       using *
       @method starredImport
     */
    starredImport : function(test){
        var parseString = "import Blah.*;";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 1);
        test.ok(result[0].type === "importDeclaration");
        test.ok(result[0].name === "Blah");
        test.ok(result[0].starred === true);
        test.done();
    },

    /**
       Check that multiple packages can be imported in a row
       @method multipleImports
     */
    multipleImports : function(test){
        var parseString = "import Blah; import Bloo; import Something.else;";
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

    /**
       Check that if no value is specified to import,
       nothing is imported
       @method failOnNoImport
     */
    failOnNoImport : function(test){
        var parseString = "import;";
        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 0);
        
        test.done();
    },

    /**
       Verify what happens when a keyword is misspelled
       @method failOnMispelling
     */
    failOnMispelling : function(test){
        var parseString = "impart blah;";

        var result = ABLModule.parse(parseString,startRule);

        test.ok(result.length === 0);
        
        test.done();
    },

    
};
