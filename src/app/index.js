import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux"; // bridge between react and redux

import App from "./container/App";
import store from "../app/store";

// Provider is provide the store for react component
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
