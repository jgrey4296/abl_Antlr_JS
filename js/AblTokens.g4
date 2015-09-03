grammar AblTokens;

BIND : '::';
GT : '>';
GE : '>=';
LT : '<';
LE : '<=';
EQ : '==';
NE : '!=';
BANG : '!';


SEQ : 'sequential';
PAR : 'parallel';
BEH : 'behaviour' | 'behavior';
COLL: 'collection';
SUBG : 'subgoal';
JOINTNEG : 'joint_goal_success_negotiation';
TEAMNEEDED: 'team_needed_for_success';
ONENEEDED: 'one_needed_for_success';

STAR : '*';
BOOL : 'True' | 'False';
NULL : 'Null';
TYPE : [A-Z][a-zA-Z_\.]*;
CHARS : [a-z][a-zA-Z_\.]*;
FLOAT : [0-9]+'.'[0-9]+;
INT : [0-9]+;    

//note to self: lexing whitespace in strings means
//a particular order of lexer rules:
//comments -> strings ->
//whitespaceHiddenChannel -> everythingelse
//see http://antlr.1301665.n2.nabble.com/Easy-method-of-preserving-white-space-in-string-literals-td7579040.html
STRING : '"' (CHARS | TYPE | ' ')+ '"';

WS : [ \t\r\n\f]+ -> channel(HIDDEN);

