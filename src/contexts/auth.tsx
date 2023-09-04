import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const AuthContext = React.createContext({
  token: null,
  updateToken: (token: any) => undefined, // set default signature to expect function
});

export function logout() {
  localStorage.removeItem("jwt");
}

export function AuthProvider({ children }: { children: any }) {
  const [token, setToken] = useState();
  const router = useRouter();

  useEffect(() => {
    let storedToken = localStorage.getItem("jwt");
    if (storedToken === "null") {
      storedToken = null;
    }
    if (!storedToken && router.pathname === "/admin") {
      router.push("/giris");
    }
  }, [token]);

  const auth = { token, updateToken: setToken };

  return (
    <AuthContext.Provider value={auth as any}>{children}</AuthContext.Provider>
  );
}
