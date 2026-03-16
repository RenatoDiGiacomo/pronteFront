import React from "react";

type Props = {
  children: React.ReactNode;
};


const ContainerInputLogin = ({ children }: Props) => {
  return <div className="w-full max-w-md gap-4 flex flex-col">{children}</div>;
};

export default ContainerInputLogin;
