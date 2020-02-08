import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import App from "./App";
import Home from "./Pages/Home/index.jsx";

const AppWithRoute = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
    </Router>
  );
};

const AppUsingRedux = () => {
  return (
    <Provider store={store}>
      <AppWithRoute />
    </Provider>
  );
};

ReactDOM.render(<AppUsingRedux />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
