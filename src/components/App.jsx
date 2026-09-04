import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

// Стили Mantine подключаются рядом с провайдером темы. В браузерном режиме
// тесты монтируют приложение из init, поэтому импорты из index.jsx до
// страницы не доезжают.
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

const App = () => (
  <MantineProvider>
    <Notifications position="bottom-right" />
    <h1>Hexlet Chat</h1>
  </MantineProvider>
);

export default App;
