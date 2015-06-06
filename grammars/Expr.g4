grammar Expr;
prog : seqbehave NEWLINE;

seqbehave : 'sequential' S 'behaviour' S name S '{' S (subgoal)* '}';
subgoal : 'subgoal' S CHAR S '(' S ')'S '{' (S | NEWLINE)* '}';

name : CHAR;

CHAR : [a-z]+;
S : [ ]+;
NEWLINE : [\r\n;]+;
INT : [0-9]+;    
