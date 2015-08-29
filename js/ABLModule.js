if(define !== 'function'){
    var define = require('amdefine')(module);
}


define(['./lib/antlr4/index','./ABLListener','./ABLLexer','./ABLParser','./JGListener'],function(antlr4,ABLListener,ABLLexer,ABLParser,JGListener){
    //Setup:
    
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


    //Returning interface:
    return { parse : parseInput};
});
