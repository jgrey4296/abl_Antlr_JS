/* jshint esversion : 6 */
/**
   @module EL Parser module
 */
if(define !== 'function'){
    var define = require('amdefine')(module);
}


define(['./lib/antlr4_runtime/index','./ELListener','./ELLexer','./ELParser','./EL_custom_listener'],function(antlr4,ELListener,ELLexer,ELParser,EL_custom_listener){
    "use strict";
    /**
       The Parse Function
       @method parseInput
       @param input The Input string to be parsed
       @param startRule The rule of the grammar to start on
       @static

       Grammar to be found in EL.g4 and ELTokens.g4
     */
    let parseInput = function(input,startRule){
        startRule = startRule || "eL_Program";
        
        if(input.length <= 0){
            throw new Error("Parser given no input");
        };
        //console.log("Parsing Input:",input);
        let chars = new antlr4.InputStream(input),
            lexer = new ELLexer.ELLexer(chars),
            tokens  = new antlr4.CommonTokenStream(lexer),
            parser = new ELParser.ELParser(tokens);
        parser.buildParseTrees = true;
        
        if(parser[startRule] === undefined){
            throw new Error("Parser does not have a rule:" + startRule);
        }        
 

        let tree = parser[startRule](),
            printer = new EL_custom_listener();

        antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer,tree);

        return printer.finish();
    };


    /**
       Wraps up the parser into an easy to use function
       @class Parser
       @static
     */
    return { parse : parseInput};
});
