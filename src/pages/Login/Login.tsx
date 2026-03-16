import ContainerInputLogin from "../../components/LoginPage/containers/ContainerInputLogin";
import ContainerLogin from "../../components/LoginPage/containers/ContainerLogin";
import TitleImage from "../../components/LoginPage/imagesComponents/TitleImage";
import InputComponent from "../../components/LoginPage/Input/inputComponent";

const Login = () => {
  return (
    <ContainerLogin>
      <TitleImage />
      <ContainerInputLogin>
        <InputComponent placeholder="Login" type={"text"}/>
        <InputComponent placeholder="Password" type={"password"} />
      </ContainerInputLogin>
    </ContainerLogin>
  );
};

export default Login;
