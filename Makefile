install:
	pnpm install --frozen-lockfile

build:
	rm -rf dist
	pnpm run build

start:
	make start-backend

start-backend:
	pnpm exec start-server -s ./dist

start-frontend:
	pnpm run dev

develop:
	make start-backend & make start-frontend

lint:
	pnpm --silent run lint
	pnpm --silent run format:check

lint-fix:
	pnpm --silent run lint:fix

# Ключи переводов вынимаются из кода: руками src/locales/ru/translation.json не
# правится, правится текст под уже вынутым ключом.
i18n-extract:
	npx i18next-cli extract

# Что переведено, а что отстало от ru.
i18n-status:
	npx i18next-cli status
