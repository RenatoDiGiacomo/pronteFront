import React from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";


type Props = {
  placeholder: string;
  type?: "email" | "password" | "text" | "number";
  value?: string;
};

const InputComponent = ({ placeholder, type, value }: Props) => {
  const [showWhilePressing, setShowWhilePressing] = React.useState(false);
  const [password, setPassword] = React.useState("");

  if (type !== "password") {
    return (
      <input
        className="border border-gray-400 rounded-md w-full p-2"
        placeholder={placeholder}
        type={type}
        value={value}
        required
      />
    );
  } else {
    return (
      <div className="relative">
        <input
          type={showWhilePressing ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-400 rounded-md w-full p-2"
          placeholder="Senha"
        />

        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2"
          onPointerDown={(e) => {
            e.preventDefault(); // evita perder foco do input
            setShowWhilePressing(true);
          }}
          onPointerUp={() => setShowWhilePressing(false)}
          onPointerLeave={() => setShowWhilePressing(false)}
          onPointerCancel={() => setShowWhilePressing(false)}
          aria-label={showWhilePressing ? "Ocultar senha" : "Mostrar senha"}
        >
          {showWhilePressing ? <FiEyeOff /> : <FiEye />}
        </button>
      </div>
    );
  }
};

export default InputComponent;
