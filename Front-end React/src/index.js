import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppProvider }from './context/Userdbcontext';

ReactDOM.render(
  <React.StrictMode>
  <AppProvider>
    <Router>
      <App />
    </Router>
    </AppProvider>
    
  </React.StrictMode>,
  document.getElementById("root")
);
