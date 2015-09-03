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
param : TYPE name?;

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
wmeTest : BANG? name '=' '(' TYPE wmeFieldTest* ')';


//NAME
name : CHARS;
nameList : name (',' name)*;

//STRING HACK:
string : STRING;


