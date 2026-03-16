import React from "react";
import { AuthContext } from "../context/AuthContext";

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  //   const [user, setUser] = React.useState(null);
  //   const [accessToken, setAccessToken] = React.useState(null);
  //   const [refreshToken, setRefreshToken] = React.useState(null);
  //   const [loading, setLoading] = React.useState(true);

  const isAuthenticated = false;

  //   const login = async () => {
  //     try {
  //       setLoading(true);
  //     } catch (error) {
  //       window.alert("Error occurred while logging in:" + error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   return (
  //     <AuthContext.Provider
  //       value={{
  //         user,
  //         accessToken,
  //         isAuthenticated,
  //         refreshToken,
  //         loading,
  //         login,
  //         logout,
  //         refresh,
  //       }}
  //     >
  //       {children}
  //     </AuthContext.Provider>
  //   );
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
