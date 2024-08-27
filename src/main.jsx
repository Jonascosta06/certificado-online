import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Certificado from "./pages/Certificado";
import "./styles/style.css";
import CertificadoIndividual from "./pages/CertificadoIndividual";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/certificado",
    element: <Certificado />,
  },
  {
    path: "/certificado/:id",
    element: <CertificadoIndividual />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
