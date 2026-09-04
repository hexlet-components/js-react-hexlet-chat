# [React App boilerplate](https://frontend-chat-ru.hexlet.app)

It's an example of a customized react-project with a backend-server. You can copy it to start developing chat project.

## Зачем это нужно

Заготовку копируют для работы над учебным проектом по чату. В клиенте настроены сборка Vite, тема и уведомления Mantine, переводы i18next и подключение к Socket.IO. При запуске страница показывает заголовок Hexlet Chat.

Пакет `@hexlet/chat-server` предоставляет сервер с авторизацией, каналами и сообщениями. Формы входа и регистрации, маршрутизацию, список каналов и обмен сообщениями в клиенте реализует студент по шагам проекта.

Для следующих шагов установлены React Router, `@mantine/form`, Zustand, TanStack Query и `leo-profanity`. Студент подключает их по мере реализации приложения.

## Requirements

- Node.js 26 & npm 11

## Setup

```bash
make install
```

## Development

```bash
make develop
```

Open <http://localhost:5002>. The API server listens on port 5001; Vite proxies API requests and Socket.IO connections to it.

[![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/assets/master/images/hexlet_logo128.png)](https://hexlet.io/?utm_source=github&utm_medium=link&utm_campaign=react-application)

This repository is created and maintained by the team and the community of Hexlet, an educational project. [Read more about Hexlet](https://hexlet.io/?utm_source=github&utm_medium=link&utm_campaign=react-application).

See most active contributors on [hexlet-friends](https://friends.hexlet.io/).
