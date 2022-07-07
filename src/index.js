import React from "react";
import { createRoot } from "react-dom/client"
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";

import { store } from './store';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import theme from "./Theme";

// Redux settings

const root = createRoot(document.getElementById("widget-form-root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App config={window.__form_widget_config} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
