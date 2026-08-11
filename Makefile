lint-frontend:
	make -C frontend lint

install:
	pnpm install --frozen-lockfile

start-frontend:
	make -C frontend start

start-backend:
	pnpm exec start-server -s ./frontend/dist

deploy:
	git push heroku main

start:
	make start-backend

develop:
	make start-backend & make start-frontend

build:
	rm -rf frontend/dist
	pnpm run build
