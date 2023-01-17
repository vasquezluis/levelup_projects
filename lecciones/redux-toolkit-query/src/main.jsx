import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./api/apiSlice";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* apiSlice son todas las peticiones que puede hacer en la API*/}
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
