grammar ABL;

import AblTokens;

//top level of the parser
prog : g_package? g_import? behavingEntity? EOF;

//g_ = grammar. As antlr will complain of conflicting keywords with target language
g_package : 'package' name ';';
g_import : 'import' name ';'; //todo .*?
constants : 'constants' name ';';

teamNeeded
    : 'joint_goal_success_negotiation'
        ('team_needed_for_success' | 'one_needed_for_success')';';
decisionCycle : 'decision_cycle_sm_call' name ';';
conflictDecl : 'conflict' name+ ';';


/*
 * MAIN ELEMENTS:
 */
behavingEntity :
        'behaving_entity' TYPE
        '{'
        teamNeeded?
        decisionCycle?
        conflictDecl?
        //MAIN STUFF HERE:
        (varDec ';')* //was abl_declaration
        (behaviour)* //was behavior_definition
        (g_rule)*
        initialTree
        '}';

initialTree : 'initial_tree' '{'
        (behaviorStep)* 
        '}';

behaviour :
        (ATOMIC|JOIN|ADAPTIVE)?
        (SEQ|PAR|COLL)
        BEH name '(' params  ')'
        '{'
        (behavior_modifiers)*
        (varDec)*
        (behaviorStep)*
        '}';





//Rules:
ruleGroup : 'ruleGroup' name '{' (g_rule | ('g_rule'|'ruleGroup') name ';')* '}';

g_rule : 'rule' name '{' test '->' r_assert '}';





//Assertion
r_assert : (mentalActAssert | wmeAssert | assignedWMEAssert | varDec)+;

mentalActAssert : '(''{' ;
wmeAssert : 'wmeassert'
    | '!'? (name '=')? '(' name (wmeAssertFrag)+ ')';

wmeAssertFrag : name ('='|'==') name;

assignedWMEAssert : '(' ('touch'|'!'|'copy') name ')';





//BEHAVIOUR STEPS

behaviorStep :
        g_with?
        (ruleStep | subgoal
        | chooseStep  | ('fail'';')
        | ('succeed'';') | actStep
        | mentalAct | goalStep
        | execParallelStep | conditionalStep
        | modifyStep | anonStep | ruleStep
        | ('wait' ';')) ;

actStep : 'act' '(' params ')'';';
goalStep : 'joint'? ('subgoal'|'spawngoal')
            name '(' params ')' ('at' name)? ';';
    
execParallelStep : 'execute_parallel'
            '{' (name|'entityMem') '}' ';';

conditionalStep : 'if' '{' test '}' 'parallel'?
                '{'? behaviorStep+ '}'?
                ('else' '{'? 'parallel'? behaviorStep+ '}'?)?;

modifyStep : 'move_step' name INT name INT name name ';'
            | 'delete_step' name INT name name ';'
            | 'add_step' name INT name name behaviorStep;

anonStep : (SEQ|PAR)? '{'
                'number_needed_for_success' INT ';'
                (varDec ';')*
                (behaviorStep)+ '}';

ruleStep : ('run_rule' name
            | 'run_rulegroup' name)';';


chooseStep : 'choose' '{' behaviorStep+ '}';






//Declaration:
varDec : 'variableDeclaration'
    | TYPE name ('='initializer)?;

initializer : 'initialise'
    | string;

wmeReg : 'register' 'wme' name 'with' name ';';

actionReg : 'register' ('act'|name) name '(' TYPE+ ')' 'with' name ';';

wmeDec : 'wme' name ('extends' name)? '{' (varDec)* '}';

propertyDec : 'property' TYPE name ';';





//MENTAL ACT:
mentalAct : 'mental_act' '{' '}';


stateReturn : 'state' 'return' '(' name*   ')'';';




//SUBGOALING:
g_with : 'with' '(' (stepMod|ruleMod|('policy' name))* ')';
subgoal : SUBG name '(' params ')' '{' '}';




//PARAMETERS:
params : param (',' param)*;
param : TYPE name;




//NAME
name : CHAR;
nameList : name (',' name)*;

//STRING HACK:
string : '"' TYPE+ '"';


//MODIFIERS
behavior_modifiers : 'behaviour_mods'
    | 'precondition'
    | 'specificity' INT ';'
    | 'context_condition' '{' test '}'
    | 'entry_condition' '{' test '}'
    | 'number_needed_for_success' INT ';'
    | 'teammembers' name+ ';'
    | 'success_condition' '{' test '}'
    | 'r_signal' '{' (name 'if' '{' test '}')* '}'
    | 'state' '{' '{' test '}' (name ';')* stateReturn; //uncompleted. needs java

stepMod :
        'success_test' '{' test '}'
    | 'priority' ('_modifier')? INT
    | 'ignore_failure'
    | 'persistent' ('when_fails' | 'when_succeeds')?
    | 'effect_only'
    | 'team_effect_only'
    | 'property' name (name|'entityMem')
    | ('post' | 'post_to')
    | 'one_needed_for_success'
    | 'team_needed_for_success';

ruleMod : 'ruleMods'
    | ('searchMem' | 'bindMem') '=' (param | 'enityMem')
    | ('outMem' | 'touchedMem' | 'modifiedMem') '=' (param | 'entityMem');
        



//TESTS
test : 'test'
    | (name)? (wme_test_sequence)+;

wme_test_sequence :
        '{' name (wme_test | '(' conditional  ')')+ '}'
    | wme_test
    | '(' conditional ')';



//Split this out
wme_test : 'wme_test'
    | '!'? ('bindMem'? name '=')? '(' name (wme_field_test)* ')';

wme_field_test :
        name ('::'|'<'|'>'|'=='|'<='|'>='|'!=') name;

conditional : 'conditional';
