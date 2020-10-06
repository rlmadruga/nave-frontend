import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { setLogin } from "../../api/auth";
import API from "../../api/api";
import Button from "../../components/Button";
import FormWrapper from "../../components/Form";
import Logo from "../../assets/img/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const serverResponse = await API.post("users/login", { email, password });
      setLogin(serverResponse.data.token);
      history.push("/home");
    } catch (err) {
      alert("Login falhou.\nTente Novamente");
    }
  }
  return (
    <>
      <FormWrapper onSubmit={handleLogin}>
        <div>
          <img src={Logo} alt="Logo" />
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button type="submit">Entrar</Button>
        </div>
      </FormWrapper>
    </>
  );
};

export default Login;
