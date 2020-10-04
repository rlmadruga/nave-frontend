import React from "react";
import Button from "../../components/Button";
import FormWrapper from "../../components/Form";
import Logo from "../../assets/img/logo.png";

const Login = () => {
  return (
    <>
      <FormWrapper>
        <form>
          <img src={Logo} alt="Logo" />
          <label htmlFor="email">E-mail</label>
          <input type="email" placeholder="E-mail" />
          <label htmlFor="password">Senha</label>
          <input type="password" placeholder="Senha" />
          <Button>Entrar</Button>
        </form>
      </FormWrapper>
    </>
  );
};

export default Login;
