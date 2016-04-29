// Generated from EL.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('./lib/antlr4_runtime/index');

// This class defines a complete listener for a parse tree produced by ELParser.
function ELListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ELListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ELListener.prototype.constructor = ELListener;

// Enter a parse tree produced by ELParser#eL_Program.
ELListener.prototype.enterEL_Program = function(ctx) {
};

// Exit a parse tree produced by ELParser#eL_Program.
ELListener.prototype.exitEL_Program = function(ctx) {
};


// Enter a parse tree produced by ELParser#dotBangPair.
ELListener.prototype.enterDotBangPair = function(ctx) {
};

// Exit a parse tree produced by ELParser#dotBangPair.
ELListener.prototype.exitDotBangPair = function(ctx) {
};


// Enter a parse tree produced by ELParser#stringList.
ELListener.prototype.enterStringList = function(ctx) {
};

// Exit a parse tree produced by ELParser#stringList.
ELListener.prototype.exitStringList = function(ctx) {
};


// Enter a parse tree produced by ELParser#eL_Declaration.
ELListener.prototype.enterEL_Declaration = function(ctx) {
};

// Exit a parse tree produced by ELParser#eL_Declaration.
ELListener.prototype.exitEL_Declaration = function(ctx) {
};


// Enter a parse tree produced by ELParser#startPoint.
ELListener.prototype.enterStartPoint = function(ctx) {
};

// Exit a parse tree produced by ELParser#startPoint.
ELListener.prototype.exitStartPoint = function(ctx) {
};


// Enter a parse tree produced by ELParser#option.
ELListener.prototype.enterOption = function(ctx) {
};

// Exit a parse tree produced by ELParser#option.
ELListener.prototype.exitOption = function(ctx) {
};


// Enter a parse tree produced by ELParser#eL_Query.
ELListener.prototype.enterEL_Query = function(ctx) {
};

// Exit a parse tree produced by ELParser#eL_Query.
ELListener.prototype.exitEL_Query = function(ctx) {
};


// Enter a parse tree produced by ELParser#utility.
ELListener.prototype.enterUtility = function(ctx) {
};

// Exit a parse tree produced by ELParser#utility.
ELListener.prototype.exitUtility = function(ctx) {
};



exports.ELListener = ELListener;