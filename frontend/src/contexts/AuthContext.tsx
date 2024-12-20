// src/AuthContext.tsx
import { auth } from "@/config/firebase";
import { onAuthStateChanged, onIdTokenChanged, User } from "firebase/auth";
import Cookies from "js-cookie";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Definição do tipo para o contexto
interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  userLoading: boolean;
}

// Criação do contexto com um valor padrão
export const AuthContext = createContext<AuthContextType | null>(null);

// Provedor do contexto
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [logged, setLogged] = useState<boolean>(false);
  const [userLoading, setUserLoading] = useState<boolean>(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setUserLoading(false);
      } else {
        setUserLoading(false);
      }
    });

    onIdTokenChanged(auth, (user) => {
      if (user) {
        user
          .getIdToken()
          .then((token) => {
            Cookies.set("jwt", token); // Salva o token no cookie
          })
          .catch((error) => {
            console.error("Error fetching token:", error);
          });
      } else {
        Cookies.remove("jwt"); // Remove o token se o usuário não estiver logado
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: logged, userLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// // Hook para usar o contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
