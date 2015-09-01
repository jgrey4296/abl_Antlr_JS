grammar ABL;

import AblTokens;

//top level of the parser
prog : g_package? g_import? EOF;

//g_ = grammar. As antlr will complain of conflicting keywords with target language
g_package : 'package' TYPE ';';
g_import : ('import' TYPE STAR?';')*; //todo .*?
constants : ('constants' TYPE ';')*;

teamNeeded
    : JOINTNEG (TEAMNEEDED | ONENEEDED)';';


conflictDecl : 'conflict' name (name)+ ';';

//WME Registration:
wmeRegistration : 'register' 'wme' TYPE 'with' TYPE ';';
wmeRegistration_plural : (wmeRegistration)+;





//NAME
name : CHARS;
nameList : name (',' name)*;

//STRING HACK:
string : '"' TYPE+ '"';
