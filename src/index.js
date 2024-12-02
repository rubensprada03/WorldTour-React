import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { RouterProvider } from "react-router-dom";
import Router from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
