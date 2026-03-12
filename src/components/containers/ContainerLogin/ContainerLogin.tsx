import React from "react";

const ContainerLogin = ({ children }: { children: React.ReactNode }) => {
  return <main className="w-full min-h-screen flex items-center justify-center bg-gray-200">{children}</main>;
};

export default ContainerLogin;
