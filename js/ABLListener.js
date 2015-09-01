// Generated from ABL.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('./lib/antlr4/index');

// This class defines a complete listener for a parse tree produced by ABLParser.
function ABLListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ABLListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ABLListener.prototype.constructor = ABLListener;

// Enter a parse tree produced by ABLParser#prog.
ABLListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by ABLParser#prog.
ABLListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by ABLParser#g_package.
ABLListener.prototype.enterG_package = function(ctx) {
};

// Exit a parse tree produced by ABLParser#g_package.
ABLListener.prototype.exitG_package = function(ctx) {
};


// Enter a parse tree produced by ABLParser#g_import.
ABLListener.prototype.enterG_import = function(ctx) {
};

// Exit a parse tree produced by ABLParser#g_import.
ABLListener.prototype.exitG_import = function(ctx) {
};


// Enter a parse tree produced by ABLParser#constants.
ABLListener.prototype.enterConstants = function(ctx) {
};

// Exit a parse tree produced by ABLParser#constants.
ABLListener.prototype.exitConstants = function(ctx) {
};


// Enter a parse tree produced by ABLParser#teamNeeded.
ABLListener.prototype.enterTeamNeeded = function(ctx) {
};

// Exit a parse tree produced by ABLParser#teamNeeded.
ABLListener.prototype.exitTeamNeeded = function(ctx) {
};


// Enter a parse tree produced by ABLParser#conflictDecl.
ABLListener.prototype.enterConflictDecl = function(ctx) {
};

// Exit a parse tree produced by ABLParser#conflictDecl.
ABLListener.prototype.exitConflictDecl = function(ctx) {
};


// Enter a parse tree produced by ABLParser#wmeRegistration.
ABLListener.prototype.enterWmeRegistration = function(ctx) {
};

// Exit a parse tree produced by ABLParser#wmeRegistration.
ABLListener.prototype.exitWmeRegistration = function(ctx) {
};


// Enter a parse tree produced by ABLParser#wmeRegistration_plural.
ABLListener.prototype.enterWmeRegistration_plural = function(ctx) {
};

// Exit a parse tree produced by ABLParser#wmeRegistration_plural.
ABLListener.prototype.exitWmeRegistration_plural = function(ctx) {
};


// Enter a parse tree produced by ABLParser#name.
ABLListener.prototype.enterName = function(ctx) {
};

// Exit a parse tree produced by ABLParser#name.
ABLListener.prototype.exitName = function(ctx) {
};


// Enter a parse tree produced by ABLParser#nameList.
ABLListener.prototype.enterNameList = function(ctx) {
};

// Exit a parse tree produced by ABLParser#nameList.
ABLListener.prototype.exitNameList = function(ctx) {
};


// Enter a parse tree produced by ABLParser#string.
ABLListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by ABLParser#string.
ABLListener.prototype.exitString = function(ctx) {
};



exports.ABLListener = ABLListener;