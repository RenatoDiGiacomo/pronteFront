import React from "react";
import { AuthContext, type User } from "../context/AuthContext";
import mockUsers from "../data/mockBack";

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [accessToken, setAccessToken] = React.useState<string | null>(null);
  const [refreshToken, setRefreshToken] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const isAuthenticated = !!accessToken;

  async function login(name: string, password: string) {
    try {
      setLoading(true);
      // Simula uma chamada de login para o backend
      console.log(mockUsers);
      const foundUser = mockUsers.find(
        (u) => u.login === name && u.password === password,
      );

      if (!foundUser) {
        throw new Error("Invalid credentials");
      }

      setUser({
        _id: foundUser._id,
        name: foundUser.name,
        email: foundUser.email,
      });
      setAccessToken("123456789abcdef"); // Simula um token de acesso
      setRefreshToken("abcdef123456789"); // Simula um token de atualização

      // Armazena os dados no localStorage para persistência
      localStorage.setItem("user", JSON.stringify(foundUser));
      localStorage.setItem("accessToken", "123456789abcdef");
      localStorage.setItem("refreshToken", "abcdef123456789");
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    console.log("sair");
    setUser(null);
    setAccessToken(null);
    setRefreshToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }

  async function refresh() {
    if (!refreshToken) return;

    setAccessToken("new_mock_access_token");
  }
  React.useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedAccessToken = localStorage.getItem("accessToken");
    const storedRefreshToken = localStorage.getItem("refreshToken");

    if (storedUser && storedAccessToken) {
      setUser(JSON.parse(storedUser));
      setAccessToken(storedAccessToken);
      setRefreshToken(storedRefreshToken ?? null);
    }

    setLoading(false);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        user,
        accessToken,
        refreshToken,
        isAuthenticated,
        loading,
        refresh,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
