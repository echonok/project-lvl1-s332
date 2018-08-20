install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

test:
	npm test

lint:
	npm run eslint

publish:
	npm publish