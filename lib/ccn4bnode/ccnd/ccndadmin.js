/**
#
#Copyright (c) 2011 Razortooth Communications, LLC. All rights reserved.
#
#Redistribution and use in source and binary forms, with or without modification,
#are permitted provided that the following conditions are met:
#
#    * Redistributions of source code must retain the above copyright notice,
#      this list of conditions and the following disclaimer.
#
#    * Redistributions in binary form must reproduce the above copyright notice,
#      this list of conditions and the following disclaimer in the documentation
#      and/or other materials provided with the distribution.
#
#    * Neither the name of Razortooth Communications, LLC, nor the names of its
#      contributors may be used to endorse or promote products derived from this
#      software without specific prior written permission.
#
#THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
#ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
#WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
#DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
#ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
#(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
#LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
#ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
#(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
#SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
**/

/* PUT ANY REQUIRES HERE */
var logger = require('nlogger').logger(module),
	exec  = require('child_process').exec;

/* Try to make this sort of like a class */
var CCNDAdmin = exports.CCNDAdmin = function() {
	// Instantiate any vars we want to expose
	this.foo = true;
	this.cwd = __dirname; // This gets us the CWD of the script executing but ... XXX Is there a better way to handle directory mappings
	this.ccnxbindir = this.cwd + '/../../../external/ccnx-0.4.0/bin'; // XXX This is awful, hardcoded, fix this so it doesn't break between CCNX versions
	logger.debug(this.ccnxbindir);
};

/* Operations defined for CCNDAdmin */
CCNDAdmin.prototype.stop = function(callback) {
	// Do something
	logger.debug('stop');
	executil(this.ccnxbindir + '/ccndstop', null, callback);
};

CCNDAdmin.prototype.start= function(callback) {
	logger.debug('start');
	executil(this.ccnxbindir + '/ccnd', null, callback);
};

CCNDAdmin.prototype.restart = function(callback) {
	logger.debug('restart - does it make sense to restart?');
	// XXX We should just check the status.  If it's running, stop it, wait to stop, and then start
	// For now, just stop and start
	this.stop();
	this.start();
};

CCNDAdmin.prototype.status = function(callback) {
	logger.debug('status - return the status of ccnd');
	executil(this.ccnxbindir + '/ccndstatus', null, callback);
}

CCNDAdmin.prototype.test = function(callback) {
	logger.debug('test - execute a test suite here');
};

// Local routines

// XXX Stolen from jumbosocket ccn4bnode branch ... need to maybe move it here for good, having it in the server can be
// dangerous
executil = function(execstring, options, callback) {
	var child, data;
	var optdefaults = { encoding: 'utf8',
						timeout: 0,
						maxBuffer: 200*1024,
						killSignal: 'SIGTERM',
						cwd: null,
						env: null } /* We can change these defaults as needed */
	
	if (options) logger.debug('using options');
	if (callback) logger.debug('using callback');
	logger.debug('executil start exec of ' + execstring + ' at: ' + (new Date).getTime());
	child = exec(execstring,
				options ? options : optdefaults,
				callback ? callback :
				function (error, stdout, stderr) {
					data = stdout;
					logger.debug('stdout: ' + data + (new Date).getTime());
					logger.debug('stderr: ' + stderr);
					if (error !== null) {
						logger.error('exec error: ' + error);
					}
				});
	logger.debug('executil of ' + child.pid + ' completed at ' + (new Date).getTime());
}
// XXX module.exports described here: http://nodejs.org/docs/v0.4.8/api/modules.html#module.exports
// I don't think we need it.
// module.exports = CCNDAdmin; 