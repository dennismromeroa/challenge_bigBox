import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Store from "./store";

import Main from "./react/Main";

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Route to="/" component={Main} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);