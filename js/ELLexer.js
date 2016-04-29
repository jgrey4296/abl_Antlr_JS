// Generated from EL.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('./lib/antlr4_runtime/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u000f:\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\u000e\u0006\u000e7\n\u000e\r\u000e\u000e\u000e8\u0002\u0002",
    "\u000f\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
    "\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u0003",
    "\u0002\u0003\u0006\u00022;C\\aac|:\u0002\u0003\u0003\u0002\u0002\u0002",
    "\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002",
    "\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002",
    "\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002",
    "\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002",
    "\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002",
    "\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002",
    "\u0003\u001d\u0003\u0002\u0002\u0002\u0005\u001f\u0003\u0002\u0002\u0002",
    "\u0007!\u0003\u0002\u0002\u0002\t#\u0003\u0002\u0002\u0002\u000b%\u0003",
    "\u0002\u0002\u0002\r\'\u0003\u0002\u0002\u0002\u000f)\u0003\u0002\u0002",
    "\u0002\u0011+\u0003\u0002\u0002\u0002\u0013-\u0003\u0002\u0002\u0002",
    "\u0015/\u0003\u0002\u0002\u0002\u00171\u0003\u0002\u0002\u0002\u0019",
    "3\u0003\u0002\u0002\u0002\u001b6\u0003\u0002\u0002\u0002\u001d\u001e",
    "\u0007A\u0002\u0002\u001e\u0004\u0003\u0002\u0002\u0002\u001f \u0007",
    "0\u0002\u0002 \u0006\u0003\u0002\u0002\u0002!\"\u0007#\u0002\u0002\"",
    "\b\u0003\u0002\u0002\u0002#$\u0007.\u0002\u0002$\n\u0003\u0002\u0002",
    "\u0002%&\u0007]\u0002\u0002&\f\u0003\u0002\u0002\u0002\'(\u0007_\u0002",
    "\u0002(\u000e\u0003\u0002\u0002\u0002)*\u0007&\u0002\u0002*\u0010\u0003",
    "\u0002\u0002\u0002+,\u0007}\u0002\u0002,\u0012\u0003\u0002\u0002\u0002",
    "-.\u0007\u007f\u0002\u0002.\u0014\u0003\u0002\u0002\u0002/0\u0007`\u0002",
    "\u00020\u0016\u0003\u0002\u0002\u000212\u0007%\u0002\u00022\u0018\u0003",
    "\u0002\u0002\u000234\u00071\u0002\u00024\u001a\u0003\u0002\u0002\u0002",
    "57\t\u0002\u0002\u000265\u0003\u0002\u0002\u000278\u0003\u0002\u0002",
    "\u000286\u0003\u0002\u0002\u000289\u0003\u0002\u0002\u00029\u001c\u0003",
    "\u0002\u0002\u0002\u0004\u00028\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function ELLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

ELLexer.prototype = Object.create(antlr4.Lexer.prototype);
ELLexer.prototype.constructor = ELLexer;

ELLexer.EOF = antlr4.Token.EOF;
ELLexer.QUESTION = 1;
ELLexer.DOT = 2;
ELLexer.BANG = 3;
ELLexer.COMMA = 4;
ELLexer.LBRACKET = 5;
ELLexer.RBRACKET = 6;
ELLexer.SELECTOR = 7;
ELLexer.LBRACE = 8;
ELLexer.RBRACE = 9;
ELLexer.RETURN = 10;
ELLexer.UTILITY = 11;
ELLexer.DIVIDOR = 12;
ELLexer.STRING = 13;


ELLexer.modeNames = [ "DEFAULT_MODE" ];

ELLexer.literalNames = [ null, "'?'", "'.'", "'!'", "','", "'['", "']'", 
                         "'$'", "'{'", "'}'", "'^'", "'#'", "'/'" ];

ELLexer.symbolicNames = [ null, "QUESTION", "DOT", "BANG", "COMMA", "LBRACKET", 
                          "RBRACKET", "SELECTOR", "LBRACE", "RBRACE", "RETURN", 
                          "UTILITY", "DIVIDOR", "STRING" ];

ELLexer.ruleNames = [ "QUESTION", "DOT", "BANG", "COMMA", "LBRACKET", "RBRACKET", 
                      "SELECTOR", "LBRACE", "RBRACE", "RETURN", "UTILITY", 
                      "DIVIDOR", "STRING" ];

ELLexer.grammarFileName = "EL.g4";



exports.ELLexer = ELLexer;

