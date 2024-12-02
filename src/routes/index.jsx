import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Flights from "../pages/Flights.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/flights",
    element: <Flights />,
  },
]);

export default Router;
