import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Alunos from "./pages/Alunos";
import { Formulario } from "./pages/Formulario";
import { AlunoPerfil } from "./pages/AlunoPerfil";
import { Professores } from "./pages/Professores";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { NovoProfessor } from "./pages/NovoProfessor";
import { NovoAluno } from "./pages/NovoAluno";

const queryClient = new QueryClient();

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
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard/alunos",
        element: <Alunos />,
      },
      {
        path: "/dashboard/alunos/:id",
        element: <AlunoPerfil />,
      },
      {
        path: "/dashboard/professores",
        element: <Professores />,
      },
      {
        path: "/dashboard/novoprofessor",
        element: <NovoProfessor />,
      },
      {
        path: "/dashboard/novoaluno",
        element: <NovoAluno />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </AuthProvider>
);
