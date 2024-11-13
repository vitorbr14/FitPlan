// src/AuthContext.tsx
import { auth } from "@/config/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
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
