import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import WrapperComponent from "./wrapperComponent";
import { Provider } from "react-redux";
import store from "./redux/configureStore";

ReactDOM.render(
  <Provider store={store}>
    <WrapperComponent />{" "}
  </Provider>,
  document.getElementById("root")
);
