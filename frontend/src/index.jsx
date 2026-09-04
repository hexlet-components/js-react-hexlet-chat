import ReactDOM from "react-dom/client";
import { io } from "socket.io-client";

import init from "./init.jsx";

const app = async () => {
  const root = ReactDOM.createRoot(document.querySelector("#chat"));
  const socket = io();
  root.render(await init(socket));
};

app();
