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


// Enter a parse tree produced by ABLParser#decisionCycle.
ABLListener.prototype.enterDecisionCycle = function(ctx) {
};

// Exit a parse tree produced by ABLParser#decisionCycle.
ABLListener.prototype.exitDecisionCycle = function(ctx) {
};


// Enter a parse tree produced by ABLParser#conflictDecl.
ABLListener.prototype.enterConflictDecl = function(ctx) {
};

// Exit a parse tree produced by ABLParser#conflictDecl.
ABLListener.prototype.exitConflictDecl = function(ctx) {
};


// Enter a parse tree produced by ABLParser#behavingEntity.
ABLListener.prototype.enterBehavingEntity = function(ctx) {
};

// Exit a parse tree produced by ABLParser#behavingEntity.
ABLListener.prototype.exitBehavingEntity = function(ctx) {
};


// Enter a parse tree produced by ABLParser#initialTree.
ABLListener.prototype.enterInitialTree = function(ctx) {
};

// Exit a parse tree produced by ABLParser#initialTree.
ABLListener.prototype.exitInitialTree = function(ctx) {
};


// Enter a parse tree produced by ABLParser#behaviour.
ABLListener.prototype.enterBehaviour = function(ctx) {
};

// Exit a parse tree produced by ABLParser#behaviour.
ABLListener.prototype.exitBehaviour = function(ctx) {
};


// Enter a parse tree produced by ABLParser#ruleGroup.
ABLListener.prototype.enterRuleGroup = function(ctx) {
};

// Exit a parse tree produced by ABLParser#ruleGroup.
ABLListener.prototype.exitRuleGroup = function(ctx) {
};


// Enter a parse tree produced by ABLParser#g_rule.
ABLListener.prototype.enterG_rule = function(ctx) {
};

// Exit a parse tree produced by ABLParser#g_rule.
ABLListener.prototype.exitG_rule = function(ctx) {
};


// Enter a parse tree produced by ABLParser#r_assert.
ABLListener.prototype.enterR_assert = function(ctx) {
};

// Exit a parse tree produced by ABLParser#r_assert.
ABLListener.prototype.exitR_assert = function(ctx) {
};


// Enter a parse tree produced by ABLParser#mentalActAssert.
ABLListener.prototype.enterMentalActAssert = function(ctx) {
};

// Exit a parse tree produced by ABLParser#mentalActAssert.
ABLListener.prototype.exitMentalActAssert = function(ctx) {
};


// Enter a parse tree produced by ABLParser#wmeAssert.
ABLListener.prototype.enterWmeAssert = function(ctx) {
};

// Exit a parse tree produced by ABLParser#wmeAssert.
ABLListener.prototype.exitWmeAssert = function(ctx) {
};


// Enter a parse tree produced by ABLParser#wmeAssertFrag.
ABLListener.prototype.enterWmeAssertFrag = function(ctx) {
};

// Exit a parse tree produced by ABLParser#wmeAssertFrag.
ABLListener.prototype.exitWmeAssertFrag = function(ctx) {
};


// Enter a parse tree produced by ABLParser#assignedWMEAssert.
ABLListener.prototype.enterAssignedWMEAssert = function(ctx) {
};

// Exit a parse tree produced by ABLParser#assignedWMEAssert.
ABLListener.prototype.exitAssignedWMEAssert = function(ctx) {
};


// Enter a parse tree produced by ABLParser#behaviorStep.
ABLListener.prototype.enterBehaviorStep = function(ctx) {
};

// Exit a parse tree produced by ABLParser#behaviorStep.
ABLListener.prototype.exitBehaviorStep = function(ctx) {
};


// Enter a parse tree produced by ABLParser#actStep.
ABLListener.prototype.enterActStep = function(ctx) {
};

// Exit a parse tree produced by ABLParser#actStep.
ABLListener.prototype.exitActStep = function(ctx) {
};


// Enter a parse tree produced by ABLParser#goalStep.
ABLListener.prototype.enterGoalStep = function(ctx) {
};

// Exit a parse tree produced by ABLParser#goalStep.
ABLListener.prototype.exitGoalStep = function(ctx) {
};


// Enter a parse tree produced by ABLParser#execParallelStep.
ABLListener.prototype.enterExecParallelStep = function(ctx) {
};

// Exit a parse tree produced by ABLParser#execParallelStep.
ABLListener.prototype.exitExecParallelStep = function(ctx) {
};


// Enter a parse tree produced by ABLParser#conditionalStep.
ABLListener.prototype.enterConditionalStep = function(ctx) {
};

// Exit a parse tree produced by ABLParser#conditionalStep.
ABLListener.prototype.exitConditionalStep = function(ctx) {
};


// Enter a parse tree produced by ABLParser#modifyStep.
ABLListener.prototype.enterModifyStep = function(ctx) {
};

// Exit a parse tree produced by ABLParser#modifyStep.
ABLListener.prototype.exitModifyStep = function(ctx) {
};


// Enter a parse tree produced by ABLParser#anonStep.
ABLListener.prototype.enterAnonStep = function(ctx) {
};

// Exit a parse tree produced by ABLParser#anonStep.
ABLListener.prototype.exitAnonStep = function(ctx) {
};


// Enter a parse tree produced by ABLParser#ruleStep.
ABLListener.prototype.enterRuleStep = function(ctx) {
};

// Exit a parse tree produced by ABLParser#ruleStep.
ABLListener.prototype.exitRuleStep = function(ctx) {
};


// Enter a parse tree produced by ABLParser#chooseStep.
ABLListener.prototype.enterChooseStep = function(ctx) {
};

// Exit a parse tree produced by ABLParser#chooseStep.
ABLListener.prototype.exitChooseStep = function(ctx) {
};


// Enter a parse tree produced by ABLParser#varDec.
ABLListener.prototype.enterVarDec = function(ctx) {
};

// Exit a parse tree produced by ABLParser#varDec.
ABLListener.prototype.exitVarDec = function(ctx) {
};


// Enter a parse tree produced by ABLParser#initializer.
ABLListener.prototype.enterInitializer = function(ctx) {
};

// Exit a parse tree produced by ABLParser#initializer.
ABLListener.prototype.exitInitializer = function(ctx) {
};


// Enter a parse tree produced by ABLParser#wmeReg.
ABLListener.prototype.enterWmeReg = function(ctx) {
};

// Exit a parse tree produced by ABLParser#wmeReg.
ABLListener.prototype.exitWmeReg = function(ctx) {
};


// Enter a parse tree produced by ABLParser#actionReg.
ABLListener.prototype.enterActionReg = function(ctx) {
};

// Exit a parse tree produced by ABLParser#actionReg.
ABLListener.prototype.exitActionReg = function(ctx) {
};


// Enter a parse tree produced by ABLParser#wmeDec.
ABLListener.prototype.enterWmeDec = function(ctx) {
};

// Exit a parse tree produced by ABLParser#wmeDec.
ABLListener.prototype.exitWmeDec = function(ctx) {
};


// Enter a parse tree produced by ABLParser#propertyDec.
ABLListener.prototype.enterPropertyDec = function(ctx) {
};

// Exit a parse tree produced by ABLParser#propertyDec.
ABLListener.prototype.exitPropertyDec = function(ctx) {
};


// Enter a parse tree produced by ABLParser#mentalAct.
ABLListener.prototype.enterMentalAct = function(ctx) {
};

// Exit a parse tree produced by ABLParser#mentalAct.
ABLListener.prototype.exitMentalAct = function(ctx) {
};


// Enter a parse tree produced by ABLParser#stateReturn.
ABLListener.prototype.enterStateReturn = function(ctx) {
};

// Exit a parse tree produced by ABLParser#stateReturn.
ABLListener.prototype.exitStateReturn = function(ctx) {
};


// Enter a parse tree produced by ABLParser#g_with.
ABLListener.prototype.enterG_with = function(ctx) {
};

// Exit a parse tree produced by ABLParser#g_with.
ABLListener.prototype.exitG_with = function(ctx) {
};


// Enter a parse tree produced by ABLParser#subgoal.
ABLListener.prototype.enterSubgoal = function(ctx) {
};

// Exit a parse tree produced by ABLParser#subgoal.
ABLListener.prototype.exitSubgoal = function(ctx) {
};


// Enter a parse tree produced by ABLParser#params.
ABLListener.prototype.enterParams = function(ctx) {
};

// Exit a parse tree produced by ABLParser#params.
ABLListener.prototype.exitParams = function(ctx) {
};


// Enter a parse tree produced by ABLParser#param.
ABLListener.prototype.enterParam = function(ctx) {
};

// Exit a parse tree produced by ABLParser#param.
ABLListener.prototype.exitParam = function(ctx) {
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


// Enter a parse tree produced by ABLParser#behavior_modifiers.
ABLListener.prototype.enterBehavior_modifiers = function(ctx) {
};

// Exit a parse tree produced by ABLParser#behavior_modifiers.
ABLListener.prototype.exitBehavior_modifiers = function(ctx) {
};


// Enter a parse tree produced by ABLParser#stepMod.
ABLListener.prototype.enterStepMod = function(ctx) {
};

// Exit a parse tree produced by ABLParser#stepMod.
ABLListener.prototype.exitStepMod = function(ctx) {
};


// Enter a parse tree produced by ABLParser#ruleMod.
ABLListener.prototype.enterRuleMod = function(ctx) {
};

// Exit a parse tree produced by ABLParser#ruleMod.
ABLListener.prototype.exitRuleMod = function(ctx) {
};


// Enter a parse tree produced by ABLParser#test.
ABLListener.prototype.enterTest = function(ctx) {
};

// Exit a parse tree produced by ABLParser#test.
ABLListener.prototype.exitTest = function(ctx) {
};


// Enter a parse tree produced by ABLParser#wme_test_sequence.
ABLListener.prototype.enterWme_test_sequence = function(ctx) {
};

// Exit a parse tree produced by ABLParser#wme_test_sequence.
ABLListener.prototype.exitWme_test_sequence = function(ctx) {
};


// Enter a parse tree produced by ABLParser#wme_test.
ABLListener.prototype.enterWme_test = function(ctx) {
};

// Exit a parse tree produced by ABLParser#wme_test.
ABLListener.prototype.exitWme_test = function(ctx) {
};


// Enter a parse tree produced by ABLParser#wme_field_test.
ABLListener.prototype.enterWme_field_test = function(ctx) {
};

// Exit a parse tree produced by ABLParser#wme_field_test.
ABLListener.prototype.exitWme_field_test = function(ctx) {
};


// Enter a parse tree produced by ABLParser#conditional.
ABLListener.prototype.enterConditional = function(ctx) {
};

// Exit a parse tree produced by ABLParser#conditional.
ABLListener.prototype.exitConditional = function(ctx) {
};



exports.ABLListener = ABLListener;