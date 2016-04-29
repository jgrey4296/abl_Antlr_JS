grammar EL;

import ELTokens;

//top level. user can either declare, or query
eL_Program : (eL_Declaration | eL_Query) EOF;

//eg: .this.is.a.test
dotbang : DOT | BANG;
eL_Declaration : dotbang STRING (dotbang STRING)*;

//eg: .this.is.a.[test,test2]
option : LBRACKET STRING (COMMA STRING)+ RBRACKET;


//eg: .this.is.a.test?
//and .this.is.a.test?#2/0
eL_Query : eL_Declaration QUESTION (UTILITY STRING DIVIDOR STRING)?;
