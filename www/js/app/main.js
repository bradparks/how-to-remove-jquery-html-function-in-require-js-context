define([ "jquery"], function(_jq) {
    _jq(function() {
        console.log("in main app");
        console.log("  " + _jq('#output'));
        console.log("  " + "$ is:" + typeof $);
        console.log("  " + "_jq.html is:" + typeof _jq("body").html);
        console.log("  " + "_jq.is:" + typeof _jq);
    });
});

/*
define([ "jquery.alpha", "jquery.beta", "jquery"], function(a,b,_jq) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    _jq(function() {
        _jq('body').alpha().beta();
    });
});
*/

