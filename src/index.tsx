import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { AppProvider } from "./contexts";
import { ColorModeProvider } from "./contexts/ColorModeProvider";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
