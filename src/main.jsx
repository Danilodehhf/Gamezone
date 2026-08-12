import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./assets/styles/index.css";
import {
  applyTheme,
  getInitialTheme,
} from "./utils/theme";

// Aplica o tema salvo antes de renderizar qualquer rota.
applyTheme(getInitialTheme());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
