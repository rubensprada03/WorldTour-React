import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Flights from "../pages/Flights.jsx";
import Places from "../pages/admin/places/places.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/flights",
    element: <Flights />,
  },
  {
    path: "/admin/add-places",
    element: <Places />,
  },
]);

export default Router;
