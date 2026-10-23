import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client'
import React from "react";

import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
