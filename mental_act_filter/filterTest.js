var maFilter = require('./mentalActFilter');

exports.mentalActFilterTests = {

    simpleSmokeTest : function(test){
        var testString = "mental_act { blah blah blah blah }";
        var result = maFilter(testString);
        test.ok(result === "mental_act{}");
        test.done();        
    },

    fromSourceTest : function(test){
        var testString = 'mental_act { StringUtil.println("Waiting for animEngine to send player name and gender info"); }';
        var result = maFilter(testString);
        var expected = "mental_act{}";
        test.ok(result.length === expected.length,result.length);
        test.ok(result === "mental_act{}",result);
        test.done();
    },

    longerTest : function(test){
        var expected = 'sequential behavior MakeInitialFakeBeatStatusWMEForTestingAmbs() {	BeatStatusWME bsw; 	WorkingMemory beatMemory;	mental_act{}}';
        var testString = 'sequential behavior MakeInitialFakeBeatStatusWMEForTestingAmbs() {	BeatStatusWME bsw; 	WorkingMemory beatMemory;	mental_act {				// make a fresh BeatStatusWME		beatMemory = WorkingMemory.lookupRegisteredMemory("BeatMemory");			beatMemory.deleteAllWMEClass("BeatStatusWME"); 		bsw = new BeatStatusWME(eBeatStatus_ambNextDecisionPoint, false, false);		beatMemory.addWME(bsw); g_reactionDecider.createShadowFact("beatStatus", bsw); }}';

        var result = maFilter(testString);
        test.ok(result === expected,result);

        test.done();
    },

    withAnIfTestInside : function(test){
        var testString = "mental_act {// make a fresh BeatStatusWME StringUtil.println(\"### Creating a fresh BeatStatusWME\");   beatMemory = WorkingMemory.lookupRegisteredMemory(\"BeatMemory\");   beatMemory.deleteAllWMEClass(\"BeatStatusWME\");  bsw = new BeatStatusWME(eBeatStatus_running, false, false);  beatMemory.addWME(bsw);   g_reactionDecider.createShadowFact(\"beatStatus\", bsw);  // set this value for CrisisCalculus when we hit the first T2 beat  if (CrisisCalculus.firstT2BeatCtr == -1 && tension == 2.0f) {   CrisisCalculus.firstT2BeatCtr = curBeatCtr;   // at the T1->T2 boundary, create additional ReactionInfoWMEs,   // to now allow non-push-too-far T2L3 global mixins!   g_reactionDecider.createExtraT2ObjectReactionInfoWMEs();   g_reactionDecider.createExtraT2SatelliteReactionInfoWMEs();   g_reactionDecider.createExtraT2DAReactionInfoWMEs();  }  // If T2, be sure affinity is non-neutral  if (tension > 1.0f && affinity == eAffinity_neutral) {   assert false : (\"Error: affinity is neutral past tension 1\");   }}";
        var expected = "mental_act{}";
        var result = maFilter(testString);
        test.ok(result.length === expected.length);
        test.ok(result === expected,result);
        test.done();
    }

    
};

