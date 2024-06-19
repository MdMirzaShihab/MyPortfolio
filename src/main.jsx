import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  Nav,
  Home,
  About,
  Certificates,
  Error,
  Alert,
  Contact,
  Projects,
  Boipoka,
  CEdelivery,
  DigBazE,
  Exponentum,
  FlyingFarmers,
  PDCL,
  Pogoda,
  Sabisy,
  Subidha,
  Trademic,
  UTMgo,
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
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/projects", element: <Projects /> },
      { path: "/boipoka", element: <Boipoka /> },
      { path: "/cedelivery", element: <CEdelivery /> },
      { path: "/digbaze", element: <DigBazE /> },
      { path: "/exponentum", element: <Exponentum /> },
      { path: "/flyingfarmers", element: <FlyingFarmers /> },
      { path: "/pdcl", element: <PDCL /> },
      { path: "/pogoda", element: <Pogoda /> },
      { path: "/sabisy", element: <Sabisy /> },
      { path: "/subidha", element: <Subidha /> },
      { path: "/trademic", element: <Trademic /> },
      { path: "/utmgo", element: <UTMgo /> },
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
