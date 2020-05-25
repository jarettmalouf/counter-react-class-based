import "bootstrap/dist/css/bootstrap.css";

import * as serviceWorker from "./serviceWorker";

import App from "./0-modules/App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.register();
