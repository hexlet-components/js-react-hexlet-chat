import debug from "debug";
import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";

import App from "./components/App";
import resources from "./locales/index.js";

const logSocket = debug("chat:socket");

// Сокет приходит параметром, открывает его точка входа. Внешний ресурс тем
// самым остаётся на стороне того, кто запускает приложение, и подменить его
// можно снаружи, ничего не меняя внутри.
const init = async (socket) => {
  const i18n = i18next.createInstance();

  await i18n.use(initReactI18next).init({
    resources,
    fallbackLng: "ru",
  });

  // Обработчики событий сокета живут здесь, вне реакта. Это уровень
  // инициализации приложения, и по шагам проекта их станет больше.
  socket.on("newMessage", logSocket);

  return (
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );
};

export default init;
