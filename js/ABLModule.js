if(define !== 'function'){
  var define = require('amdefine')(module);
}


define(['./lib/antlr4/index','./ABLListener','./ABLLexer','./ABLParser','./JGListener'],function(antlr4,ABLListener,ABLLexer,ABLParser,JGListener){
  //Setup:
 
  var parseInput = function(input){
    if(input.length <= 0){
      console.log("No input");
      return [];
    };
    console.log("Parsing Input:",input);
    var chars = new antlr4.InputStream(input);
    var lexer = new ABLLexer.ABLLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new ABLParser.ABLParser(tokens);
    parser.buildParseTrees = true;

    //Start Rule:
    var tree = parser.prog();
    var printer = new JGListener.JGListener();

    antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer,tree);


    return printer.parsedStack;

  };


  //Returning interface:
  return { parse : parseInput};
});