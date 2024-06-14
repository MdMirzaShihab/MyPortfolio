import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  Nav,
  Home,
  About,
  Certificates,
  Experience,
  Error,
  Alert,
  Contact,
  Projects,
} from "./components";
import LocomotiveScroll from "locomotive-scroll";

import "./index.css";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <Alert />
      <Nav />
      <Outlet />
    </div>
  );
};

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/certificates", element: <Certificates /> },
      { path: "/experience", element: <Experience /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/projects", element: <Projects /> },
    ],
    errorElement: <Error />,
  },
];

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
