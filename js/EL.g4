grammar EL;

import ELTokens;

//top level. user can either declare, or query
eL_Program : (eL_Declaration | eL_Query) EOF;

//eg: !! ${x}.is.a->y.test
eL_Declaration : (negation)? (selector)? dotBangPair (dotBangPair)*;
negation : BANG BANG;

//eg: .this!is.a.test->something
dotBangPair : (DOT | BANG) selection (ARROW stringList)?;

//${blah}
selector : SELECTOR LBRACE stringList RBRACE;

//[2] | test
selection : LBRACKET NUMBER RBRACKET
    | selector
    | STRING;

//something,else
stringList : STRING
    | STRING (COMMA STRING)*;

//eg: .this.is.a.[test,test2]
option : LBRACKET stringList RBRACKET;

//eg: !!.this.is.a.test?
//and .this.is.a.test?#2/0
//and %.this.is.a.pair
eL_Query : (negation)? PAIR? eL_Declaration QUESTION utility?;

utility : UTILITY stringOrNum DIVIDOR stringOrNum;

stringOrNum : STRING | NUMBER;

