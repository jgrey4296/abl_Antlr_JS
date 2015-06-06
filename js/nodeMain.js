var fs = require('fs');
var ABLModule = require('./ABLModule');

var testInput = "package blah; import amodule; "
              + " behaving_entity Something{"
              + " initial_tree {"
              + " fail; } }";

console.log("Antlr Test");

var result = ABLModule.parse(testInput);

console.log("Result:",result);