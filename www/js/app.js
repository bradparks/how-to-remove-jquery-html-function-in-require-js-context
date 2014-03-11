// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
var defineModuleWithRawHtmlSupport = requirejs.config({
  context: "restricted",
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app"
    }
});

require.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app"
  },
  map: {
    '*': { 'jquery': 'jquery-private' },
    'jquery-private': { 'jquery': 'jquery' }
  }
});

require(["jquery"], function (_jq) {
  console.log('jquery modified to remove .html');
  console.log("  " + "$ is:" + typeof $);
  console.log("  " + "_jq is:" + typeof _jq);
  console.log('  ' + "_jq.html is:" + typeof _jq.fn.html);
});

defineModuleWithRawHtmlSupport(["jquery"], function ($) {
   console.log('jquery loaded normally');
   console.log("  " + "$ is:" + typeof $);
   console.log('  ' + "$.html is:" + typeof $("body").html);
});

// Load the main app module to start the app
requirejs(["app/main"]);
