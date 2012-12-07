var nodeunit = require('nodeunit');
var debug = require('util').debug;
var inspect = require('util').inspect;
var fs = require('fs');
var exec = require('child_process').exec;
var Step = require('step');

Step(
      function runPureJS() {
	  	console.log('runPureJS()');
      },
      function runNativeJS() {
	  	console.log('runNativeJS()');
      }
);    
