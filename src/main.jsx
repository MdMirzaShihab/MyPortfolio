import React, { Suspense, lazy } from "react";
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
} from "./components";

// Lazy load project components for better performance
const Boipoka = lazy(() => import("./components/Projects/Boipoka.jsx"));
const CEdelivery = lazy(() => import("./components/Projects/CEdelivery.jsx"));
const DigBazE = lazy(() => import("./components/Projects/DigBazE.jsx"));
const Exponentum = lazy(() => import("./components/Projects/Exponentum.jsx"));
const FlyingFarmers = lazy(() => import("./components/Projects/FlyingFarmers.jsx"));
const PDCL = lazy(() => import("./components/Projects/PDCL.jsx"));
const Pogoda = lazy(() => import("./components/Projects/Pogoda.jsx"));
const Sabisy = lazy(() => import("./components/Projects/Sabisy.jsx"));
const Subidha = lazy(() => import("./components/Projects/Subidha.jsx"));
const Trademic = lazy(() => import("./components/Projects/Trademic.jsx"));
const UTMgo = lazy(() => import("./components/Projects/UTMgo.jsx"));
import "./index.css";

const App = () => {
  // Initialize Locomotive Scroll only on desktop
  React.useEffect(() => {
    if (window.innerWidth > 1024) {
      import('locomotive-scroll').then(({ default: LocomotiveScroll }) => {
        new LocomotiveScroll();
      });
    }
  }, []);
  return (
    <div>
      <Alert />
      <Nav />
      <Suspense fallback={
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        </div>
      }>
        <Outlet />
      </Suspense>
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
