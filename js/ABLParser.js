// Generated from ABL.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('./lib/antlr4/index');
var ABLListener = require('./ABLListener').ABLListener;
var grammarFileName = "ABL.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3S\u021f\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4",
    "\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t",
    "\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27",
    "\t\27\4\30\t\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4",
    "\36\t\36\4\37\t\37\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t",
    "\'\4(\t(\4)\t)\4*\t*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t",
    "\61\4\62\t\62\4\63\t\63\4\64\t\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t",
    "8\49\t9\3\2\5\2t\n\2\3\2\7\2w\n\2\f\2\16\2z\13\2\3\2\3\2\3\2\3\2\3\3",
    "\3\3\3\3\3\3\3\4\3\4\3\4\5\4\u0087\n\4\3\4\3\4\3\5\3\5\3\5\7\5\u008e",
    "\n\5\f\5\16\5\u0091\13\5\3\6\3\6\3\6\3\6\3\7\3\7\3\7\6\7\u009a\n\7\r",
    "\7\16\7\u009b\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\t\6\t\u00a8\n\t",
    "\r\t\16\t\u00a9\3\n\3\n\3\n\3\n\3\n\5\n\u00b1\n\n\3\13\3\13\5\13\u00b5",
    "\n\13\3\f\3\f\5\f\u00b9\n\f\3\f\3\f\7\f\u00bd\n\f\f\f\16\f\u00c0\13",
    "\f\3\f\3\f\3\r\3\r\5\r\u00c6\n\r\3\r\5\r\u00c9\n\r\3\r\5\r\u00cc\n\r",
    "\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\5\17\u00d9\n",
    "\17\3\20\3\20\3\20\3\20\7\20\u00df\n\20\f\20\16\20\u00e2\13\20\3\20",
    "\3\20\3\21\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\22\3",
    "\22\3\23\3\23\3\23\3\23\3\23\5\23\u00f8\n\23\3\23\3\23\3\23\3\23\5\23",
    "\u00fe\n\23\3\23\3\23\7\23\u0102\n\23\f\23\16\23\u0105\13\23\3\23\5",
    "\23\u0108\n\23\3\24\3\24\3\24\3\24\5\24\u010e\n\24\3\24\3\24\7\24\u0112",
    "\n\24\f\24\16\24\u0115\13\24\3\24\3\24\3\25\3\25\3\25\3\25\3\25\3\26",
    "\3\26\3\27\3\27\3\27\3\27\3\30\3\30\3\30\5\30\u0127\n\30\3\30\5\30\u012a",
    "\n\30\3\30\3\30\3\30\7\30\u012f\n\30\f\30\16\30\u0132\13\30\3\30\3\30",
    "\3\31\5\31\u0137\n\31\3\31\3\31\3\31\3\31\5\31\u013d\n\31\3\32\5\32",
    "\u0140\n\32\3\32\3\32\3\32\3\33\3\33\3\33\3\33\5\33\u0149\n\33\3\34",
    "\3\34\3\35\3\35\3\35\3\35\7\35\u0151\n\35\f\35\16\35\u0154\13\35\3\36",
    "\3\36\3\36\3\36\3\37\3\37\3\37\6\37\u015d\n\37\r\37\16\37\u015e\3\37",
    "\3\37\3 \3 \3!\3!\3!\3\"\3\"\3\"\3#\3#\3#\3$\3$\3$\3%\3%\3%\3&\3&\3",
    "&\3&\3\'\3\'\6\'\u017a\n\'\r\'\16\'\u017b\3(\3(\3(\3(\3)\3)\3)\3)\3",
    ")\3)\3)\5)\u0189\n)\3*\3*\3*\3+\3+\5+\u0190\n+\3,\3,\3,\3,\3-\3-\3-",
    "\3-\3-\3-\3-\3-\3-\3-\3-\3-\5-\u01a2\n-\3.\3.\3.\3/\3/\3/\3/\3/\3\60",
    "\5\60\u01ad\n\60\3\60\3\60\3\60\5\60\u01b2\n\60\3\60\3\60\5\60\u01b6",
    "\n\60\3\60\3\60\3\61\3\61\3\61\3\61\3\61\7\61\u01bf\n\61\f\61\16\61",
    "\u01c2\13\61\3\61\3\61\5\61\u01c6\n\61\3\61\3\61\3\61\5\61\u01cb\n\61",
    "\3\62\7\62\u01ce\n\62\f\62\16\62\u01d1\13\62\3\62\3\62\3\62\3\62\3\62",
    "\3\62\3\62\3\62\7\62\u01db\n\62\f\62\16\62\u01de\13\62\3\63\3\63\3\63",
    "\7\63\u01e3\n\63\f\63\16\63\u01e6\13\63\3\63\3\63\3\64\3\64\3\64\3\64",
    "\3\65\3\65\3\65\3\65\3\65\5\65\u01f3\n\65\3\66\3\66\3\66\3\66\5\66\u01f9",
    "\n\66\3\66\5\66\u01fc\n\66\3\66\7\66\u01ff\n\66\f\66\16\66\u0202\13",
    "\66\3\66\7\66\u0205\n\66\f\66\16\66\u0208\13\66\3\66\7\66\u020b\n\66",
    "\f\66\16\66\u020e\13\66\3\66\3\66\3\66\3\67\3\67\38\38\38\78\u0218\n",
    "8\f8\168\u021b\138\39\39\39\2\2:\2\4\6\b\n\f\16\20\22\24\26\30\32\34",
    "\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnp\2\r\3\2\66\67",
    "\3\2\'-\4\2\17\17\'\'\3\2%&\3\2\35\36\3\2/\60\3\28:\3\2BC\3\2EG\3\2",
    ">@\3\2KL\u0233\2s\3\2\2\2\4\177\3\2\2\2\6\u0083\3\2\2\2\b\u008f\3\2",
    "\2\2\n\u0092\3\2\2\2\f\u0096\3\2\2\2\16\u009f\3\2\2\2\20\u00a7\3\2\2",
    "\2\22\u00b0\3\2\2\2\24\u00b4\3\2\2\2\26\u00b6\3\2\2\2\30\u00cb\3\2\2",
    "\2\32\u00cd\3\2\2\2\34\u00d8\3\2\2\2\36\u00da\3\2\2\2 \u00e5\3\2\2\2",
    "\"\u00eb\3\2\2\2$\u00f2\3\2\2\2&\u0109\3\2\2\2(\u0118\3\2\2\2*\u011d",
    "\3\2\2\2,\u011f\3\2\2\2.\u0126\3\2\2\2\60\u0136\3\2\2\2\62\u013f\3\2",
    "\2\2\64\u0148\3\2\2\2\66\u014a\3\2\2\28\u014c\3\2\2\2:\u0155\3\2\2\2",
    "<\u0159\3\2\2\2>\u0162\3\2\2\2@\u0164\3\2\2\2B\u0167\3\2\2\2D\u016a",
    "\3\2\2\2F\u016d\3\2\2\2H\u0170\3\2\2\2J\u0173\3\2\2\2L\u0177\3\2\2\2",
    "N\u017d\3\2\2\2P\u0188\3\2\2\2R\u018a\3\2\2\2T\u018d\3\2\2\2V\u0191",
    "\3\2\2\2X\u01a1\3\2\2\2Z\u01a3\3\2\2\2\\\u01a6\3\2\2\2^\u01ac\3\2\2",
    "\2`\u01c5\3\2\2\2b\u01cf\3\2\2\2d\u01df\3\2\2\2f\u01e9\3\2\2\2h\u01f2",
    "\3\2\2\2j\u01f4\3\2\2\2l\u0212\3\2\2\2n\u0214\3\2\2\2p\u021c\3\2\2\2",
    "rt\5\4\3\2sr\3\2\2\2st\3\2\2\2tx\3\2\2\2uw\5\6\4\2vu\3\2\2\2wz\3\2\2",
    "\2xv\3\2\2\2xy\3\2\2\2y{\3\2\2\2zx\3\2\2\2{|\5\b\5\2|}\5j\66\2}~\7\2",
    "\2\3~\3\3\2\2\2\177\u0080\7\3\2\2\u0080\u0081\7L\2\2\u0081\u0082\7\4",
    "\2\2\u0082\5\3\2\2\2\u0083\u0084\7\5\2\2\u0084\u0086\7L\2\2\u0085\u0087",
    "\7H\2\2\u0086\u0085\3\2\2\2\u0086\u0087\3\2\2\2\u0087\u0088\3\2\2\2",
    "\u0088\u0089\7\4\2\2\u0089\7\3\2\2\2\u008a\u008b\7\6\2\2\u008b\u008c",
    "\7K\2\2\u008c\u008e\7\4\2\2\u008d\u008a\3\2\2\2\u008e\u0091\3\2\2\2",
    "\u008f\u008d\3\2\2\2\u008f\u0090\3\2\2\2\u0090\t\3\2\2\2\u0091\u008f",
    "\3\2\2\2\u0092\u0093\7D\2\2\u0093\u0094\t\2\2\2\u0094\u0095\7\4\2\2",
    "\u0095\13\3\2\2\2\u0096\u0097\7\7\2\2\u0097\u0099\5l\67\2\u0098\u009a",
    "\5l\67\2\u0099\u0098\3\2\2\2\u009a\u009b\3\2\2\2\u009b\u0099\3\2\2\2",
    "\u009b\u009c\3\2\2\2\u009c\u009d\3\2\2\2\u009d\u009e\7\4\2\2\u009e\r",
    "\3\2\2\2\u009f\u00a0\7\b\2\2\u00a0\u00a1\7\t\2\2\u00a1\u00a2\7K\2\2",
    "\u00a2\u00a3\7\n\2\2\u00a3\u00a4\7K\2\2\u00a4\u00a5\7\4\2\2\u00a5\17",
    "\3\2\2\2\u00a6\u00a8\5\16\b\2\u00a7\u00a6\3\2\2\2\u00a8\u00a9\3\2\2",
    "\2\u00a9\u00a7\3\2\2\2\u00a9\u00aa\3\2\2\2\u00aa\21\3\2\2\2\u00ab\u00b1",
    "\7N\2\2\u00ac\u00b1\7M\2\2\u00ad\u00b1\5p9\2\u00ae\u00b1\7I\2\2\u00af",
    "\u00b1\7J\2\2\u00b0\u00ab\3\2\2\2\u00b0\u00ac\3\2\2\2\u00b0\u00ad\3",
    "\2\2\2\u00b0\u00ae\3\2\2\2\u00b0\u00af\3\2\2\2\u00b1\23\3\2\2\2\u00b2",
    "\u00b5\5l\67\2\u00b3\u00b5\5\22\n\2\u00b4\u00b2\3\2\2\2\u00b4\u00b3",
    "\3\2\2\2\u00b5\25\3\2\2\2\u00b6\u00b8\7\13\2\2\u00b7\u00b9\5\30\r\2",
    "\u00b8\u00b7\3\2\2\2\u00b8\u00b9\3\2\2\2\u00b9\u00be\3\2\2\2\u00ba\u00bb",
    "\7\f\2\2\u00bb\u00bd\5\30\r\2\u00bc\u00ba\3\2\2\2\u00bd\u00c0\3\2\2",
    "\2\u00be\u00bc\3\2\2\2\u00be\u00bf\3\2\2\2\u00bf\u00c1\3\2\2\2\u00c0",
    "\u00be\3\2\2\2\u00c1\u00c2\7\r\2\2\u00c2\27\3\2\2\2\u00c3\u00c5\7K\2",
    "\2\u00c4\u00c6\5\24\13\2\u00c5\u00c4\3\2\2\2\u00c5\u00c6\3\2\2\2\u00c6",
    "\u00cc\3\2\2\2\u00c7\u00c9\7K\2\2\u00c8\u00c7\3\2\2\2\u00c8\u00c9\3",
    "\2\2\2\u00c9\u00ca\3\2\2\2\u00ca\u00cc\5\24\13\2\u00cb\u00c3\3\2\2\2",
    "\u00cb\u00c8\3\2\2\2\u00cc\31\3\2\2\2\u00cd\u00ce\7\b\2\2\u00ce\u00cf",
    "\7\16\2\2\u00cf\u00d0\5l\67\2\u00d0\u00d1\5\26\f\2\u00d1\u00d2\7\n\2",
    "\2\u00d2\u00d3\7K\2\2\u00d3\u00d4\7\4\2\2\u00d4\33\3\2\2\2\u00d5\u00d9",
    "\5\36\20\2\u00d6\u00d9\5\"\22\2\u00d7\u00d9\5 \21\2\u00d8\u00d5\3\2",
    "\2\2\u00d8\u00d6\3\2\2\2\u00d8\u00d7\3\2\2\2\u00d9\35\3\2\2\2\u00da",
    "\u00db\5l\67\2\u00db\u00e0\5l\67\2\u00dc\u00dd\7\f\2\2\u00dd\u00df\5",
    "l\67\2\u00de\u00dc\3\2\2\2\u00df\u00e2\3\2\2\2\u00e0\u00de\3\2\2\2\u00e0",
    "\u00e1\3\2\2\2\u00e1\u00e3\3\2\2\2\u00e2\u00e0\3\2\2\2\u00e3\u00e4\7",
    "\4\2\2\u00e4\37\3\2\2\2\u00e5\u00e6\5l\67\2\u00e6\u00e7\5l\67\2\u00e7",
    "\u00e8\7\17\2\2\u00e8\u00e9\5\22\n\2\u00e9\u00ea\7\4\2\2\u00ea!\3\2",
    "\2\2\u00eb\u00ec\5l\67\2\u00ec\u00ed\5l\67\2\u00ed\u00ee\7\17\2\2\u00ee",
    "\u00ef\7\20\2\2\u00ef\u00f0\5$\23\2\u00f0\u00f1\7\4\2\2\u00f1#\3\2\2",
    "\2\u00f2\u0107\5l\67\2\u00f3\u00f4\7\13\2\2\u00f4\u00f7\5l\67\2\u00f5",
    "\u00f6\7\13\2\2\u00f6\u00f8\7\r\2\2\u00f7\u00f5\3\2\2\2\u00f7\u00f8",
    "\3\2\2\2\u00f8\u00f9\3\2\2\2\u00f9\u00fa\7\r\2\2\u00fa\u0108\3\2\2\2",
    "\u00fb\u00fd\7\21\2\2\u00fc\u00fe\5p9\2\u00fd\u00fc\3\2\2\2\u00fd\u00fe",
    "\3\2\2\2\u00fe\u0103\3\2\2\2\u00ff\u0100\7\f\2\2\u0100\u0102\5p9\2\u0101",
    "\u00ff\3\2\2\2\u0102\u0105\3\2\2\2\u0103\u0101\3\2\2\2\u0103\u0104\3",
    "\2\2\2\u0104\u0106\3\2\2\2\u0105\u0103\3\2\2\2\u0106\u0108\7\22\2\2",
    "\u0107\u00f3\3\2\2\2\u0107\u00fb\3\2\2\2\u0108%\3\2\2\2\u0109\u010a",
    "\7\t\2\2\u010a\u010d\7K\2\2\u010b\u010c\7\23\2\2\u010c\u010e\7K\2\2",
    "\u010d\u010b\3\2\2\2\u010d\u010e\3\2\2\2\u010e\u010f\3\2\2\2\u010f\u0113",
    "\7\21\2\2\u0110\u0112\5\34\17\2\u0111\u0110\3\2\2\2\u0112\u0115\3\2",
    "\2\2\u0113\u0111\3\2\2\2\u0113\u0114\3\2\2\2\u0114\u0116\3\2\2\2\u0115",
    "\u0113\3\2\2\2\u0116\u0117\7\22\2\2\u0117\'\3\2\2\2\u0118\u0119\7\24",
    "\2\2\u0119\u011a\7K\2\2\u011a\u011b\5l\67\2\u011b\u011c\7\4\2\2\u011c",
    ")\3\2\2\2\u011d\u011e\t\3\2\2\u011e+\3\2\2\2\u011f\u0120\5l\67\2\u0120",
    "\u0121\5*\26\2\u0121\u0122\5\24\13\2\u0122-\3\2\2\2\u0123\u0124\5l\67",
    "\2\u0124\u0125\t\4\2\2\u0125\u0127\3\2\2\2\u0126\u0123\3\2\2\2\u0126",
    "\u0127\3\2\2\2\u0127\u0129\3\2\2\2\u0128\u012a\7.\2\2\u0129\u0128\3",
    "\2\2\2\u0129\u012a\3\2\2\2\u012a\u012b\3\2\2\2\u012b\u012c\7\13\2\2",
    "\u012c\u0130\7K\2\2\u012d\u012f\5,\27\2\u012e\u012d\3\2\2\2\u012f\u0132",
    "\3\2\2\2\u0130\u012e\3\2\2\2\u0130\u0131\3\2\2\2\u0131\u0133\3\2\2\2",
    "\u0132\u0130\3\2\2\2\u0133\u0134\7\r\2\2\u0134/\3\2\2\2\u0135\u0137",
    "\7.\2\2\u0136\u0135\3\2\2\2\u0136\u0137\3\2\2\2\u0137\u0138\3\2\2\2",
    "\u0138\u013c\5\24\13\2\u0139\u013a\5*\26\2\u013a\u013b\5\24\13\2\u013b",
    "\u013d\3\2\2\2\u013c\u0139\3\2\2\2\u013c\u013d\3\2\2\2\u013d\61\3\2",
    "\2\2\u013e\u0140\7.\2\2\u013f\u013e\3\2\2\2\u013f\u0140\3\2\2\2\u0140",
    "\u0141\3\2\2\2\u0141\u0142\5l\67\2\u0142\u0143\5\26\f\2\u0143\63\3\2",
    "\2\2\u0144\u0149\7I\2\2\u0145\u0149\5l\67\2\u0146\u0149\5\62\32\2\u0147",
    "\u0149\5\60\31\2\u0148\u0144\3\2\2\2\u0148\u0145\3\2\2\2\u0148\u0146",
    "\3\2\2\2\u0148\u0147\3\2\2\2\u0149\65\3\2\2\2\u014a\u014b\t\5\2\2\u014b",
    "\67\3\2\2\2\u014c\u0152\5\64\33\2\u014d\u014e\5\66\34\2\u014e\u014f",
    "\5\64\33\2\u014f\u0151\3\2\2\2\u0150\u014d\3\2\2\2\u0151\u0154\3\2\2",
    "\2\u0152\u0150\3\2\2\2\u0152\u0153\3\2\2\2\u01539\3\2\2\2\u0154\u0152",
    "\3\2\2\2\u0155\u0156\7\13\2\2\u0156\u0157\58\35\2\u0157\u0158\7\r\2",
    "\2\u0158;\3\2\2\2\u0159\u015c\7\21\2\2\u015a\u015d\5.\30\2\u015b\u015d",
    "\5:\36\2\u015c\u015a\3\2\2\2\u015c\u015b\3\2\2\2\u015d\u015e\3\2\2\2",
    "\u015e\u015c\3\2\2\2\u015e\u015f\3\2\2\2\u015f\u0160\3\2\2\2\u0160\u0161",
    "\7\22\2\2\u0161=\3\2\2\2\u0162\u0163\5<\37\2\u0163?\3\2\2\2\u0164\u0165",
    "\7\25\2\2\u0165\u0166\5> \2\u0166A\3\2\2\2\u0167\u0168\7\26\2\2\u0168",
    "\u0169\5> \2\u0169C\3\2\2\2\u016a\u016b\7\27\2\2\u016b\u016c\5> \2\u016c",
    "E\3\2\2\2\u016d\u016e\7\30\2\2\u016e\u016f\5> \2\u016fG\3\2\2\2\u0170",
    "\u0171\7\31\2\2\u0171\u0172\5> \2\u0172I\3\2\2\2\u0173\u0174\7\32\2",
    "\2\u0174\u0175\5\22\n\2\u0175\u0176\7\4\2\2\u0176K\3\2\2\2\u0177\u0179",
    "\7\33\2\2\u0178\u017a\5l\67\2\u0179\u0178\3\2\2\2\u017a\u017b\3\2\2",
    "\2\u017b\u0179\3\2\2\2\u017b\u017c\3\2\2\2\u017cM\3\2\2\2\u017d\u017e",
    "\7\34\2\2\u017e\u017f\5\22\n\2\u017f\u0180\7\4\2\2\u0180O\3\2\2\2\u0181",
    "\u0189\5@!\2\u0182\u0189\5N(\2\u0183\u0189\5B\"\2\u0184\u0189\5D#\2",
    "\u0185\u0189\5J&\2\u0186\u0189\5L\'\2\u0187\u0189\5F$\2\u0188\u0181",
    "\3\2\2\2\u0188\u0182\3\2\2\2\u0188\u0183\3\2\2\2\u0188\u0184\3\2\2\2",
    "\u0188\u0185\3\2\2\2\u0188\u0186\3\2\2\2\u0188\u0187\3\2\2\2\u0189Q",
    "\3\2\2\2\u018a\u018b\t\6\2\2\u018b\u018c\5\22\n\2\u018cS\3\2\2\2\u018d",
    "\u018f\7\37\2\2\u018e\u0190\t\7\2\2\u018f\u018e\3\2\2\2\u018f\u0190",
    "\3\2\2\2\u0190U\3\2\2\2\u0191\u0192\7\24\2\2\u0192\u0193\5l\67\2\u0193",
    "\u0194\5\24\13\2\u0194W\3\2\2\2\u0195\u01a2\7\61\2\2\u0196\u01a2\7\62",
    "\2\2\u0197\u01a2\7\63\2\2\u0198\u01a2\7\64\2\2\u0199\u019a\7\65\2\2",
    "\u019a\u01a2\5l\67\2\u019b\u01a2\7\66\2\2\u019c\u01a2\7\67\2\2\u019d",
    "\u01a2\5R*\2\u019e\u01a2\5T+\2\u019f\u01a2\5V,\2\u01a0\u01a2\5H%\2\u01a1",
    "\u0195\3\2\2\2\u01a1\u0196\3\2\2\2\u01a1\u0197\3\2\2\2\u01a1\u0198\3",
    "\2\2\2\u01a1\u0199\3\2\2\2\u01a1\u019b\3\2\2\2\u01a1\u019c\3\2\2\2\u01a1",
    "\u019d\3\2\2\2\u01a1\u019e\3\2\2\2\u01a1\u019f\3\2\2\2\u01a1\u01a0\3",
    "\2\2\2\u01a2Y\3\2\2\2\u01a3\u01a4\t\b\2\2\u01a4\u01a5\7\4\2\2\u01a5",
    "[\3\2\2\2\u01a6\u01a7\7 \2\2\u01a7\u01a8\5l\67\2\u01a8\u01a9\5\26\f",
    "\2\u01a9\u01aa\7\4\2\2\u01aa]\3\2\2\2\u01ab\u01ad\7E\2\2\u01ac\u01ab",
    "\3\2\2\2\u01ac\u01ad\3\2\2\2\u01ad\u01ae\3\2\2\2\u01ae\u01af\t\t\2\2",
    "\u01af\u01b1\5l\67\2\u01b0\u01b2\5\26\f\2\u01b1\u01b0\3\2\2\2\u01b1",
    "\u01b2\3\2\2\2\u01b2\u01b5\3\2\2\2\u01b3\u01b4\7!\2\2\u01b4\u01b6\5",
    "l\67\2\u01b5\u01b3\3\2\2\2\u01b5\u01b6\3\2\2\2\u01b6\u01b7\3\2\2\2\u01b7",
    "\u01b8\7\4\2\2\u01b8_\3\2\2\2\u01b9\u01ba\7\n\2\2\u01ba\u01bb\7\13\2",
    "\2\u01bb\u01c0\5X-\2\u01bc\u01bd\7\f\2\2\u01bd\u01bf\5X-\2\u01be\u01bc",
    "\3\2\2\2\u01bf\u01c2\3\2\2\2\u01c0\u01be\3\2\2\2\u01c0\u01c1\3\2\2\2",
    "\u01c1\u01c3\3\2\2\2\u01c2\u01c0\3\2\2\2\u01c3\u01c4\7\r\2\2\u01c4\u01c6",
    "\3\2\2\2\u01c5\u01b9\3\2\2\2\u01c5\u01c6\3\2\2\2\u01c6\u01ca\3\2\2\2",
    "\u01c7\u01cb\5^\60\2\u01c8\u01cb\5\\/\2\u01c9\u01cb\5Z.\2\u01ca\u01c7",
    "\3\2\2\2\u01ca\u01c8\3\2\2\2\u01ca\u01c9\3\2\2\2\u01cba\3\2\2\2\u01cc",
    "\u01ce\t\n\2\2\u01cd\u01cc\3\2\2\2\u01ce\u01d1\3\2\2\2\u01cf\u01cd\3",
    "\2\2\2\u01cf\u01d0\3\2\2\2\u01d0\u01d2\3\2\2\2\u01d1\u01cf\3\2\2\2\u01d2",
    "\u01d3\t\13\2\2\u01d3\u01d4\7A\2\2\u01d4\u01d5\5l\67\2\u01d5\u01d6\5",
    "\26\f\2\u01d6\u01dc\7\21\2\2\u01d7\u01db\5P)\2\u01d8\u01db\5\34\17\2",
    "\u01d9\u01db\5`\61\2\u01da\u01d7\3\2\2\2\u01da\u01d8\3\2\2\2\u01da\u01d9",
    "\3\2\2\2\u01db\u01de\3\2\2\2\u01dc\u01da\3\2\2\2\u01dc\u01dd\3\2\2\2",
    "\u01ddc\3\2\2\2\u01de\u01dc\3\2\2\2\u01df\u01e0\7\"\2\2\u01e0\u01e4",
    "\7\21\2\2\u01e1\u01e3\5`\61\2\u01e2\u01e1\3\2\2\2\u01e3\u01e6\3\2\2",
    "\2\u01e4\u01e2\3\2\2\2\u01e4\u01e5\3\2\2\2\u01e5\u01e7\3\2\2\2\u01e6",
    "\u01e4\3\2\2\2\u01e7\u01e8\7\22\2\2\u01e8e\3\2\2\2\u01e9\u01ea\7#\2",
    "\2\u01ea\u01eb\5l\67\2\u01eb\u01ec\7\4\2\2\u01ecg\3\2\2\2\u01ed\u01f3",
    "\5\16\b\2\u01ee\u01f3\5\32\16\2\u01ef\u01f3\5&\24\2\u01f0\u01f3\5(\25",
    "\2\u01f1\u01f3\5\34\17\2\u01f2\u01ed\3\2\2\2\u01f2\u01ee\3\2\2\2\u01f2",
    "\u01ef\3\2\2\2\u01f2\u01f0\3\2\2\2\u01f2\u01f1\3\2\2\2\u01f3i\3\2\2",
    "\2\u01f4\u01f5\7$\2\2\u01f5\u01f6\7K\2\2\u01f6\u01f8\7\21\2\2\u01f7",
    "\u01f9\5\n\6\2\u01f8\u01f7\3\2\2\2\u01f8\u01f9\3\2\2\2\u01f9\u01fb\3",
    "\2\2\2\u01fa\u01fc\5f\64\2\u01fb\u01fa\3\2\2\2\u01fb\u01fc\3\2\2\2\u01fc",
    "\u0200\3\2\2\2\u01fd\u01ff\5\f\7\2\u01fe\u01fd\3\2\2\2\u01ff\u0202\3",
    "\2\2\2\u0200\u01fe\3\2\2\2\u0200\u0201\3\2\2\2\u0201\u0206\3\2\2\2\u0202",
    "\u0200\3\2\2\2\u0203\u0205\5h\65\2\u0204\u0203\3\2\2\2\u0205\u0208\3",
    "\2\2\2\u0206\u0204\3\2\2\2\u0206\u0207\3\2\2\2\u0207\u020c\3\2\2\2\u0208",
    "\u0206\3\2\2\2\u0209\u020b\5b\62\2\u020a\u0209\3\2\2\2\u020b\u020e\3",
    "\2\2\2\u020c\u020a\3\2\2\2\u020c\u020d\3\2\2\2\u020d\u020f\3\2\2\2\u020e",
    "\u020c\3\2\2\2\u020f\u0210\5d\63\2\u0210\u0211\7\22\2\2\u0211k\3\2\2",
    "\2\u0212\u0213\t\f\2\2\u0213m\3\2\2\2\u0214\u0219\5l\67\2\u0215\u0216",
    "\7\f\2\2\u0216\u0218\5l\67\2\u0217\u0215\3\2\2\2\u0218\u021b\3\2\2\2",
    "\u0219\u0217\3\2\2\2\u0219\u021a\3\2\2\2\u021ao\3\2\2\2\u021b\u0219",
    "\3\2\2\2\u021c\u021d\7O\2\2\u021dq\3\2\2\2\66sx\u0086\u008f\u009b\u00a9",
    "\u00b0\u00b4\u00b8\u00be\u00c5\u00c8\u00cb\u00d8\u00e0\u00f7\u00fd\u0103",
    "\u0107\u010d\u0113\u0126\u0129\u0130\u0136\u013c\u013f\u0148\u0152\u015c",
    "\u015e\u017b\u0188\u018f\u01a1\u01ac\u01b1\u01b5\u01c0\u01c5\u01ca\u01cf",
    "\u01da\u01dc\u01e4\u01f2\u01f8\u01fb\u0200\u0206\u020c\u0219"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'package'", "';'", "'import'", "'constants'", 
                     "'conflict'", "'register'", "'wme'", "'with'", "'('", 
                     "','", "')'", "'action'", "'='", "'new'", "'{'", "'}'", 
                     "'extends'", "'property'", "'precondition'", "'context_condition'", 
                     "'entry_condition'", "'success_condition'", "'success_test'", 
                     "'number_needed_for_success'", "'teammembers'", "'specificity'", 
                     "'priority'", "'priority_modifier'", "'persistent'", 
                     "'act'", "'at'", "'initial_tree'", "'decision_cycle_sm_call'", 
                     "'behaving_entity'", "'&&'", "'||'", "'::'", "'>'", 
                     "'>='", "'<'", "'<='", "'=='", "'!='", "'!'", "'when_fails'", 
                     "'when_succeeds'", "'ignore_failure'", "'effect_only'", 
                     "'team_effect_only'", "'post'", "'post_to'", "'team_needed_for_success'", 
                     "'one_needed_for_success'", "'fail'", "'succeed'", 
                     "'wait'", "'move_step'", "'delete_step'", "'add_step'", 
                     "'sequential'", "'parallel'", "'collection'", 'null', 
                     "'subgoal'", "'spawngoal'", "'joint_goal_success_negotiation'", 
                     "'joint'", "'atomic'", "'adaptive'", "'*'", 'null', 
                     "'Null'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      "AND", "OR", "BIND", "GT", "GE", "LT", "LE", "EQ", 
                      "NE", "BANG", "WHEN_FAILS", "WHEN_SUCCEEDS", "IGNORE_FAILURE", 
                      "EFFECT_ONLY", "TEAM_EFFECT_ONLY", "POST", "POST_TO", 
                      "TEAMNEEDED", "ONENEEDED", "FAIL", "SUCCEED", "WAIT", 
                      "MOVESTEP", "DELETESTEP", "ADDSTEP", "SEQ", "PAR", 
                      "COLL", "BEH", "SUBGOAL", "SPAWNGOAL", "JOINTNEG", 
                      "JOINT", "ATOMIC", "ADAPTIVE", "STAR", "BOOL", "NULL", 
                      "TYPE", "CHARS", "FLOAT", "INT", "STRING", "WS", "COMMENT", 
                      "LINE_COMMENT", "ANYTHING" ];

var ruleNames =  [ "prog", "g_package", "g_import", "constants", "teamNeeded", 
                   "conflictDecl", "wmeRegistration", "wmeRegistration_plural", 
                   "ablLiteral", "ablExpression", "params", "param", "actionRegistration", 
                   "ablVariableDeclaration", "ablVariableDeclarations", 
                   "ablVariableLiteralAssignment", "ablVariableAssignment", 
                   "classConstruction", "wmeDeclaration", "propertyDeclaration", 
                   "operator", "wmeFieldTest", "wmeTest", "binaryOp", "javaMethod", 
                   "clause", "booleanHelper", "mixedCall", "conditionalExpression", 
                   "wmeTestSequence", "testExpression", "precondition", 
                   "contextCondition", "entryCondition", "successCondition", 
                   "successTest", "numberNeededForSuccess", "teamMemberSpecifier", 
                   "specificity", "behaviourModifier", "priorityModifier", 
                   "persistence", "namedProperty", "stepModifier", "basicStep", 
                   "primitiveAct", "goalStep", "behaviourStep", "behaviourDefinition", 
                   "initialTree", "decisionCycleSMCallDeclaration", "ablDeclaration", 
                   "behavingEntity", "name", "nameList", "string" ];

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
ABLParser.T__27 = 28;
ABLParser.T__28 = 29;
ABLParser.T__29 = 30;
ABLParser.T__30 = 31;
ABLParser.T__31 = 32;
ABLParser.T__32 = 33;
ABLParser.T__33 = 34;
ABLParser.AND = 35;
ABLParser.OR = 36;
ABLParser.BIND = 37;
ABLParser.GT = 38;
ABLParser.GE = 39;
ABLParser.LT = 40;
ABLParser.LE = 41;
ABLParser.EQ = 42;
ABLParser.NE = 43;
ABLParser.BANG = 44;
ABLParser.WHEN_FAILS = 45;
ABLParser.WHEN_SUCCEEDS = 46;
ABLParser.IGNORE_FAILURE = 47;
ABLParser.EFFECT_ONLY = 48;
ABLParser.TEAM_EFFECT_ONLY = 49;
ABLParser.POST = 50;
ABLParser.POST_TO = 51;
ABLParser.TEAMNEEDED = 52;
ABLParser.ONENEEDED = 53;
ABLParser.FAIL = 54;
ABLParser.SUCCEED = 55;
ABLParser.WAIT = 56;
ABLParser.MOVESTEP = 57;
ABLParser.DELETESTEP = 58;
ABLParser.ADDSTEP = 59;
ABLParser.SEQ = 60;
ABLParser.PAR = 61;
ABLParser.COLL = 62;
ABLParser.BEH = 63;
ABLParser.SUBGOAL = 64;
ABLParser.SPAWNGOAL = 65;
ABLParser.JOINTNEG = 66;
ABLParser.JOINT = 67;
ABLParser.ATOMIC = 68;
ABLParser.ADAPTIVE = 69;
ABLParser.STAR = 70;
ABLParser.BOOL = 71;
ABLParser.NULL = 72;
ABLParser.TYPE = 73;
ABLParser.CHARS = 74;
ABLParser.FLOAT = 75;
ABLParser.INT = 76;
ABLParser.STRING = 77;
ABLParser.WS = 78;
ABLParser.COMMENT = 79;
ABLParser.LINE_COMMENT = 80;
ABLParser.ANYTHING = 81;

ABLParser.RULE_prog = 0;
ABLParser.RULE_g_package = 1;
ABLParser.RULE_g_import = 2;
ABLParser.RULE_constants = 3;
ABLParser.RULE_teamNeeded = 4;
ABLParser.RULE_conflictDecl = 5;
ABLParser.RULE_wmeRegistration = 6;
ABLParser.RULE_wmeRegistration_plural = 7;
ABLParser.RULE_ablLiteral = 8;
ABLParser.RULE_ablExpression = 9;
ABLParser.RULE_params = 10;
ABLParser.RULE_param = 11;
ABLParser.RULE_actionRegistration = 12;
ABLParser.RULE_ablVariableDeclaration = 13;
ABLParser.RULE_ablVariableDeclarations = 14;
ABLParser.RULE_ablVariableLiteralAssignment = 15;
ABLParser.RULE_ablVariableAssignment = 16;
ABLParser.RULE_classConstruction = 17;
ABLParser.RULE_wmeDeclaration = 18;
ABLParser.RULE_propertyDeclaration = 19;
ABLParser.RULE_operator = 20;
ABLParser.RULE_wmeFieldTest = 21;
ABLParser.RULE_wmeTest = 22;
ABLParser.RULE_binaryOp = 23;
ABLParser.RULE_javaMethod = 24;
ABLParser.RULE_clause = 25;
ABLParser.RULE_booleanHelper = 26;
ABLParser.RULE_mixedCall = 27;
ABLParser.RULE_conditionalExpression = 28;
ABLParser.RULE_wmeTestSequence = 29;
ABLParser.RULE_testExpression = 30;
ABLParser.RULE_precondition = 31;
ABLParser.RULE_contextCondition = 32;
ABLParser.RULE_entryCondition = 33;
ABLParser.RULE_successCondition = 34;
ABLParser.RULE_successTest = 35;
ABLParser.RULE_numberNeededForSuccess = 36;
ABLParser.RULE_teamMemberSpecifier = 37;
ABLParser.RULE_specificity = 38;
ABLParser.RULE_behaviourModifier = 39;
ABLParser.RULE_priorityModifier = 40;
ABLParser.RULE_persistence = 41;
ABLParser.RULE_namedProperty = 42;
ABLParser.RULE_stepModifier = 43;
ABLParser.RULE_basicStep = 44;
ABLParser.RULE_primitiveAct = 45;
ABLParser.RULE_goalStep = 46;
ABLParser.RULE_behaviourStep = 47;
ABLParser.RULE_behaviourDefinition = 48;
ABLParser.RULE_initialTree = 49;
ABLParser.RULE_decisionCycleSMCallDeclaration = 50;
ABLParser.RULE_ablDeclaration = 51;
ABLParser.RULE_behavingEntity = 52;
ABLParser.RULE_name = 53;
ABLParser.RULE_nameList = 54;
ABLParser.RULE_string = 55;

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

ProgContext.prototype.constants = function() {
    return this.getTypedRuleContext(ConstantsContext,0);
};

ProgContext.prototype.behavingEntity = function() {
    return this.getTypedRuleContext(BehavingEntityContext,0);
};

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
        this.state = 113;
        _la = this._input.LA(1);
        if(_la===ABLParser.T__0) {
            this.state = 112;
            this.g_package();
        }

        this.state = 118;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.T__2) {
            this.state = 115;
            this.g_import();
            this.state = 120;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 121;
        this.constants();
        this.state = 122;
        this.behavingEntity();
        this.state = 123;
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

G_packageContext.prototype.CHARS = function() {
    return this.getToken(ABLParser.CHARS, 0);
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
        this.state = 125;
        this.match(ABLParser.T__0);
        this.state = 126;
        this.match(ABLParser.CHARS);
        this.state = 127;
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

G_importContext.prototype.CHARS = function() {
    return this.getToken(ABLParser.CHARS, 0);
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
        this.state = 129;
        this.match(ABLParser.T__2);
        this.state = 130;
        this.match(ABLParser.CHARS);
        this.state = 132;
        _la = this._input.LA(1);
        if(_la===ABLParser.STAR) {
            this.state = 131;
            this.match(ABLParser.STAR);
        }

        this.state = 134;
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
        this.state = 141;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.T__3) {
            this.state = 136;
            this.match(ABLParser.T__3);
            this.state = 137;
            this.match(ABLParser.TYPE);
            this.state = 138;
            this.match(ABLParser.T__1);
            this.state = 143;
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
        this.state = 144;
        this.match(ABLParser.JOINTNEG);
        this.state = 145;
        _la = this._input.LA(1);
        if(!(_la===ABLParser.TEAMNEEDED || _la===ABLParser.ONENEEDED)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 146;
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
        this.state = 148;
        this.match(ABLParser.T__4);

        this.state = 149;
        this.name();
        this.state = 151; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 150;
            this.name();
            this.state = 153; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ABLParser.TYPE || _la===ABLParser.CHARS);
        this.state = 155;
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
        this.state = 157;
        this.match(ABLParser.T__5);
        this.state = 158;
        this.match(ABLParser.T__6);
        this.state = 159;
        this.match(ABLParser.TYPE);
        this.state = 160;
        this.match(ABLParser.T__7);
        this.state = 161;
        this.match(ABLParser.TYPE);
        this.state = 162;
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
        this.state = 165; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 164;
            this.wmeRegistration();
            this.state = 167; 
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
    this.enterRule(localctx, 16, ABLParser.RULE_ablLiteral);
    try {
        this.state = 174;
        switch(this._input.LA(1)) {
        case ABLParser.INT:
            this.enterOuterAlt(localctx, 1);
            this.state = 169;
            this.match(ABLParser.INT);
            break;
        case ABLParser.FLOAT:
            this.enterOuterAlt(localctx, 2);
            this.state = 170;
            this.match(ABLParser.FLOAT);
            break;
        case ABLParser.STRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 171;
            this.string();
            break;
        case ABLParser.BOOL:
            this.enterOuterAlt(localctx, 4);
            this.state = 172;
            this.match(ABLParser.BOOL);
            break;
        case ABLParser.NULL:
            this.enterOuterAlt(localctx, 5);
            this.state = 173;
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
    this.enterRule(localctx, 18, ABLParser.RULE_ablExpression);
    try {
        this.state = 178;
        switch(this._input.LA(1)) {
        case ABLParser.TYPE:
        case ABLParser.CHARS:
            this.enterOuterAlt(localctx, 1);
            this.state = 176;
            this.name();
            break;
        case ABLParser.BOOL:
        case ABLParser.NULL:
        case ABLParser.FLOAT:
        case ABLParser.INT:
        case ABLParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 177;
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
    this.enterRule(localctx, 20, ABLParser.RULE_params);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 180;
        this.match(ABLParser.T__8);
        this.state = 182;
        _la = this._input.LA(1);
        if(((((_la - 71)) & ~0x1f) == 0 && ((1 << (_la - 71)) & ((1 << (ABLParser.BOOL - 71)) | (1 << (ABLParser.NULL - 71)) | (1 << (ABLParser.TYPE - 71)) | (1 << (ABLParser.CHARS - 71)) | (1 << (ABLParser.FLOAT - 71)) | (1 << (ABLParser.INT - 71)) | (1 << (ABLParser.STRING - 71)))) !== 0)) {
            this.state = 181;
            this.param();
        }

        this.state = 188;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.T__9) {
            this.state = 184;
            this.match(ABLParser.T__9);
            this.state = 185;
            this.param();
            this.state = 190;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 191;
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

ParamContext.prototype.ablExpression = function() {
    return this.getTypedRuleContext(AblExpressionContext,0);
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
    this.enterRule(localctx, 22, ABLParser.RULE_param);
    var _la = 0; // Token type
    try {
        this.state = 201;
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 193;
            this.match(ABLParser.TYPE);
            this.state = 195;
            _la = this._input.LA(1);
            if(((((_la - 71)) & ~0x1f) == 0 && ((1 << (_la - 71)) & ((1 << (ABLParser.BOOL - 71)) | (1 << (ABLParser.NULL - 71)) | (1 << (ABLParser.TYPE - 71)) | (1 << (ABLParser.CHARS - 71)) | (1 << (ABLParser.FLOAT - 71)) | (1 << (ABLParser.INT - 71)) | (1 << (ABLParser.STRING - 71)))) !== 0)) {
                this.state = 194;
                this.ablExpression();
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 198;
            var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
            if(la_===1) {
                this.state = 197;
                this.match(ABLParser.TYPE);

            }
            this.state = 200;
            this.ablExpression();
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

ActionRegistrationContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

ActionRegistrationContext.prototype.params = function() {
    return this.getTypedRuleContext(ParamsContext,0);
};

ActionRegistrationContext.prototype.TYPE = function() {
    return this.getToken(ABLParser.TYPE, 0);
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
    this.enterRule(localctx, 24, ABLParser.RULE_actionRegistration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 203;
        this.match(ABLParser.T__5);
        this.state = 204;
        this.match(ABLParser.T__11);
        this.state = 205;
        this.name();
        this.state = 206;
        this.params();
        this.state = 207;
        this.match(ABLParser.T__7);
        this.state = 208;
        this.match(ABLParser.TYPE);
        this.state = 209;
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

AblVariableDeclarationContext.prototype.ablVariableDeclarations = function() {
    return this.getTypedRuleContext(AblVariableDeclarationsContext,0);
};

AblVariableDeclarationContext.prototype.ablVariableAssignment = function() {
    return this.getTypedRuleContext(AblVariableAssignmentContext,0);
};

AblVariableDeclarationContext.prototype.ablVariableLiteralAssignment = function() {
    return this.getTypedRuleContext(AblVariableLiteralAssignmentContext,0);
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
    this.enterRule(localctx, 26, ABLParser.RULE_ablVariableDeclaration);
    try {
        this.state = 214;
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 211;
            this.ablVariableDeclarations();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 212;
            this.ablVariableAssignment();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 213;
            this.ablVariableLiteralAssignment();
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

function AblVariableDeclarationsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_ablVariableDeclarations;
    return this;
}

AblVariableDeclarationsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AblVariableDeclarationsContext.prototype.constructor = AblVariableDeclarationsContext;

AblVariableDeclarationsContext.prototype.name = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameContext);
    } else {
        return this.getTypedRuleContext(NameContext,i);
    }
};

AblVariableDeclarationsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterAblVariableDeclarations(this);
	}
};

AblVariableDeclarationsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitAblVariableDeclarations(this);
	}
};




ABLParser.AblVariableDeclarationsContext = AblVariableDeclarationsContext;

ABLParser.prototype.ablVariableDeclarations = function() {

    var localctx = new AblVariableDeclarationsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, ABLParser.RULE_ablVariableDeclarations);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 216;
        this.name();
        this.state = 217;
        this.name();
        this.state = 222;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.T__9) {
            this.state = 218;
            this.match(ABLParser.T__9);
            this.state = 219;
            this.name();
            this.state = 224;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 225;
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

function AblVariableLiteralAssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_ablVariableLiteralAssignment;
    return this;
}

AblVariableLiteralAssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AblVariableLiteralAssignmentContext.prototype.constructor = AblVariableLiteralAssignmentContext;

AblVariableLiteralAssignmentContext.prototype.name = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameContext);
    } else {
        return this.getTypedRuleContext(NameContext,i);
    }
};

AblVariableLiteralAssignmentContext.prototype.ablLiteral = function() {
    return this.getTypedRuleContext(AblLiteralContext,0);
};

AblVariableLiteralAssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterAblVariableLiteralAssignment(this);
	}
};

AblVariableLiteralAssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitAblVariableLiteralAssignment(this);
	}
};




ABLParser.AblVariableLiteralAssignmentContext = AblVariableLiteralAssignmentContext;

ABLParser.prototype.ablVariableLiteralAssignment = function() {

    var localctx = new AblVariableLiteralAssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, ABLParser.RULE_ablVariableLiteralAssignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 227;
        this.name();
        this.state = 228;
        this.name();
        this.state = 229;
        this.match(ABLParser.T__12);
        this.state = 230;
        this.ablLiteral();
        this.state = 231;
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

function AblVariableAssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_ablVariableAssignment;
    return this;
}

AblVariableAssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AblVariableAssignmentContext.prototype.constructor = AblVariableAssignmentContext;

AblVariableAssignmentContext.prototype.name = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameContext);
    } else {
        return this.getTypedRuleContext(NameContext,i);
    }
};

AblVariableAssignmentContext.prototype.classConstruction = function() {
    return this.getTypedRuleContext(ClassConstructionContext,0);
};

AblVariableAssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterAblVariableAssignment(this);
	}
};

AblVariableAssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitAblVariableAssignment(this);
	}
};




ABLParser.AblVariableAssignmentContext = AblVariableAssignmentContext;

ABLParser.prototype.ablVariableAssignment = function() {

    var localctx = new AblVariableAssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, ABLParser.RULE_ablVariableAssignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 233;
        this.name();
        this.state = 234;
        this.name();
        this.state = 235;
        this.match(ABLParser.T__12);
        this.state = 236;
        this.match(ABLParser.T__13);
        this.state = 237;
        this.classConstruction();
        this.state = 238;
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

function ClassConstructionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_classConstruction;
    return this;
}

ClassConstructionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassConstructionContext.prototype.constructor = ClassConstructionContext;

ClassConstructionContext.prototype.name = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameContext);
    } else {
        return this.getTypedRuleContext(NameContext,i);
    }
};

ClassConstructionContext.prototype.string = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StringContext);
    } else {
        return this.getTypedRuleContext(StringContext,i);
    }
};

ClassConstructionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterClassConstruction(this);
	}
};

ClassConstructionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitClassConstruction(this);
	}
};




ABLParser.ClassConstructionContext = ClassConstructionContext;

ABLParser.prototype.classConstruction = function() {

    var localctx = new ClassConstructionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, ABLParser.RULE_classConstruction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        this.name();
        this.state = 261;
        switch(this._input.LA(1)) {
        case ABLParser.T__8:
            this.state = 241;
            this.match(ABLParser.T__8);
            this.state = 242;
            this.name();
            this.state = 245;
            _la = this._input.LA(1);
            if(_la===ABLParser.T__8) {
                this.state = 243;
                this.match(ABLParser.T__8);
                this.state = 244;
                this.match(ABLParser.T__10);
            }

            this.state = 247;
            this.match(ABLParser.T__10);
            break;
        case ABLParser.T__14:
            this.state = 249;
            this.match(ABLParser.T__14);
            this.state = 251;
            _la = this._input.LA(1);
            if(_la===ABLParser.STRING) {
                this.state = 250;
                this.string();
            }

            this.state = 257;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===ABLParser.T__9) {
                this.state = 253;
                this.match(ABLParser.T__9);
                this.state = 254;
                this.string();
                this.state = 259;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 260;
            this.match(ABLParser.T__15);
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
    this.enterRule(localctx, 36, ABLParser.RULE_wmeDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 263;
        this.match(ABLParser.T__6);
        this.state = 264;
        this.match(ABLParser.TYPE);
        this.state = 267;
        _la = this._input.LA(1);
        if(_la===ABLParser.T__16) {
            this.state = 265;
            this.match(ABLParser.T__16);
            this.state = 266;
            this.match(ABLParser.TYPE);
        }

        this.state = 269;
        this.match(ABLParser.T__14);
        this.state = 273;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.TYPE || _la===ABLParser.CHARS) {
            this.state = 270;
            this.ablVariableDeclaration();
            this.state = 275;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 276;
        this.match(ABLParser.T__15);
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
    this.enterRule(localctx, 38, ABLParser.RULE_propertyDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 278;
        this.match(ABLParser.T__17);
        this.state = 279;
        this.match(ABLParser.TYPE);
        this.state = 280;
        this.name();
        this.state = 281;
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
    this.enterRule(localctx, 40, ABLParser.RULE_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 283;
        _la = this._input.LA(1);
        if(!(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (ABLParser.BIND - 37)) | (1 << (ABLParser.GT - 37)) | (1 << (ABLParser.GE - 37)) | (1 << (ABLParser.LT - 37)) | (1 << (ABLParser.LE - 37)) | (1 << (ABLParser.EQ - 37)) | (1 << (ABLParser.NE - 37)))) !== 0))) {
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
    this.enterRule(localctx, 42, ABLParser.RULE_wmeFieldTest);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 285;
        this.name();
        this.state = 286;
        this.operator();
        this.state = 287;
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
    this.enterRule(localctx, 44, ABLParser.RULE_wmeTest);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 292;
        _la = this._input.LA(1);
        if(_la===ABLParser.TYPE || _la===ABLParser.CHARS) {
            this.state = 289;
            this.name();
            this.state = 290;
            _la = this._input.LA(1);
            if(!(_la===ABLParser.T__12 || _la===ABLParser.BIND)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
        }

        this.state = 295;
        _la = this._input.LA(1);
        if(_la===ABLParser.BANG) {
            this.state = 294;
            this.match(ABLParser.BANG);
        }

        this.state = 297;
        this.match(ABLParser.T__8);
        this.state = 298;
        this.match(ABLParser.TYPE);
        this.state = 302;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.TYPE || _la===ABLParser.CHARS) {
            this.state = 299;
            this.wmeFieldTest();
            this.state = 304;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 305;
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
    this.enterRule(localctx, 46, ABLParser.RULE_binaryOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 308;
        _la = this._input.LA(1);
        if(_la===ABLParser.BANG) {
            this.state = 307;
            this.match(ABLParser.BANG);
        }

        this.state = 310;
        this.ablExpression();
        this.state = 314;
        _la = this._input.LA(1);
        if(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (ABLParser.BIND - 37)) | (1 << (ABLParser.GT - 37)) | (1 << (ABLParser.GE - 37)) | (1 << (ABLParser.LT - 37)) | (1 << (ABLParser.LE - 37)) | (1 << (ABLParser.EQ - 37)) | (1 << (ABLParser.NE - 37)))) !== 0)) {
            this.state = 311;
            this.operator();
            this.state = 312;
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
    this.enterRule(localctx, 48, ABLParser.RULE_javaMethod);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 317;
        _la = this._input.LA(1);
        if(_la===ABLParser.BANG) {
            this.state = 316;
            this.match(ABLParser.BANG);
        }

        this.state = 319;
        this.name();
        this.state = 320;
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
    this.enterRule(localctx, 50, ABLParser.RULE_clause);
    try {
        this.state = 326;
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 322;
            this.match(ABLParser.BOOL);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 323;
            this.name();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 324;
            this.javaMethod();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 325;
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
    this.enterRule(localctx, 52, ABLParser.RULE_booleanHelper);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 328;
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
    this.enterRule(localctx, 54, ABLParser.RULE_mixedCall);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 330;
        this.clause();
        this.state = 336;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.AND || _la===ABLParser.OR) {
            this.state = 331;
            this.booleanHelper();
            this.state = 332;
            this.clause();
            this.state = 338;
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
    this.enterRule(localctx, 56, ABLParser.RULE_conditionalExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 339;
        this.match(ABLParser.T__8);
        this.state = 340;
        this.mixedCall();
        this.state = 341;
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
    this.enterRule(localctx, 58, ABLParser.RULE_wmeTestSequence);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 343;
        this.match(ABLParser.T__14);
        this.state = 346; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 346;
            var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
            switch(la_) {
            case 1:
                this.state = 344;
                this.wmeTest();
                break;

            case 2:
                this.state = 345;
                this.conditionalExpression();
                break;

            }
            this.state = 348; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ABLParser.T__8 || ((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (ABLParser.BANG - 44)) | (1 << (ABLParser.TYPE - 44)) | (1 << (ABLParser.CHARS - 44)))) !== 0));
        this.state = 350;
        this.match(ABLParser.T__15);
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
    this.enterRule(localctx, 60, ABLParser.RULE_testExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 352;
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
    this.enterRule(localctx, 62, ABLParser.RULE_precondition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 354;
        this.match(ABLParser.T__18);
        this.state = 355;
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
    this.enterRule(localctx, 64, ABLParser.RULE_contextCondition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 357;
        this.match(ABLParser.T__19);
        this.state = 358;
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
    this.enterRule(localctx, 66, ABLParser.RULE_entryCondition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 360;
        this.match(ABLParser.T__20);
        this.state = 361;
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
    this.enterRule(localctx, 68, ABLParser.RULE_successCondition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 363;
        this.match(ABLParser.T__21);
        this.state = 364;
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
    this.enterRule(localctx, 70, ABLParser.RULE_successTest);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 366;
        this.match(ABLParser.T__22);
        this.state = 367;
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
    this.enterRule(localctx, 72, ABLParser.RULE_numberNeededForSuccess);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 369;
        this.match(ABLParser.T__23);
        this.state = 370;
        this.ablLiteral();
        this.state = 371;
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
    this.enterRule(localctx, 74, ABLParser.RULE_teamMemberSpecifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 373;
        this.match(ABLParser.T__24);
        this.state = 375; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 374;
        		this.name();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 377; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,31, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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

function SpecificityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_specificity;
    return this;
}

SpecificityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SpecificityContext.prototype.constructor = SpecificityContext;

SpecificityContext.prototype.ablLiteral = function() {
    return this.getTypedRuleContext(AblLiteralContext,0);
};

SpecificityContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterSpecificity(this);
	}
};

SpecificityContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitSpecificity(this);
	}
};




ABLParser.SpecificityContext = SpecificityContext;

ABLParser.prototype.specificity = function() {

    var localctx = new SpecificityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, ABLParser.RULE_specificity);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 379;
        this.match(ABLParser.T__25);
        this.state = 380;
        this.ablLiteral();
        this.state = 381;
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

function BehaviourModifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_behaviourModifier;
    return this;
}

BehaviourModifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BehaviourModifierContext.prototype.constructor = BehaviourModifierContext;

BehaviourModifierContext.prototype.precondition = function() {
    return this.getTypedRuleContext(PreconditionContext,0);
};

BehaviourModifierContext.prototype.specificity = function() {
    return this.getTypedRuleContext(SpecificityContext,0);
};

BehaviourModifierContext.prototype.contextCondition = function() {
    return this.getTypedRuleContext(ContextConditionContext,0);
};

BehaviourModifierContext.prototype.entryCondition = function() {
    return this.getTypedRuleContext(EntryConditionContext,0);
};

BehaviourModifierContext.prototype.numberNeededForSuccess = function() {
    return this.getTypedRuleContext(NumberNeededForSuccessContext,0);
};

BehaviourModifierContext.prototype.teamMemberSpecifier = function() {
    return this.getTypedRuleContext(TeamMemberSpecifierContext,0);
};

BehaviourModifierContext.prototype.successCondition = function() {
    return this.getTypedRuleContext(SuccessConditionContext,0);
};

BehaviourModifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterBehaviourModifier(this);
	}
};

BehaviourModifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitBehaviourModifier(this);
	}
};




ABLParser.BehaviourModifierContext = BehaviourModifierContext;

ABLParser.prototype.behaviourModifier = function() {

    var localctx = new BehaviourModifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, ABLParser.RULE_behaviourModifier);
    try {
        this.state = 390;
        switch(this._input.LA(1)) {
        case ABLParser.T__18:
            this.enterOuterAlt(localctx, 1);
            this.state = 383;
            this.precondition();
            break;
        case ABLParser.T__25:
            this.enterOuterAlt(localctx, 2);
            this.state = 384;
            this.specificity();
            break;
        case ABLParser.T__19:
            this.enterOuterAlt(localctx, 3);
            this.state = 385;
            this.contextCondition();
            break;
        case ABLParser.T__20:
            this.enterOuterAlt(localctx, 4);
            this.state = 386;
            this.entryCondition();
            break;
        case ABLParser.T__23:
            this.enterOuterAlt(localctx, 5);
            this.state = 387;
            this.numberNeededForSuccess();
            break;
        case ABLParser.T__24:
            this.enterOuterAlt(localctx, 6);
            this.state = 388;
            this.teamMemberSpecifier();
            break;
        case ABLParser.T__21:
            this.enterOuterAlt(localctx, 7);
            this.state = 389;
            this.successCondition();
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
    this.enterRule(localctx, 80, ABLParser.RULE_priorityModifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 392;
        _la = this._input.LA(1);
        if(!(_la===ABLParser.T__26 || _la===ABLParser.T__27)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 393;
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
    this.enterRule(localctx, 82, ABLParser.RULE_persistence);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 395;
        this.match(ABLParser.T__28);
        this.state = 397;
        _la = this._input.LA(1);
        if(_la===ABLParser.WHEN_FAILS || _la===ABLParser.WHEN_SUCCEEDS) {
            this.state = 396;
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
    this.enterRule(localctx, 84, ABLParser.RULE_namedProperty);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 399;
        this.match(ABLParser.T__17);
        this.state = 400;
        this.name();
        this.state = 401;
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
    this.enterRule(localctx, 86, ABLParser.RULE_stepModifier);
    try {
        this.state = 415;
        switch(this._input.LA(1)) {
        case ABLParser.IGNORE_FAILURE:
            this.enterOuterAlt(localctx, 1);
            this.state = 403;
            this.match(ABLParser.IGNORE_FAILURE);
            break;
        case ABLParser.EFFECT_ONLY:
            this.enterOuterAlt(localctx, 2);
            this.state = 404;
            this.match(ABLParser.EFFECT_ONLY);
            break;
        case ABLParser.TEAM_EFFECT_ONLY:
            this.enterOuterAlt(localctx, 3);
            this.state = 405;
            this.match(ABLParser.TEAM_EFFECT_ONLY);
            break;
        case ABLParser.POST:
            this.enterOuterAlt(localctx, 4);
            this.state = 406;
            this.match(ABLParser.POST);
            break;
        case ABLParser.POST_TO:
            this.enterOuterAlt(localctx, 5);
            this.state = 407;
            this.match(ABLParser.POST_TO);
            this.state = 408;
            this.name();
            break;
        case ABLParser.TEAMNEEDED:
            this.enterOuterAlt(localctx, 6);
            this.state = 409;
            this.match(ABLParser.TEAMNEEDED);
            break;
        case ABLParser.ONENEEDED:
            this.enterOuterAlt(localctx, 7);
            this.state = 410;
            this.match(ABLParser.ONENEEDED);
            break;
        case ABLParser.T__26:
        case ABLParser.T__27:
            this.enterOuterAlt(localctx, 8);
            this.state = 411;
            this.priorityModifier();
            break;
        case ABLParser.T__28:
            this.enterOuterAlt(localctx, 9);
            this.state = 412;
            this.persistence();
            break;
        case ABLParser.T__17:
            this.enterOuterAlt(localctx, 10);
            this.state = 413;
            this.namedProperty();
            break;
        case ABLParser.T__22:
            this.enterOuterAlt(localctx, 11);
            this.state = 414;
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
    this.enterRule(localctx, 88, ABLParser.RULE_basicStep);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 417;
        _la = this._input.LA(1);
        if(!(((((_la - 54)) & ~0x1f) == 0 && ((1 << (_la - 54)) & ((1 << (ABLParser.FAIL - 54)) | (1 << (ABLParser.SUCCEED - 54)) | (1 << (ABLParser.WAIT - 54)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 418;
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

function PrimitiveActContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_primitiveAct;
    return this;
}

PrimitiveActContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimitiveActContext.prototype.constructor = PrimitiveActContext;

PrimitiveActContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

PrimitiveActContext.prototype.params = function() {
    return this.getTypedRuleContext(ParamsContext,0);
};

PrimitiveActContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterPrimitiveAct(this);
	}
};

PrimitiveActContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitPrimitiveAct(this);
	}
};




ABLParser.PrimitiveActContext = PrimitiveActContext;

ABLParser.prototype.primitiveAct = function() {

    var localctx = new PrimitiveActContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, ABLParser.RULE_primitiveAct);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 420;
        this.match(ABLParser.T__29);
        this.state = 421;
        this.name();
        this.state = 422;
        this.params();
        this.state = 423;
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

function GoalStepContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_goalStep;
    return this;
}

GoalStepContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GoalStepContext.prototype.constructor = GoalStepContext;

GoalStepContext.prototype.name = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameContext);
    } else {
        return this.getTypedRuleContext(NameContext,i);
    }
};

GoalStepContext.prototype.SUBGOAL = function() {
    return this.getToken(ABLParser.SUBGOAL, 0);
};

GoalStepContext.prototype.SPAWNGOAL = function() {
    return this.getToken(ABLParser.SPAWNGOAL, 0);
};

GoalStepContext.prototype.JOINT = function() {
    return this.getToken(ABLParser.JOINT, 0);
};

GoalStepContext.prototype.params = function() {
    return this.getTypedRuleContext(ParamsContext,0);
};

GoalStepContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterGoalStep(this);
	}
};

GoalStepContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitGoalStep(this);
	}
};




ABLParser.GoalStepContext = GoalStepContext;

ABLParser.prototype.goalStep = function() {

    var localctx = new GoalStepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, ABLParser.RULE_goalStep);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 426;
        _la = this._input.LA(1);
        if(_la===ABLParser.JOINT) {
            this.state = 425;
            this.match(ABLParser.JOINT);
        }

        this.state = 428;
        _la = this._input.LA(1);
        if(!(_la===ABLParser.SUBGOAL || _la===ABLParser.SPAWNGOAL)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 429;
        this.name();
        this.state = 431;
        _la = this._input.LA(1);
        if(_la===ABLParser.T__8) {
            this.state = 430;
            this.params();
        }

        this.state = 435;
        _la = this._input.LA(1);
        if(_la===ABLParser.T__30) {
            this.state = 433;
            this.match(ABLParser.T__30);
            this.state = 434;
            this.name();
        }

        this.state = 437;
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

function BehaviourStepContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_behaviourStep;
    return this;
}

BehaviourStepContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BehaviourStepContext.prototype.constructor = BehaviourStepContext;

BehaviourStepContext.prototype.goalStep = function() {
    return this.getTypedRuleContext(GoalStepContext,0);
};

BehaviourStepContext.prototype.primitiveAct = function() {
    return this.getTypedRuleContext(PrimitiveActContext,0);
};

BehaviourStepContext.prototype.basicStep = function() {
    return this.getTypedRuleContext(BasicStepContext,0);
};

BehaviourStepContext.prototype.stepModifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StepModifierContext);
    } else {
        return this.getTypedRuleContext(StepModifierContext,i);
    }
};

BehaviourStepContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterBehaviourStep(this);
	}
};

BehaviourStepContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitBehaviourStep(this);
	}
};




ABLParser.BehaviourStepContext = BehaviourStepContext;

ABLParser.prototype.behaviourStep = function() {

    var localctx = new BehaviourStepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, ABLParser.RULE_behaviourStep);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 451;
        _la = this._input.LA(1);
        if(_la===ABLParser.T__7) {
            this.state = 439;
            this.match(ABLParser.T__7);
            this.state = 440;
            this.match(ABLParser.T__8);
            this.state = 441;
            this.stepModifier();
            this.state = 446;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===ABLParser.T__9) {
                this.state = 442;
                this.match(ABLParser.T__9);
                this.state = 443;
                this.stepModifier();
                this.state = 448;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 449;
            this.match(ABLParser.T__10);
        }

        this.state = 456;
        switch(this._input.LA(1)) {
        case ABLParser.SUBGOAL:
        case ABLParser.SPAWNGOAL:
        case ABLParser.JOINT:
            this.state = 453;
            this.goalStep();
            break;
        case ABLParser.T__29:
            this.state = 454;
            this.primitiveAct();
            break;
        case ABLParser.FAIL:
        case ABLParser.SUCCEED:
        case ABLParser.WAIT:
            this.state = 455;
            this.basicStep();
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

function BehaviourDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_behaviourDefinition;
    return this;
}

BehaviourDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BehaviourDefinitionContext.prototype.constructor = BehaviourDefinitionContext;

BehaviourDefinitionContext.prototype.BEH = function() {
    return this.getToken(ABLParser.BEH, 0);
};

BehaviourDefinitionContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

BehaviourDefinitionContext.prototype.params = function() {
    return this.getTypedRuleContext(ParamsContext,0);
};

BehaviourDefinitionContext.prototype.SEQ = function() {
    return this.getToken(ABLParser.SEQ, 0);
};

BehaviourDefinitionContext.prototype.PAR = function() {
    return this.getToken(ABLParser.PAR, 0);
};

BehaviourDefinitionContext.prototype.COLL = function() {
    return this.getToken(ABLParser.COLL, 0);
};

BehaviourDefinitionContext.prototype.behaviourModifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BehaviourModifierContext);
    } else {
        return this.getTypedRuleContext(BehaviourModifierContext,i);
    }
};

BehaviourDefinitionContext.prototype.ablVariableDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AblVariableDeclarationContext);
    } else {
        return this.getTypedRuleContext(AblVariableDeclarationContext,i);
    }
};

BehaviourDefinitionContext.prototype.behaviourStep = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BehaviourStepContext);
    } else {
        return this.getTypedRuleContext(BehaviourStepContext,i);
    }
};

BehaviourDefinitionContext.prototype.JOINT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ABLParser.JOINT);
    } else {
        return this.getToken(ABLParser.JOINT, i);
    }
};


BehaviourDefinitionContext.prototype.ATOMIC = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ABLParser.ATOMIC);
    } else {
        return this.getToken(ABLParser.ATOMIC, i);
    }
};


BehaviourDefinitionContext.prototype.ADAPTIVE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ABLParser.ADAPTIVE);
    } else {
        return this.getToken(ABLParser.ADAPTIVE, i);
    }
};


BehaviourDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterBehaviourDefinition(this);
	}
};

BehaviourDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitBehaviourDefinition(this);
	}
};




ABLParser.BehaviourDefinitionContext = BehaviourDefinitionContext;

ABLParser.prototype.behaviourDefinition = function() {

    var localctx = new BehaviourDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, ABLParser.RULE_behaviourDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 461;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 67)) & ~0x1f) == 0 && ((1 << (_la - 67)) & ((1 << (ABLParser.JOINT - 67)) | (1 << (ABLParser.ATOMIC - 67)) | (1 << (ABLParser.ADAPTIVE - 67)))) !== 0)) {
            this.state = 458;
            _la = this._input.LA(1);
            if(!(((((_la - 67)) & ~0x1f) == 0 && ((1 << (_la - 67)) & ((1 << (ABLParser.JOINT - 67)) | (1 << (ABLParser.ATOMIC - 67)) | (1 << (ABLParser.ADAPTIVE - 67)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 463;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 464;
        _la = this._input.LA(1);
        if(!(((((_la - 60)) & ~0x1f) == 0 && ((1 << (_la - 60)) & ((1 << (ABLParser.SEQ - 60)) | (1 << (ABLParser.PAR - 60)) | (1 << (ABLParser.COLL - 60)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 465;
        this.match(ABLParser.BEH);
        this.state = 466;
        this.name();
        this.state = 467;
        this.params();
        this.state = 468;
        this.match(ABLParser.T__14);
        this.state = 474;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,43,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 472;
                switch(this._input.LA(1)) {
                case ABLParser.T__18:
                case ABLParser.T__19:
                case ABLParser.T__20:
                case ABLParser.T__21:
                case ABLParser.T__23:
                case ABLParser.T__24:
                case ABLParser.T__25:
                    this.state = 469;
                    this.behaviourModifier();
                    break;
                case ABLParser.TYPE:
                case ABLParser.CHARS:
                    this.state = 470;
                    this.ablVariableDeclaration();
                    break;
                case ABLParser.T__7:
                case ABLParser.T__29:
                case ABLParser.FAIL:
                case ABLParser.SUCCEED:
                case ABLParser.WAIT:
                case ABLParser.SUBGOAL:
                case ABLParser.SPAWNGOAL:
                case ABLParser.JOINT:
                    this.state = 471;
                    this.behaviourStep();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                } 
            }
            this.state = 476;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,43,this._ctx);
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

function InitialTreeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_initialTree;
    return this;
}

InitialTreeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InitialTreeContext.prototype.constructor = InitialTreeContext;

InitialTreeContext.prototype.behaviourStep = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BehaviourStepContext);
    } else {
        return this.getTypedRuleContext(BehaviourStepContext,i);
    }
};

InitialTreeContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterInitialTree(this);
	}
};

InitialTreeContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitInitialTree(this);
	}
};




ABLParser.InitialTreeContext = InitialTreeContext;

ABLParser.prototype.initialTree = function() {

    var localctx = new InitialTreeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, ABLParser.RULE_initialTree);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 477;
        this.match(ABLParser.T__31);
        this.state = 478;
        this.match(ABLParser.T__14);
        this.state = 482;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.T__7 || _la===ABLParser.T__29 || ((((_la - 54)) & ~0x1f) == 0 && ((1 << (_la - 54)) & ((1 << (ABLParser.FAIL - 54)) | (1 << (ABLParser.SUCCEED - 54)) | (1 << (ABLParser.WAIT - 54)) | (1 << (ABLParser.SUBGOAL - 54)) | (1 << (ABLParser.SPAWNGOAL - 54)) | (1 << (ABLParser.JOINT - 54)))) !== 0)) {
            this.state = 479;
            this.behaviourStep();
            this.state = 484;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 485;
        this.match(ABLParser.T__15);
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

function DecisionCycleSMCallDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_decisionCycleSMCallDeclaration;
    return this;
}

DecisionCycleSMCallDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DecisionCycleSMCallDeclarationContext.prototype.constructor = DecisionCycleSMCallDeclarationContext;

DecisionCycleSMCallDeclarationContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

DecisionCycleSMCallDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterDecisionCycleSMCallDeclaration(this);
	}
};

DecisionCycleSMCallDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitDecisionCycleSMCallDeclaration(this);
	}
};




ABLParser.DecisionCycleSMCallDeclarationContext = DecisionCycleSMCallDeclarationContext;

ABLParser.prototype.decisionCycleSMCallDeclaration = function() {

    var localctx = new DecisionCycleSMCallDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, ABLParser.RULE_decisionCycleSMCallDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 487;
        this.match(ABLParser.T__32);
        this.state = 488;
        this.name();
        this.state = 489;
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

function AblDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_ablDeclaration;
    return this;
}

AblDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AblDeclarationContext.prototype.constructor = AblDeclarationContext;

AblDeclarationContext.prototype.wmeRegistration = function() {
    return this.getTypedRuleContext(WmeRegistrationContext,0);
};

AblDeclarationContext.prototype.actionRegistration = function() {
    return this.getTypedRuleContext(ActionRegistrationContext,0);
};

AblDeclarationContext.prototype.wmeDeclaration = function() {
    return this.getTypedRuleContext(WmeDeclarationContext,0);
};

AblDeclarationContext.prototype.propertyDeclaration = function() {
    return this.getTypedRuleContext(PropertyDeclarationContext,0);
};

AblDeclarationContext.prototype.ablVariableDeclaration = function() {
    return this.getTypedRuleContext(AblVariableDeclarationContext,0);
};

AblDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterAblDeclaration(this);
	}
};

AblDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitAblDeclaration(this);
	}
};




ABLParser.AblDeclarationContext = AblDeclarationContext;

ABLParser.prototype.ablDeclaration = function() {

    var localctx = new AblDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, ABLParser.RULE_ablDeclaration);
    try {
        this.state = 496;
        var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 491;
            this.wmeRegistration();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 492;
            this.actionRegistration();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 493;
            this.wmeDeclaration();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 494;
            this.propertyDeclaration();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 495;
            this.ablVariableDeclaration();
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

function BehavingEntityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_behavingEntity;
    return this;
}

BehavingEntityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BehavingEntityContext.prototype.constructor = BehavingEntityContext;

BehavingEntityContext.prototype.TYPE = function() {
    return this.getToken(ABLParser.TYPE, 0);
};

BehavingEntityContext.prototype.initialTree = function() {
    return this.getTypedRuleContext(InitialTreeContext,0);
};

BehavingEntityContext.prototype.teamNeeded = function() {
    return this.getTypedRuleContext(TeamNeededContext,0);
};

BehavingEntityContext.prototype.decisionCycleSMCallDeclaration = function() {
    return this.getTypedRuleContext(DecisionCycleSMCallDeclarationContext,0);
};

BehavingEntityContext.prototype.conflictDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConflictDeclContext);
    } else {
        return this.getTypedRuleContext(ConflictDeclContext,i);
    }
};

BehavingEntityContext.prototype.ablDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AblDeclarationContext);
    } else {
        return this.getTypedRuleContext(AblDeclarationContext,i);
    }
};

BehavingEntityContext.prototype.behaviourDefinition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BehaviourDefinitionContext);
    } else {
        return this.getTypedRuleContext(BehaviourDefinitionContext,i);
    }
};

BehavingEntityContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterBehavingEntity(this);
	}
};

BehavingEntityContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitBehavingEntity(this);
	}
};




ABLParser.BehavingEntityContext = BehavingEntityContext;

ABLParser.prototype.behavingEntity = function() {

    var localctx = new BehavingEntityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, ABLParser.RULE_behavingEntity);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 498;
        this.match(ABLParser.T__33);
        this.state = 499;
        this.match(ABLParser.TYPE);
        this.state = 500;
        this.match(ABLParser.T__14);
        this.state = 502;
        _la = this._input.LA(1);
        if(_la===ABLParser.JOINTNEG) {
            this.state = 501;
            this.teamNeeded();
        }

        this.state = 505;
        _la = this._input.LA(1);
        if(_la===ABLParser.T__32) {
            this.state = 504;
            this.decisionCycleSMCallDeclaration();
        }

        this.state = 510;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.T__4) {
            this.state = 507;
            this.conflictDecl();
            this.state = 512;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 516;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ABLParser.T__5) | (1 << ABLParser.T__6) | (1 << ABLParser.T__17))) !== 0) || _la===ABLParser.TYPE || _la===ABLParser.CHARS) {
            this.state = 513;
            this.ablDeclaration();
            this.state = 518;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 522;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 60)) & ~0x1f) == 0 && ((1 << (_la - 60)) & ((1 << (ABLParser.SEQ - 60)) | (1 << (ABLParser.PAR - 60)) | (1 << (ABLParser.COLL - 60)) | (1 << (ABLParser.JOINT - 60)) | (1 << (ABLParser.ATOMIC - 60)) | (1 << (ABLParser.ADAPTIVE - 60)))) !== 0)) {
            this.state = 519;
            this.behaviourDefinition();
            this.state = 524;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 525;
        this.initialTree();
        this.state = 526;
        this.match(ABLParser.T__15);
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

NameContext.prototype.TYPE = function() {
    return this.getToken(ABLParser.TYPE, 0);
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
    this.enterRule(localctx, 106, ABLParser.RULE_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 528;
        _la = this._input.LA(1);
        if(!(_la===ABLParser.TYPE || _la===ABLParser.CHARS)) {
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
    this.enterRule(localctx, 108, ABLParser.RULE_nameList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 530;
        this.name();
        this.state = 535;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.T__9) {
            this.state = 531;
            this.match(ABLParser.T__9);
            this.state = 532;
            this.name();
            this.state = 537;
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
    this.enterRule(localctx, 110, ABLParser.RULE_string);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 538;
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
