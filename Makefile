# Это заготовка учебного проекта по чату: студент копирует её себе и дописывает.
# Поэтому зависимости ставит npm, с которым работает сам проект. pnpm здесь не
# используется намеренно, иначе студент получает менеджер пакетов, о котором
# шаги проекта не говорят.
#
# Поле allowScripts в package.json решает то же, что раньше решал allowBuilds в
# pnpm-workspace.yaml: npm с 11-й версии не запускает postinstall зависимостей
# без явного разрешения. esbuild разрешён, потому что его скрипт готовит
# нативный бинарь. У @swc/core скрипт только проверяет биндинг, он приезжает
# зависимостью i18next-cli, и ни установке, ни запуску не нужен.

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
