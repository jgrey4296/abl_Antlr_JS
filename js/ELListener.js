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

// Enter a parse tree produced by ELParser#option.
ELListener.prototype.enterOption = function(ctx) {
};

// Exit a parse tree produced by ELParser#option.
ELListener.prototype.exitOption = function(ctx) {
};



exports.ELListener = ELListener;