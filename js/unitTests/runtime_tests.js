/* global use strict */
"use strict";
var ELRuntime = require('../EL_Runtime');

exports.runtime_tests = {

    init : function(test){
        let rt = new ELRuntime();
        test.ok(rt !== undefined);
        test.done();
    },

    assert : function(test){
        let rt = new ELRuntime(),
            successStatus = rt.parse(".this.is.a.test");
        test.ok(successStatus === true);                
        test.done();
    },

    simple_query : function(test){
        let rt = new ELRuntime(),
            successStatus = rt.parse(".this.is.a.test"),
            querySuccess = rt.parse(".this.is.a.test?");
        test.ok(successStatus === true);
        test.ok(querySuccess === true);
        test.done();
    },

    simple_query_fail : function(test){
        let rt = new ELRuntime(),
            querySuccess = rt.parse(".this.is.a.test?");
        test.ok(querySuccess === false);
        test.done();
    },

    aggregate_declaration_query_test : function(test){
        let rt = new ELRuntime();
        rt.parse(".this.is.a.test");
        rt.parse(".this.is.another.test");

        test.ok(rt.parse(".this.is.a.test?") === true);
        test.ok(rt.parse(".this.is.another?") === true);
        test.ok(rt.parse(".this.is.another.test.that.fails?") === false);
        rt.parse(".this.is.another.test.that.fails");
        test.ok(rt.parse(".this.is.another.test.that.fails?") === true);
        test.done();
    },

    exclusion_check : function(test){
        let rt = new ELRuntime();
        rt.parse(".this.is.an!exclusive");
        test.ok(rt.parse(".this.is.an!exclusive?") === true);
        test.ok(rt.parse(".this.is.an.exclusive?") === false);        
        test.done();
    },

    exclusion_clear : function(test){
        let rt = new ELRuntime();
        rt.parse(".characters.bob");
        rt.parse(".characters.bill");
        test.ok(rt.parse(".characters.bob?") === true);
        test.ok(rt.parse(".characters.bill?") === true);
        rt.parse(".characters!jill");
        test.ok(rt.parse(".characters.bob?") === false);
        test.ok(rt.parse(".characters.bill?") === false);
        test.ok(rt.parse(".characters.jill?") === false);

        test.ok(rt.parse(".characters!jill?") === true);
        test.done();                
    },

    retract_simple : function(test){
        let rt = new ELRuntime();
        rt.parse(".characters.bob");
        rt.parse(".characters.bill");
        test.ok(rt.parse(".characters.bob?") === true);
        test.ok(rt.parse(".characters.bill?") === true);
        //retract:
        rt.parse("!!.characters.bob");
        test.ok(rt.parse(".characters.bob?") === false);
        test.ok(rt.parse(".characters.bill?") === true);
        test.done();
    },

    retract_with_children : function(test){
        let rt = new ELRuntime();
        rt.parse(".characters.bob.location!kitchen");
        rt.parse(".characters.bill.location!cellar");
        test.ok(rt.parse(".characters.bob.location!kitchen?") === true);
        test.ok(rt.parse(".characters.bill.location!cellar?") === true);
        rt.parse("!!.characters.bob.location!kitchen");
        test.ok(rt.parse(".characters.bob.location!kitchen?") === false);
        test.ok(rt.parse(".characters.bob.location?") === true);
        test.ok(rt.parse(".characters.bill.location!cellar?") === true);
        test.done();
    },

    retract_fail : function(test){
        let rt = new ELRuntime();
        rt.parse(".characters.bob.location!kitchen");
        rt.parse(".characters.bill.location!cellar");
        test.ok(rt.parse(".characters.bob.location!kitchen?") === true);
        test.ok(rt.parse(".characters.bill.location!cellar?") === true);
        //bad retract:
        let result = rt.parse("!!.characters.bob.location!cellar");
        test.ok(result === false);
        test.ok(rt.parse(".characters.bob.location!kitchen?") === true);
        test.done();
    },

    utility_success_parse : function(test){
        let rt = new ELRuntime();
        rt.parse(".characters.bob.location!kitchen");
        let result = rt.parse(".characters.bob.location!kitchen?#2/5");
        test.ok(result === '2');
        test.done();
    },

    utility_fail_parse : function(test){
        let rt = new ELRuntime();
        rt.parse(".characters.bob.location!kitchen");
        let result = rt.parse(".characters.bob.location!cellar?#2/5");
        test.ok(result === '5');
        test.done();
    },

    negated_query : function(test){
        let rt = new ELRuntime();
        rt.parse(".characters.bob.location!kitchen");
        let resultNormal = rt.parse(".characters.bob.location!kitchen?"),
            resultNegated = rt.parse("!!.characters.bob.location!kitchen?");
        test.ok(resultNormal !== resultNegated);
        
        test.done();
    },

    negated_utility : function(test){
        let rt = new ELRuntime();
        rt.parse(".characters.bob.location!kitchen");
        let resultNormal = rt.parse(".characters.bob.location!kitchen?#2/5"),
            resultNegated = rt.parse("!!.characters.bob.location!kitchen?#2/5");
        test.ok(resultNormal === '2');
        test.ok(resultNegated === '5');        
        test.done();
    },
    
};
