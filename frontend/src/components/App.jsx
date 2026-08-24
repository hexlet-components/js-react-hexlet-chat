import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

const App = () => (
  <MantineProvider>
    <Notifications position="bottom-right" />
    <h1>Hexlet Chat</h1>
  </MantineProvider>
);

export default App;
