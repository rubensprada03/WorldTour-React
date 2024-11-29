import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default Router;
