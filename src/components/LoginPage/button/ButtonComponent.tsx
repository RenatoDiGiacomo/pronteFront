import React from "react";

type Props = {
  onClick: () => void;
};

const ButtonComponent = ({ onClick }: Props) => {
  const style =
    "btn btn-primary bg-blue-400 p-3 rounded-md text-white w-full hover:bg-blue-500 transition-colors cursor-pointer";

  return (
    <button onClick={onClick} className={style}>
      ButtonComponent
    </button>
  );
};

export default ButtonComponent;
