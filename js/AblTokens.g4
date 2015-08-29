grammar AblTokens;

SEQ : 'sequential';
PAR : 'parallel';
BEH : 'behaviour' | 'behavior';
COLL: 'collection';
SUBG : 'subgoal';
JOINTNEG : 'joint_goal_success_negotiation';
TEAMNEEDED: 'team_needed_for_success';
ONENEEDED: 'one_needed_for_success';


STAR : '*';
TYPE : [A-Z][a-zA-Z_\.]+;
CHARS : [a-z_\.]+;
INT : [0-9]+;    

WS : [ \t\r\n\f]+ -> channel(HIDDEN);

