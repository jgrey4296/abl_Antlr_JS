grammar EL;

import ELTokens;

//top level. user can either declare, or query
EL_Program : (EL_Declaration | EL_Query) EOF;

//eg: .this.is.a.test
Dotbang : DOT | BANG;
EL_Declaration : Dotbang STRING (Dotbang STRING)*;

//eg: .this.is.a.[test,test2]
option : LBRACKET STRING (COMMA STRING)+ RBRACKET;


//eg: .this.is.a.test?
//and .this.is.a.test?#2/0
EL_Query : EL_Declaration QUESTION (UTILITY STRING DIVIDOR STRING)?;
