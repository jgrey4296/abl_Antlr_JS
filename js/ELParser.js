// Generated from EL.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('./lib/antlr4_runtime/index');
var ELListener = require('./ELListener').ELListener;
var grammarFileName = "EL.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0012b\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0003",
    "\u0002\u0003\u0002\u0005\u0002\u001b\n\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0005\u0003 \n\u0003\u0003\u0003\u0005\u0003#\n\u0003\u0003",
    "\u0003\u0003\u0003\u0007\u0003\'\n\u0003\f\u0003\u000e\u0003*\u000b",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u00053\n\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007?\n\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0007\bE\n\b\f\b\u000e\bH\u000b\b\u0005\bJ\n\b\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\n\u0005\nQ\n\n\u0003\n\u0005\nT\n\n\u0003\n\u0003\n",
    "\u0003\n\u0005\nY\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0002\u0002\r\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0002\u0004\u0003\u0002\u0004\u0005",
    "\u0003\u0002\u0011\u0012b\u0002\u001a\u0003\u0002\u0002\u0002\u0004",
    "\u001f\u0003\u0002\u0002\u0002\u0006+\u0003\u0002\u0002\u0002\b.\u0003",
    "\u0002\u0002\u0002\n4\u0003\u0002\u0002\u0002\f>\u0003\u0002\u0002\u0002",
    "\u000eI\u0003\u0002\u0002\u0002\u0010K\u0003\u0002\u0002\u0002\u0012",
    "P\u0003\u0002\u0002\u0002\u0014Z\u0003\u0002\u0002\u0002\u0016_\u0003",
    "\u0002\u0002\u0002\u0018\u001b\u0005\u0004\u0003\u0002\u0019\u001b\u0005",
    "\u0012\n\u0002\u001a\u0018\u0003\u0002\u0002\u0002\u001a\u0019\u0003",
    "\u0002\u0002\u0002\u001b\u001c\u0003\u0002\u0002\u0002\u001c\u001d\u0007",
    "\u0002\u0002\u0003\u001d\u0003\u0003\u0002\u0002\u0002\u001e \u0005",
    "\u0006\u0004\u0002\u001f\u001e\u0003\u0002\u0002\u0002\u001f \u0003",
    "\u0002\u0002\u0002 \"\u0003\u0002\u0002\u0002!#\u0005\n\u0006\u0002",
    "\"!\u0003\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002#$\u0003\u0002",
    "\u0002\u0002$(\u0005\b\u0005\u0002%\'\u0005\b\u0005\u0002&%\u0003\u0002",
    "\u0002\u0002\'*\u0003\u0002\u0002\u0002(&\u0003\u0002\u0002\u0002()",
    "\u0003\u0002\u0002\u0002)\u0005\u0003\u0002\u0002\u0002*(\u0003\u0002",
    "\u0002\u0002+,\u0007\u0005\u0002\u0002,-\u0007\u0005\u0002\u0002-\u0007",
    "\u0003\u0002\u0002\u0002./\t\u0002\u0002\u0002/2\u0005\f\u0007\u0002",
    "01\u0007\u000f\u0002\u000213\u0005\u000e\b\u000220\u0003\u0002\u0002",
    "\u000223\u0003\u0002\u0002\u00023\t\u0003\u0002\u0002\u000245\u0007",
    "\t\u0002\u000256\u0007\n\u0002\u000267\u0005\u000e\b\u000278\u0007\u000b",
    "\u0002\u00028\u000b\u0003\u0002\u0002\u00029:\u0007\u0007\u0002\u0002",
    ":;\u0007\u0012\u0002\u0002;?\u0007\b\u0002\u0002<?\u0005\n\u0006\u0002",
    "=?\u0007\u0011\u0002\u0002>9\u0003\u0002\u0002\u0002><\u0003\u0002\u0002",
    "\u0002>=\u0003\u0002\u0002\u0002?\r\u0003\u0002\u0002\u0002@J\u0007",
    "\u0011\u0002\u0002AF\u0007\u0011\u0002\u0002BC\u0007\u0006\u0002\u0002",
    "CE\u0007\u0011\u0002\u0002DB\u0003\u0002\u0002\u0002EH\u0003\u0002\u0002",
    "\u0002FD\u0003\u0002\u0002\u0002FG\u0003\u0002\u0002\u0002GJ\u0003\u0002",
    "\u0002\u0002HF\u0003\u0002\u0002\u0002I@\u0003\u0002\u0002\u0002IA\u0003",
    "\u0002\u0002\u0002J\u000f\u0003\u0002\u0002\u0002KL\u0007\u0007\u0002",
    "\u0002LM\u0005\u000e\b\u0002MN\u0007\b\u0002\u0002N\u0011\u0003\u0002",
    "\u0002\u0002OQ\u0005\u0006\u0004\u0002PO\u0003\u0002\u0002\u0002PQ\u0003",
    "\u0002\u0002\u0002QS\u0003\u0002\u0002\u0002RT\u0007\u0010\u0002\u0002",
    "SR\u0003\u0002\u0002\u0002ST\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002",
    "\u0002UV\u0005\u0004\u0003\u0002VX\u0007\u0003\u0002\u0002WY\u0005\u0014",
    "\u000b\u0002XW\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002Y\u0013",
    "\u0003\u0002\u0002\u0002Z[\u0007\r\u0002\u0002[\\\u0005\u0016\f\u0002",
    "\\]\u0007\u000e\u0002\u0002]^\u0005\u0016\f\u0002^\u0015\u0003\u0002",
    "\u0002\u0002_`\t\u0003\u0002\u0002`\u0017\u0003\u0002\u0002\u0002\r",
    "\u001a\u001f\"(2>FIPSX"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'?'", "'.'", "'!'", "','", "'['", "']'", "'$'", 
                     "'{'", "'}'", "'^'", "'#'", "'/'", "'->'", "'%'" ];

var symbolicNames = [ null, "QUESTION", "DOT", "BANG", "COMMA", "LBRACKET", 
                      "RBRACKET", "SELECTOR", "LBRACE", "RBRACE", "RETURN", 
                      "UTILITY", "DIVIDOR", "ARROW", "PAIR", "STRING", "NUMBER" ];

var ruleNames =  [ "eL_Program", "eL_Declaration", "negation", "dotBangPair", 
                   "selector", "selection", "stringList", "option", "eL_Query", 
                   "utility", "stringOrNum" ];

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
ELParser.NUMBER = 16;

ELParser.RULE_eL_Program = 0;
ELParser.RULE_eL_Declaration = 1;
ELParser.RULE_negation = 2;
ELParser.RULE_dotBangPair = 3;
ELParser.RULE_selector = 4;
ELParser.RULE_selection = 5;
ELParser.RULE_stringList = 6;
ELParser.RULE_option = 7;
ELParser.RULE_eL_Query = 8;
ELParser.RULE_utility = 9;
ELParser.RULE_stringOrNum = 10;

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
        this.state = 24;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            this.state = 22;
            this.eL_Declaration();
            break;

        case 2:
            this.state = 23;
            this.eL_Query();
            break;

        }
        this.state = 26;
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

EL_DeclarationContext.prototype.negation = function() {
    return this.getTypedRuleContext(NegationContext,0);
};

EL_DeclarationContext.prototype.selector = function() {
    return this.getTypedRuleContext(SelectorContext,0);
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
    this.enterRule(localctx, 2, ELParser.RULE_eL_Declaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 29;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        if(la_===1) {
            this.state = 28;
            this.negation();

        }
        this.state = 32;
        _la = this._input.LA(1);
        if(_la===ELParser.SELECTOR) {
            this.state = 31;
            this.selector();
        }

        this.state = 34;
        this.dotBangPair();
        this.state = 38;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ELParser.DOT || _la===ELParser.BANG) {
            this.state = 35;
            this.dotBangPair();
            this.state = 40;
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

function NegationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ELParser.RULE_negation;
    return this;
}

NegationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NegationContext.prototype.constructor = NegationContext;

NegationContext.prototype.BANG = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ELParser.BANG);
    } else {
        return this.getToken(ELParser.BANG, i);
    }
};


NegationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ELListener ) {
        listener.enterNegation(this);
	}
};

NegationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ELListener ) {
        listener.exitNegation(this);
	}
};




ELParser.NegationContext = NegationContext;

ELParser.prototype.negation = function() {

    var localctx = new NegationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ELParser.RULE_negation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41;
        this.match(ELParser.BANG);
        this.state = 42;
        this.match(ELParser.BANG);
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

DotBangPairContext.prototype.selection = function() {
    return this.getTypedRuleContext(SelectionContext,0);
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
    this.enterRule(localctx, 6, ELParser.RULE_dotBangPair);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        _la = this._input.LA(1);
        if(!(_la===ELParser.DOT || _la===ELParser.BANG)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 45;
        this.selection();
        this.state = 48;
        _la = this._input.LA(1);
        if(_la===ELParser.ARROW) {
            this.state = 46;
            this.match(ELParser.ARROW);
            this.state = 47;
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

function SelectorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ELParser.RULE_selector;
    return this;
}

SelectorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectorContext.prototype.constructor = SelectorContext;

SelectorContext.prototype.SELECTOR = function() {
    return this.getToken(ELParser.SELECTOR, 0);
};

SelectorContext.prototype.LBRACE = function() {
    return this.getToken(ELParser.LBRACE, 0);
};

SelectorContext.prototype.stringList = function() {
    return this.getTypedRuleContext(StringListContext,0);
};

SelectorContext.prototype.RBRACE = function() {
    return this.getToken(ELParser.RBRACE, 0);
};

SelectorContext.prototype.enterRule = function(listener) {
    if(listener instanceof ELListener ) {
        listener.enterSelector(this);
	}
};

SelectorContext.prototype.exitRule = function(listener) {
    if(listener instanceof ELListener ) {
        listener.exitSelector(this);
	}
};




ELParser.SelectorContext = SelectorContext;

ELParser.prototype.selector = function() {

    var localctx = new SelectorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ELParser.RULE_selector);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this.match(ELParser.SELECTOR);
        this.state = 51;
        this.match(ELParser.LBRACE);
        this.state = 52;
        this.stringList();
        this.state = 53;
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

function SelectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ELParser.RULE_selection;
    return this;
}

SelectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectionContext.prototype.constructor = SelectionContext;

SelectionContext.prototype.LBRACKET = function() {
    return this.getToken(ELParser.LBRACKET, 0);
};

SelectionContext.prototype.NUMBER = function() {
    return this.getToken(ELParser.NUMBER, 0);
};

SelectionContext.prototype.RBRACKET = function() {
    return this.getToken(ELParser.RBRACKET, 0);
};

SelectionContext.prototype.selector = function() {
    return this.getTypedRuleContext(SelectorContext,0);
};

SelectionContext.prototype.STRING = function() {
    return this.getToken(ELParser.STRING, 0);
};

SelectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ELListener ) {
        listener.enterSelection(this);
	}
};

SelectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ELListener ) {
        listener.exitSelection(this);
	}
};




ELParser.SelectionContext = SelectionContext;

ELParser.prototype.selection = function() {

    var localctx = new SelectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ELParser.RULE_selection);
    try {
        this.state = 60;
        switch(this._input.LA(1)) {
        case ELParser.LBRACKET:
            this.enterOuterAlt(localctx, 1);
            this.state = 55;
            this.match(ELParser.LBRACKET);
            this.state = 56;
            this.match(ELParser.NUMBER);
            this.state = 57;
            this.match(ELParser.RBRACKET);
            break;
        case ELParser.SELECTOR:
            this.enterOuterAlt(localctx, 2);
            this.state = 58;
            this.selector();
            break;
        case ELParser.STRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 59;
            this.match(ELParser.STRING);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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
    this.enterRule(localctx, 12, ELParser.RULE_stringList);
    var _la = 0; // Token type
    try {
        this.state = 71;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 62;
            this.match(ELParser.STRING);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 63;
            this.match(ELParser.STRING);
            this.state = 68;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===ELParser.COMMA) {
                this.state = 64;
                this.match(ELParser.COMMA);
                this.state = 65;
                this.match(ELParser.STRING);
                this.state = 70;
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

OptionContext.prototype.stringList = function() {
    return this.getTypedRuleContext(StringListContext,0);
};

OptionContext.prototype.RBRACKET = function() {
    return this.getToken(ELParser.RBRACKET, 0);
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
    this.enterRule(localctx, 14, ELParser.RULE_option);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 73;
        this.match(ELParser.LBRACKET);
        this.state = 74;
        this.stringList();
        this.state = 75;
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

EL_QueryContext.prototype.negation = function() {
    return this.getTypedRuleContext(NegationContext,0);
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
    this.enterRule(localctx, 16, ELParser.RULE_eL_Query);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        if(la_===1) {
            this.state = 77;
            this.negation();

        }
        this.state = 81;
        _la = this._input.LA(1);
        if(_la===ELParser.PAIR) {
            this.state = 80;
            this.match(ELParser.PAIR);
        }

        this.state = 83;
        this.eL_Declaration();
        this.state = 84;
        this.match(ELParser.QUESTION);
        this.state = 86;
        _la = this._input.LA(1);
        if(_la===ELParser.UTILITY) {
            this.state = 85;
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

UtilityContext.prototype.stringOrNum = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StringOrNumContext);
    } else {
        return this.getTypedRuleContext(StringOrNumContext,i);
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
    this.enterRule(localctx, 18, ELParser.RULE_utility);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 88;
        this.match(ELParser.UTILITY);
        this.state = 89;
        this.stringOrNum();
        this.state = 90;
        this.match(ELParser.DIVIDOR);
        this.state = 91;
        this.stringOrNum();
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

function StringOrNumContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ELParser.RULE_stringOrNum;
    return this;
}

StringOrNumContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringOrNumContext.prototype.constructor = StringOrNumContext;

StringOrNumContext.prototype.STRING = function() {
    return this.getToken(ELParser.STRING, 0);
};

StringOrNumContext.prototype.NUMBER = function() {
    return this.getToken(ELParser.NUMBER, 0);
};

StringOrNumContext.prototype.enterRule = function(listener) {
    if(listener instanceof ELListener ) {
        listener.enterStringOrNum(this);
	}
};

StringOrNumContext.prototype.exitRule = function(listener) {
    if(listener instanceof ELListener ) {
        listener.exitStringOrNum(this);
	}
};




ELParser.StringOrNumContext = StringOrNumContext;

ELParser.prototype.stringOrNum = function() {

    var localctx = new StringOrNumContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ELParser.RULE_stringOrNum);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        _la = this._input.LA(1);
        if(!(_la===ELParser.STRING || _la===ELParser.NUMBER)) {
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


exports.ELParser = ELParser;
