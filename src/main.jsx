import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "flowbite";
import { store } from "./rtk/store.js";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Provider store={store}>
        <ToastContainer />
        <App />
      </Provider>
  </React.StrictMode>
);
