up:
	yarn dev
build:
	npm run build && npm run export
deploy:
	npm run deploy
copy-to-remote:
	 node ./scripts/deploy.js
prettier-components:
	npx prettier --write "src/**/*.{js,jsx,ts,tsx,json,css,md}"