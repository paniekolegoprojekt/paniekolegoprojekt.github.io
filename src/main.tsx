import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./config/i18n";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
