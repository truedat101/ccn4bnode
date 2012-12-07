
NODE = node
JSLINT = jshint
all:
	./install.sh

lint:
	$(JSLINT) index.js
	$(JSLINT) ccn4bnode-server.js
	$(JSLINT) lib/ccn4bnode/index.js
	$(JSLINT) lib/ccn4bnode/ccnd/ccndadmin.js
	$(JSLINT) lib/ccn4bnode/ccnr/ccnradmin.js

test: 
	@echo "\n == Run All tests minus nada tests=="
	$(NODE) tools/test_all.js --nada

test_all: 
	@echo "\n == Run All tests =="
	$(NODE) tools/test_all.js

test_all_junit: build_native
	@echo "\n == Run All tests =="
	$(NODE) tools/test_all.js --junit

clean:
	rm -r ./external/ccnx-*

.PHONY: all
