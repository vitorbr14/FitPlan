import { useAuth } from "@/contexts/AuthContext";
import { LoadingFullPage } from "@/pages/LoadingFullPage";
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type TypeProtectedRouteProps = PropsWithChildren;

export const ProtectedRoute = ({ children }: TypeProtectedRouteProps) => {
  const navigate = useNavigate();
  const { user, isLoggedIn, userLoading } = useAuth();

  useEffect(() => {
    // Redireciona apenas se o carregamento estiver completo
    if (!userLoading && user === null) {
      navigate("/login", { replace: true });
    }
  }, [user, userLoading, navigate]);

  if (userLoading) {
    return <LoadingFullPage />; // Ou um componente de loading
  }

  return children;
};
