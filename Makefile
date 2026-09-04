# Это заготовка учебного проекта по чату: студент копирует её себе и дописывает.
# Поэтому зависимости ставит npm, с которым работает сам проект. pnpm здесь не
# используется намеренно, иначе студент получает менеджер пакетов, о котором
# шаги проекта не говорят.
#
# Поле allowScripts в package.json отключает установочные скрипты @swc/core
# и fsevents. Нативные биндинги приходят в пакетах; сборке и тестам эти
# скрипты не нужны.

install:
	npm ci

build:
	rm -rf dist
	npm run build

start:
	make start-backend

start-backend:
	npx start-server -s ./dist

start-frontend:
	npm run dev

develop:
	make start-backend & make start-frontend

# Смоук проверяет контракт точки входа: проверка проекта зовёт init со своим
# сокетом и рендерит то, что он вернул.
test:
	npm run --silent test

lint:
	npm run --silent lint
	npm run --silent format:check

lint-fix:
	npm run --silent lint:fix

# Ключи переводов вынимаются из кода: руками src/locales/ru/translation.json не
# правится, правится текст под уже вынутым ключом.
i18n-extract:
	npx i18next-cli extract

# Что переведено, а что отстало от ru.
i18n-status:
	npx i18next-cli status
