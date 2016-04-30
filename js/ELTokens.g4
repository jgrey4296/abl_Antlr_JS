grammar ELTokens;

QUESTION : '?';
DOT : '.';
BANG : '!';
COMMA : ',';
LBRACKET : '[';
RBRACKET : ']';

SELECTOR : '$';
LBRACE : '{';
RBRACE : '}';

RETURN : '^';
UTILITY : '#';
DIVIDOR : '/';
ARROW : '->';

PAIR : '%';

//no whitespace, no internal .'s
STRING : [a-zA-Z_][a-zA-Z_0-9]*;
NUMBER : [0-9]+;
