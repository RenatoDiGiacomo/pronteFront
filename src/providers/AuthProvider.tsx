import { AuthContext } from "../context/AuthContext";

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {

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
    <AuthContext.Provider value={{ isAuthenticated: false }}>
      {children}
    </AuthContext.Provider>
  );
};
