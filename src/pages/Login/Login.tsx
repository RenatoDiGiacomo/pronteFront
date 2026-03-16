import React from "react";
import ContainerInputLogin from "../../components/LoginPage/containers/ContainerInputLogin";
import ContainerLogin from "../../components/LoginPage/containers/ContainerLogin";
import TitleImage from "../../components/LoginPage/imagesComponents/TitleImage";
import InputComponent from "../../components/LoginPage/input/inputComponent";
import ButtonComponent from "../../components/LoginPage/button/ButtonComponent";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { login } = useAuth();

  const handlerLogin = () => {
    if (user !== "" && password !== "") {
      login(user, password)
        .then(() => {
          console.log("Login successful");
        })
        .catch((error) => {
          console.error("Login failed:", error);
        });
    } else {
      window.alert("Preencha os campos de login e senha");
    }
  };

  return (
    <ContainerLogin>
      <TitleImage />
      <ContainerInputLogin>
        <InputComponent
          placeholder="Login"
          type={"text"}
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <InputComponent
          placeholder="Password"
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonComponent onClick={handlerLogin} />
      </ContainerInputLogin>
    </ContainerLogin>
  );
};

export default Login;
