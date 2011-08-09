

[ 'ccnd/ccndadmin'
  , 'ccnr/repoadmin'].forEach(function (path) {
  	var module = require('./' + path);
  	for (var i in module) {
  		exports[i] = module[i];
    }
});

// Exports all the classes for the NATIVE CCN wrappers
exports.native = function() {
  var classes = {};
  // Map all the classes
  [ '../../external/ccnx-0.4.0/csrc/bin'
    , 'ccnd/ccndstart'].forEach(function (path) {
    	var module = require('./' + path);
    	for (var i in module) {
    		classes[i] = module[i];
      }
  });
  // Return classes list
  return classes;
}

// Exports all the classes for the PURE JS CCN lib 
exports.pure = function() {
  var classes = {};
  // Map all the classes
  [ 'ccn4bbinary/ccnbutil'
    , 'ccn4bname/gridstore'].forEach(function (path) {
    	var module = require('./' + path);
    	for (var i in module) {
    		classes[i] = module[i];
      }
  });
  // Return classes list
  return classes;
}
