import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
//Provider is going to keep track of that store which is the global state, and that allows to access that store from anywhere inside
//of the app . we dont have to exactly on parent or child component, we can access that stat from anywhere .
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// ReactDOM.render(<App />, document.getElementById("root"));
import reducers from "./reducers";
// import { BrowserRouter } from "react-router-dom";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  // </BrowserRouter>

  // </React.StrictMode>
);
