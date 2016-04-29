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

//no whitespace, no internal .'s
STRING : [a-zA-Z_0-9];
