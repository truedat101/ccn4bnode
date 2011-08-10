
NODE = node
NODEUNIT = deps/nodeunit/bin/nodeunit
all:
	./install.sh

test: 
	@echo "\n == Run All tests minus replicaset tests=="
	$(NODE) tools/test_all.js --noreplicaset

test_all: 
	@echo "\n == Run All tests =="
	$(NODE) tools/test_all.js

test_all_junit: build_native
	@echo "\n == Run All tests =="
	$(NODE) tools/test_all.js --junit

clean:
	rm -r ./external/ccnx-*

.PHONY: all
