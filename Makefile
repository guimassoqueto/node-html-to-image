REMOVE_SHOTS=echo 123 1> screenshots/f.txt && rm screenshots/*

h:
	npx husky install

b:
	npm run build

ts:
	${REMOVE_SHOTS} && npm run ts

js:
	${REMOVE_SHOTS} && npm run build && npm run js