// Generated from EL.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('./lib/antlr4_runtime/index');
var ELListener = require('./ELListener').ELListener;
var grammarFileName = "EL.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u000f1\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0005\u0002\u000f\n\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007",
    "\u0004\u001a\n\u0004\f\u0004\u000e\u0004\u001d\u000b\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0006\u0005#\n\u0005\r\u0005\u000e",
    "\u0005$\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006/\n\u0006\u0003\u0006",
    "\u0002\u0002\u0007\u0002\u0004\u0006\b\n\u0002\u0003\u0003\u0002\u0004",
    "\u0005/\u0002\u000e\u0003\u0002\u0002\u0002\u0004\u0012\u0003\u0002",
    "\u0002\u0002\u0006\u0014\u0003\u0002\u0002\u0002\b\u001e\u0003\u0002",
    "\u0002\u0002\n(\u0003\u0002\u0002\u0002\f\u000f\u0005\u0006\u0004\u0002",
    "\r\u000f\u0005\n\u0006\u0002\u000e\f\u0003\u0002\u0002\u0002\u000e\r",
    "\u0003\u0002\u0002\u0002\u000f\u0010\u0003\u0002\u0002\u0002\u0010\u0011",
    "\u0007\u0002\u0002\u0003\u0011\u0003\u0003\u0002\u0002\u0002\u0012\u0013",
    "\t\u0002\u0002\u0002\u0013\u0005\u0003\u0002\u0002\u0002\u0014\u0015",
    "\u0005\u0004\u0003\u0002\u0015\u001b\u0007\u000f\u0002\u0002\u0016\u0017",
    "\u0005\u0004\u0003\u0002\u0017\u0018\u0007\u000f\u0002\u0002\u0018\u001a",
    "\u0003\u0002\u0002\u0002\u0019\u0016\u0003\u0002\u0002\u0002\u001a\u001d",
    "\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001b\u001c",
    "\u0003\u0002\u0002\u0002\u001c\u0007\u0003\u0002\u0002\u0002\u001d\u001b",
    "\u0003\u0002\u0002\u0002\u001e\u001f\u0007\u0007\u0002\u0002\u001f\"",
    "\u0007\u000f\u0002\u0002 !\u0007\u0006\u0002\u0002!#\u0007\u000f\u0002",
    "\u0002\" \u0003\u0002\u0002\u0002#$\u0003\u0002\u0002\u0002$\"\u0003",
    "\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002",
    "&\'\u0007\b\u0002\u0002\'\t\u0003\u0002\u0002\u0002()\u0005\u0006\u0004",
    "\u0002).\u0007\u0003\u0002\u0002*+\u0007\r\u0002\u0002+,\u0007\u000f",
    "\u0002\u0002,-\u0007\u000e\u0002\u0002-/\u0007\u000f\u0002\u0002.*\u0003",
    "\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/\u000b\u0003\u0002\u0002",
    "\u0002\u0006\u000e\u001b$."].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'?'", "'.'", "'!'", "','", "'['", "']'", "'$'", 
                     "'{'", "'}'", "'^'", "'#'", "'/'" ];

var symbolicNames = [ null, "QUESTION", "DOT", "BANG", "COMMA", "LBRACKET", 
                      "RBRACKET", "SELECTOR", "LBRACE", "RBRACE", "RETURN", 
                      "UTILITY", "DIVIDOR", "STRING" ];

var ruleNames =  [ "eL_Program", "dotbang", "eL_Declaration", "option", 
                   "eL_Query" ];

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
ELParser.QUESTION = 1;
ELParser.DOT = 2;
ELParser.BANG = 3;
ELParser.COMMA = 4;
ELParser.LBRACKET = 5;
ELParser.RBRACKET = 6;
ELParser.SELECTOR = 7;
ELParser.LBRACE = 8;
ELParser.RBRACE = 9;
ELParser.RETURN = 10;
ELParser.UTILITY = 11;
ELParser.DIVIDOR = 12;
ELParser.STRING = 13;

ELParser.RULE_eL_Program = 0;
ELParser.RULE_dotbang = 1;
ELParser.RULE_eL_Declaration = 2;
ELParser.RULE_option = 3;
ELParser.RULE_eL_Query = 4;

function EL_ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ELParser.RULE_eL_Program;
    return this;
}

EL_ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EL_ProgramContext.prototype.constructor = EL_ProgramContext;

EL_ProgramContext.prototype.EOF = function() {
    return this.getToken(ELParser.EOF, 0);
};

EL_ProgramContext.prototype.eL_Declaration = function() {
    return this.getTypedRuleContext(EL_DeclarationContext,0);
};

EL_ProgramContext.prototype.eL_Query = function() {
    return this.getTypedRuleContext(EL_QueryContext,0);
};

EL_ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof ELListener ) {
        listener.enterEL_Program(this);
	}
};

EL_ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof ELListener ) {
        listener.exitEL_Program(this);
	}
};




ELParser.EL_ProgramContext = EL_ProgramContext;

ELParser.prototype.eL_Program = function() {

    var localctx = new EL_ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ELParser.RULE_eL_Program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 12;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.state = 10;
            this.eL_Declaration();
            break;

        case 2:
            this.state = 11;
            this.eL_Query();
            break;

        }
        this.state = 14;
        this.match(ELParser.EOF);
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

function DotbangContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ELParser.RULE_dotbang;
    return this;
}

DotbangContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DotbangContext.prototype.constructor = DotbangContext;

DotbangContext.prototype.DOT = function() {
    return this.getToken(ELParser.DOT, 0);
};

DotbangContext.prototype.BANG = function() {
    return this.getToken(ELParser.BANG, 0);
};

DotbangContext.prototype.enterRule = function(listener) {
    if(listener instanceof ELListener ) {
        listener.enterDotbang(this);
	}
};

DotbangContext.prototype.exitRule = function(listener) {
    if(listener instanceof ELListener ) {
        listener.exitDotbang(this);
	}
};




ELParser.DotbangContext = DotbangContext;

ELParser.prototype.dotbang = function() {

    var localctx = new DotbangContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ELParser.RULE_dotbang);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 16;
        _la = this._input.LA(1);
        if(!(_la===ELParser.DOT || _la===ELParser.BANG)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
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

function EL_DeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ELParser.RULE_eL_Declaration;
    return this;
}

EL_DeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EL_DeclarationContext.prototype.constructor = EL_DeclarationContext;

EL_DeclarationContext.prototype.dotbang = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DotbangContext);
    } else {
        return this.getTypedRuleContext(DotbangContext,i);
    }
};

EL_DeclarationContext.prototype.STRING = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ELParser.STRING);
    } else {
        return this.getToken(ELParser.STRING, i);
    }
};


EL_DeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ELListener ) {
        listener.enterEL_Declaration(this);
	}
};

EL_DeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ELListener ) {
        listener.exitEL_Declaration(this);
	}
};




ELParser.EL_DeclarationContext = EL_DeclarationContext;

ELParser.prototype.eL_Declaration = function() {

    var localctx = new EL_DeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ELParser.RULE_eL_Declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 18;
        this.dotbang();
        this.state = 19;
        this.match(ELParser.STRING);
        this.state = 25;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ELParser.DOT || _la===ELParser.BANG) {
            this.state = 20;
            this.dotbang();
            this.state = 21;
            this.match(ELParser.STRING);
            this.state = 27;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
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
    this.enterRule(localctx, 6, ELParser.RULE_option);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 28;
        this.match(ELParser.LBRACKET);
        this.state = 29;
        this.match(ELParser.STRING);
        this.state = 32; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 30;
            this.match(ELParser.COMMA);
            this.state = 31;
            this.match(ELParser.STRING);
            this.state = 34; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ELParser.COMMA);
        this.state = 36;
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

function EL_QueryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ELParser.RULE_eL_Query;
    return this;
}

EL_QueryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EL_QueryContext.prototype.constructor = EL_QueryContext;

EL_QueryContext.prototype.eL_Declaration = function() {
    return this.getTypedRuleContext(EL_DeclarationContext,0);
};

EL_QueryContext.prototype.QUESTION = function() {
    return this.getToken(ELParser.QUESTION, 0);
};

EL_QueryContext.prototype.UTILITY = function() {
    return this.getToken(ELParser.UTILITY, 0);
};

EL_QueryContext.prototype.STRING = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ELParser.STRING);
    } else {
        return this.getToken(ELParser.STRING, i);
    }
};


EL_QueryContext.prototype.DIVIDOR = function() {
    return this.getToken(ELParser.DIVIDOR, 0);
};

EL_QueryContext.prototype.enterRule = function(listener) {
    if(listener instanceof ELListener ) {
        listener.enterEL_Query(this);
	}
};

EL_QueryContext.prototype.exitRule = function(listener) {
    if(listener instanceof ELListener ) {
        listener.exitEL_Query(this);
	}
};




ELParser.EL_QueryContext = EL_QueryContext;

ELParser.prototype.eL_Query = function() {

    var localctx = new EL_QueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ELParser.RULE_eL_Query);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 38;
        this.eL_Declaration();
        this.state = 39;
        this.match(ELParser.QUESTION);
        this.state = 44;
        _la = this._input.LA(1);
        if(_la===ELParser.UTILITY) {
            this.state = 40;
            this.match(ELParser.UTILITY);
            this.state = 41;
            this.match(ELParser.STRING);
            this.state = 42;
            this.match(ELParser.DIVIDOR);
            this.state = 43;
            this.match(ELParser.STRING);
        }

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
