grammar EL;

import ELTokens;

//top level. user can either declare, or query
eL_Program : (eL_Declaration | eL_Query) EOF;

//eg: .this.is.a.test
dotBangPair : (DOT | BANG) STRING (ARROW stringList)?;
stringList : STRING
    | STRING (COMMA STRING)*;

eL_Declaration : (BANG BANG)? (startPoint)? dotBangPair (dotBangPair)*;

startPoint : SELECTOR LBRACE STRING RBRACE;

//eg: .this.is.a.[test,test2]
option : LBRACKET STRING (COMMA STRING)+ RBRACKET;


//eg: .this.is.a.test?
//and .this.is.a.test?#2/0
//and %.this.is.a.pair
eL_Query : (BANG BANG)? PAIR? eL_Declaration QUESTION utility?;

utility : UTILITY STRING DIVIDOR STRING;

