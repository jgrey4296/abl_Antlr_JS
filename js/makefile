
GEN_FILES = ELLexer.js ELLexer.tokens ELListener.js ELParser.js EL.tokens
WRITTEN_FILES = EL_custom_listener.js ELModule.js
GRAMMAR = EL.g4

all : $(GEN_FILES)

compileGrammar :
	java -jar ./lib/antlr-4.5.3-complete.jar -Dlanguage=JavaScript $(GRAMMAR)

$(GEN_FILES) : compileGrammar
	@echo Cleaning $@
	perl -pi -e "s/\'antlr4\/index/\'.\/lib\/antlr4_runtime\/index/g" $@

test : FORCE 
	nodeunit ./unitTests/unitTests.js
	nodeunit ./unitTests/allTests.js

FORCE : 

clean :
	rm ${GEN_FILES}

real :
	node nodeMain.js ../preprocessed/filtered_Regular.abl
