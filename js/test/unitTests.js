var ABLModule = require('../ABLModule');

//DEFAULT EMPTY STRING PARSE
exports.EmptyStringTest = function(test){
  test.expect(1);
  var result = ABLModule.parse("");
  test.ok(result.length === 0,"Empty String should produce empty Array");

  test.done();
};

//----------
//PACKAGE and IMPORT Tests
exports.PackageOnly = function(test){
  //test.expect(TODO);
  var result = ABLModule.parse("package testPackage;");
  test.ok(result.length === 1, "Result have one entry");
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
