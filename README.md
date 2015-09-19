# abl_Antlr_JS
An ANTLR 4 based javascript parser for ABL

## Requirements:
antlr4 javascript runtime,
nodeunit and amdefine

## Grammar Files:
ABL.g4
AblTokens.g4


## Grammar Compilation notes:
The Capital 'S' In JavaScript Is Important!!!!
Antlr Must Be > v4.5

Grammar compilation Command:
java -jar /path/to/antlr.jar -Dlanguage=JavaScript ABL.g4

## Fixes:
Generated files may need their import statements amended from:
	import('./antlr4/index')
to:
	import('./antlr4/index')

## PREFFERED USAGE:
use make. it will fix imports automatically.

## GENERATED FILES:
ABLLexer.js
ABLLexer.tokens
ABLListener.js
ABLParser.js

## DEV FILES:
JGListener.js

The Listener is written in CommonJS Module format

## USER FILES:
ABLModule.js is a wrapper to easily setup the parser.

##Mental Act Filter:
fileFilter.js in mental_act_filter will preprocess an abl file to tranform all mental_acts into stock "mental_act{}" statements, so that the parser doesnt need to handle full java

#Examples
Example real abl files, simple abl files, preprocessed/mentalAct_Stripped files, and parsed to JSON files, can be found in the examples folder

#Unit Tests
Can be found in js/unitTests. Written using nodeunit.


