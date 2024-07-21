import { createContext, useCallback, useState } from "react";
import { SignInAdminData } from "../../types/auth.types";
import toast from "react-hot-toast";

export interface AuthContextProps {
  signedIn: boolean;

  signOut(): void;

  signIn(authData: SignInAdminData): void;

  checkExpirationDate(): void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem("mcf:act");
    return Boolean(storedAccessToken);
  });

  const signIn = useCallback((authData: SignInAdminData) => {
    const expirationDate = new Date().getTime() + authData.expiresIn * 1000;
    localStorage.setItem("mcf:act", authData.accessToken);
    localStorage.setItem("mcf:exp", expirationDate.toString());
    setSignedIn(true);
  }, []);

  const signOut = useCallback(() => {
    localStorage.clear();
    setSignedIn(false);
  }, []);

  const checkExpirationDate = async () => {
    const expireIn = localStorage.getItem("mcf:exp");
    const accessToken = localStorage.getItem("mcf:act");

    if (expireIn && accessToken) {
      const currentDate = new Date().getTime();
      const expirationDate = parseInt(expireIn, 10);

      if (currentDate >= expirationDate) {
        signOut();
        toast.error("Acesso expirado, entre novamente.");
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signedIn,
        signIn,
        signOut,
        checkExpirationDate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
