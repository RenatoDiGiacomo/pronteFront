import React from "react";

const ContainerLogin = ({ children }: { children: React.ReactNode }) => {
  const style ="w-full min-h-screen flex flex-col gap-24 items-center justify-center bg-gray-200"

  return (
    <main className={style}>
      {children}
    </main>
  );
};

export default ContainerLogin;
