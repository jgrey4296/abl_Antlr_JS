grammar AblTokens;


AND : '&&';
OR  : '||';

BIND : '::';
GT : '>';
GE : '>=';
LT : '<';
LE : '<=';
EQ : '==';
NE : '!=';
BANG : '!';

PLUS : '+';
MINUS : '-';
DIV : '/';
MOD : '%';
POW : '^';



WHEN_FAILS : 'when_fails';
WHEN_SUCCEEDS : 'when_succeeds';
IGNORE_FAILURE : 'ignore_failure';
EFFECT_ONLY : 'effect_only';
TEAM_EFFECT_ONLY : 'team_effect_only';
POST : 'post';
POST_TO : 'post_to';
TEAMNEEDED: 'team_needed_for_success';
ONENEEDED: 'one_needed_for_success';

FAIL : 'fail';
SUCCEED : 'succeed' | 'succeed_step';
WAIT : 'wait';

MOVESTEP : 'move_step';
DELETESTEP : 'delete_step';
ADDSTEP : 'add_step';

SEQ : 'sequential';
PAR : 'parallel';
COLL: 'collection';
BEH : 'behaviour' | 'behavior';
SUBGOAL : 'subgoal';
SPAWNGOAL : 'spawngoal';
JOINTNEG : 'joint_goal_success_negotiation';
JOINT : 'joint';
ATOMIC : 'atomic';
ADAPTIVE : 'adaptive';

STAR : '*';
BOOL : 'True' | 'False';
NULL : 'Null';
TYPE : [A-Z][a-zA-Z_\.\[\]]*;
CHARS : [a-z][a-zA-Z_\.]*;
FLOAT : [0-9]+'.'[0-9]+;
INT : '-'?[0-9]+;    

//note to self: lexing whitespace in strings means
//a particular order of lexer rules:
//comments -> strings ->
//whitespaceHiddenChannel -> everythingelse
//see http://antlr.1301665.n2.nabble.com/Easy-method-of-preserving-white-space-in-string-literals-td7579040.html
STRING : '"' (CHARS | TYPE | ' ' | '-' | ';' | '(' | ')')+ '"';
WS : [ \t\r\n\f]+ -> channel(HIDDEN);
COMMENT : '/*' .*? '*/' -> channel(HIDDEN);
LINE_COMMENT : '//' ~[\r\n]* -> channel(HIDDEN);
ANYTHING : .+?;
