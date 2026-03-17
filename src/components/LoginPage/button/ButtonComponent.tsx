import React from "react";

type Props = {
  onClick: () => void;
};

const ButtonComponent = ({ onClick }: Props) => {
  const style =
    "btn btn-primary bg-[#1c3144] p-3 rounded-md text-white w-full hover:bg-[#487ba8] transition-colors cursor-pointer";

  return (
    <button onClick={onClick} className={style}>
      Entrar
    </button>
  );
};

export default ButtonComponent;
