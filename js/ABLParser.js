// Generated from ABL.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('./lib/antlr4/index');
var ABLListener = require('./ABLListener').ABLListener;
var grammarFileName = "ABL.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3B\u015f\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4",
    "\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t",
    "\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27",
    "\t\27\4\30\t\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4",
    "\36\t\36\4\37\t\37\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t",
    "\'\4(\t(\4)\t)\4*\t*\4+\t+\3\2\5\2X\n\2\3\2\7\2[\n\2\f\2\16\2^\13\2",
    "\3\2\3\2\3\3\3\3\3\3\3\3\3\4\3\4\3\4\5\4i\n\4\3\4\3\4\3\5\3\5\3\5\7",
    "\5p\n\5\f\5\16\5s\13\5\3\6\3\6\3\6\3\6\3\7\3\7\3\7\6\7|\n\7\r\7\16\7",
    "}\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\t\6\t\u008a\n\t\r\t\16\t\u008b",
    "\3\n\3\n\5\n\u0090\n\n\3\n\3\n\7\n\u0094\n\n\f\n\16\n\u0097\13\n\3\n",
    "\3\n\3\13\3\13\5\13\u009d\n\13\3\13\5\13\u00a0\n\13\3\13\5\13\u00a3",
    "\n\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\r\7\r\u00b1\n\r",
    "\f\r\16\r\u00b4\13\r\3\r\3\r\3\16\3\16\3\16\3\16\5\16\u00bc\n\16\3\16",
    "\3\16\7\16\u00c0\n\16\f\16\16\16\u00c3\13\16\3\16\3\16\3\17\3\17\3\17",
    "\3\17\3\17\3\20\3\20\3\20\3\20\3\20\5\20\u00d1\n\20\3\21\3\21\5\21\u00d5",
    "\n\21\3\22\3\22\3\23\3\23\3\23\3\23\3\24\3\24\3\24\5\24\u00e0\n\24\3",
    "\24\5\24\u00e3\n\24\3\24\3\24\3\24\7\24\u00e8\n\24\f\24\16\24\u00eb",
    "\13\24\3\24\3\24\3\25\5\25\u00f0\n\25\3\25\3\25\3\25\3\25\5\25\u00f6",
    "\n\25\3\26\5\26\u00f9\n\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27\5\27\u0102",
    "\n\27\3\30\3\30\3\31\3\31\3\31\3\31\7\31\u010a\n\31\f\31\16\31\u010d",
    "\13\31\3\32\3\32\3\32\3\32\3\33\3\33\3\33\6\33\u0116\n\33\r\33\16\33",
    "\u0117\3\33\3\33\3\34\3\34\3\35\3\35\3\35\3\36\3\36\3\36\3\37\3\37\3",
    "\37\3 \3 \3 \3!\3!\3!\3\"\3\"\3\"\3\"\3#\3#\6#\u0133\n#\r#\16#\u0134",
    "\3$\3$\3$\3%\3%\5%\u013c\n%\3&\3&\3&\3&\3\'\3\'\3\'\3\'\3\'\3\'\3\'",
    "\3\'\3\'\3\'\3\'\3\'\5\'\u014e\n\'\3(\3(\3(\3)\3)\3*\3*\3*\7*\u0158",
    "\n*\f*\16*\u015b\13*\3+\3+\3+\2\2,\2\4\6\b\n\f\16\20\22\24\26\30\32",
    "\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRT\2\b\3\2/\60\3\2 &\3\2\36",
    "\37\3\2\33\34\3\2()\3\2\61\63\u0160\2W\3\2\2\2\4a\3\2\2\2\6e\3\2\2\2",
    "\bq\3\2\2\2\nt\3\2\2\2\fx\3\2\2\2\16\u0081\3\2\2\2\20\u0089\3\2\2\2",
    "\22\u008d\3\2\2\2\24\u00a2\3\2\2\2\26\u00a4\3\2\2\2\30\u00ac\3\2\2\2",
    "\32\u00b7\3\2\2\2\34\u00c6\3\2\2\2\36\u00d0\3\2\2\2 \u00d4\3\2\2\2\"",
    "\u00d6\3\2\2\2$\u00d8\3\2\2\2&\u00df\3\2\2\2(\u00ef\3\2\2\2*\u00f8\3",
    "\2\2\2,\u0101\3\2\2\2.\u0103\3\2\2\2\60\u0105\3\2\2\2\62\u010e\3\2\2",
    "\2\64\u0112\3\2\2\2\66\u011b\3\2\2\28\u011d\3\2\2\2:\u0120\3\2\2\2<",
    "\u0123\3\2\2\2>\u0126\3\2\2\2@\u0129\3\2\2\2B\u012c\3\2\2\2D\u0130\3",
    "\2\2\2F\u0136\3\2\2\2H\u0139\3\2\2\2J\u013d\3\2\2\2L\u014d\3\2\2\2N",
    "\u014f\3\2\2\2P\u0152\3\2\2\2R\u0154\3\2\2\2T\u015c\3\2\2\2VX\5\4\3",
    "\2WV\3\2\2\2WX\3\2\2\2X\\\3\2\2\2Y[\5\6\4\2ZY\3\2\2\2[^\3\2\2\2\\Z\3",
    "\2\2\2\\]\3\2\2\2]_\3\2\2\2^\\\3\2\2\2_`\7\2\2\3`\3\3\2\2\2ab\7\3\2",
    "\2bc\7=\2\2cd\7\4\2\2d\5\3\2\2\2ef\7\5\2\2fh\7=\2\2gi\7:\2\2hg\3\2\2",
    "\2hi\3\2\2\2ij\3\2\2\2jk\7\4\2\2k\7\3\2\2\2lm\7\6\2\2mn\7=\2\2np\7\4",
    "\2\2ol\3\2\2\2ps\3\2\2\2qo\3\2\2\2qr\3\2\2\2r\t\3\2\2\2sq\3\2\2\2tu",
    "\79\2\2uv\t\2\2\2vw\7\4\2\2w\13\3\2\2\2xy\7\7\2\2y{\5P)\2z|\5P)\2{z",
    "\3\2\2\2|}\3\2\2\2}{\3\2\2\2}~\3\2\2\2~\177\3\2\2\2\177\u0080\7\4\2",
    "\2\u0080\r\3\2\2\2\u0081\u0082\7\b\2\2\u0082\u0083\7\t\2\2\u0083\u0084",
    "\7=\2\2\u0084\u0085\7\n\2\2\u0085\u0086\7=\2\2\u0086\u0087\7\4\2\2\u0087",
    "\17\3\2\2\2\u0088\u008a\5\16\b\2\u0089\u0088\3\2\2\2\u008a\u008b\3\2",
    "\2\2\u008b\u0089\3\2\2\2\u008b\u008c\3\2\2\2\u008c\21\3\2\2\2\u008d",
    "\u008f\7\13\2\2\u008e\u0090\5\24\13\2\u008f\u008e\3\2\2\2\u008f\u0090",
    "\3\2\2\2\u0090\u0095\3\2\2\2\u0091\u0092\7\f\2\2\u0092\u0094\5\24\13",
    "\2\u0093\u0091\3\2\2\2\u0094\u0097\3\2\2\2\u0095\u0093\3\2\2\2\u0095",
    "\u0096\3\2\2\2\u0096\u0098\3\2\2\2\u0097\u0095\3\2\2\2\u0098\u0099\7",
    "\r\2\2\u0099\23\3\2\2\2\u009a\u009c\7=\2\2\u009b\u009d\5P)\2\u009c\u009b",
    "\3\2\2\2\u009c\u009d\3\2\2\2\u009d\u00a3\3\2\2\2\u009e\u00a0\7=\2\2",
    "\u009f\u009e\3\2\2\2\u009f\u00a0\3\2\2\2\u00a0\u00a1\3\2\2\2\u00a1\u00a3",
    "\5P)\2\u00a2\u009a\3\2\2\2\u00a2\u009f\3\2\2\2\u00a3\25\3\2\2\2\u00a4",
    "\u00a5\7\b\2\2\u00a5\u00a6\7\16\2\2\u00a6\u00a7\7=\2\2\u00a7\u00a8\5",
    "\22\n\2\u00a8\u00a9\7\n\2\2\u00a9\u00aa\7=\2\2\u00aa\u00ab\7\4\2\2\u00ab",
    "\27\3\2\2\2\u00ac\u00ad\7=\2\2\u00ad\u00b2\5P)\2\u00ae\u00af\7\f\2\2",
    "\u00af\u00b1\5P)\2\u00b0\u00ae\3\2\2\2\u00b1\u00b4\3\2\2\2\u00b2\u00b0",
    "\3\2\2\2\u00b2\u00b3\3\2\2\2\u00b3\u00b5\3\2\2\2\u00b4\u00b2\3\2\2\2",
    "\u00b5\u00b6\7\4\2\2\u00b6\31\3\2\2\2\u00b7\u00b8\7\t\2\2\u00b8\u00bb",
    "\7=\2\2\u00b9\u00ba\7\17\2\2\u00ba\u00bc\7=\2\2\u00bb\u00b9\3\2\2\2",
    "\u00bb\u00bc\3\2\2\2\u00bc\u00bd\3\2\2\2\u00bd\u00c1\7\20\2\2\u00be",
    "\u00c0\5\30\r\2\u00bf\u00be\3\2\2\2\u00c0\u00c3\3\2\2\2\u00c1\u00bf",
    "\3\2\2\2\u00c1\u00c2\3\2\2\2\u00c2\u00c4\3\2\2\2\u00c3\u00c1\3\2\2\2",
    "\u00c4\u00c5\7\21\2\2\u00c5\33\3\2\2\2\u00c6\u00c7\7\22\2\2\u00c7\u00c8",
    "\7=\2\2\u00c8\u00c9\5P)\2\u00c9\u00ca\7\4\2\2\u00ca\35\3\2\2\2\u00cb",
    "\u00d1\7@\2\2\u00cc\u00d1\7?\2\2\u00cd\u00d1\5T+\2\u00ce\u00d1\7;\2",
    "\2\u00cf\u00d1\7<\2\2\u00d0\u00cb\3\2\2\2\u00d0\u00cc\3\2\2\2\u00d0",
    "\u00cd\3\2\2\2\u00d0\u00ce\3\2\2\2\u00d0\u00cf\3\2\2\2\u00d1\37\3\2",
    "\2\2\u00d2\u00d5\5P)\2\u00d3\u00d5\5\36\20\2\u00d4\u00d2\3\2\2\2\u00d4",
    "\u00d3\3\2\2\2\u00d5!\3\2\2\2\u00d6\u00d7\t\3\2\2\u00d7#\3\2\2\2\u00d8",
    "\u00d9\5P)\2\u00d9\u00da\5\"\22\2\u00da\u00db\5 \21\2\u00db%\3\2\2\2",
    "\u00dc\u00dd\5P)\2\u00dd\u00de\7\23\2\2\u00de\u00e0\3\2\2\2\u00df\u00dc",
    "\3\2\2\2\u00df\u00e0\3\2\2\2\u00e0\u00e2\3\2\2\2\u00e1\u00e3\7\'\2\2",
    "\u00e2\u00e1\3\2\2\2\u00e2\u00e3\3\2\2\2\u00e3\u00e4\3\2\2\2\u00e4\u00e5",
    "\7\13\2\2\u00e5\u00e9\7=\2\2\u00e6\u00e8\5$\23\2\u00e7\u00e6\3\2\2\2",
    "\u00e8\u00eb\3\2\2\2\u00e9\u00e7\3\2\2\2\u00e9\u00ea\3\2\2\2\u00ea\u00ec",
    "\3\2\2\2\u00eb\u00e9\3\2\2\2\u00ec\u00ed\7\r\2\2\u00ed\'\3\2\2\2\u00ee",
    "\u00f0\7\'\2\2\u00ef\u00ee\3\2\2\2\u00ef\u00f0\3\2\2\2\u00f0\u00f1\3",
    "\2\2\2\u00f1\u00f5\5 \21\2\u00f2\u00f3\5\"\22\2\u00f3\u00f4\5 \21\2",
    "\u00f4\u00f6\3\2\2\2\u00f5\u00f2\3\2\2\2\u00f5\u00f6\3\2\2\2\u00f6)",
    "\3\2\2\2\u00f7\u00f9\7\'\2\2\u00f8\u00f7\3\2\2\2\u00f8\u00f9\3\2\2\2",
    "\u00f9\u00fa\3\2\2\2\u00fa\u00fb\5P)\2\u00fb\u00fc\5\22\n\2\u00fc+\3",
    "\2\2\2\u00fd\u0102\7;\2\2\u00fe\u0102\5P)\2\u00ff\u0102\5*\26\2\u0100",
    "\u0102\5(\25\2\u0101\u00fd\3\2\2\2\u0101\u00fe\3\2\2\2\u0101\u00ff\3",
    "\2\2\2\u0101\u0100\3\2\2\2\u0102-\3\2\2\2\u0103\u0104\t\4\2\2\u0104",
    "/\3\2\2\2\u0105\u010b\5,\27\2\u0106\u0107\5.\30\2\u0107\u0108\5,\27",
    "\2\u0108\u010a\3\2\2\2\u0109\u0106\3\2\2\2\u010a\u010d\3\2\2\2\u010b",
    "\u0109\3\2\2\2\u010b\u010c\3\2\2\2\u010c\61\3\2\2\2\u010d\u010b\3\2",
    "\2\2\u010e\u010f\7\13\2\2\u010f\u0110\5\60\31\2\u0110\u0111\7\r\2\2",
    "\u0111\63\3\2\2\2\u0112\u0115\7\20\2\2\u0113\u0116\5&\24\2\u0114\u0116",
    "\5\62\32\2\u0115\u0113\3\2\2\2\u0115\u0114\3\2\2\2\u0116\u0117\3\2\2",
    "\2\u0117\u0115\3\2\2\2\u0117\u0118\3\2\2\2\u0118\u0119\3\2\2\2\u0119",
    "\u011a\7\21\2\2\u011a\65\3\2\2\2\u011b\u011c\5\64\33\2\u011c\67\3\2",
    "\2\2\u011d\u011e\7\24\2\2\u011e\u011f\5\66\34\2\u011f9\3\2\2\2\u0120",
    "\u0121\7\25\2\2\u0121\u0122\5\66\34\2\u0122;\3\2\2\2\u0123\u0124\7\26",
    "\2\2\u0124\u0125\5\66\34\2\u0125=\3\2\2\2\u0126\u0127\7\27\2\2\u0127",
    "\u0128\5\66\34\2\u0128?\3\2\2\2\u0129\u012a\7\30\2\2\u012a\u012b\5\66",
    "\34\2\u012bA\3\2\2\2\u012c\u012d\7\31\2\2\u012d\u012e\5\36\20\2\u012e",
    "\u012f\7\4\2\2\u012fC\3\2\2\2\u0130\u0132\7\32\2\2\u0131\u0133\5P)\2",
    "\u0132\u0131\3\2\2\2\u0133\u0134\3\2\2\2\u0134\u0132\3\2\2\2\u0134\u0135",
    "\3\2\2\2\u0135E\3\2\2\2\u0136\u0137\t\5\2\2\u0137\u0138\5\36\20\2\u0138",
    "G\3\2\2\2\u0139\u013b\7\35\2\2\u013a\u013c\t\6\2\2\u013b\u013a\3\2\2",
    "\2\u013b\u013c\3\2\2\2\u013cI\3\2\2\2\u013d\u013e\7\22\2\2\u013e\u013f",
    "\5P)\2\u013f\u0140\5 \21\2\u0140K\3\2\2\2\u0141\u014e\7*\2\2\u0142\u014e",
    "\7+\2\2\u0143\u014e\7,\2\2\u0144\u014e\7-\2\2\u0145\u0146\7.\2\2\u0146",
    "\u014e\5P)\2\u0147\u014e\7/\2\2\u0148\u014e\7\60\2\2\u0149\u014e\5F",
    "$\2\u014a\u014e\5H%\2\u014b\u014e\5J&\2\u014c\u014e\5@!\2\u014d\u0141",
    "\3\2\2\2\u014d\u0142\3\2\2\2\u014d\u0143\3\2\2\2\u014d\u0144\3\2\2\2",
    "\u014d\u0145\3\2\2\2\u014d\u0147\3\2\2\2\u014d\u0148\3\2\2\2\u014d\u0149",
    "\3\2\2\2\u014d\u014a\3\2\2\2\u014d\u014b\3\2\2\2\u014d\u014c\3\2\2\2",
    "\u014eM\3\2\2\2\u014f\u0150\t\7\2\2\u0150\u0151\7\4\2\2\u0151O\3\2\2",
    "\2\u0152\u0153\7>\2\2\u0153Q\3\2\2\2\u0154\u0159\5P)\2\u0155\u0156\7",
    "\f\2\2\u0156\u0158\5P)\2\u0157\u0155\3\2\2\2\u0158\u015b\3\2\2\2\u0159",
    "\u0157\3\2\2\2\u0159\u015a\3\2\2\2\u015aS\3\2\2\2\u015b\u0159\3\2\2",
    "\2\u015c\u015d\7A\2\2\u015dU\3\2\2\2 W\\hq}\u008b\u008f\u0095\u009c",
    "\u009f\u00a2\u00b2\u00bb\u00c1\u00d0\u00d4\u00df\u00e2\u00e9\u00ef\u00f5",
    "\u00f8\u0101\u010b\u0115\u0117\u0134\u013b\u014d\u0159"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'package'", "';'", "'import'", "'constants'", 
                     "'conflict'", "'register'", "'wme'", "'with'", "'('", 
                     "','", "')'", "'action'", "'extends'", "'{'", "'}'", 
                     "'property'", "'='", "'precondition'", "'context_condition'", 
                     "'entry_condition'", "'success_condition'", "'success_test'", 
                     "'number_needed_for_success'", "'teammembers'", "'priority'", 
                     "'priority_modifier'", "'persistent'", "'&&'", "'||'", 
                     "'::'", "'>'", "'>='", "'<'", "'<='", "'=='", "'!='", 
                     "'!'", "'when_fails'", "'when_succeeds'", "'ignore_failure'", 
                     "'effect_only'", "'team_effect_only'", "'post'", "'post_to'", 
                     "'team_needed_for_success'", "'one_needed_for_success'", 
                     "'fail'", "'succeed'", "'wait'", "'sequential'", "'parallel'", 
                     'null', "'collection'", "'subgoal'", "'joint_goal_success_negotiation'", 
                     "'*'", 'null', "'Null'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      "AND", "OR", "BIND", "GT", "GE", "LT", "LE", "EQ", 
                      "NE", "BANG", "WHEN_FAILS", "WHEN_SUCCEEDS", "IGNORE_FAILURE", 
                      "EFFECT_ONLY", "TEAM_EFFECT_ONLY", "POST", "POST_TO", 
                      "TEAMNEEDED", "ONENEEDED", "FAIL", "SUCCEED", "WAIT", 
                      "SEQ", "PAR", "BEH", "COLL", "SUBG", "JOINTNEG", "STAR", 
                      "BOOL", "NULL", "TYPE", "CHARS", "FLOAT", "INT", "STRING", 
                      "WS" ];

var ruleNames =  [ "prog", "g_package", "g_import", "constants", "teamNeeded", 
                   "conflictDecl", "wmeRegistration", "wmeRegistration_plural", 
                   "params", "param", "actionRegistration", "ablVariableDeclaration", 
                   "wmeDeclaration", "propertyDeclaration", "ablLiteral", 
                   "ablExpression", "operator", "wmeFieldTest", "wmeTest", 
                   "binaryOp", "javaMethod", "clause", "booleanHelper", 
                   "mixedCall", "conditionalExpression", "wmeTestSequence", 
                   "testExpression", "precondition", "contextCondition", 
                   "entryCondition", "successCondition", "successTest", 
                   "numberNeededForSuccess", "teamMemberSpecifier", "priorityModifier", 
                   "persistence", "namedProperty", "stepModifier", "basicStep", 
                   "name", "nameList", "string" ];

function ABLParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ABLParser.prototype = Object.create(antlr4.Parser.prototype);
ABLParser.prototype.constructor = ABLParser;

Object.defineProperty(ABLParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ABLParser.EOF = antlr4.Token.EOF;
ABLParser.T__0 = 1;
ABLParser.T__1 = 2;
ABLParser.T__2 = 3;
ABLParser.T__3 = 4;
ABLParser.T__4 = 5;
ABLParser.T__5 = 6;
ABLParser.T__6 = 7;
ABLParser.T__7 = 8;
ABLParser.T__8 = 9;
ABLParser.T__9 = 10;
ABLParser.T__10 = 11;
ABLParser.T__11 = 12;
ABLParser.T__12 = 13;
ABLParser.T__13 = 14;
ABLParser.T__14 = 15;
ABLParser.T__15 = 16;
ABLParser.T__16 = 17;
ABLParser.T__17 = 18;
ABLParser.T__18 = 19;
ABLParser.T__19 = 20;
ABLParser.T__20 = 21;
ABLParser.T__21 = 22;
ABLParser.T__22 = 23;
ABLParser.T__23 = 24;
ABLParser.T__24 = 25;
ABLParser.T__25 = 26;
ABLParser.T__26 = 27;
ABLParser.AND = 28;
ABLParser.OR = 29;
ABLParser.BIND = 30;
ABLParser.GT = 31;
ABLParser.GE = 32;
ABLParser.LT = 33;
ABLParser.LE = 34;
ABLParser.EQ = 35;
ABLParser.NE = 36;
ABLParser.BANG = 37;
ABLParser.WHEN_FAILS = 38;
ABLParser.WHEN_SUCCEEDS = 39;
ABLParser.IGNORE_FAILURE = 40;
ABLParser.EFFECT_ONLY = 41;
ABLParser.TEAM_EFFECT_ONLY = 42;
ABLParser.POST = 43;
ABLParser.POST_TO = 44;
ABLParser.TEAMNEEDED = 45;
ABLParser.ONENEEDED = 46;
ABLParser.FAIL = 47;
ABLParser.SUCCEED = 48;
ABLParser.WAIT = 49;
ABLParser.SEQ = 50;
ABLParser.PAR = 51;
ABLParser.BEH = 52;
ABLParser.COLL = 53;
ABLParser.SUBG = 54;
ABLParser.JOINTNEG = 55;
ABLParser.STAR = 56;
ABLParser.BOOL = 57;
ABLParser.NULL = 58;
ABLParser.TYPE = 59;
ABLParser.CHARS = 60;
ABLParser.FLOAT = 61;
ABLParser.INT = 62;
ABLParser.STRING = 63;
ABLParser.WS = 64;

ABLParser.RULE_prog = 0;
ABLParser.RULE_g_package = 1;
ABLParser.RULE_g_import = 2;
ABLParser.RULE_constants = 3;
ABLParser.RULE_teamNeeded = 4;
ABLParser.RULE_conflictDecl = 5;
ABLParser.RULE_wmeRegistration = 6;
ABLParser.RULE_wmeRegistration_plural = 7;
ABLParser.RULE_params = 8;
ABLParser.RULE_param = 9;
ABLParser.RULE_actionRegistration = 10;
ABLParser.RULE_ablVariableDeclaration = 11;
ABLParser.RULE_wmeDeclaration = 12;
ABLParser.RULE_propertyDeclaration = 13;
ABLParser.RULE_ablLiteral = 14;
ABLParser.RULE_ablExpression = 15;
ABLParser.RULE_operator = 16;
ABLParser.RULE_wmeFieldTest = 17;
ABLParser.RULE_wmeTest = 18;
ABLParser.RULE_binaryOp = 19;
ABLParser.RULE_javaMethod = 20;
ABLParser.RULE_clause = 21;
ABLParser.RULE_booleanHelper = 22;
ABLParser.RULE_mixedCall = 23;
ABLParser.RULE_conditionalExpression = 24;
ABLParser.RULE_wmeTestSequence = 25;
ABLParser.RULE_testExpression = 26;
ABLParser.RULE_precondition = 27;
ABLParser.RULE_contextCondition = 28;
ABLParser.RULE_entryCondition = 29;
ABLParser.RULE_successCondition = 30;
ABLParser.RULE_successTest = 31;
ABLParser.RULE_numberNeededForSuccess = 32;
ABLParser.RULE_teamMemberSpecifier = 33;
ABLParser.RULE_priorityModifier = 34;
ABLParser.RULE_persistence = 35;
ABLParser.RULE_namedProperty = 36;
ABLParser.RULE_stepModifier = 37;
ABLParser.RULE_basicStep = 38;
ABLParser.RULE_name = 39;
ABLParser.RULE_nameList = 40;
ABLParser.RULE_string = 41;

function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.EOF = function() {
    return this.getToken(ABLParser.EOF, 0);
};

ProgContext.prototype.g_package = function() {
    return this.getTypedRuleContext(G_packageContext,0);
};

ProgContext.prototype.g_import = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(G_importContext);
    } else {
        return this.getTypedRuleContext(G_importContext,i);
    }
};

ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitProg(this);
	}
};




ABLParser.ProgContext = ProgContext;

ABLParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ABLParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 85;
        _la = this._input.LA(1);
        if(_la===ABLParser.T__0) {
            this.state = 84;
            this.g_package();
        }

        this.state = 90;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.T__2) {
            this.state = 87;
            this.g_import();
            this.state = 92;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 93;
        this.match(ABLParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function G_packageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_g_package;
    return this;
}

G_packageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
G_packageContext.prototype.constructor = G_packageContext;

G_packageContext.prototype.TYPE = function() {
    return this.getToken(ABLParser.TYPE, 0);
};

G_packageContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterG_package(this);
	}
};

G_packageContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitG_package(this);
	}
};




ABLParser.G_packageContext = G_packageContext;

ABLParser.prototype.g_package = function() {

    var localctx = new G_packageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ABLParser.RULE_g_package);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        this.match(ABLParser.T__0);
        this.state = 96;
        this.match(ABLParser.TYPE);
        this.state = 97;
        this.match(ABLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function G_importContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_g_import;
    return this;
}

G_importContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
G_importContext.prototype.constructor = G_importContext;

G_importContext.prototype.TYPE = function() {
    return this.getToken(ABLParser.TYPE, 0);
};

G_importContext.prototype.STAR = function() {
    return this.getToken(ABLParser.STAR, 0);
};

G_importContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterG_import(this);
	}
};

G_importContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitG_import(this);
	}
};




ABLParser.G_importContext = G_importContext;

ABLParser.prototype.g_import = function() {

    var localctx = new G_importContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ABLParser.RULE_g_import);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
        this.match(ABLParser.T__2);
        this.state = 100;
        this.match(ABLParser.TYPE);
        this.state = 102;
        _la = this._input.LA(1);
        if(_la===ABLParser.STAR) {
            this.state = 101;
            this.match(ABLParser.STAR);
        }

        this.state = 104;
        this.match(ABLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConstantsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_constants;
    return this;
}

ConstantsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantsContext.prototype.constructor = ConstantsContext;

ConstantsContext.prototype.TYPE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ABLParser.TYPE);
    } else {
        return this.getToken(ABLParser.TYPE, i);
    }
};


ConstantsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterConstants(this);
	}
};

ConstantsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitConstants(this);
	}
};




ABLParser.ConstantsContext = ConstantsContext;

ABLParser.prototype.constants = function() {

    var localctx = new ConstantsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ABLParser.RULE_constants);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 111;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.T__3) {
            this.state = 106;
            this.match(ABLParser.T__3);
            this.state = 107;
            this.match(ABLParser.TYPE);
            this.state = 108;
            this.match(ABLParser.T__1);
            this.state = 113;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TeamNeededContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_teamNeeded;
    return this;
}

TeamNeededContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TeamNeededContext.prototype.constructor = TeamNeededContext;

TeamNeededContext.prototype.JOINTNEG = function() {
    return this.getToken(ABLParser.JOINTNEG, 0);
};

TeamNeededContext.prototype.TEAMNEEDED = function() {
    return this.getToken(ABLParser.TEAMNEEDED, 0);
};

TeamNeededContext.prototype.ONENEEDED = function() {
    return this.getToken(ABLParser.ONENEEDED, 0);
};

TeamNeededContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterTeamNeeded(this);
	}
};

TeamNeededContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitTeamNeeded(this);
	}
};




ABLParser.TeamNeededContext = TeamNeededContext;

ABLParser.prototype.teamNeeded = function() {

    var localctx = new TeamNeededContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ABLParser.RULE_teamNeeded);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this.match(ABLParser.JOINTNEG);
        this.state = 115;
        _la = this._input.LA(1);
        if(!(_la===ABLParser.TEAMNEEDED || _la===ABLParser.ONENEEDED)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 116;
        this.match(ABLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConflictDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_conflictDecl;
    return this;
}

ConflictDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConflictDeclContext.prototype.constructor = ConflictDeclContext;

ConflictDeclContext.prototype.name = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameContext);
    } else {
        return this.getTypedRuleContext(NameContext,i);
    }
};

ConflictDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterConflictDecl(this);
	}
};

ConflictDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitConflictDecl(this);
	}
};




ABLParser.ConflictDeclContext = ConflictDeclContext;

ABLParser.prototype.conflictDecl = function() {

    var localctx = new ConflictDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ABLParser.RULE_conflictDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.match(ABLParser.T__4);
        this.state = 119;
        this.name();
        this.state = 121; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 120;
            this.name();
            this.state = 123; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ABLParser.CHARS);
        this.state = 125;
        this.match(ABLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WmeRegistrationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_wmeRegistration;
    return this;
}

WmeRegistrationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WmeRegistrationContext.prototype.constructor = WmeRegistrationContext;

WmeRegistrationContext.prototype.TYPE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ABLParser.TYPE);
    } else {
        return this.getToken(ABLParser.TYPE, i);
    }
};


WmeRegistrationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterWmeRegistration(this);
	}
};

WmeRegistrationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitWmeRegistration(this);
	}
};




ABLParser.WmeRegistrationContext = WmeRegistrationContext;

ABLParser.prototype.wmeRegistration = function() {

    var localctx = new WmeRegistrationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ABLParser.RULE_wmeRegistration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 127;
        this.match(ABLParser.T__5);
        this.state = 128;
        this.match(ABLParser.T__6);
        this.state = 129;
        this.match(ABLParser.TYPE);
        this.state = 130;
        this.match(ABLParser.T__7);
        this.state = 131;
        this.match(ABLParser.TYPE);
        this.state = 132;
        this.match(ABLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WmeRegistration_pluralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_wmeRegistration_plural;
    return this;
}

WmeRegistration_pluralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WmeRegistration_pluralContext.prototype.constructor = WmeRegistration_pluralContext;

WmeRegistration_pluralContext.prototype.wmeRegistration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WmeRegistrationContext);
    } else {
        return this.getTypedRuleContext(WmeRegistrationContext,i);
    }
};

WmeRegistration_pluralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterWmeRegistration_plural(this);
	}
};

WmeRegistration_pluralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitWmeRegistration_plural(this);
	}
};




ABLParser.WmeRegistration_pluralContext = WmeRegistration_pluralContext;

ABLParser.prototype.wmeRegistration_plural = function() {

    var localctx = new WmeRegistration_pluralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ABLParser.RULE_wmeRegistration_plural);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 134;
            this.wmeRegistration();
            this.state = 137; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ABLParser.T__5);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParamsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_params;
    return this;
}

ParamsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamsContext.prototype.constructor = ParamsContext;

ParamsContext.prototype.param = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParamContext);
    } else {
        return this.getTypedRuleContext(ParamContext,i);
    }
};

ParamsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterParams(this);
	}
};

ParamsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitParams(this);
	}
};




ABLParser.ParamsContext = ParamsContext;

ABLParser.prototype.params = function() {

    var localctx = new ParamsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ABLParser.RULE_params);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 139;
        this.match(ABLParser.T__8);
        this.state = 141;
        _la = this._input.LA(1);
        if(_la===ABLParser.TYPE || _la===ABLParser.CHARS) {
            this.state = 140;
            this.param();
        }

        this.state = 147;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.T__9) {
            this.state = 143;
            this.match(ABLParser.T__9);
            this.state = 144;
            this.param();
            this.state = 149;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 150;
        this.match(ABLParser.T__10);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParamContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_param;
    return this;
}

ParamContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamContext.prototype.constructor = ParamContext;

ParamContext.prototype.TYPE = function() {
    return this.getToken(ABLParser.TYPE, 0);
};

ParamContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

ParamContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterParam(this);
	}
};

ParamContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitParam(this);
	}
};




ABLParser.ParamContext = ParamContext;

ABLParser.prototype.param = function() {

    var localctx = new ParamContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ABLParser.RULE_param);
    var _la = 0; // Token type
    try {
        this.state = 160;
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 152;
            this.match(ABLParser.TYPE);
            this.state = 154;
            _la = this._input.LA(1);
            if(_la===ABLParser.CHARS) {
                this.state = 153;
                this.name();
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 157;
            _la = this._input.LA(1);
            if(_la===ABLParser.TYPE) {
                this.state = 156;
                this.match(ABLParser.TYPE);
            }

            this.state = 159;
            this.name();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ActionRegistrationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_actionRegistration;
    return this;
}

ActionRegistrationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ActionRegistrationContext.prototype.constructor = ActionRegistrationContext;

ActionRegistrationContext.prototype.TYPE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ABLParser.TYPE);
    } else {
        return this.getToken(ABLParser.TYPE, i);
    }
};


ActionRegistrationContext.prototype.params = function() {
    return this.getTypedRuleContext(ParamsContext,0);
};

ActionRegistrationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterActionRegistration(this);
	}
};

ActionRegistrationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitActionRegistration(this);
	}
};




ABLParser.ActionRegistrationContext = ActionRegistrationContext;

ABLParser.prototype.actionRegistration = function() {

    var localctx = new ActionRegistrationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ABLParser.RULE_actionRegistration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        this.match(ABLParser.T__5);
        this.state = 163;
        this.match(ABLParser.T__11);
        this.state = 164;
        this.match(ABLParser.TYPE);
        this.state = 165;
        this.params();
        this.state = 166;
        this.match(ABLParser.T__7);
        this.state = 167;
        this.match(ABLParser.TYPE);
        this.state = 168;
        this.match(ABLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AblVariableDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_ablVariableDeclaration;
    return this;
}

AblVariableDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AblVariableDeclarationContext.prototype.constructor = AblVariableDeclarationContext;

AblVariableDeclarationContext.prototype.TYPE = function() {
    return this.getToken(ABLParser.TYPE, 0);
};

AblVariableDeclarationContext.prototype.name = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameContext);
    } else {
        return this.getTypedRuleContext(NameContext,i);
    }
};

AblVariableDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterAblVariableDeclaration(this);
	}
};

AblVariableDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitAblVariableDeclaration(this);
	}
};




ABLParser.AblVariableDeclarationContext = AblVariableDeclarationContext;

ABLParser.prototype.ablVariableDeclaration = function() {

    var localctx = new AblVariableDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ABLParser.RULE_ablVariableDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        this.match(ABLParser.TYPE);
        this.state = 171;
        this.name();
        this.state = 176;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.T__9) {
            this.state = 172;
            this.match(ABLParser.T__9);
            this.state = 173;
            this.name();
            this.state = 178;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 179;
        this.match(ABLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WmeDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_wmeDeclaration;
    return this;
}

WmeDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WmeDeclarationContext.prototype.constructor = WmeDeclarationContext;

WmeDeclarationContext.prototype.TYPE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ABLParser.TYPE);
    } else {
        return this.getToken(ABLParser.TYPE, i);
    }
};


WmeDeclarationContext.prototype.ablVariableDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AblVariableDeclarationContext);
    } else {
        return this.getTypedRuleContext(AblVariableDeclarationContext,i);
    }
};

WmeDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterWmeDeclaration(this);
	}
};

WmeDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitWmeDeclaration(this);
	}
};




ABLParser.WmeDeclarationContext = WmeDeclarationContext;

ABLParser.prototype.wmeDeclaration = function() {

    var localctx = new WmeDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ABLParser.RULE_wmeDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        this.match(ABLParser.T__6);
        this.state = 182;
        this.match(ABLParser.TYPE);
        this.state = 185;
        _la = this._input.LA(1);
        if(_la===ABLParser.T__12) {
            this.state = 183;
            this.match(ABLParser.T__12);
            this.state = 184;
            this.match(ABLParser.TYPE);
        }

        this.state = 187;
        this.match(ABLParser.T__13);
        this.state = 191;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.TYPE) {
            this.state = 188;
            this.ablVariableDeclaration();
            this.state = 193;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 194;
        this.match(ABLParser.T__14);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PropertyDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_propertyDeclaration;
    return this;
}

PropertyDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyDeclarationContext.prototype.constructor = PropertyDeclarationContext;

PropertyDeclarationContext.prototype.TYPE = function() {
    return this.getToken(ABLParser.TYPE, 0);
};

PropertyDeclarationContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

PropertyDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterPropertyDeclaration(this);
	}
};

PropertyDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitPropertyDeclaration(this);
	}
};




ABLParser.PropertyDeclarationContext = PropertyDeclarationContext;

ABLParser.prototype.propertyDeclaration = function() {

    var localctx = new PropertyDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ABLParser.RULE_propertyDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 196;
        this.match(ABLParser.T__15);
        this.state = 197;
        this.match(ABLParser.TYPE);
        this.state = 198;
        this.name();
        this.state = 199;
        this.match(ABLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AblLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_ablLiteral;
    return this;
}

AblLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AblLiteralContext.prototype.constructor = AblLiteralContext;

AblLiteralContext.prototype.INT = function() {
    return this.getToken(ABLParser.INT, 0);
};

AblLiteralContext.prototype.FLOAT = function() {
    return this.getToken(ABLParser.FLOAT, 0);
};

AblLiteralContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

AblLiteralContext.prototype.BOOL = function() {
    return this.getToken(ABLParser.BOOL, 0);
};

AblLiteralContext.prototype.NULL = function() {
    return this.getToken(ABLParser.NULL, 0);
};

AblLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterAblLiteral(this);
	}
};

AblLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitAblLiteral(this);
	}
};




ABLParser.AblLiteralContext = AblLiteralContext;

ABLParser.prototype.ablLiteral = function() {

    var localctx = new AblLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, ABLParser.RULE_ablLiteral);
    try {
        this.state = 206;
        switch(this._input.LA(1)) {
        case ABLParser.INT:
            this.enterOuterAlt(localctx, 1);
            this.state = 201;
            this.match(ABLParser.INT);
            break;
        case ABLParser.FLOAT:
            this.enterOuterAlt(localctx, 2);
            this.state = 202;
            this.match(ABLParser.FLOAT);
            break;
        case ABLParser.STRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 203;
            this.string();
            break;
        case ABLParser.BOOL:
            this.enterOuterAlt(localctx, 4);
            this.state = 204;
            this.match(ABLParser.BOOL);
            break;
        case ABLParser.NULL:
            this.enterOuterAlt(localctx, 5);
            this.state = 205;
            this.match(ABLParser.NULL);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AblExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_ablExpression;
    return this;
}

AblExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AblExpressionContext.prototype.constructor = AblExpressionContext;

AblExpressionContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

AblExpressionContext.prototype.ablLiteral = function() {
    return this.getTypedRuleContext(AblLiteralContext,0);
};

AblExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterAblExpression(this);
	}
};

AblExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitAblExpression(this);
	}
};




ABLParser.AblExpressionContext = AblExpressionContext;

ABLParser.prototype.ablExpression = function() {

    var localctx = new AblExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, ABLParser.RULE_ablExpression);
    try {
        this.state = 210;
        switch(this._input.LA(1)) {
        case ABLParser.CHARS:
            this.enterOuterAlt(localctx, 1);
            this.state = 208;
            this.name();
            break;
        case ABLParser.BOOL:
        case ABLParser.NULL:
        case ABLParser.FLOAT:
        case ABLParser.INT:
        case ABLParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 209;
            this.ablLiteral();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_operator;
    return this;
}

OperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorContext.prototype.constructor = OperatorContext;

OperatorContext.prototype.BIND = function() {
    return this.getToken(ABLParser.BIND, 0);
};

OperatorContext.prototype.GT = function() {
    return this.getToken(ABLParser.GT, 0);
};

OperatorContext.prototype.GE = function() {
    return this.getToken(ABLParser.GE, 0);
};

OperatorContext.prototype.LT = function() {
    return this.getToken(ABLParser.LT, 0);
};

OperatorContext.prototype.LE = function() {
    return this.getToken(ABLParser.LE, 0);
};

OperatorContext.prototype.EQ = function() {
    return this.getToken(ABLParser.EQ, 0);
};

OperatorContext.prototype.NE = function() {
    return this.getToken(ABLParser.NE, 0);
};

OperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterOperator(this);
	}
};

OperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitOperator(this);
	}
};




ABLParser.OperatorContext = OperatorContext;

ABLParser.prototype.operator = function() {

    var localctx = new OperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, ABLParser.RULE_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 212;
        _la = this._input.LA(1);
        if(!(((((_la - 30)) & ~0x1f) == 0 && ((1 << (_la - 30)) & ((1 << (ABLParser.BIND - 30)) | (1 << (ABLParser.GT - 30)) | (1 << (ABLParser.GE - 30)) | (1 << (ABLParser.LT - 30)) | (1 << (ABLParser.LE - 30)) | (1 << (ABLParser.EQ - 30)) | (1 << (ABLParser.NE - 30)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WmeFieldTestContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_wmeFieldTest;
    return this;
}

WmeFieldTestContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WmeFieldTestContext.prototype.constructor = WmeFieldTestContext;

WmeFieldTestContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

WmeFieldTestContext.prototype.operator = function() {
    return this.getTypedRuleContext(OperatorContext,0);
};

WmeFieldTestContext.prototype.ablExpression = function() {
    return this.getTypedRuleContext(AblExpressionContext,0);
};

WmeFieldTestContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterWmeFieldTest(this);
	}
};

WmeFieldTestContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitWmeFieldTest(this);
	}
};




ABLParser.WmeFieldTestContext = WmeFieldTestContext;

ABLParser.prototype.wmeFieldTest = function() {

    var localctx = new WmeFieldTestContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, ABLParser.RULE_wmeFieldTest);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 214;
        this.name();
        this.state = 215;
        this.operator();
        this.state = 216;
        this.ablExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WmeTestContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_wmeTest;
    return this;
}

WmeTestContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WmeTestContext.prototype.constructor = WmeTestContext;

WmeTestContext.prototype.TYPE = function() {
    return this.getToken(ABLParser.TYPE, 0);
};

WmeTestContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

WmeTestContext.prototype.BANG = function() {
    return this.getToken(ABLParser.BANG, 0);
};

WmeTestContext.prototype.wmeFieldTest = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WmeFieldTestContext);
    } else {
        return this.getTypedRuleContext(WmeFieldTestContext,i);
    }
};

WmeTestContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterWmeTest(this);
	}
};

WmeTestContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitWmeTest(this);
	}
};




ABLParser.WmeTestContext = WmeTestContext;

ABLParser.prototype.wmeTest = function() {

    var localctx = new WmeTestContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, ABLParser.RULE_wmeTest);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 221;
        _la = this._input.LA(1);
        if(_la===ABLParser.CHARS) {
            this.state = 218;
            this.name();
            this.state = 219;
            this.match(ABLParser.T__16);
        }

        this.state = 224;
        _la = this._input.LA(1);
        if(_la===ABLParser.BANG) {
            this.state = 223;
            this.match(ABLParser.BANG);
        }

        this.state = 226;
        this.match(ABLParser.T__8);
        this.state = 227;
        this.match(ABLParser.TYPE);
        this.state = 231;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.CHARS) {
            this.state = 228;
            this.wmeFieldTest();
            this.state = 233;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 234;
        this.match(ABLParser.T__10);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BinaryOpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_binaryOp;
    return this;
}

BinaryOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BinaryOpContext.prototype.constructor = BinaryOpContext;

BinaryOpContext.prototype.ablExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AblExpressionContext);
    } else {
        return this.getTypedRuleContext(AblExpressionContext,i);
    }
};

BinaryOpContext.prototype.BANG = function() {
    return this.getToken(ABLParser.BANG, 0);
};

BinaryOpContext.prototype.operator = function() {
    return this.getTypedRuleContext(OperatorContext,0);
};

BinaryOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterBinaryOp(this);
	}
};

BinaryOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitBinaryOp(this);
	}
};




ABLParser.BinaryOpContext = BinaryOpContext;

ABLParser.prototype.binaryOp = function() {

    var localctx = new BinaryOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, ABLParser.RULE_binaryOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 237;
        _la = this._input.LA(1);
        if(_la===ABLParser.BANG) {
            this.state = 236;
            this.match(ABLParser.BANG);
        }

        this.state = 239;
        this.ablExpression();
        this.state = 243;
        _la = this._input.LA(1);
        if(((((_la - 30)) & ~0x1f) == 0 && ((1 << (_la - 30)) & ((1 << (ABLParser.BIND - 30)) | (1 << (ABLParser.GT - 30)) | (1 << (ABLParser.GE - 30)) | (1 << (ABLParser.LT - 30)) | (1 << (ABLParser.LE - 30)) | (1 << (ABLParser.EQ - 30)) | (1 << (ABLParser.NE - 30)))) !== 0)) {
            this.state = 240;
            this.operator();
            this.state = 241;
            this.ablExpression();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function JavaMethodContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_javaMethod;
    return this;
}

JavaMethodContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
JavaMethodContext.prototype.constructor = JavaMethodContext;

JavaMethodContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

JavaMethodContext.prototype.params = function() {
    return this.getTypedRuleContext(ParamsContext,0);
};

JavaMethodContext.prototype.BANG = function() {
    return this.getToken(ABLParser.BANG, 0);
};

JavaMethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterJavaMethod(this);
	}
};

JavaMethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitJavaMethod(this);
	}
};




ABLParser.JavaMethodContext = JavaMethodContext;

ABLParser.prototype.javaMethod = function() {

    var localctx = new JavaMethodContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, ABLParser.RULE_javaMethod);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 246;
        _la = this._input.LA(1);
        if(_la===ABLParser.BANG) {
            this.state = 245;
            this.match(ABLParser.BANG);
        }

        this.state = 248;
        this.name();
        this.state = 249;
        this.params();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_clause;
    return this;
}

ClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClauseContext.prototype.constructor = ClauseContext;

ClauseContext.prototype.BOOL = function() {
    return this.getToken(ABLParser.BOOL, 0);
};

ClauseContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

ClauseContext.prototype.javaMethod = function() {
    return this.getTypedRuleContext(JavaMethodContext,0);
};

ClauseContext.prototype.binaryOp = function() {
    return this.getTypedRuleContext(BinaryOpContext,0);
};

ClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterClause(this);
	}
};

ClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitClause(this);
	}
};




ABLParser.ClauseContext = ClauseContext;

ABLParser.prototype.clause = function() {

    var localctx = new ClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, ABLParser.RULE_clause);
    try {
        this.state = 255;
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 251;
            this.match(ABLParser.BOOL);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 252;
            this.name();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 253;
            this.javaMethod();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 254;
            this.binaryOp();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BooleanHelperContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_booleanHelper;
    return this;
}

BooleanHelperContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BooleanHelperContext.prototype.constructor = BooleanHelperContext;

BooleanHelperContext.prototype.AND = function() {
    return this.getToken(ABLParser.AND, 0);
};

BooleanHelperContext.prototype.OR = function() {
    return this.getToken(ABLParser.OR, 0);
};

BooleanHelperContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterBooleanHelper(this);
	}
};

BooleanHelperContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitBooleanHelper(this);
	}
};




ABLParser.BooleanHelperContext = BooleanHelperContext;

ABLParser.prototype.booleanHelper = function() {

    var localctx = new BooleanHelperContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, ABLParser.RULE_booleanHelper);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 257;
        _la = this._input.LA(1);
        if(!(_la===ABLParser.AND || _la===ABLParser.OR)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MixedCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_mixedCall;
    return this;
}

MixedCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MixedCallContext.prototype.constructor = MixedCallContext;

MixedCallContext.prototype.clause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClauseContext);
    } else {
        return this.getTypedRuleContext(ClauseContext,i);
    }
};

MixedCallContext.prototype.booleanHelper = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BooleanHelperContext);
    } else {
        return this.getTypedRuleContext(BooleanHelperContext,i);
    }
};

MixedCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterMixedCall(this);
	}
};

MixedCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitMixedCall(this);
	}
};




ABLParser.MixedCallContext = MixedCallContext;

ABLParser.prototype.mixedCall = function() {

    var localctx = new MixedCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, ABLParser.RULE_mixedCall);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 259;
        this.clause();
        this.state = 265;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.AND || _la===ABLParser.OR) {
            this.state = 260;
            this.booleanHelper();
            this.state = 261;
            this.clause();
            this.state = 267;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConditionalExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_conditionalExpression;
    return this;
}

ConditionalExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionalExpressionContext.prototype.constructor = ConditionalExpressionContext;

ConditionalExpressionContext.prototype.mixedCall = function() {
    return this.getTypedRuleContext(MixedCallContext,0);
};

ConditionalExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterConditionalExpression(this);
	}
};

ConditionalExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitConditionalExpression(this);
	}
};




ABLParser.ConditionalExpressionContext = ConditionalExpressionContext;

ABLParser.prototype.conditionalExpression = function() {

    var localctx = new ConditionalExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, ABLParser.RULE_conditionalExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 268;
        this.match(ABLParser.T__8);
        this.state = 269;
        this.mixedCall();
        this.state = 270;
        this.match(ABLParser.T__10);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WmeTestSequenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_wmeTestSequence;
    return this;
}

WmeTestSequenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WmeTestSequenceContext.prototype.constructor = WmeTestSequenceContext;

WmeTestSequenceContext.prototype.wmeTest = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WmeTestContext);
    } else {
        return this.getTypedRuleContext(WmeTestContext,i);
    }
};

WmeTestSequenceContext.prototype.conditionalExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConditionalExpressionContext);
    } else {
        return this.getTypedRuleContext(ConditionalExpressionContext,i);
    }
};

WmeTestSequenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterWmeTestSequence(this);
	}
};

WmeTestSequenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitWmeTestSequence(this);
	}
};




ABLParser.WmeTestSequenceContext = WmeTestSequenceContext;

ABLParser.prototype.wmeTestSequence = function() {

    var localctx = new WmeTestSequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, ABLParser.RULE_wmeTestSequence);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 272;
        this.match(ABLParser.T__13);
        this.state = 275; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 275;
            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
            switch(la_) {
            case 1:
                this.state = 273;
                this.wmeTest();
                break;

            case 2:
                this.state = 274;
                this.conditionalExpression();
                break;

            }
            this.state = 277; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ABLParser.T__8 || _la===ABLParser.BANG || _la===ABLParser.CHARS);
        this.state = 279;
        this.match(ABLParser.T__14);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TestExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_testExpression;
    return this;
}

TestExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TestExpressionContext.prototype.constructor = TestExpressionContext;

TestExpressionContext.prototype.wmeTestSequence = function() {
    return this.getTypedRuleContext(WmeTestSequenceContext,0);
};

TestExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterTestExpression(this);
	}
};

TestExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitTestExpression(this);
	}
};




ABLParser.TestExpressionContext = TestExpressionContext;

ABLParser.prototype.testExpression = function() {

    var localctx = new TestExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, ABLParser.RULE_testExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 281;
        this.wmeTestSequence();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PreconditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_precondition;
    return this;
}

PreconditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PreconditionContext.prototype.constructor = PreconditionContext;

PreconditionContext.prototype.testExpression = function() {
    return this.getTypedRuleContext(TestExpressionContext,0);
};

PreconditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterPrecondition(this);
	}
};

PreconditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitPrecondition(this);
	}
};




ABLParser.PreconditionContext = PreconditionContext;

ABLParser.prototype.precondition = function() {

    var localctx = new PreconditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, ABLParser.RULE_precondition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 283;
        this.match(ABLParser.T__17);
        this.state = 284;
        this.testExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ContextConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_contextCondition;
    return this;
}

ContextConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContextConditionContext.prototype.constructor = ContextConditionContext;

ContextConditionContext.prototype.testExpression = function() {
    return this.getTypedRuleContext(TestExpressionContext,0);
};

ContextConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterContextCondition(this);
	}
};

ContextConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitContextCondition(this);
	}
};




ABLParser.ContextConditionContext = ContextConditionContext;

ABLParser.prototype.contextCondition = function() {

    var localctx = new ContextConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, ABLParser.RULE_contextCondition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 286;
        this.match(ABLParser.T__18);
        this.state = 287;
        this.testExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EntryConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_entryCondition;
    return this;
}

EntryConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntryConditionContext.prototype.constructor = EntryConditionContext;

EntryConditionContext.prototype.testExpression = function() {
    return this.getTypedRuleContext(TestExpressionContext,0);
};

EntryConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterEntryCondition(this);
	}
};

EntryConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitEntryCondition(this);
	}
};




ABLParser.EntryConditionContext = EntryConditionContext;

ABLParser.prototype.entryCondition = function() {

    var localctx = new EntryConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, ABLParser.RULE_entryCondition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 289;
        this.match(ABLParser.T__19);
        this.state = 290;
        this.testExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SuccessConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_successCondition;
    return this;
}

SuccessConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SuccessConditionContext.prototype.constructor = SuccessConditionContext;

SuccessConditionContext.prototype.testExpression = function() {
    return this.getTypedRuleContext(TestExpressionContext,0);
};

SuccessConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterSuccessCondition(this);
	}
};

SuccessConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitSuccessCondition(this);
	}
};




ABLParser.SuccessConditionContext = SuccessConditionContext;

ABLParser.prototype.successCondition = function() {

    var localctx = new SuccessConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, ABLParser.RULE_successCondition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 292;
        this.match(ABLParser.T__20);
        this.state = 293;
        this.testExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SuccessTestContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_successTest;
    return this;
}

SuccessTestContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SuccessTestContext.prototype.constructor = SuccessTestContext;

SuccessTestContext.prototype.testExpression = function() {
    return this.getTypedRuleContext(TestExpressionContext,0);
};

SuccessTestContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterSuccessTest(this);
	}
};

SuccessTestContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitSuccessTest(this);
	}
};




ABLParser.SuccessTestContext = SuccessTestContext;

ABLParser.prototype.successTest = function() {

    var localctx = new SuccessTestContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, ABLParser.RULE_successTest);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 295;
        this.match(ABLParser.T__21);
        this.state = 296;
        this.testExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumberNeededForSuccessContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_numberNeededForSuccess;
    return this;
}

NumberNeededForSuccessContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberNeededForSuccessContext.prototype.constructor = NumberNeededForSuccessContext;

NumberNeededForSuccessContext.prototype.ablLiteral = function() {
    return this.getTypedRuleContext(AblLiteralContext,0);
};

NumberNeededForSuccessContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterNumberNeededForSuccess(this);
	}
};

NumberNeededForSuccessContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitNumberNeededForSuccess(this);
	}
};




ABLParser.NumberNeededForSuccessContext = NumberNeededForSuccessContext;

ABLParser.prototype.numberNeededForSuccess = function() {

    var localctx = new NumberNeededForSuccessContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, ABLParser.RULE_numberNeededForSuccess);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 298;
        this.match(ABLParser.T__22);
        this.state = 299;
        this.ablLiteral();
        this.state = 300;
        this.match(ABLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TeamMemberSpecifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_teamMemberSpecifier;
    return this;
}

TeamMemberSpecifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TeamMemberSpecifierContext.prototype.constructor = TeamMemberSpecifierContext;

TeamMemberSpecifierContext.prototype.name = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameContext);
    } else {
        return this.getTypedRuleContext(NameContext,i);
    }
};

TeamMemberSpecifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterTeamMemberSpecifier(this);
	}
};

TeamMemberSpecifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitTeamMemberSpecifier(this);
	}
};




ABLParser.TeamMemberSpecifierContext = TeamMemberSpecifierContext;

ABLParser.prototype.teamMemberSpecifier = function() {

    var localctx = new TeamMemberSpecifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, ABLParser.RULE_teamMemberSpecifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 302;
        this.match(ABLParser.T__23);
        this.state = 304; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 303;
            this.name();
            this.state = 306; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ABLParser.CHARS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PriorityModifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_priorityModifier;
    return this;
}

PriorityModifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PriorityModifierContext.prototype.constructor = PriorityModifierContext;

PriorityModifierContext.prototype.ablLiteral = function() {
    return this.getTypedRuleContext(AblLiteralContext,0);
};

PriorityModifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterPriorityModifier(this);
	}
};

PriorityModifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitPriorityModifier(this);
	}
};




ABLParser.PriorityModifierContext = PriorityModifierContext;

ABLParser.prototype.priorityModifier = function() {

    var localctx = new PriorityModifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, ABLParser.RULE_priorityModifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 308;
        _la = this._input.LA(1);
        if(!(_la===ABLParser.T__24 || _la===ABLParser.T__25)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 309;
        this.ablLiteral();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PersistenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_persistence;
    return this;
}

PersistenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PersistenceContext.prototype.constructor = PersistenceContext;

PersistenceContext.prototype.WHEN_FAILS = function() {
    return this.getToken(ABLParser.WHEN_FAILS, 0);
};

PersistenceContext.prototype.WHEN_SUCCEEDS = function() {
    return this.getToken(ABLParser.WHEN_SUCCEEDS, 0);
};

PersistenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterPersistence(this);
	}
};

PersistenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitPersistence(this);
	}
};




ABLParser.PersistenceContext = PersistenceContext;

ABLParser.prototype.persistence = function() {

    var localctx = new PersistenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, ABLParser.RULE_persistence);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 311;
        this.match(ABLParser.T__26);
        this.state = 313;
        _la = this._input.LA(1);
        if(_la===ABLParser.WHEN_FAILS || _la===ABLParser.WHEN_SUCCEEDS) {
            this.state = 312;
            _la = this._input.LA(1);
            if(!(_la===ABLParser.WHEN_FAILS || _la===ABLParser.WHEN_SUCCEEDS)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NamedPropertyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_namedProperty;
    return this;
}

NamedPropertyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamedPropertyContext.prototype.constructor = NamedPropertyContext;

NamedPropertyContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

NamedPropertyContext.prototype.ablExpression = function() {
    return this.getTypedRuleContext(AblExpressionContext,0);
};

NamedPropertyContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterNamedProperty(this);
	}
};

NamedPropertyContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitNamedProperty(this);
	}
};




ABLParser.NamedPropertyContext = NamedPropertyContext;

ABLParser.prototype.namedProperty = function() {

    var localctx = new NamedPropertyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, ABLParser.RULE_namedProperty);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 315;
        this.match(ABLParser.T__15);
        this.state = 316;
        this.name();
        this.state = 317;
        this.ablExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StepModifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_stepModifier;
    return this;
}

StepModifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StepModifierContext.prototype.constructor = StepModifierContext;

StepModifierContext.prototype.IGNORE_FAILURE = function() {
    return this.getToken(ABLParser.IGNORE_FAILURE, 0);
};

StepModifierContext.prototype.EFFECT_ONLY = function() {
    return this.getToken(ABLParser.EFFECT_ONLY, 0);
};

StepModifierContext.prototype.TEAM_EFFECT_ONLY = function() {
    return this.getToken(ABLParser.TEAM_EFFECT_ONLY, 0);
};

StepModifierContext.prototype.POST = function() {
    return this.getToken(ABLParser.POST, 0);
};

StepModifierContext.prototype.POST_TO = function() {
    return this.getToken(ABLParser.POST_TO, 0);
};

StepModifierContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

StepModifierContext.prototype.TEAMNEEDED = function() {
    return this.getToken(ABLParser.TEAMNEEDED, 0);
};

StepModifierContext.prototype.ONENEEDED = function() {
    return this.getToken(ABLParser.ONENEEDED, 0);
};

StepModifierContext.prototype.priorityModifier = function() {
    return this.getTypedRuleContext(PriorityModifierContext,0);
};

StepModifierContext.prototype.persistence = function() {
    return this.getTypedRuleContext(PersistenceContext,0);
};

StepModifierContext.prototype.namedProperty = function() {
    return this.getTypedRuleContext(NamedPropertyContext,0);
};

StepModifierContext.prototype.successTest = function() {
    return this.getTypedRuleContext(SuccessTestContext,0);
};

StepModifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterStepModifier(this);
	}
};

StepModifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitStepModifier(this);
	}
};




ABLParser.StepModifierContext = StepModifierContext;

ABLParser.prototype.stepModifier = function() {

    var localctx = new StepModifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, ABLParser.RULE_stepModifier);
    try {
        this.state = 331;
        switch(this._input.LA(1)) {
        case ABLParser.IGNORE_FAILURE:
            this.enterOuterAlt(localctx, 1);
            this.state = 319;
            this.match(ABLParser.IGNORE_FAILURE);
            break;
        case ABLParser.EFFECT_ONLY:
            this.enterOuterAlt(localctx, 2);
            this.state = 320;
            this.match(ABLParser.EFFECT_ONLY);
            break;
        case ABLParser.TEAM_EFFECT_ONLY:
            this.enterOuterAlt(localctx, 3);
            this.state = 321;
            this.match(ABLParser.TEAM_EFFECT_ONLY);
            break;
        case ABLParser.POST:
            this.enterOuterAlt(localctx, 4);
            this.state = 322;
            this.match(ABLParser.POST);
            break;
        case ABLParser.POST_TO:
            this.enterOuterAlt(localctx, 5);
            this.state = 323;
            this.match(ABLParser.POST_TO);
            this.state = 324;
            this.name();
            break;
        case ABLParser.TEAMNEEDED:
            this.enterOuterAlt(localctx, 6);
            this.state = 325;
            this.match(ABLParser.TEAMNEEDED);
            break;
        case ABLParser.ONENEEDED:
            this.enterOuterAlt(localctx, 7);
            this.state = 326;
            this.match(ABLParser.ONENEEDED);
            break;
        case ABLParser.T__24:
        case ABLParser.T__25:
            this.enterOuterAlt(localctx, 8);
            this.state = 327;
            this.priorityModifier();
            break;
        case ABLParser.T__26:
            this.enterOuterAlt(localctx, 9);
            this.state = 328;
            this.persistence();
            break;
        case ABLParser.T__15:
            this.enterOuterAlt(localctx, 10);
            this.state = 329;
            this.namedProperty();
            break;
        case ABLParser.T__21:
            this.enterOuterAlt(localctx, 11);
            this.state = 330;
            this.successTest();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BasicStepContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_basicStep;
    return this;
}

BasicStepContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BasicStepContext.prototype.constructor = BasicStepContext;

BasicStepContext.prototype.FAIL = function() {
    return this.getToken(ABLParser.FAIL, 0);
};

BasicStepContext.prototype.SUCCEED = function() {
    return this.getToken(ABLParser.SUCCEED, 0);
};

BasicStepContext.prototype.WAIT = function() {
    return this.getToken(ABLParser.WAIT, 0);
};

BasicStepContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterBasicStep(this);
	}
};

BasicStepContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitBasicStep(this);
	}
};




ABLParser.BasicStepContext = BasicStepContext;

ABLParser.prototype.basicStep = function() {

    var localctx = new BasicStepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, ABLParser.RULE_basicStep);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 333;
        _la = this._input.LA(1);
        if(!(((((_la - 47)) & ~0x1f) == 0 && ((1 << (_la - 47)) & ((1 << (ABLParser.FAIL - 47)) | (1 << (ABLParser.SUCCEED - 47)) | (1 << (ABLParser.WAIT - 47)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 334;
        this.match(ABLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_name;
    return this;
}

NameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameContext.prototype.constructor = NameContext;

NameContext.prototype.CHARS = function() {
    return this.getToken(ABLParser.CHARS, 0);
};

NameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterName(this);
	}
};

NameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitName(this);
	}
};




ABLParser.NameContext = NameContext;

ABLParser.prototype.name = function() {

    var localctx = new NameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, ABLParser.RULE_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 336;
        this.match(ABLParser.CHARS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NameListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_nameList;
    return this;
}

NameListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameListContext.prototype.constructor = NameListContext;

NameListContext.prototype.name = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameContext);
    } else {
        return this.getTypedRuleContext(NameContext,i);
    }
};

NameListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterNameList(this);
	}
};

NameListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitNameList(this);
	}
};




ABLParser.NameListContext = NameListContext;

ABLParser.prototype.nameList = function() {

    var localctx = new NameListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, ABLParser.RULE_nameList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 338;
        this.name();
        this.state = 343;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.T__9) {
            this.state = 339;
            this.match(ABLParser.T__9);
            this.state = 340;
            this.name();
            this.state = 345;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;

StringContext.prototype.STRING = function() {
    return this.getToken(ABLParser.STRING, 0);
};

StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitString(this);
	}
};




ABLParser.StringContext = StringContext;

ABLParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, ABLParser.RULE_string);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 346;
        this.match(ABLParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.ABLParser = ABLParser;
