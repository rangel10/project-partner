import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import User from './components/user.js';
import registerServiceWorker from './registerServiceWorker';

// Copied from http:jquery-howto.blogspot.com/2009/09/get-url-parameters-values-with-jquery.html
function getUrlVars() {
  return window.location.pathname.split(".")[0];
}

var pathname = getUrlVars();

switch (pathname) {
case "/usuarios":
  ReactDOM.render(<User />, document.getElementById("root"));
  break;

case undefined:
default:
  ReactDOM.render(<App />, document.getElementById("root"));
  break;
}

