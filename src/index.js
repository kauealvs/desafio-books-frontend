import React from "react";
import { ApiContext } from "./stores/LoginApiContext";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";

ReactDOM.render(
  <>
    <ApiContext>
      <App />
    </ApiContext>
  </>,
  document.getElementById("root")
);
