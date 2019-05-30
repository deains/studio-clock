all: publish

npm:
	@npm install

publish: npm
	@./node_modules/.bin/gh-pages -d web

.PHONY: all npm publish
