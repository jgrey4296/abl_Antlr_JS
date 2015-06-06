grammar Abl;

behavior_unit : package imports declarations
	'behaving_entity' IDENTIFIER '{'
    teamDecl conflictDecl 
    (variableDecl | wmeReg | actionReg | wmeDecl | propDecl)*
    behaviourDefinition*
    initialTree
    '}' EOF;


initialTree:
	'initial_tree' '{' behaviourStep '}'


//Describe a behaviour
behaviourDefinition:
	('sequential' | 'parallel') 'behaviour' IDENTIFIER '(' params? ')' '{'
    modifiers?
    declarations*

    '}';


//Primary thing to do in an action
behaviorStep:


//Parameters for any function or behaviour call
params:
	param (',' param)*;

param:
	TYPE IDENTIFIER;


//Modifiers:




//------------------------------
//          Non Essential Stuff:
//------------------------------
package:

imports:

declarations:

variableDecl, wmeReg, actionReg, wmeDecl, propDecl...

//------------------------------
//          LEXER RULES:
//------------------------------
