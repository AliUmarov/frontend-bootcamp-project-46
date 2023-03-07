install:
	npm i

publish:
	npm publish --dry-on

make lint:
	npx eslint .
