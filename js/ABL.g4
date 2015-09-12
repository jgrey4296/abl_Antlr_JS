
grammar ABL;

import AblTokens;

//top level of the parser
prog : g_package? g_import* constants behavingEntity EOF;

//g_ = grammar. As antlr will complain of conflicting keywords with target language
g_package : 'package' name ';';
g_import : 'import' name STAR?';'; //todo .*?
constants : ('constants' TYPE ';')*;

teamNeeded
    : JOINTNEG (TEAMNEEDED | ONENEEDED)';';


conflictDecl : 'conflict' (name) (name)+ ';';

//WME Registration:
wmeRegistration : 'register' 'wme' TYPE 'with' TYPE ';';
wmeRegistration_plural : (wmeRegistration)+;

//Literal:
ablLiteral : INT | FLOAT | string | BOOL | NULL;


//Generic parameters rule
params : '(' param? (',' param)* ')';
param : TYPE ablExpression?
    | TYPE? ablExpression;

javaMethod : BANG? name params;
ablExpression : name | ablLiteral | javaMethod | conditionalExpression;


//Action Registration:
actionRegistration : 'register' 'action' name params 'with' TYPE';';

//Variable Declaration:
ablVariableDeclaration : ablVariableDeclarations
    | ablVariableAssignment
    | ablVariableLiteralAssignment;

ablVariableDeclarations : name name (',' name)* ';';
ablVariableLiteralAssignment  : name name '=' ablLiteral';';
ablVariableAssignment : name name '=' 'new' classConstruction';';

classConstruction : name (internalConstruction | arrayConstruction);
internalConstruction : '(' name ('('')')?')';
arrayConstruction : '{' string (',' string)* '}';


//WME Declaration:
wmeDeclaration : 'wme' TYPE ('extends' TYPE)? '{' ablVariableDeclaration* '}';

//Property Declaration:
propertyDeclaration : 'property' TYPE name ';';


//WME Field Test:
operator : BIND | GT | GE | LT | LE | EQ | NE | PLUS | MINUS | DIV | MOD | POW;
wmeFieldTest : name operator ablExpression;

//WME TEST:
//bang and name switched for sense reasons
//why isn't this the same binding operator!
//TODO: on v2 change '=' to '::'
wmeTest : (name ('=' | '::'))? BANG? '(' TYPE wmeFieldTest* ')';

binaryOp :  ablExpression (operator ablExpression)?;
clause : binaryOp;
mixedCall : clause (( AND | OR) clause)*;

conditionalExpression : '(' mixedCall ')';

//the identifier from the grammar has been skipped,
//as it looks like an error, only wme tests can assign result
wmeTestSequence : '{' (wmeTest | conditionalExpression)+ '}';

//The identifier of TestExpression from the grammar is
//currently ignored for the same reason as above
testExpression : wmeTestSequence;

//braces ignored from grammar as above
precondition : 'precondition' testExpression;
contextCondition : 'context_condition' testExpression;
entryCondition : 'entry_condition' testExpression;
successCondition : 'success_condition' testExpression;
successTest : 'success_test' testExpression;

//Number Needed for success:
numberNeededForSuccess : 'number_needed_for_success' ablLiteral ';';

//TeamMemberSpecifier:
teamMemberSpecifier : 'teammembers' name+;

//specificity
specificity : 'specificity' ablLiteral ';';

//behaviourModifier
//skipping reinforcement signals and state for the moment
behaviourModifier : precondition | specificity | contextCondition | entryCondition | numberNeededForSuccess | teamMemberSpecifier | successCondition;



//Priority modifier:
priorityModifier : ('priority' | 'priority_modifier') ablLiteral;

//Persistence:
persistence : 'persistent' (WHEN_FAILS | WHEN_SUCCEEDS)?;


//Named Property:
namedProperty : 'property' name ablExpression;

//Step Modifier:
stepModifier : IGNORE_FAILURE
    | EFFECT_ONLY
    | TEAM_EFFECT_ONLY
    | POST
    | POST_TO name
    | TEAMNEEDED
    | ONENEEDED
    | priorityModifier
    | persistence
    | namedProperty
    | successTest;

//Basic step, integrating fail,succeed, and wait
basicStep : (FAIL | SUCCEED | WAIT) ';';

//Now On to modifiable Steps:
primitiveAct : 'act' name params ';';

//Goal Step:
goalStep : JOINT? (SUBGOAL | SPAWNGOAL) name params? ('at' name)?';';

//Modify step skipped as no examples

//Mental Act would go here:
mentalAct : 'mental_act' '{' '}';

//Behaviour Step:
behaviourStep : ('with' '(' stepModifier (',' stepModifier)* ')')? (goalStep | primitiveAct | basicStep | mentalAct);

//TODO:Anonymous block

//Behaviour Definition:
behaviourDefinition : (JOINT | ATOMIC | ADAPTIVE)* (SEQ | PAR | COLL) BEH name params '{' (behaviourModifier | ablVariableDeclaration | behaviourStep)*; 


//Initial Tree!!
initialTree : 'initial_tree' '{' behaviourStep* '}';

//Decision cycle:
decisionCycleSMCallDeclaration : 'decision_cycle_sm_call' name';';

ablDeclaration : wmeRegistration
    | actionRegistration
    | wmeDeclaration
    | propertyDeclaration
    | ablVariableDeclaration;

//Behaving Entity
behavingEntity : 'behaving_entity' TYPE '{' teamNeeded? decisionCycleSMCallDeclaration? conflictDecl* ablDeclaration* behaviourDefinition*  initialTree '}';


//NAME
name : CHARS | TYPE;
nameList : name (',' name)*;


//STRING HACK:
string : STRING;


