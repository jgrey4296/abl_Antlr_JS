var ABLModule = require('../ABLModule');

//Throw error when a non-existing start rule is specified:
exports.throwErrorTests = {

    throw_Error_On_No_Start_Rule : function(test){
        test.throws(function(){
            ABLModule.parse("blah blah blah","nonexistentRule");
        });
        test.done();
    },

    throw_error_on_no_input_text : function(test){
        test.throws(function(){
            ABLModule.parse("");
        });
        test.done();
    },
};

//------------------------------
//PACKAGE and IMPORT Tests
exports.PackageOnly = function(test){
    //test.expect(TODO);
    var result = ABLModule.parse("package testPackage;");
    test.ok(result.length === 1, "Result should have one entry");
    var package = result.shift();
    test.ok(package[0] === 'package',"Object should be a package");
    test.ok(package[1] === 'testPackage',"Object should be the testpackage");
    test.done();
};

exports.MultiplePackagesFail = function(test){
    console.log("---------- STUB");
    test.done();
};

exports.BasicImport = function(test){
    //test.expect(TODO);
    var result = ABLModule.parse("package testPackage; import blah;");
    test.ok(result.length === 2,"Should be 2 entries in the parsed result");
    var package = result.shift();
    var impStat = result.shift();

    test.ok(impStat[0] === 'import',"Should be an import recognised");
    test.ok(impStat[1] === 'blah',"Should be the import 'blah'");
    test.done();
};

exports.importBeforePackage  = function(test){
    console.log("---------- STUB");
    test.done();
};



exports.ImportTest = function(test){
    console.log("---------- STUB");
    test.done();
};

exports.MultipleImports = function(test){
    console.log("---------- STUB");
    test.done();
};

exports.ImportDotNames  = function(test){
    console.log("---------- STUB");
    test.done();
};

//----------
//BEHAVING ENTITY TESTS:

//Empty test
exports.BehavingEntityEmptyTest = function(test){
    console.log("---------- STUB");
    test.done();
};


//----Team Needed tests
//----Decision Cycle tests
//----Conflict Declaration Tests
//----Variable Declaration Tests
//----Initial Tree Tests

//----Behaviour Tests

//----Rule Tests

//----WME tests


// exports.something =  = function(test){
//   console.log("---------- STUB");
//   test.done();
// };
