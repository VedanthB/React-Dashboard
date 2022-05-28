import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./App.css";

import { ContextProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
