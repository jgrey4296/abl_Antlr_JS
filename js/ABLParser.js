// Generated from ABL.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('./lib/antlr4/index');
var ABLListener = require('./ABLListener').ABLListener;
var grammarFileName = "ABL.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3Y\u0233\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4",
    "\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t",
    "\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27",
    "\t\27\4\30\t\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4",
    "\36\t\36\4\37\t\37\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t",
    "\'\4(\t(\4)\t)\4*\t*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t",
    "\61\4\62\t\62\4\63\t\63\4\64\t\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t",
    "8\49\t9\4:\t:\4;\t;\4<\t<\3\2\5\2z\n\2\3\2\7\2}\n\2\f\2\16\2\u0080\13",
    "\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\4\3\4\3\4\5\4\u008d\n\4\3\4\3\4",
    "\3\5\3\5\3\5\7\5\u0094\n\5\f\5\16\5\u0097\13\5\3\6\3\6\3\6\3\6\3\7\3",
    "\7\3\7\6\7\u00a0\n\7\r\7\16\7\u00a1\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b",
    "\3\b\3\t\6\t\u00ae\n\t\r\t\16\t\u00af\3\n\3\n\3\n\3\n\3\n\5\n\u00b7",
    "\n\n\3\13\3\13\5\13\u00bb\n\13\3\13\3\13\7\13\u00bf\n\13\f\13\16\13",
    "\u00c2\13\13\3\13\3\13\3\f\3\f\5\f\u00c8\n\f\3\f\5\f\u00cb\n\f\3\f\3",
    "\f\5\f\u00cf\n\f\3\r\5\r\u00d2\n\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3",
    "\17\5\17\u00dc\n\17\3\17\3\17\3\17\3\17\5\17\u00e2\n\17\3\20\3\20\3",
    "\20\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\5\21\u00ef\n\21\3\22\3\22",
    "\3\22\3\22\7\22\u00f5\n\22\f\22\16\22\u00f8\13\22\3\22\3\22\3\23\3\23",
    "\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\24\3\24\3\25\3\25\3",
    "\25\5\25\u010c\n\25\3\26\3\26\3\26\3\26\5\26\u0112\n\26\3\26\3\26\3",
    "\27\3\27\3\27\3\27\7\27\u011a\n\27\f\27\16\27\u011d\13\27\3\27\3\27",
    "\3\30\3\30\3\30\3\30\5\30\u0125\n\30\3\30\3\30\7\30\u0129\n\30\f\30",
    "\16\30\u012c\13\30\3\30\3\30\3\31\3\31\3\31\3\31\3\31\3\32\3\32\3\33",
    "\3\33\3\33\3\33\3\34\3\34\3\34\5\34\u013e\n\34\3\34\5\34\u0141\n\34",
    "\3\34\3\34\3\34\7\34\u0146\n\34\f\34\16\34\u0149\13\34\3\34\3\34\3\35",
    "\3\35\3\35\3\35\5\35\u0151\n\35\3\35\3\35\3\35\5\35\u0156\n\35\3\36",
    "\3\36\3\37\3\37\3\37\3\37\7\37\u015e\n\37\f\37\16\37\u0161\13\37\3 ",
    "\3 \3 \3 \3!\3!\3!\6!\u016a\n!\r!\16!\u016b\3!\3!\3\"\3\"\3#\3#\3#\3",
    "$\3$\3$\3%\3%\3%\3&\3&\3&\3\'\3\'\3\'\3(\3(\3(\3(\3)\3)\6)\u0187\n)",
    "\r)\16)\u0188\3*\3*\3*\3*\3+\3+\3+\3+\3+\3+\3+\5+\u0196\n+\3,\3,\3,",
    "\3-\3-\5-\u019d\n-\3.\3.\3.\3.\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\5",
    "/\u01af\n/\3\60\3\60\3\60\3\61\3\61\3\61\3\61\3\61\3\62\5\62\u01ba\n",
    "\62\3\62\3\62\3\62\5\62\u01bf\n\62\3\62\3\62\5\62\u01c3\n\62\3\62\3",
    "\62\3\63\3\63\3\63\3\63\3\64\3\64\3\64\3\64\3\64\7\64\u01d0\n\64\f\64",
    "\16\64\u01d3\13\64\3\64\3\64\5\64\u01d7\n\64\3\64\3\64\3\64\3\64\5\64",
    "\u01dd\n\64\3\65\7\65\u01e0\n\65\f\65\16\65\u01e3\13\65\3\65\3\65\3",
    "\65\3\65\3\65\3\65\3\65\3\65\7\65\u01ed\n\65\f\65\16\65\u01f0\13\65",
    "\3\65\3\65\3\66\3\66\3\66\7\66\u01f7\n\66\f\66\16\66\u01fa\13\66\3\66",
    "\3\66\3\67\3\67\3\67\3\67\38\38\38\38\38\58\u0207\n8\39\39\39\39\59",
    "\u020d\n9\39\59\u0210\n9\39\79\u0213\n9\f9\169\u0216\139\39\79\u0219",
    "\n9\f9\169\u021c\139\39\79\u021f\n9\f9\169\u0222\139\39\39\39\3:\3:",
    "\3;\3;\3;\7;\u022c\n;\f;\16;\u022f\13;\3<\3<\3<\2\2=\2\4\6\b\n\f\16",
    "\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`",
    "bdfhjlnprtv\2\r\3\2<=\4\2(.\60\64\4\2\17\17((\3\2&\'\3\2\35\36\3\2\65",
    "\66\3\2>@\3\2HI\3\2KM\3\2DF\3\2QR\u0245\2y\3\2\2\2\4\u0085\3\2\2\2\6",
    "\u0089\3\2\2\2\b\u0095\3\2\2\2\n\u0098\3\2\2\2\f\u009c\3\2\2\2\16\u00a5",
    "\3\2\2\2\20\u00ad\3\2\2\2\22\u00b6\3\2\2\2\24\u00b8\3\2\2\2\26\u00ce",
    "\3\2\2\2\30\u00d1\3\2\2\2\32\u00d6\3\2\2\2\34\u00e1\3\2\2\2\36\u00e3",
    "\3\2\2\2 \u00ee\3\2\2\2\"\u00f0\3\2\2\2$\u00fb\3\2\2\2&\u0101\3\2\2",
    "\2(\u0108\3\2\2\2*\u010d\3\2\2\2,\u0115\3\2\2\2.\u0120\3\2\2\2\60\u012f",
    "\3\2\2\2\62\u0134\3\2\2\2\64\u0136\3\2\2\2\66\u013d\3\2\2\28\u014c\3",
    "\2\2\2:\u0157\3\2\2\2<\u0159\3\2\2\2>\u0162\3\2\2\2@\u0166\3\2\2\2B",
    "\u016f\3\2\2\2D\u0171\3\2\2\2F\u0174\3\2\2\2H\u0177\3\2\2\2J\u017a\3",
    "\2\2\2L\u017d\3\2\2\2N\u0180\3\2\2\2P\u0184\3\2\2\2R\u018a\3\2\2\2T",
    "\u0195\3\2\2\2V\u0197\3\2\2\2X\u019a\3\2\2\2Z\u019e\3\2\2\2\\\u01ae",
    "\3\2\2\2^\u01b0\3\2\2\2`\u01b3\3\2\2\2b\u01b9\3\2\2\2d\u01c6\3\2\2\2",
    "f\u01d6\3\2\2\2h\u01e1\3\2\2\2j\u01f3\3\2\2\2l\u01fd\3\2\2\2n\u0206",
    "\3\2\2\2p\u0208\3\2\2\2r\u0226\3\2\2\2t\u0228\3\2\2\2v\u0230\3\2\2\2",
    "xz\5\4\3\2yx\3\2\2\2yz\3\2\2\2z~\3\2\2\2{}\5\6\4\2|{\3\2\2\2}\u0080",
    "\3\2\2\2~|\3\2\2\2~\177\3\2\2\2\177\u0081\3\2\2\2\u0080~\3\2\2\2\u0081",
    "\u0082\5\b\5\2\u0082\u0083\5p9\2\u0083\u0084\7\2\2\3\u0084\3\3\2\2\2",
    "\u0085\u0086\7\3\2\2\u0086\u0087\5r:\2\u0087\u0088\7\4\2\2\u0088\5\3",
    "\2\2\2\u0089\u008a\7\5\2\2\u008a\u008c\5r:\2\u008b\u008d\7N\2\2\u008c",
    "\u008b\3\2\2\2\u008c\u008d\3\2\2\2\u008d\u008e\3\2\2\2\u008e\u008f\7",
    "\4\2\2\u008f\7\3\2\2\2\u0090\u0091\7\6\2\2\u0091\u0092\7Q\2\2\u0092",
    "\u0094\7\4\2\2\u0093\u0090\3\2\2\2\u0094\u0097\3\2\2\2\u0095\u0093\3",
    "\2\2\2\u0095\u0096\3\2\2\2\u0096\t\3\2\2\2\u0097\u0095\3\2\2\2\u0098",
    "\u0099\7J\2\2\u0099\u009a\t\2\2\2\u009a\u009b\7\4\2\2\u009b\13\3\2\2",
    "\2\u009c\u009d\7\7\2\2\u009d\u009f\5r:\2\u009e\u00a0\5r:\2\u009f\u009e",
    "\3\2\2\2\u00a0\u00a1\3\2\2\2\u00a1\u009f\3\2\2\2\u00a1\u00a2\3\2\2\2",
    "\u00a2\u00a3\3\2\2\2\u00a3\u00a4\7\4\2\2\u00a4\r\3\2\2\2\u00a5\u00a6",
    "\7\b\2\2\u00a6\u00a7\7\t\2\2\u00a7\u00a8\7Q\2\2\u00a8\u00a9\7\n\2\2",
    "\u00a9\u00aa\7Q\2\2\u00aa\u00ab\7\4\2\2\u00ab\17\3\2\2\2\u00ac\u00ae",
    "\5\16\b\2\u00ad\u00ac\3\2\2\2\u00ae\u00af\3\2\2\2\u00af\u00ad\3\2\2",
    "\2\u00af\u00b0\3\2\2\2\u00b0\21\3\2\2\2\u00b1\u00b7\7T\2\2\u00b2\u00b7",
    "\7S\2\2\u00b3\u00b7\5v<\2\u00b4\u00b7\7O\2\2\u00b5\u00b7\7P\2\2\u00b6",
    "\u00b1\3\2\2\2\u00b6\u00b2\3\2\2\2\u00b6\u00b3\3\2\2\2\u00b6\u00b4\3",
    "\2\2\2\u00b6\u00b5\3\2\2\2\u00b7\23\3\2\2\2\u00b8\u00ba\7\13\2\2\u00b9",
    "\u00bb\5\26\f\2\u00ba\u00b9\3\2\2\2\u00ba\u00bb\3\2\2\2\u00bb\u00c0",
    "\3\2\2\2\u00bc\u00bd\7\f\2\2\u00bd\u00bf\5\26\f\2\u00be\u00bc\3\2\2",
    "\2\u00bf\u00c2\3\2\2\2\u00c0\u00be\3\2\2\2\u00c0\u00c1\3\2\2\2\u00c1",
    "\u00c3\3\2\2\2\u00c2\u00c0\3\2\2\2\u00c3\u00c4\7\r\2\2\u00c4\25\3\2",
    "\2\2\u00c5\u00c7\5r:\2\u00c6\u00c8\5\34\17\2\u00c7\u00c6\3\2\2\2\u00c7",
    "\u00c8\3\2\2\2\u00c8\u00cf\3\2\2\2\u00c9\u00cb\5r:\2\u00ca\u00c9\3\2",
    "\2\2\u00ca\u00cb\3\2\2\2\u00cb\u00cc\3\2\2\2\u00cc\u00cf\5\34\17\2\u00cd",
    "\u00cf\58\35\2\u00ce\u00c5\3\2\2\2\u00ce\u00ca\3\2\2\2\u00ce\u00cd\3",
    "\2\2\2\u00cf\27\3\2\2\2\u00d0\u00d2\7/\2\2\u00d1\u00d0\3\2\2\2\u00d1",
    "\u00d2\3\2\2\2\u00d2\u00d3\3\2\2\2\u00d3\u00d4\5r:\2\u00d4\u00d5\5\24",
    "\13\2\u00d5\31\3\2\2\2\u00d6\u00d7\7\13\2\2\u00d7\u00d8\5r:\2\u00d8",
    "\u00d9\7\r\2\2\u00d9\33\3\2\2\2\u00da\u00dc\5\32\16\2\u00db\u00da\3",
    "\2\2\2\u00db\u00dc\3\2\2\2\u00dc\u00dd\3\2\2\2\u00dd\u00e2\5r:\2\u00de",
    "\u00e2\5\22\n\2\u00df\u00e2\5\30\r\2\u00e0\u00e2\5> \2\u00e1\u00db\3",
    "\2\2\2\u00e1\u00de\3\2\2\2\u00e1\u00df\3\2\2\2\u00e1\u00e0\3\2\2\2\u00e2",
    "\35\3\2\2\2\u00e3\u00e4\7\b\2\2\u00e4\u00e5\7\16\2\2\u00e5\u00e6\5r",
    ":\2\u00e6\u00e7\5\24\13\2\u00e7\u00e8\7\n\2\2\u00e8\u00e9\7Q\2\2\u00e9",
    "\u00ea\7\4\2\2\u00ea\37\3\2\2\2\u00eb\u00ef\5\"\22\2\u00ec\u00ef\5&",
    "\24\2\u00ed\u00ef\5$\23\2\u00ee\u00eb\3\2\2\2\u00ee\u00ec\3\2\2\2\u00ee",
    "\u00ed\3\2\2\2\u00ef!\3\2\2\2\u00f0\u00f1\5r:\2\u00f1\u00f6\5r:\2\u00f2",
    "\u00f3\7\f\2\2\u00f3\u00f5\5r:\2\u00f4\u00f2\3\2\2\2\u00f5\u00f8\3\2",
    "\2\2\u00f6\u00f4\3\2\2\2\u00f6\u00f7\3\2\2\2\u00f7\u00f9\3\2\2\2\u00f8",
    "\u00f6\3\2\2\2\u00f9\u00fa\7\4\2\2\u00fa#\3\2\2\2\u00fb\u00fc\5r:\2",
    "\u00fc\u00fd\5r:\2\u00fd\u00fe\7\17\2\2\u00fe\u00ff\5\22\n\2\u00ff\u0100",
    "\7\4\2\2\u0100%\3\2\2\2\u0101\u0102\5r:\2\u0102\u0103\5r:\2\u0103\u0104",
    "\7\17\2\2\u0104\u0105\7\20\2\2\u0105\u0106\5(\25\2\u0106\u0107\7\4\2",
    "\2\u0107\'\3\2\2\2\u0108\u010b\5r:\2\u0109\u010c\5*\26\2\u010a\u010c",
    "\5,\27\2\u010b\u0109\3\2\2\2\u010b\u010a\3\2\2\2\u010c)\3\2\2\2\u010d",
    "\u010e\7\13\2\2\u010e\u0111\5r:\2\u010f\u0110\7\13\2\2\u0110\u0112\7",
    "\r\2\2\u0111\u010f\3\2\2\2\u0111\u0112\3\2\2\2\u0112\u0113\3\2\2\2\u0113",
    "\u0114\7\r\2\2\u0114+\3\2\2\2\u0115\u0116\7\21\2\2\u0116\u011b\5v<\2",
    "\u0117\u0118\7\f\2\2\u0118\u011a\5v<\2\u0119\u0117\3\2\2\2\u011a\u011d",
    "\3\2\2\2\u011b\u0119\3\2\2\2\u011b\u011c\3\2\2\2\u011c\u011e\3\2\2\2",
    "\u011d\u011b\3\2\2\2\u011e\u011f\7\22\2\2\u011f-\3\2\2\2\u0120\u0121",
    "\7\t\2\2\u0121\u0124\7Q\2\2\u0122\u0123\7\23\2\2\u0123\u0125\7Q\2\2",
    "\u0124\u0122\3\2\2\2\u0124\u0125\3\2\2\2\u0125\u0126\3\2\2\2\u0126\u012a",
    "\7\21\2\2\u0127\u0129\5 \21\2\u0128\u0127\3\2\2\2\u0129\u012c\3\2\2",
    "\2\u012a\u0128\3\2\2\2\u012a\u012b\3\2\2\2\u012b\u012d\3\2\2\2\u012c",
    "\u012a\3\2\2\2\u012d\u012e\7\22\2\2\u012e/\3\2\2\2\u012f\u0130\7\24",
    "\2\2\u0130\u0131\7Q\2\2\u0131\u0132\5r:\2\u0132\u0133\7\4\2\2\u0133",
    "\61\3\2\2\2\u0134\u0135\t\3\2\2\u0135\63\3\2\2\2\u0136\u0137\5r:\2\u0137",
    "\u0138\5\62\32\2\u0138\u0139\5\34\17\2\u0139\65\3\2\2\2\u013a\u013b",
    "\5r:\2\u013b\u013c\t\4\2\2\u013c\u013e\3\2\2\2\u013d\u013a\3\2\2\2\u013d",
    "\u013e\3\2\2\2\u013e\u0140\3\2\2\2\u013f\u0141\7/\2\2\u0140\u013f\3",
    "\2\2\2\u0140\u0141\3\2\2\2\u0141\u0142\3\2\2\2\u0142\u0143\7\13\2\2",
    "\u0143\u0147\7Q\2\2\u0144\u0146\5\64\33\2\u0145\u0144\3\2\2\2\u0146",
    "\u0149\3\2\2\2\u0147\u0145\3\2\2\2\u0147\u0148\3\2\2\2\u0148\u014a\3",
    "\2\2\2\u0149\u0147\3\2\2\2\u014a\u014b\7\r\2\2\u014b\67\3\2\2\2\u014c",
    "\u0150\5\34\17\2\u014d\u014e\5\62\32\2\u014e\u014f\5\34\17\2\u014f\u0151",
    "\3\2\2\2\u0150\u014d\3\2\2\2\u0150\u0151\3\2\2\2\u0151\u0155\3\2\2\2",
    "\u0152\u0153\5\62\32\2\u0153\u0154\58\35\2\u0154\u0156\3\2\2\2\u0155",
    "\u0152\3\2\2\2\u0155\u0156\3\2\2\2\u01569\3\2\2\2\u0157\u0158\t\5\2",
    "\2\u0158;\3\2\2\2\u0159\u015f\58\35\2\u015a\u015b\5:\36\2\u015b\u015c",
    "\58\35\2\u015c\u015e\3\2\2\2\u015d\u015a\3\2\2\2\u015e\u0161\3\2\2\2",
    "\u015f\u015d\3\2\2\2\u015f\u0160\3\2\2\2\u0160=\3\2\2\2\u0161\u015f",
    "\3\2\2\2\u0162\u0163\7\13\2\2\u0163\u0164\5<\37\2\u0164\u0165\7\r\2",
    "\2\u0165?\3\2\2\2\u0166\u0169\7\21\2\2\u0167\u016a\5\66\34\2\u0168\u016a",
    "\5> \2\u0169\u0167\3\2\2\2\u0169\u0168\3\2\2\2\u016a\u016b\3\2\2\2\u016b",
    "\u0169\3\2\2\2\u016b\u016c\3\2\2\2\u016c\u016d\3\2\2\2\u016d\u016e\7",
    "\22\2\2\u016eA\3\2\2\2\u016f\u0170\5@!\2\u0170C\3\2\2\2\u0171\u0172",
    "\7\25\2\2\u0172\u0173\5B\"\2\u0173E\3\2\2\2\u0174\u0175\7\26\2\2\u0175",
    "\u0176\5B\"\2\u0176G\3\2\2\2\u0177\u0178\7\27\2\2\u0178\u0179\5B\"\2",
    "\u0179I\3\2\2\2\u017a\u017b\7\30\2\2\u017b\u017c\5B\"\2\u017cK\3\2\2",
    "\2\u017d\u017e\7\31\2\2\u017e\u017f\5B\"\2\u017fM\3\2\2\2\u0180\u0181",
    "\7\32\2\2\u0181\u0182\5\22\n\2\u0182\u0183\7\4\2\2\u0183O\3\2\2\2\u0184",
    "\u0186\7\33\2\2\u0185\u0187\5r:\2\u0186\u0185\3\2\2\2\u0187\u0188\3",
    "\2\2\2\u0188\u0186\3\2\2\2\u0188\u0189\3\2\2\2\u0189Q\3\2\2\2\u018a",
    "\u018b\7\34\2\2\u018b\u018c\5\22\n\2\u018c\u018d\7\4\2\2\u018dS\3\2",
    "\2\2\u018e\u0196\5D#\2\u018f\u0196\5R*\2\u0190\u0196\5F$\2\u0191\u0196",
    "\5H%\2\u0192\u0196\5N(\2\u0193\u0196\5P)\2\u0194\u0196\5J&\2\u0195\u018e",
    "\3\2\2\2\u0195\u018f\3\2\2\2\u0195\u0190\3\2\2\2\u0195\u0191\3\2\2\2",
    "\u0195\u0192\3\2\2\2\u0195\u0193\3\2\2\2\u0195\u0194\3\2\2\2\u0196U",
    "\3\2\2\2\u0197\u0198\t\6\2\2\u0198\u0199\5\22\n\2\u0199W\3\2\2\2\u019a",
    "\u019c\7\37\2\2\u019b\u019d\t\7\2\2\u019c\u019b\3\2\2\2\u019c\u019d",
    "\3\2\2\2\u019dY\3\2\2\2\u019e\u019f\7\24\2\2\u019f\u01a0\5r:\2\u01a0",
    "\u01a1\5\34\17\2\u01a1[\3\2\2\2\u01a2\u01af\7\67\2\2\u01a3\u01af\78",
    "\2\2\u01a4\u01af\79\2\2\u01a5\u01af\7:\2\2\u01a6\u01a7\7;\2\2\u01a7",
    "\u01af\5r:\2\u01a8\u01af\7<\2\2\u01a9\u01af\7=\2\2\u01aa\u01af\5V,\2",
    "\u01ab\u01af\5X-\2\u01ac\u01af\5Z.\2\u01ad\u01af\5L\'\2\u01ae\u01a2",
    "\3\2\2\2\u01ae\u01a3\3\2\2\2\u01ae\u01a4\3\2\2\2\u01ae\u01a5\3\2\2\2",
    "\u01ae\u01a6\3\2\2\2\u01ae\u01a8\3\2\2\2\u01ae\u01a9\3\2\2\2\u01ae\u01aa",
    "\3\2\2\2\u01ae\u01ab\3\2\2\2\u01ae\u01ac\3\2\2\2\u01ae\u01ad\3\2\2\2",
    "\u01af]\3\2\2\2\u01b0\u01b1\t\b\2\2\u01b1\u01b2\7\4\2\2\u01b2_\3\2\2",
    "\2\u01b3\u01b4\7 \2\2\u01b4\u01b5\5r:\2\u01b5\u01b6\5\24\13\2\u01b6",
    "\u01b7\7\4\2\2\u01b7a\3\2\2\2\u01b8\u01ba\7K\2\2\u01b9\u01b8\3\2\2\2",
    "\u01b9\u01ba\3\2\2\2\u01ba\u01bb\3\2\2\2\u01bb\u01bc\t\t\2\2\u01bc\u01be",
    "\5r:\2\u01bd\u01bf\5\24\13\2\u01be\u01bd\3\2\2\2\u01be\u01bf\3\2\2\2",
    "\u01bf\u01c2\3\2\2\2\u01c0\u01c1\7!\2\2\u01c1\u01c3\5r:\2\u01c2\u01c0",
    "\3\2\2\2\u01c2\u01c3\3\2\2\2\u01c3\u01c4\3\2\2\2\u01c4\u01c5\7\4\2\2",
    "\u01c5c\3\2\2\2\u01c6\u01c7\7\"\2\2\u01c7\u01c8\7\21\2\2\u01c8\u01c9",
    "\7\22\2\2\u01c9e\3\2\2\2\u01ca\u01cb\7\n\2\2\u01cb\u01cc\7\13\2\2\u01cc",
    "\u01d1\5\\/\2\u01cd\u01ce\7\f\2\2\u01ce\u01d0\5\\/\2\u01cf\u01cd\3\2",
    "\2\2\u01d0\u01d3\3\2\2\2\u01d1\u01cf\3\2\2\2\u01d1\u01d2\3\2\2\2\u01d2",
    "\u01d4\3\2\2\2\u01d3\u01d1\3\2\2\2\u01d4\u01d5\7\r\2\2\u01d5\u01d7\3",
    "\2\2\2\u01d6\u01ca\3\2\2\2\u01d6\u01d7\3\2\2\2\u01d7\u01dc\3\2\2\2\u01d8",
    "\u01dd\5b\62\2\u01d9\u01dd\5`\61\2\u01da\u01dd\5^\60\2\u01db\u01dd\5",
    "d\63\2\u01dc\u01d8\3\2\2\2\u01dc\u01d9\3\2\2\2\u01dc\u01da\3\2\2\2\u01dc",
    "\u01db\3\2\2\2\u01ddg\3\2\2\2\u01de\u01e0\t\n\2\2\u01df\u01de\3\2\2",
    "\2\u01e0\u01e3\3\2\2\2\u01e1\u01df\3\2\2\2\u01e1\u01e2\3\2\2\2\u01e2",
    "\u01e4\3\2\2\2\u01e3\u01e1\3\2\2\2\u01e4\u01e5\t\13\2\2\u01e5\u01e6",
    "\7G\2\2\u01e6\u01e7\5r:\2\u01e7\u01e8\5\24\13\2\u01e8\u01ee\7\21\2\2",
    "\u01e9\u01ed\5T+\2\u01ea\u01ed\5 \21\2\u01eb\u01ed\5f\64\2\u01ec\u01e9",
    "\3\2\2\2\u01ec\u01ea\3\2\2\2\u01ec\u01eb\3\2\2\2\u01ed\u01f0\3\2\2\2",
    "\u01ee\u01ec\3\2\2\2\u01ee\u01ef\3\2\2\2\u01ef\u01f1\3\2\2\2\u01f0\u01ee",
    "\3\2\2\2\u01f1\u01f2\7\22\2\2\u01f2i\3\2\2\2\u01f3\u01f4\7#\2\2\u01f4",
    "\u01f8\7\21\2\2\u01f5\u01f7\5f\64\2\u01f6\u01f5\3\2\2\2\u01f7\u01fa",
    "\3\2\2\2\u01f8\u01f6\3\2\2\2\u01f8\u01f9\3\2\2\2\u01f9\u01fb\3\2\2\2",
    "\u01fa\u01f8\3\2\2\2\u01fb\u01fc\7\22\2\2\u01fck\3\2\2\2\u01fd\u01fe",
    "\7$\2\2\u01fe\u01ff\5r:\2\u01ff\u0200\7\4\2\2\u0200m\3\2\2\2\u0201\u0207",
    "\5\16\b\2\u0202\u0207\5\36\20\2\u0203\u0207\5.\30\2\u0204\u0207\5\60",
    "\31\2\u0205\u0207\5 \21\2\u0206\u0201\3\2\2\2\u0206\u0202\3\2\2\2\u0206",
    "\u0203\3\2\2\2\u0206\u0204\3\2\2\2\u0206\u0205\3\2\2\2\u0207o\3\2\2",
    "\2\u0208\u0209\7%\2\2\u0209\u020a\7Q\2\2\u020a\u020c\7\21\2\2\u020b",
    "\u020d\5\n\6\2\u020c\u020b\3\2\2\2\u020c\u020d\3\2\2\2\u020d\u020f\3",
    "\2\2\2\u020e\u0210\5l\67\2\u020f\u020e\3\2\2\2\u020f\u0210\3\2\2\2\u0210",
    "\u0214\3\2\2\2\u0211\u0213\5\f\7\2\u0212\u0211\3\2\2\2\u0213\u0216\3",
    "\2\2\2\u0214\u0212\3\2\2\2\u0214\u0215\3\2\2\2\u0215\u021a\3\2\2\2\u0216",
    "\u0214\3\2\2\2\u0217\u0219\5n8\2\u0218\u0217\3\2\2\2\u0219\u021c\3\2",
    "\2\2\u021a\u0218\3\2\2\2\u021a\u021b\3\2\2\2\u021b\u0220\3\2\2\2\u021c",
    "\u021a\3\2\2\2\u021d\u021f\5h\65\2\u021e\u021d\3\2\2\2\u021f\u0222\3",
    "\2\2\2\u0220\u021e\3\2\2\2\u0220\u0221\3\2\2\2\u0221\u0223\3\2\2\2\u0222",
    "\u0220\3\2\2\2\u0223\u0224\5j\66\2\u0224\u0225\7\22\2\2\u0225q\3\2\2",
    "\2\u0226\u0227\t\f\2\2\u0227s\3\2\2\2\u0228\u022d\5r:\2\u0229\u022a",
    "\7\f\2\2\u022a\u022c\5r:\2\u022b\u0229\3\2\2\2\u022c\u022f\3\2\2\2\u022d",
    "\u022b\3\2\2\2\u022d\u022e\3\2\2\2\u022eu\3\2\2\2\u022f\u022d\3\2\2",
    "\2\u0230\u0231\7U\2\2\u0231w\3\2\2\2\65y~\u008c\u0095\u00a1\u00af\u00b6",
    "\u00ba\u00c0\u00c7\u00ca\u00ce\u00d1\u00db\u00e1\u00ee\u00f6\u010b\u0111",
    "\u011b\u0124\u012a\u013d\u0140\u0147\u0150\u0155\u015f\u0169\u016b\u0188",
    "\u0195\u019c\u01ae\u01b9\u01be\u01c2\u01d1\u01d6\u01dc\u01e1\u01ec\u01ee",
    "\u01f8\u0206\u020c\u020f\u0214\u021a\u0220\u022d"].join("");


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
                     "'act'", "'at'", "'mental_act'", "'initial_tree'", 
                     "'decision_cycle_sm_call'", "'behaving_entity'", "'&&'", 
                     "'||'", "'::'", "'>'", "'>='", "'<'", "'<='", "'=='", 
                     "'!='", "'!'", "'+'", "'-'", "'/'", "'%'", "'^'", "'when_fails'", 
                     "'when_succeeds'", "'ignore_failure'", "'effect_only'", 
                     "'team_effect_only'", "'post'", "'post_to'", "'team_needed_for_success'", 
                     "'one_needed_for_success'", "'fail'", 'null', "'wait'", 
                     "'move_step'", "'delete_step'", "'add_step'", "'sequential'", 
                     "'parallel'", "'collection'", 'null', "'subgoal'", 
                     "'spawngoal'", "'joint_goal_success_negotiation'", 
                     "'joint'", "'atomic'", "'adaptive'", "'*'", 'null', 
                     "'Null'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', "AND", "OR", "BIND", "GT", "GE", "LT", "LE", 
                      "EQ", "NE", "BANG", "PLUS", "MINUS", "DIV", "MOD", 
                      "POW", "WHEN_FAILS", "WHEN_SUCCEEDS", "IGNORE_FAILURE", 
                      "EFFECT_ONLY", "TEAM_EFFECT_ONLY", "POST", "POST_TO", 
                      "TEAMNEEDED", "ONENEEDED", "FAIL", "SUCCEED", "WAIT", 
                      "MOVESTEP", "DELETESTEP", "ADDSTEP", "SEQ", "PAR", 
                      "COLL", "BEH", "SUBGOAL", "SPAWNGOAL", "JOINTNEG", 
                      "JOINT", "ATOMIC", "ADAPTIVE", "STAR", "BOOL", "NULL", 
                      "TYPE", "CHARS", "FLOAT", "INT", "STRING", "WS", "COMMENT", 
                      "LINE_COMMENT", "ANYTHING" ];

var ruleNames =  [ "prog", "g_package", "g_import", "constants", "teamNeeded", 
                   "conflictDecl", "wmeRegistration", "wmeRegistration_plural", 
                   "ablLiteral", "params", "param", "javaMethod", "cast", 
                   "ablExpression", "actionRegistration", "ablVariableDeclaration", 
                   "ablVariableDeclarations", "ablVariableLiteralAssignment", 
                   "ablVariableAssignment", "classConstruction", "internalConstruction", 
                   "arrayConstruction", "wmeDeclaration", "propertyDeclaration", 
                   "operator", "wmeFieldTest", "wmeTest", "binaryOp", "booleanHelper", 
                   "mixedCall", "conditionalExpression", "wmeTestSequence", 
                   "testExpression", "precondition", "contextCondition", 
                   "entryCondition", "successCondition", "successTest", 
                   "numberNeededForSuccess", "teamMemberSpecifier", "specificity", 
                   "behaviourModifier", "priorityModifier", "persistence", 
                   "namedProperty", "stepModifier", "basicStep", "primitiveAct", 
                   "goalStep", "mentalAct", "behaviourStep", "behaviourDefinition", 
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
ABLParser.T__34 = 35;
ABLParser.AND = 36;
ABLParser.OR = 37;
ABLParser.BIND = 38;
ABLParser.GT = 39;
ABLParser.GE = 40;
ABLParser.LT = 41;
ABLParser.LE = 42;
ABLParser.EQ = 43;
ABLParser.NE = 44;
ABLParser.BANG = 45;
ABLParser.PLUS = 46;
ABLParser.MINUS = 47;
ABLParser.DIV = 48;
ABLParser.MOD = 49;
ABLParser.POW = 50;
ABLParser.WHEN_FAILS = 51;
ABLParser.WHEN_SUCCEEDS = 52;
ABLParser.IGNORE_FAILURE = 53;
ABLParser.EFFECT_ONLY = 54;
ABLParser.TEAM_EFFECT_ONLY = 55;
ABLParser.POST = 56;
ABLParser.POST_TO = 57;
ABLParser.TEAMNEEDED = 58;
ABLParser.ONENEEDED = 59;
ABLParser.FAIL = 60;
ABLParser.SUCCEED = 61;
ABLParser.WAIT = 62;
ABLParser.MOVESTEP = 63;
ABLParser.DELETESTEP = 64;
ABLParser.ADDSTEP = 65;
ABLParser.SEQ = 66;
ABLParser.PAR = 67;
ABLParser.COLL = 68;
ABLParser.BEH = 69;
ABLParser.SUBGOAL = 70;
ABLParser.SPAWNGOAL = 71;
ABLParser.JOINTNEG = 72;
ABLParser.JOINT = 73;
ABLParser.ATOMIC = 74;
ABLParser.ADAPTIVE = 75;
ABLParser.STAR = 76;
ABLParser.BOOL = 77;
ABLParser.NULL = 78;
ABLParser.TYPE = 79;
ABLParser.CHARS = 80;
ABLParser.FLOAT = 81;
ABLParser.INT = 82;
ABLParser.STRING = 83;
ABLParser.WS = 84;
ABLParser.COMMENT = 85;
ABLParser.LINE_COMMENT = 86;
ABLParser.ANYTHING = 87;

ABLParser.RULE_prog = 0;
ABLParser.RULE_g_package = 1;
ABLParser.RULE_g_import = 2;
ABLParser.RULE_constants = 3;
ABLParser.RULE_teamNeeded = 4;
ABLParser.RULE_conflictDecl = 5;
ABLParser.RULE_wmeRegistration = 6;
ABLParser.RULE_wmeRegistration_plural = 7;
ABLParser.RULE_ablLiteral = 8;
ABLParser.RULE_params = 9;
ABLParser.RULE_param = 10;
ABLParser.RULE_javaMethod = 11;
ABLParser.RULE_cast = 12;
ABLParser.RULE_ablExpression = 13;
ABLParser.RULE_actionRegistration = 14;
ABLParser.RULE_ablVariableDeclaration = 15;
ABLParser.RULE_ablVariableDeclarations = 16;
ABLParser.RULE_ablVariableLiteralAssignment = 17;
ABLParser.RULE_ablVariableAssignment = 18;
ABLParser.RULE_classConstruction = 19;
ABLParser.RULE_internalConstruction = 20;
ABLParser.RULE_arrayConstruction = 21;
ABLParser.RULE_wmeDeclaration = 22;
ABLParser.RULE_propertyDeclaration = 23;
ABLParser.RULE_operator = 24;
ABLParser.RULE_wmeFieldTest = 25;
ABLParser.RULE_wmeTest = 26;
ABLParser.RULE_binaryOp = 27;
ABLParser.RULE_booleanHelper = 28;
ABLParser.RULE_mixedCall = 29;
ABLParser.RULE_conditionalExpression = 30;
ABLParser.RULE_wmeTestSequence = 31;
ABLParser.RULE_testExpression = 32;
ABLParser.RULE_precondition = 33;
ABLParser.RULE_contextCondition = 34;
ABLParser.RULE_entryCondition = 35;
ABLParser.RULE_successCondition = 36;
ABLParser.RULE_successTest = 37;
ABLParser.RULE_numberNeededForSuccess = 38;
ABLParser.RULE_teamMemberSpecifier = 39;
ABLParser.RULE_specificity = 40;
ABLParser.RULE_behaviourModifier = 41;
ABLParser.RULE_priorityModifier = 42;
ABLParser.RULE_persistence = 43;
ABLParser.RULE_namedProperty = 44;
ABLParser.RULE_stepModifier = 45;
ABLParser.RULE_basicStep = 46;
ABLParser.RULE_primitiveAct = 47;
ABLParser.RULE_goalStep = 48;
ABLParser.RULE_mentalAct = 49;
ABLParser.RULE_behaviourStep = 50;
ABLParser.RULE_behaviourDefinition = 51;
ABLParser.RULE_initialTree = 52;
ABLParser.RULE_decisionCycleSMCallDeclaration = 53;
ABLParser.RULE_ablDeclaration = 54;
ABLParser.RULE_behavingEntity = 55;
ABLParser.RULE_name = 56;
ABLParser.RULE_nameList = 57;
ABLParser.RULE_string = 58;

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
        this.state = 119;
        _la = this._input.LA(1);
        if(_la===ABLParser.T__0) {
            this.state = 118;
            this.g_package();
        }

        this.state = 124;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.T__2) {
            this.state = 121;
            this.g_import();
            this.state = 126;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 127;
        this.constants();
        this.state = 128;
        this.behavingEntity();
        this.state = 129;
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

G_packageContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
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
        this.state = 131;
        this.match(ABLParser.T__0);
        this.state = 132;
        this.name();
        this.state = 133;
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

G_importContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
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
        this.state = 135;
        this.match(ABLParser.T__2);
        this.state = 136;
        this.name();
        this.state = 138;
        _la = this._input.LA(1);
        if(_la===ABLParser.STAR) {
            this.state = 137;
            this.match(ABLParser.STAR);
        }

        this.state = 140;
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
        this.state = 147;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.T__3) {
            this.state = 142;
            this.match(ABLParser.T__3);
            this.state = 143;
            this.match(ABLParser.TYPE);
            this.state = 144;
            this.match(ABLParser.T__1);
            this.state = 149;
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
        this.state = 150;
        this.match(ABLParser.JOINTNEG);
        this.state = 151;
        _la = this._input.LA(1);
        if(!(_la===ABLParser.TEAMNEEDED || _la===ABLParser.ONENEEDED)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 152;
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
        this.state = 154;
        this.match(ABLParser.T__4);

        this.state = 155;
        this.name();
        this.state = 157; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 156;
            this.name();
            this.state = 159; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ABLParser.TYPE || _la===ABLParser.CHARS);
        this.state = 161;
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
        this.state = 163;
        this.match(ABLParser.T__5);
        this.state = 164;
        this.match(ABLParser.T__6);
        this.state = 165;
        this.match(ABLParser.TYPE);
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
        this.state = 171; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 170;
            this.wmeRegistration();
            this.state = 173; 
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
        this.state = 180;
        switch(this._input.LA(1)) {
        case ABLParser.INT:
            this.enterOuterAlt(localctx, 1);
            this.state = 175;
            this.match(ABLParser.INT);
            break;
        case ABLParser.FLOAT:
            this.enterOuterAlt(localctx, 2);
            this.state = 176;
            this.match(ABLParser.FLOAT);
            break;
        case ABLParser.STRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 177;
            this.string();
            break;
        case ABLParser.BOOL:
            this.enterOuterAlt(localctx, 4);
            this.state = 178;
            this.match(ABLParser.BOOL);
            break;
        case ABLParser.NULL:
            this.enterOuterAlt(localctx, 5);
            this.state = 179;
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
    this.enterRule(localctx, 18, ABLParser.RULE_params);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 182;
        this.match(ABLParser.T__8);
        this.state = 184;
        _la = this._input.LA(1);
        if(_la===ABLParser.T__8 || _la===ABLParser.BANG || ((((_la - 77)) & ~0x1f) == 0 && ((1 << (_la - 77)) & ((1 << (ABLParser.BOOL - 77)) | (1 << (ABLParser.NULL - 77)) | (1 << (ABLParser.TYPE - 77)) | (1 << (ABLParser.CHARS - 77)) | (1 << (ABLParser.FLOAT - 77)) | (1 << (ABLParser.INT - 77)) | (1 << (ABLParser.STRING - 77)))) !== 0)) {
            this.state = 183;
            this.param();
        }

        this.state = 190;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.T__9) {
            this.state = 186;
            this.match(ABLParser.T__9);
            this.state = 187;
            this.param();
            this.state = 192;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 193;
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

ParamContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

ParamContext.prototype.ablExpression = function() {
    return this.getTypedRuleContext(AblExpressionContext,0);
};

ParamContext.prototype.binaryOp = function() {
    return this.getTypedRuleContext(BinaryOpContext,0);
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
    this.enterRule(localctx, 20, ABLParser.RULE_param);
    var _la = 0; // Token type
    try {
        this.state = 204;
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 195;
            this.name();
            this.state = 197;
            _la = this._input.LA(1);
            if(_la===ABLParser.T__8 || _la===ABLParser.BANG || ((((_la - 77)) & ~0x1f) == 0 && ((1 << (_la - 77)) & ((1 << (ABLParser.BOOL - 77)) | (1 << (ABLParser.NULL - 77)) | (1 << (ABLParser.TYPE - 77)) | (1 << (ABLParser.CHARS - 77)) | (1 << (ABLParser.FLOAT - 77)) | (1 << (ABLParser.INT - 77)) | (1 << (ABLParser.STRING - 77)))) !== 0)) {
                this.state = 196;
                this.ablExpression();
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 200;
            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
            if(la_===1) {
                this.state = 199;
                this.name();

            }
            this.state = 202;
            this.ablExpression();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 203;
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
    this.enterRule(localctx, 22, ABLParser.RULE_javaMethod);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 207;
        _la = this._input.LA(1);
        if(_la===ABLParser.BANG) {
            this.state = 206;
            this.match(ABLParser.BANG);
        }

        this.state = 209;
        this.name();
        this.state = 210;
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

function CastContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_cast;
    return this;
}

CastContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CastContext.prototype.constructor = CastContext;

CastContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

CastContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterCast(this);
	}
};

CastContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitCast(this);
	}
};




ABLParser.CastContext = CastContext;

ABLParser.prototype.cast = function() {

    var localctx = new CastContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ABLParser.RULE_cast);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 212;
        this.match(ABLParser.T__8);
        this.state = 213;
        this.name();
        this.state = 214;
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

AblExpressionContext.prototype.cast = function() {
    return this.getTypedRuleContext(CastContext,0);
};

AblExpressionContext.prototype.ablLiteral = function() {
    return this.getTypedRuleContext(AblLiteralContext,0);
};

AblExpressionContext.prototype.javaMethod = function() {
    return this.getTypedRuleContext(JavaMethodContext,0);
};

AblExpressionContext.prototype.conditionalExpression = function() {
    return this.getTypedRuleContext(ConditionalExpressionContext,0);
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
    this.enterRule(localctx, 26, ABLParser.RULE_ablExpression);
    var _la = 0; // Token type
    try {
        this.state = 223;
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 217;
            _la = this._input.LA(1);
            if(_la===ABLParser.T__8) {
                this.state = 216;
                this.cast();
            }

            this.state = 219;
            this.name();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 220;
            this.ablLiteral();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 221;
            this.javaMethod();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 222;
            this.conditionalExpression();
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
    this.enterRule(localctx, 28, ABLParser.RULE_actionRegistration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 225;
        this.match(ABLParser.T__5);
        this.state = 226;
        this.match(ABLParser.T__11);
        this.state = 227;
        this.name();
        this.state = 228;
        this.params();
        this.state = 229;
        this.match(ABLParser.T__7);
        this.state = 230;
        this.match(ABLParser.TYPE);
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
    this.enterRule(localctx, 30, ABLParser.RULE_ablVariableDeclaration);
    try {
        this.state = 236;
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 233;
            this.ablVariableDeclarations();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 234;
            this.ablVariableAssignment();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 235;
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
    this.enterRule(localctx, 32, ABLParser.RULE_ablVariableDeclarations);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 238;
        this.name();
        this.state = 239;
        this.name();
        this.state = 244;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.T__9) {
            this.state = 240;
            this.match(ABLParser.T__9);
            this.state = 241;
            this.name();
            this.state = 246;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 247;
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
    this.enterRule(localctx, 34, ABLParser.RULE_ablVariableLiteralAssignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 249;
        this.name();
        this.state = 250;
        this.name();
        this.state = 251;
        this.match(ABLParser.T__12);
        this.state = 252;
        this.ablLiteral();
        this.state = 253;
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
    this.enterRule(localctx, 36, ABLParser.RULE_ablVariableAssignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 255;
        this.name();
        this.state = 256;
        this.name();
        this.state = 257;
        this.match(ABLParser.T__12);
        this.state = 258;
        this.match(ABLParser.T__13);
        this.state = 259;
        this.classConstruction();
        this.state = 260;
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

ClassConstructionContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

ClassConstructionContext.prototype.internalConstruction = function() {
    return this.getTypedRuleContext(InternalConstructionContext,0);
};

ClassConstructionContext.prototype.arrayConstruction = function() {
    return this.getTypedRuleContext(ArrayConstructionContext,0);
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
    this.enterRule(localctx, 38, ABLParser.RULE_classConstruction);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 262;
        this.name();
        this.state = 265;
        switch(this._input.LA(1)) {
        case ABLParser.T__8:
            this.state = 263;
            this.internalConstruction();
            break;
        case ABLParser.T__14:
            this.state = 264;
            this.arrayConstruction();
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

function InternalConstructionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_internalConstruction;
    return this;
}

InternalConstructionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InternalConstructionContext.prototype.constructor = InternalConstructionContext;

InternalConstructionContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

InternalConstructionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterInternalConstruction(this);
	}
};

InternalConstructionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitInternalConstruction(this);
	}
};




ABLParser.InternalConstructionContext = InternalConstructionContext;

ABLParser.prototype.internalConstruction = function() {

    var localctx = new InternalConstructionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, ABLParser.RULE_internalConstruction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 267;
        this.match(ABLParser.T__8);
        this.state = 268;
        this.name();
        this.state = 271;
        _la = this._input.LA(1);
        if(_la===ABLParser.T__8) {
            this.state = 269;
            this.match(ABLParser.T__8);
            this.state = 270;
            this.match(ABLParser.T__10);
        }

        this.state = 273;
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

function ArrayConstructionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_arrayConstruction;
    return this;
}

ArrayConstructionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayConstructionContext.prototype.constructor = ArrayConstructionContext;

ArrayConstructionContext.prototype.string = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StringContext);
    } else {
        return this.getTypedRuleContext(StringContext,i);
    }
};

ArrayConstructionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterArrayConstruction(this);
	}
};

ArrayConstructionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitArrayConstruction(this);
	}
};




ABLParser.ArrayConstructionContext = ArrayConstructionContext;

ABLParser.prototype.arrayConstruction = function() {

    var localctx = new ArrayConstructionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, ABLParser.RULE_arrayConstruction);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 275;
        this.match(ABLParser.T__14);
        this.state = 276;
        this.string();
        this.state = 281;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.T__9) {
            this.state = 277;
            this.match(ABLParser.T__9);
            this.state = 278;
            this.string();
            this.state = 283;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 284;
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
    this.enterRule(localctx, 44, ABLParser.RULE_wmeDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 286;
        this.match(ABLParser.T__6);
        this.state = 287;
        this.match(ABLParser.TYPE);
        this.state = 290;
        _la = this._input.LA(1);
        if(_la===ABLParser.T__16) {
            this.state = 288;
            this.match(ABLParser.T__16);
            this.state = 289;
            this.match(ABLParser.TYPE);
        }

        this.state = 292;
        this.match(ABLParser.T__14);
        this.state = 296;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.TYPE || _la===ABLParser.CHARS) {
            this.state = 293;
            this.ablVariableDeclaration();
            this.state = 298;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 299;
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
    this.enterRule(localctx, 46, ABLParser.RULE_propertyDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 301;
        this.match(ABLParser.T__17);
        this.state = 302;
        this.match(ABLParser.TYPE);
        this.state = 303;
        this.name();
        this.state = 304;
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

OperatorContext.prototype.PLUS = function() {
    return this.getToken(ABLParser.PLUS, 0);
};

OperatorContext.prototype.MINUS = function() {
    return this.getToken(ABLParser.MINUS, 0);
};

OperatorContext.prototype.DIV = function() {
    return this.getToken(ABLParser.DIV, 0);
};

OperatorContext.prototype.MOD = function() {
    return this.getToken(ABLParser.MOD, 0);
};

OperatorContext.prototype.POW = function() {
    return this.getToken(ABLParser.POW, 0);
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
    this.enterRule(localctx, 48, ABLParser.RULE_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 306;
        _la = this._input.LA(1);
        if(!(((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (ABLParser.BIND - 38)) | (1 << (ABLParser.GT - 38)) | (1 << (ABLParser.GE - 38)) | (1 << (ABLParser.LT - 38)) | (1 << (ABLParser.LE - 38)) | (1 << (ABLParser.EQ - 38)) | (1 << (ABLParser.NE - 38)) | (1 << (ABLParser.PLUS - 38)) | (1 << (ABLParser.MINUS - 38)) | (1 << (ABLParser.DIV - 38)) | (1 << (ABLParser.MOD - 38)) | (1 << (ABLParser.POW - 38)))) !== 0))) {
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
    this.enterRule(localctx, 50, ABLParser.RULE_wmeFieldTest);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 308;
        this.name();
        this.state = 309;
        this.operator();
        this.state = 310;
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
    this.enterRule(localctx, 52, ABLParser.RULE_wmeTest);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 315;
        _la = this._input.LA(1);
        if(_la===ABLParser.TYPE || _la===ABLParser.CHARS) {
            this.state = 312;
            this.name();
            this.state = 313;
            _la = this._input.LA(1);
            if(!(_la===ABLParser.T__12 || _la===ABLParser.BIND)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
        }

        this.state = 318;
        _la = this._input.LA(1);
        if(_la===ABLParser.BANG) {
            this.state = 317;
            this.match(ABLParser.BANG);
        }

        this.state = 320;
        this.match(ABLParser.T__8);
        this.state = 321;
        this.match(ABLParser.TYPE);
        this.state = 325;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.TYPE || _la===ABLParser.CHARS) {
            this.state = 322;
            this.wmeFieldTest();
            this.state = 327;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 328;
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

BinaryOpContext.prototype.operator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OperatorContext);
    } else {
        return this.getTypedRuleContext(OperatorContext,i);
    }
};

BinaryOpContext.prototype.binaryOp = function() {
    return this.getTypedRuleContext(BinaryOpContext,0);
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
    this.enterRule(localctx, 54, ABLParser.RULE_binaryOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 330;
        this.ablExpression();
        this.state = 334;
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        if(la_===1) {
            this.state = 331;
            this.operator();
            this.state = 332;
            this.ablExpression();

        }
        this.state = 339;
        _la = this._input.LA(1);
        if(((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (ABLParser.BIND - 38)) | (1 << (ABLParser.GT - 38)) | (1 << (ABLParser.GE - 38)) | (1 << (ABLParser.LT - 38)) | (1 << (ABLParser.LE - 38)) | (1 << (ABLParser.EQ - 38)) | (1 << (ABLParser.NE - 38)) | (1 << (ABLParser.PLUS - 38)) | (1 << (ABLParser.MINUS - 38)) | (1 << (ABLParser.DIV - 38)) | (1 << (ABLParser.MOD - 38)) | (1 << (ABLParser.POW - 38)))) !== 0)) {
            this.state = 336;
            this.operator();
            this.state = 337;
            this.binaryOp();
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
    this.enterRule(localctx, 56, ABLParser.RULE_booleanHelper);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 341;
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

MixedCallContext.prototype.binaryOp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BinaryOpContext);
    } else {
        return this.getTypedRuleContext(BinaryOpContext,i);
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
    this.enterRule(localctx, 58, ABLParser.RULE_mixedCall);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 343;
        this.binaryOp();
        this.state = 349;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.AND || _la===ABLParser.OR) {
            this.state = 344;
            this.booleanHelper();
            this.state = 345;
            this.binaryOp();
            this.state = 351;
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
    this.enterRule(localctx, 60, ABLParser.RULE_conditionalExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 352;
        this.match(ABLParser.T__8);
        this.state = 353;
        this.mixedCall();
        this.state = 354;
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
    this.enterRule(localctx, 62, ABLParser.RULE_wmeTestSequence);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 356;
        this.match(ABLParser.T__14);
        this.state = 359; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 359;
            var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
            switch(la_) {
            case 1:
                this.state = 357;
                this.wmeTest();
                break;

            case 2:
                this.state = 358;
                this.conditionalExpression();
                break;

            }
            this.state = 361; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ABLParser.T__8 || _la===ABLParser.BANG || _la===ABLParser.TYPE || _la===ABLParser.CHARS);
        this.state = 363;
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
    this.enterRule(localctx, 64, ABLParser.RULE_testExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 365;
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
    this.enterRule(localctx, 66, ABLParser.RULE_precondition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 367;
        this.match(ABLParser.T__18);
        this.state = 368;
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
    this.enterRule(localctx, 68, ABLParser.RULE_contextCondition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 370;
        this.match(ABLParser.T__19);
        this.state = 371;
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
    this.enterRule(localctx, 70, ABLParser.RULE_entryCondition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 373;
        this.match(ABLParser.T__20);
        this.state = 374;
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
    this.enterRule(localctx, 72, ABLParser.RULE_successCondition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 376;
        this.match(ABLParser.T__21);
        this.state = 377;
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
    this.enterRule(localctx, 74, ABLParser.RULE_successTest);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 379;
        this.match(ABLParser.T__22);
        this.state = 380;
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
    this.enterRule(localctx, 76, ABLParser.RULE_numberNeededForSuccess);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 382;
        this.match(ABLParser.T__23);
        this.state = 383;
        this.ablLiteral();
        this.state = 384;
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
    this.enterRule(localctx, 78, ABLParser.RULE_teamMemberSpecifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 386;
        this.match(ABLParser.T__24);
        this.state = 388; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 387;
        		this.name();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 390; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,30, this._ctx);
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
    this.enterRule(localctx, 80, ABLParser.RULE_specificity);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 392;
        this.match(ABLParser.T__25);
        this.state = 393;
        this.ablLiteral();
        this.state = 394;
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
    this.enterRule(localctx, 82, ABLParser.RULE_behaviourModifier);
    try {
        this.state = 403;
        switch(this._input.LA(1)) {
        case ABLParser.T__18:
            this.enterOuterAlt(localctx, 1);
            this.state = 396;
            this.precondition();
            break;
        case ABLParser.T__25:
            this.enterOuterAlt(localctx, 2);
            this.state = 397;
            this.specificity();
            break;
        case ABLParser.T__19:
            this.enterOuterAlt(localctx, 3);
            this.state = 398;
            this.contextCondition();
            break;
        case ABLParser.T__20:
            this.enterOuterAlt(localctx, 4);
            this.state = 399;
            this.entryCondition();
            break;
        case ABLParser.T__23:
            this.enterOuterAlt(localctx, 5);
            this.state = 400;
            this.numberNeededForSuccess();
            break;
        case ABLParser.T__24:
            this.enterOuterAlt(localctx, 6);
            this.state = 401;
            this.teamMemberSpecifier();
            break;
        case ABLParser.T__21:
            this.enterOuterAlt(localctx, 7);
            this.state = 402;
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
    this.enterRule(localctx, 84, ABLParser.RULE_priorityModifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 405;
        _la = this._input.LA(1);
        if(!(_la===ABLParser.T__26 || _la===ABLParser.T__27)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 406;
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
    this.enterRule(localctx, 86, ABLParser.RULE_persistence);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 408;
        this.match(ABLParser.T__28);
        this.state = 410;
        _la = this._input.LA(1);
        if(_la===ABLParser.WHEN_FAILS || _la===ABLParser.WHEN_SUCCEEDS) {
            this.state = 409;
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
    this.enterRule(localctx, 88, ABLParser.RULE_namedProperty);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 412;
        this.match(ABLParser.T__17);
        this.state = 413;
        this.name();
        this.state = 414;
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
    this.enterRule(localctx, 90, ABLParser.RULE_stepModifier);
    try {
        this.state = 428;
        switch(this._input.LA(1)) {
        case ABLParser.IGNORE_FAILURE:
            this.enterOuterAlt(localctx, 1);
            this.state = 416;
            this.match(ABLParser.IGNORE_FAILURE);
            break;
        case ABLParser.EFFECT_ONLY:
            this.enterOuterAlt(localctx, 2);
            this.state = 417;
            this.match(ABLParser.EFFECT_ONLY);
            break;
        case ABLParser.TEAM_EFFECT_ONLY:
            this.enterOuterAlt(localctx, 3);
            this.state = 418;
            this.match(ABLParser.TEAM_EFFECT_ONLY);
            break;
        case ABLParser.POST:
            this.enterOuterAlt(localctx, 4);
            this.state = 419;
            this.match(ABLParser.POST);
            break;
        case ABLParser.POST_TO:
            this.enterOuterAlt(localctx, 5);
            this.state = 420;
            this.match(ABLParser.POST_TO);
            this.state = 421;
            this.name();
            break;
        case ABLParser.TEAMNEEDED:
            this.enterOuterAlt(localctx, 6);
            this.state = 422;
            this.match(ABLParser.TEAMNEEDED);
            break;
        case ABLParser.ONENEEDED:
            this.enterOuterAlt(localctx, 7);
            this.state = 423;
            this.match(ABLParser.ONENEEDED);
            break;
        case ABLParser.T__26:
        case ABLParser.T__27:
            this.enterOuterAlt(localctx, 8);
            this.state = 424;
            this.priorityModifier();
            break;
        case ABLParser.T__28:
            this.enterOuterAlt(localctx, 9);
            this.state = 425;
            this.persistence();
            break;
        case ABLParser.T__17:
            this.enterOuterAlt(localctx, 10);
            this.state = 426;
            this.namedProperty();
            break;
        case ABLParser.T__22:
            this.enterOuterAlt(localctx, 11);
            this.state = 427;
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
    this.enterRule(localctx, 92, ABLParser.RULE_basicStep);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 430;
        _la = this._input.LA(1);
        if(!(((((_la - 60)) & ~0x1f) == 0 && ((1 << (_la - 60)) & ((1 << (ABLParser.FAIL - 60)) | (1 << (ABLParser.SUCCEED - 60)) | (1 << (ABLParser.WAIT - 60)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 431;
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
    this.enterRule(localctx, 94, ABLParser.RULE_primitiveAct);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 433;
        this.match(ABLParser.T__29);
        this.state = 434;
        this.name();
        this.state = 435;
        this.params();
        this.state = 436;
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
    this.enterRule(localctx, 96, ABLParser.RULE_goalStep);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 439;
        _la = this._input.LA(1);
        if(_la===ABLParser.JOINT) {
            this.state = 438;
            this.match(ABLParser.JOINT);
        }

        this.state = 441;
        _la = this._input.LA(1);
        if(!(_la===ABLParser.SUBGOAL || _la===ABLParser.SPAWNGOAL)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 442;
        this.name();
        this.state = 444;
        _la = this._input.LA(1);
        if(_la===ABLParser.T__8) {
            this.state = 443;
            this.params();
        }

        this.state = 448;
        _la = this._input.LA(1);
        if(_la===ABLParser.T__30) {
            this.state = 446;
            this.match(ABLParser.T__30);
            this.state = 447;
            this.name();
        }

        this.state = 450;
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

function MentalActContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_mentalAct;
    return this;
}

MentalActContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MentalActContext.prototype.constructor = MentalActContext;


MentalActContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterMentalAct(this);
	}
};

MentalActContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitMentalAct(this);
	}
};




ABLParser.MentalActContext = MentalActContext;

ABLParser.prototype.mentalAct = function() {

    var localctx = new MentalActContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, ABLParser.RULE_mentalAct);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 452;
        this.match(ABLParser.T__31);
        this.state = 453;
        this.match(ABLParser.T__14);
        this.state = 454;
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

BehaviourStepContext.prototype.mentalAct = function() {
    return this.getTypedRuleContext(MentalActContext,0);
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
    this.enterRule(localctx, 100, ABLParser.RULE_behaviourStep);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 468;
        _la = this._input.LA(1);
        if(_la===ABLParser.T__7) {
            this.state = 456;
            this.match(ABLParser.T__7);
            this.state = 457;
            this.match(ABLParser.T__8);
            this.state = 458;
            this.stepModifier();
            this.state = 463;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===ABLParser.T__9) {
                this.state = 459;
                this.match(ABLParser.T__9);
                this.state = 460;
                this.stepModifier();
                this.state = 465;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 466;
            this.match(ABLParser.T__10);
        }

        this.state = 474;
        switch(this._input.LA(1)) {
        case ABLParser.SUBGOAL:
        case ABLParser.SPAWNGOAL:
        case ABLParser.JOINT:
            this.state = 470;
            this.goalStep();
            break;
        case ABLParser.T__29:
            this.state = 471;
            this.primitiveAct();
            break;
        case ABLParser.FAIL:
        case ABLParser.SUCCEED:
        case ABLParser.WAIT:
            this.state = 472;
            this.basicStep();
            break;
        case ABLParser.T__31:
            this.state = 473;
            this.mentalAct();
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
    this.enterRule(localctx, 102, ABLParser.RULE_behaviourDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 479;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 73)) & ~0x1f) == 0 && ((1 << (_la - 73)) & ((1 << (ABLParser.JOINT - 73)) | (1 << (ABLParser.ATOMIC - 73)) | (1 << (ABLParser.ADAPTIVE - 73)))) !== 0)) {
            this.state = 476;
            _la = this._input.LA(1);
            if(!(((((_la - 73)) & ~0x1f) == 0 && ((1 << (_la - 73)) & ((1 << (ABLParser.JOINT - 73)) | (1 << (ABLParser.ATOMIC - 73)) | (1 << (ABLParser.ADAPTIVE - 73)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 481;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 482;
        _la = this._input.LA(1);
        if(!(((((_la - 66)) & ~0x1f) == 0 && ((1 << (_la - 66)) & ((1 << (ABLParser.SEQ - 66)) | (1 << (ABLParser.PAR - 66)) | (1 << (ABLParser.COLL - 66)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 483;
        this.match(ABLParser.BEH);
        this.state = 484;
        this.name();
        this.state = 485;
        this.params();
        this.state = 486;
        this.match(ABLParser.T__14);
        this.state = 492;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 8)) & ~0x1f) == 0 && ((1 << (_la - 8)) & ((1 << (ABLParser.T__7 - 8)) | (1 << (ABLParser.T__18 - 8)) | (1 << (ABLParser.T__19 - 8)) | (1 << (ABLParser.T__20 - 8)) | (1 << (ABLParser.T__21 - 8)) | (1 << (ABLParser.T__23 - 8)) | (1 << (ABLParser.T__24 - 8)) | (1 << (ABLParser.T__25 - 8)) | (1 << (ABLParser.T__29 - 8)) | (1 << (ABLParser.T__31 - 8)))) !== 0) || ((((_la - 60)) & ~0x1f) == 0 && ((1 << (_la - 60)) & ((1 << (ABLParser.FAIL - 60)) | (1 << (ABLParser.SUCCEED - 60)) | (1 << (ABLParser.WAIT - 60)) | (1 << (ABLParser.SUBGOAL - 60)) | (1 << (ABLParser.SPAWNGOAL - 60)) | (1 << (ABLParser.JOINT - 60)) | (1 << (ABLParser.TYPE - 60)) | (1 << (ABLParser.CHARS - 60)))) !== 0)) {
            this.state = 490;
            switch(this._input.LA(1)) {
            case ABLParser.T__18:
            case ABLParser.T__19:
            case ABLParser.T__20:
            case ABLParser.T__21:
            case ABLParser.T__23:
            case ABLParser.T__24:
            case ABLParser.T__25:
                this.state = 487;
                this.behaviourModifier();
                break;
            case ABLParser.TYPE:
            case ABLParser.CHARS:
                this.state = 488;
                this.ablVariableDeclaration();
                break;
            case ABLParser.T__7:
            case ABLParser.T__29:
            case ABLParser.T__31:
            case ABLParser.FAIL:
            case ABLParser.SUCCEED:
            case ABLParser.WAIT:
            case ABLParser.SUBGOAL:
            case ABLParser.SPAWNGOAL:
            case ABLParser.JOINT:
                this.state = 489;
                this.behaviourStep();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 494;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 495;
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
    this.enterRule(localctx, 104, ABLParser.RULE_initialTree);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 497;
        this.match(ABLParser.T__32);
        this.state = 498;
        this.match(ABLParser.T__14);
        this.state = 502;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 8)) & ~0x1f) == 0 && ((1 << (_la - 8)) & ((1 << (ABLParser.T__7 - 8)) | (1 << (ABLParser.T__29 - 8)) | (1 << (ABLParser.T__31 - 8)))) !== 0) || ((((_la - 60)) & ~0x1f) == 0 && ((1 << (_la - 60)) & ((1 << (ABLParser.FAIL - 60)) | (1 << (ABLParser.SUCCEED - 60)) | (1 << (ABLParser.WAIT - 60)) | (1 << (ABLParser.SUBGOAL - 60)) | (1 << (ABLParser.SPAWNGOAL - 60)) | (1 << (ABLParser.JOINT - 60)))) !== 0)) {
            this.state = 499;
            this.behaviourStep();
            this.state = 504;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 505;
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
    this.enterRule(localctx, 106, ABLParser.RULE_decisionCycleSMCallDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 507;
        this.match(ABLParser.T__33);
        this.state = 508;
        this.name();
        this.state = 509;
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
    this.enterRule(localctx, 108, ABLParser.RULE_ablDeclaration);
    try {
        this.state = 516;
        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 511;
            this.wmeRegistration();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 512;
            this.actionRegistration();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 513;
            this.wmeDeclaration();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 514;
            this.propertyDeclaration();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 515;
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
    this.enterRule(localctx, 110, ABLParser.RULE_behavingEntity);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 518;
        this.match(ABLParser.T__34);
        this.state = 519;
        this.match(ABLParser.TYPE);
        this.state = 520;
        this.match(ABLParser.T__14);
        this.state = 522;
        _la = this._input.LA(1);
        if(_la===ABLParser.JOINTNEG) {
            this.state = 521;
            this.teamNeeded();
        }

        this.state = 525;
        _la = this._input.LA(1);
        if(_la===ABLParser.T__33) {
            this.state = 524;
            this.decisionCycleSMCallDeclaration();
        }

        this.state = 530;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.T__4) {
            this.state = 527;
            this.conflictDecl();
            this.state = 532;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 536;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ABLParser.T__5) | (1 << ABLParser.T__6) | (1 << ABLParser.T__17))) !== 0) || _la===ABLParser.TYPE || _la===ABLParser.CHARS) {
            this.state = 533;
            this.ablDeclaration();
            this.state = 538;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 542;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 66)) & ~0x1f) == 0 && ((1 << (_la - 66)) & ((1 << (ABLParser.SEQ - 66)) | (1 << (ABLParser.PAR - 66)) | (1 << (ABLParser.COLL - 66)) | (1 << (ABLParser.JOINT - 66)) | (1 << (ABLParser.ATOMIC - 66)) | (1 << (ABLParser.ADAPTIVE - 66)))) !== 0)) {
            this.state = 539;
            this.behaviourDefinition();
            this.state = 544;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 545;
        this.initialTree();
        this.state = 546;
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
    this.enterRule(localctx, 112, ABLParser.RULE_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 548;
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
    this.enterRule(localctx, 114, ABLParser.RULE_nameList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 550;
        this.name();
        this.state = 555;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.T__9) {
            this.state = 551;
            this.match(ABLParser.T__9);
            this.state = 552;
            this.name();
            this.state = 557;
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
    this.enterRule(localctx, 116, ABLParser.RULE_string);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 558;
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
