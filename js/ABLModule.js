/**
   @module ABLParser
 */
if(define !== 'function'){
    var define = require('amdefine')(module);
}


define(['./lib/antlr4/index','./ABLListener','./ABLLexer','./ABLParser','./JGListener'],function(antlr4,ABLListener,ABLLexer,ABLParser,JGListener){

    /**
       The Parse Function
       @method parseInput
       @param input The Input string to be parsed
       @param startRule The rule of the grammar to start on
       @static

       Grammar to be found in ABL.g4 and ABLTokens.g4
     */
    var parseInput = function(input,startRule){
        if(startRule === undefined){
            startRule = "prog";
        }
        if(input.length <= 0){
            throw new Error("Parser given no input");
        };
        //console.log("Parsing Input:",input);
        var chars = new antlr4.InputStream(input);
        var lexer = new ABLLexer.ABLLexer(chars);
        var tokens  = new antlr4.CommonTokenStream(lexer);
        var parser = new ABLParser.ABLParser(tokens);
        parser.buildParseTrees = true;

        if(parser[startRule] === undefined){
            throw new Error("Parser does not have a rule:" +
                            startRule);
        }        
 

        var tree = parser[startRule]();
        var printer = new JGListener.JGListener();

        antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer,tree);


        return printer.parsedStack;

    };


    /**
       Wraps up the parser into an easy to use function
       @class Parser
       @static
     */
    return { parse : parseInput};
});
