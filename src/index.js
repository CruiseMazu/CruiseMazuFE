import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const appContainer = document.getElementById("root");
const applicationRoot = createRoot(appContainer);

applicationRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
