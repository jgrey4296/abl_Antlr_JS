// Generated from EL.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('./lib/antlr4_runtime/index');
var ELListener = require('./ELListener').ELListener;
var grammarFileName = "EL.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0013\u000f\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0006\u0002\t\n\u0002\r\u0002\u000e\u0002\n\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0002\u0002\u0003\u0002\u0002\u0002\u000e",
    "\u0002\u0004\u0003\u0002\u0002\u0002\u0004\u0005\u0007\u000b\u0002\u0002",
    "\u0005\b\u0007\u0013\u0002\u0002\u0006\u0007\u0007\n\u0002\u0002\u0007",
    "\t\u0007\u0013\u0002\u0002\b\u0006\u0003\u0002\u0002\u0002\t\n\u0003",
    "\u0002\u0002\u0002\n\b\u0003\u0002\u0002\u0002\n\u000b\u0003\u0002\u0002",
    "\u0002\u000b\f\u0003\u0002\u0002\u0002\f\r\u0007\f\u0002\u0002\r\u0003",
    "\u0003\u0002\u0002\u0002\u0003\n"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, "'?'", "'.'", "'!'", 
                     "','", "'['", "']'", "'$'", "'{'", "'}'", "'^'", "'#'", 
                     "'/'" ];

var symbolicNames = [ null, "EL_Program", "Dotbang", "EL_Declaration", "EL_Query", 
                      "QUESTION", "DOT", "BANG", "COMMA", "LBRACKET", "RBRACKET", 
                      "SELECTOR", "LBRACE", "RBRACE", "RETURN", "UTILITY", 
                      "DIVIDOR", "STRING" ];

var ruleNames =  [ "option" ];

function ELParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ELParser.prototype = Object.create(antlr4.Parser.prototype);
ELParser.prototype.constructor = ELParser;

Object.defineProperty(ELParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ELParser.EOF = antlr4.Token.EOF;
ELParser.EL_Program = 1;
ELParser.Dotbang = 2;
ELParser.EL_Declaration = 3;
ELParser.EL_Query = 4;
ELParser.QUESTION = 5;
ELParser.DOT = 6;
ELParser.BANG = 7;
ELParser.COMMA = 8;
ELParser.LBRACKET = 9;
ELParser.RBRACKET = 10;
ELParser.SELECTOR = 11;
ELParser.LBRACE = 12;
ELParser.RBRACE = 13;
ELParser.RETURN = 14;
ELParser.UTILITY = 15;
ELParser.DIVIDOR = 16;
ELParser.STRING = 17;

ELParser.RULE_option = 0;

function OptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ELParser.RULE_option;
    return this;
}

OptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OptionContext.prototype.constructor = OptionContext;

OptionContext.prototype.LBRACKET = function() {
    return this.getToken(ELParser.LBRACKET, 0);
};

OptionContext.prototype.STRING = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ELParser.STRING);
    } else {
        return this.getToken(ELParser.STRING, i);
    }
};


OptionContext.prototype.RBRACKET = function() {
    return this.getToken(ELParser.RBRACKET, 0);
};

OptionContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ELParser.COMMA);
    } else {
        return this.getToken(ELParser.COMMA, i);
    }
};


OptionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ELListener ) {
        listener.enterOption(this);
	}
};

OptionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ELListener ) {
        listener.exitOption(this);
	}
};




ELParser.OptionContext = OptionContext;

ELParser.prototype.option = function() {

    var localctx = new OptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ELParser.RULE_option);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 2;
        this.match(ELParser.LBRACKET);
        this.state = 3;
        this.match(ELParser.STRING);
        this.state = 6; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 4;
            this.match(ELParser.COMMA);
            this.state = 5;
            this.match(ELParser.STRING);
            this.state = 8; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ELParser.COMMA);
        this.state = 10;
        this.match(ELParser.RBRACKET);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.ELParser = ELParser;
