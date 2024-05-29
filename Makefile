up:
	yarn dev
build:
	npm run build
deploy:
	npm run deploy
ftp:
	 node ./scripts/deploy.js
prettier-components:
	npx prettier --write "src/**/*.{js,jsx,ts,tsx,json,css,md}"