// Generated from EL.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('./lib/antlr4_runtime/index');
var ELListener = require('./ELListener').ELListener;
var grammarFileName = "EL.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0011X\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0005\u0002\u0015\n\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003\u001d\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0007\u0004#\n\u0004\f\u0004\u000e\u0004&\u000b\u0004\u0005\u0004",
    "(\n\u0004\u0003\u0005\u0003\u0005\u0005\u0005,\n\u0005\u0003\u0005\u0005",
    "\u0005/\n\u0005\u0003\u0005\u0003\u0005\u0007\u00053\n\u0005\f\u0005",
    "\u000e\u00056\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0006",
    "\u0007A\n\u0007\r\u0007\u000e\u0007B\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0005\bI\n\b\u0003\b\u0005\bL\n\b\u0003\b\u0003\b\u0003\b\u0005",
    "\bQ\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0002\u0002",
    "\n\u0002\u0004\u0006\b\n\f\u000e\u0010\u0002\u0003\u0003\u0002\u0004",
    "\u0005Z\u0002\u0014\u0003\u0002\u0002\u0002\u0004\u0018\u0003\u0002",
    "\u0002\u0002\u0006\'\u0003\u0002\u0002\u0002\b+\u0003\u0002\u0002\u0002",
    "\n7\u0003\u0002\u0002\u0002\f<\u0003\u0002\u0002\u0002\u000eH\u0003",
    "\u0002\u0002\u0002\u0010R\u0003\u0002\u0002\u0002\u0012\u0015\u0005",
    "\b\u0005\u0002\u0013\u0015\u0005\u000e\b\u0002\u0014\u0012\u0003\u0002",
    "\u0002\u0002\u0014\u0013\u0003\u0002\u0002\u0002\u0015\u0016\u0003\u0002",
    "\u0002\u0002\u0016\u0017\u0007\u0002\u0002\u0003\u0017\u0003\u0003\u0002",
    "\u0002\u0002\u0018\u0019\t\u0002\u0002\u0002\u0019\u001c\u0007\u0011",
    "\u0002\u0002\u001a\u001b\u0007\u000f\u0002\u0002\u001b\u001d\u0005\u0006",
    "\u0004\u0002\u001c\u001a\u0003\u0002\u0002\u0002\u001c\u001d\u0003\u0002",
    "\u0002\u0002\u001d\u0005\u0003\u0002\u0002\u0002\u001e(\u0007\u0011",
    "\u0002\u0002\u001f$\u0007\u0011\u0002\u0002 !\u0007\u0006\u0002\u0002",
    "!#\u0007\u0011\u0002\u0002\" \u0003\u0002\u0002\u0002#&\u0003\u0002",
    "\u0002\u0002$\"\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002%(",
    "\u0003\u0002\u0002\u0002&$\u0003\u0002\u0002\u0002\'\u001e\u0003\u0002",
    "\u0002\u0002\'\u001f\u0003\u0002\u0002\u0002(\u0007\u0003\u0002\u0002",
    "\u0002)*\u0007\u0005\u0002\u0002*,\u0007\u0005\u0002\u0002+)\u0003\u0002",
    "\u0002\u0002+,\u0003\u0002\u0002\u0002,.\u0003\u0002\u0002\u0002-/\u0005",
    "\n\u0006\u0002.-\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/",
    "0\u0003\u0002\u0002\u000204\u0005\u0004\u0003\u000213\u0005\u0004\u0003",
    "\u000221\u0003\u0002\u0002\u000236\u0003\u0002\u0002\u000242\u0003\u0002",
    "\u0002\u000245\u0003\u0002\u0002\u00025\t\u0003\u0002\u0002\u000264",
    "\u0003\u0002\u0002\u000278\u0007\t\u0002\u000289\u0007\n\u0002\u0002",
    "9:\u0007\u0011\u0002\u0002:;\u0007\u000b\u0002\u0002;\u000b\u0003\u0002",
    "\u0002\u0002<=\u0007\u0007\u0002\u0002=@\u0007\u0011\u0002\u0002>?\u0007",
    "\u0006\u0002\u0002?A\u0007\u0011\u0002\u0002@>\u0003\u0002\u0002\u0002",
    "AB\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002",
    "\u0002CD\u0003\u0002\u0002\u0002DE\u0007\b\u0002\u0002E\r\u0003\u0002",
    "\u0002\u0002FG\u0007\u0005\u0002\u0002GI\u0007\u0005\u0002\u0002HF\u0003",
    "\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002IK\u0003\u0002\u0002\u0002",
    "JL\u0007\u0010\u0002\u0002KJ\u0003\u0002\u0002\u0002KL\u0003\u0002\u0002",
    "\u0002LM\u0003\u0002\u0002\u0002MN\u0005\b\u0005\u0002NP\u0007\u0003",
    "\u0002\u0002OQ\u0005\u0010\t\u0002PO\u0003\u0002\u0002\u0002PQ\u0003",
    "\u0002\u0002\u0002Q\u000f\u0003\u0002\u0002\u0002RS\u0007\r\u0002\u0002",
    "ST\u0007\u0011\u0002\u0002TU\u0007\u000e\u0002\u0002UV\u0007\u0011\u0002",
    "\u0002V\u0011\u0003\u0002\u0002\u0002\r\u0014\u001c$\'+.4BHKP"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'?'", "'.'", "'!'", "','", "'['", "']'", "'$'", 
                     "'{'", "'}'", "'^'", "'#'", "'/'", "'->'", "'%'" ];

var symbolicNames = [ null, "QUESTION", "DOT", "BANG", "COMMA", "LBRACKET", 
                      "RBRACKET", "SELECTOR", "LBRACE", "RBRACE", "RETURN", 
                      "UTILITY", "DIVIDOR", "ARROW", "PAIR", "STRING" ];

var ruleNames =  [ "eL_Program", "dotBangPair", "stringList", "eL_Declaration", 
                   "startPoint", "option", "eL_Query", "utility" ];

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
ELParser.ARROW = 13;
ELParser.PAIR = 14;
ELParser.STRING = 15;

ELParser.RULE_eL_Program = 0;
ELParser.RULE_dotBangPair = 1;
ELParser.RULE_stringList = 2;
ELParser.RULE_eL_Declaration = 3;
ELParser.RULE_startPoint = 4;
ELParser.RULE_option = 5;
ELParser.RULE_eL_Query = 6;
ELParser.RULE_utility = 7;

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
        this.state = 18;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.state = 16;
            this.eL_Declaration();
            break;

        case 2:
            this.state = 17;
            this.eL_Query();
            break;

        }
        this.state = 20;
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

function DotBangPairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ELParser.RULE_dotBangPair;
    return this;
}

DotBangPairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DotBangPairContext.prototype.constructor = DotBangPairContext;

DotBangPairContext.prototype.STRING = function() {
    return this.getToken(ELParser.STRING, 0);
};

DotBangPairContext.prototype.DOT = function() {
    return this.getToken(ELParser.DOT, 0);
};

DotBangPairContext.prototype.BANG = function() {
    return this.getToken(ELParser.BANG, 0);
};

DotBangPairContext.prototype.ARROW = function() {
    return this.getToken(ELParser.ARROW, 0);
};

DotBangPairContext.prototype.stringList = function() {
    return this.getTypedRuleContext(StringListContext,0);
};

DotBangPairContext.prototype.enterRule = function(listener) {
    if(listener instanceof ELListener ) {
        listener.enterDotBangPair(this);
	}
};

DotBangPairContext.prototype.exitRule = function(listener) {
    if(listener instanceof ELListener ) {
        listener.exitDotBangPair(this);
	}
};




ELParser.DotBangPairContext = DotBangPairContext;

ELParser.prototype.dotBangPair = function() {

    var localctx = new DotBangPairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ELParser.RULE_dotBangPair);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        _la = this._input.LA(1);
        if(!(_la===ELParser.DOT || _la===ELParser.BANG)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 23;
        this.match(ELParser.STRING);
        this.state = 26;
        _la = this._input.LA(1);
        if(_la===ELParser.ARROW) {
            this.state = 24;
            this.match(ELParser.ARROW);
            this.state = 25;
            this.stringList();
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

function StringListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ELParser.RULE_stringList;
    return this;
}

StringListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringListContext.prototype.constructor = StringListContext;

StringListContext.prototype.STRING = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ELParser.STRING);
    } else {
        return this.getToken(ELParser.STRING, i);
    }
};


StringListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ELParser.COMMA);
    } else {
        return this.getToken(ELParser.COMMA, i);
    }
};


StringListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ELListener ) {
        listener.enterStringList(this);
	}
};

StringListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ELListener ) {
        listener.exitStringList(this);
	}
};




ELParser.StringListContext = StringListContext;

ELParser.prototype.stringList = function() {

    var localctx = new StringListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ELParser.RULE_stringList);
    var _la = 0; // Token type
    try {
        this.state = 37;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 28;
            this.match(ELParser.STRING);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 29;
            this.match(ELParser.STRING);
            this.state = 34;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===ELParser.COMMA) {
                this.state = 30;
                this.match(ELParser.COMMA);
                this.state = 31;
                this.match(ELParser.STRING);
                this.state = 36;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

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

EL_DeclarationContext.prototype.dotBangPair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DotBangPairContext);
    } else {
        return this.getTypedRuleContext(DotBangPairContext,i);
    }
};

EL_DeclarationContext.prototype.BANG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ELParser.BANG);
    } else {
        return this.getToken(ELParser.BANG, i);
    }
};


EL_DeclarationContext.prototype.startPoint = function() {
    return this.getTypedRuleContext(StartPointContext,0);
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
    this.enterRule(localctx, 6, ELParser.RULE_eL_Declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        if(la_===1) {
            this.state = 39;
            this.match(ELParser.BANG);
            this.state = 40;
            this.match(ELParser.BANG);

        }
        this.state = 44;
        _la = this._input.LA(1);
        if(_la===ELParser.SELECTOR) {
            this.state = 43;
            this.startPoint();
        }

        this.state = 46;
        this.dotBangPair();
        this.state = 50;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ELParser.DOT || _la===ELParser.BANG) {
            this.state = 47;
            this.dotBangPair();
            this.state = 52;
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

function StartPointContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ELParser.RULE_startPoint;
    return this;
}

StartPointContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartPointContext.prototype.constructor = StartPointContext;

StartPointContext.prototype.SELECTOR = function() {
    return this.getToken(ELParser.SELECTOR, 0);
};

StartPointContext.prototype.LBRACE = function() {
    return this.getToken(ELParser.LBRACE, 0);
};

StartPointContext.prototype.STRING = function() {
    return this.getToken(ELParser.STRING, 0);
};

StartPointContext.prototype.RBRACE = function() {
    return this.getToken(ELParser.RBRACE, 0);
};

StartPointContext.prototype.enterRule = function(listener) {
    if(listener instanceof ELListener ) {
        listener.enterStartPoint(this);
	}
};

StartPointContext.prototype.exitRule = function(listener) {
    if(listener instanceof ELListener ) {
        listener.exitStartPoint(this);
	}
};




ELParser.StartPointContext = StartPointContext;

ELParser.prototype.startPoint = function() {

    var localctx = new StartPointContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ELParser.RULE_startPoint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.match(ELParser.SELECTOR);
        this.state = 54;
        this.match(ELParser.LBRACE);
        this.state = 55;
        this.match(ELParser.STRING);
        this.state = 56;
        this.match(ELParser.RBRACE);
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
    this.enterRule(localctx, 10, ELParser.RULE_option);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 58;
        this.match(ELParser.LBRACKET);
        this.state = 59;
        this.match(ELParser.STRING);
        this.state = 62; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 60;
            this.match(ELParser.COMMA);
            this.state = 61;
            this.match(ELParser.STRING);
            this.state = 64; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ELParser.COMMA);
        this.state = 66;
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

EL_QueryContext.prototype.BANG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ELParser.BANG);
    } else {
        return this.getToken(ELParser.BANG, i);
    }
};


EL_QueryContext.prototype.PAIR = function() {
    return this.getToken(ELParser.PAIR, 0);
};

EL_QueryContext.prototype.utility = function() {
    return this.getTypedRuleContext(UtilityContext,0);
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
    this.enterRule(localctx, 12, ELParser.RULE_eL_Query);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        if(la_===1) {
            this.state = 68;
            this.match(ELParser.BANG);
            this.state = 69;
            this.match(ELParser.BANG);

        }
        this.state = 73;
        _la = this._input.LA(1);
        if(_la===ELParser.PAIR) {
            this.state = 72;
            this.match(ELParser.PAIR);
        }

        this.state = 75;
        this.eL_Declaration();
        this.state = 76;
        this.match(ELParser.QUESTION);
        this.state = 78;
        _la = this._input.LA(1);
        if(_la===ELParser.UTILITY) {
            this.state = 77;
            this.utility();
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

function UtilityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ELParser.RULE_utility;
    return this;
}

UtilityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UtilityContext.prototype.constructor = UtilityContext;

UtilityContext.prototype.UTILITY = function() {
    return this.getToken(ELParser.UTILITY, 0);
};

UtilityContext.prototype.STRING = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ELParser.STRING);
    } else {
        return this.getToken(ELParser.STRING, i);
    }
};


UtilityContext.prototype.DIVIDOR = function() {
    return this.getToken(ELParser.DIVIDOR, 0);
};

UtilityContext.prototype.enterRule = function(listener) {
    if(listener instanceof ELListener ) {
        listener.enterUtility(this);
	}
};

UtilityContext.prototype.exitRule = function(listener) {
    if(listener instanceof ELListener ) {
        listener.exitUtility(this);
	}
};




ELParser.UtilityContext = UtilityContext;

ELParser.prototype.utility = function() {

    var localctx = new UtilityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ELParser.RULE_utility);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
        this.match(ELParser.UTILITY);
        this.state = 81;
        this.match(ELParser.STRING);
        this.state = 82;
        this.match(ELParser.DIVIDOR);
        this.state = 83;
        this.match(ELParser.STRING);
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
