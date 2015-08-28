$(document).ready(function(){
  var ABLListener = require('ABLListener');
  var ABLLexer = require('ABLLexer');
  var ABLParser = require('ABLParser');
  var JGListener = require('JGListener');
  var ablFile = "";
  var testInput = "package blah; import amodule; "
                + " behaving_entity Something{"
                + " initial_tree {"
                + " fail; } }";

  $.get("0_initialTree.abl",function(data){
    ablFile = data;
    
    console.log("Antlr Test");
    var chars = new antlr4.InputStream(ablFile);
    var lexer = new ABLLexer.ABLLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new ABLParser.ABLParser(tokens);
    parser.buildParseTrees = true;

    //Start Rule:
    var tree = parser.prog();
    var printer = new JGListener.JGListener();

    console.log("Walking tree:\n\n\n");

    antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer,tree);

    console.log("Result:",printer.parsedStack);

  });
});