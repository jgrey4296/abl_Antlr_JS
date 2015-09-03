
GEN_FILES = ABLLexer.js ABLLexer.tokens ABLListener.js ABLParser.js ABL.tokens

WRITTEN_FILES = JGListener.js ABLModule.js

all : $(GEN_FILES) test

compileGrammar :
	java -jar ./lib/antlr-4.5-complete.jar -Dlanguage=JavaScript ABL.g4

$(GEN_FILES) : compileGrammar
	@echo Cleaning $@
	perl -pi -e "s/\'antlr4\/index/\'.\/lib\/antlr4\/index/g" $@

test : FORCE 
	nodeunit ./unitTests/unitTests.js

FORCE : 

clean :
	rm ${GEN_FILES}

