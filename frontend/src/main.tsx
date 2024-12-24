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
import { Teste } from "./pages/Teste";
import { Toaster } from "sonner";
import { Landing } from "./pages/Landing";
import { BreakPointIndicator } from "./components/Landing/BreakPointIndicator";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./components/ui/button";
import SideMenu from "./components/layout/SideMenu";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Landing />,
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
      {
        path: "/dashboard/teste",
        element: <Teste />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <BreakPointIndicator />
    {/* <SideMenu /> */}
    <QueryClientProvider client={queryClient}>
      <Toaster richColors />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </AuthProvider>
);
