grammar ABL;

import AblTokens;

//top level of the parser
prog : g_package? g_import* EOF;

//g_ = grammar. As antlr will complain of conflicting keywords with target language
g_package : 'package' TYPE ';';
g_import : 'import' TYPE STAR?';'; //todo .*?
constants : ('constants' TYPE ';')*;

teamNeeded
    : JOINTNEG (TEAMNEEDED | ONENEEDED)';';


conflictDecl : 'conflict' name (name)+ ';';

//WME Registration:
wmeRegistration : 'register' 'wme' TYPE 'with' TYPE ';';
wmeRegistration_plural : (wmeRegistration)+;

//Generic parameters rule
params : '(' param? (',' param)* ')';
param : TYPE name?
    | TYPE? name;

//Action Registration:
actionRegistration : 'register' 'action' TYPE params 'with' TYPE';';

//Variable Declaration:
ablVariableDeclaration : TYPE name (',' name)* ';';

//WME Declaration:
wmeDeclaration : 'wme' TYPE ('extends' TYPE)? '{' ablVariableDeclaration* '}';

//Property Declaration:
propertyDeclaration : 'property' TYPE name ';';

//Literal:
ablLiteral : INT | FLOAT | string | BOOL | NULL;

ablExpression : name | ablLiteral;

//WME Field Test:
operator : BIND | GT | GE | LT | LE | EQ | NE;
wmeFieldTest : name operator ablExpression;

//WME TEST:
//bang and name switched for sense reasons
//why isn't this the same binding operator!
//TODO: on v2 change '=' to '::'
wmeTest : (name '=')? BANG? '(' TYPE wmeFieldTest* ')';

binaryOp : BANG? ablExpression (operator ablExpression)?;
javaMethod : BANG? name params;
clause : BOOL | name | javaMethod | binaryOp;
booleanHelper : AND | OR;
mixedCall : clause ((booleanHelper) clause)*;

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
stateCondition : testExpression;
successTest : 'success_test' testExpression;

//Number Needed for success:
numberNeededForSuccess : 'number_needed_for_success' ablLiteral ';';

//TeamMemberSpecifier:
teamMemberSpecifier : 'teammembers' name+;

//Priority modifier:



//NAME
name : CHARS;
nameList : name (',' name)*;

//STRING HACK:
string : STRING;


