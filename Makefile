REMOVE_PIDS=echo 123 1> temp/f.txt && rm temp/*
REMOVE_SHOTS=echo 123 1> screenshots/f.txt && rm screenshots/*

h:
	npx husky install

b:
	npm run build

ts:
	${REMOVE_SHOTS} && ${REMOVE_PIDS} && npm run ts

js:
	${REMOVE_SHOTS} && ${REMOVE_PIDS} && npm run build && npm run js