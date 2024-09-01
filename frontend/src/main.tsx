import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";

import Alunos from "./pages/Alunos";
import { Formulario } from "./pages/Formulario";
import { AlunoPerfil } from "./pages/AlunoPerfil";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <h1>Home</h1>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/alunos",
        element: <Alunos />,
      },
      {
        path: "/dashboard/alunos/:id",
        element: <AlunoPerfil />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
