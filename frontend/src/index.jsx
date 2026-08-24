/* eslint-disable functional/no-expression-statement */
import ReactDOM from "react-dom/client";

// Стили Mantine подключаются до собственных, иначе свои правила окажутся ниже
// по каскаду и перестанут действовать.
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import init from "./init.jsx";

const app = async () => {
  const root = ReactDOM.createRoot(document.querySelector("#chat"));
  root.render(await init());
};

app();
