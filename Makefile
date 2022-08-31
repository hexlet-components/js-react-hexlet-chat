start-frontend:
	make -C frontend start

start-backend:
	npx start-server -a localhost -p 5001 -s ./frontend/build

start:
	make start-backend & make start-frontend

deploy:
	git push heroku main

lint-frontend:
	make -C frontend lint
