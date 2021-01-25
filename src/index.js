import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./reducers";
import "./index.css";
import App from "./App";

const store = createStore(reducer, applyMiddleware(thunk, logger));
const { worker } = require("./mocks/browser");
worker.start();

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

//Task List:
//1x. Add in all necessary components and libary methods.
//2x. Create a store that includes thunk middleware support.
//3x. Wrap the App component in a react-redux Provider element.
