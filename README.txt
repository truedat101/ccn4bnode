=========
ccn4bnode
=========

Integration of Project CCNx for Node.js.

===========
Changelog
===========
* 0.2.2 - Refresh docs, add a README.md, bump CCNx release version to CCNx 0.7.0rc1, add dev dependencies
* 0.2.1 - Initial Release Refresh, start refactoring out the WEB module that was integrated via Jumbosocket
* 0.2.3 - Migrate to a JS.js base (don't package jumbosocket as a submodule), add some test cases
* 0.2.4 - Add a config.json, remove hardcoded test deps, implement web ui on JS.js, add jshint to dev dependencies
* 0.2.5 - bump CCNx version to 0.7.0
* 0.2.6 - Finish integration with JS.js and CCNx 0.7.0 as far as web admin console
* 0.2.7 - Fix a undef function error
* 0.2.8 - Change default port to 9700 from 8000
* 0.2.9 - bump CCNx version to 0.7.1

===========
Roadmap
===========
* 0.3.0 - refactor naming api, add native integration to be able to express CCN interests and respond to interests
* 0.4.0 - Add a completely client-side CCND FIB/CS + REPO in JS, using Client-Side Storage
* 0.5.0 - Implement a better GUI Toolset for setting up ENV and configuring CCND/CCNR/SYNC

===========
Attribution
===========
Christian Amor Kvalheim <christkv@gmail.com> for providing a nice template for how to do an ok integration with Node + a native library.  I used the node-mongodb-native project on github as a boilerplate.  Thanks to the great CCNx team who built such a ground breaking technology, and especially Van Jacobson (for thought leadership) and Michael Plass (for amazing code).
