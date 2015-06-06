grammar AblTokens;

SEQ : 'sequential';
PAR : 'parallel';
BEH : 'behaviour' | 'behavior';
COLL: 'collection';
SUBG : 'subgoal';

TYPE : [A-Z][a-zA-Z_]+;
CHAR : [A-Za-z_\.\*]+;
INT : [0-9]+;    

WS : [ \t\r\n\f]+ -> channel(HIDDEN);

