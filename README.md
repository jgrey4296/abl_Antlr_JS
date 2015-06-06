# abl_Antlr_JS
An ANTLR 4 based javascript parser for ABL

## Requirements:
antlr4 javascript runtime
nodeunit and amdefine

## Grammar Files:
ABL.g4
AblTokens.g4

Possibly to be split up into:
ABL.g4
ABLTokens.g4
ABLBehaviour.g4
ABLPrecondition.g4
StepModifiers.g4

## Extraneous Files:
Expr.g4 (a simple test grammar)
abl-filtered.g4 (attempt to simplify the grammar)

## Grammar Compilation:
THE CAPITAL 'S' IN JavaScript IS IMPORTANT!!!!
ANTLR MUST BE > v4.5

Command:
java -jar /path/to/antlr.jar -Dlanguage=JavaScript ABL.g4

## Fixes:
Generated files may need their import statements amended from:
	import('./antlr4/index')
to:
	import('./antlr4/index')

## PREFFERED USAGE:
use make. it will fix imports automatically.

## GENERATED FILES:
This should generate:
ABLLexer.js
ABLLexer.tokens
ABLListener.js
ABLParser.js

## DEV FILES:
JGListener.js

The Listener is written in CommonJS Module format

## USER FILES:
ABLModule.js is a wrapper to easily setup the parser.
