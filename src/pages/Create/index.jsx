import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import API from "../../api/api";
import styled from "styled-components";
import NavBar from "../../components/Navbar";
import Modal from "../../components/Modal";

const Wrapper = styled.div`
  margin: auto;

  width: 100%;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;
    p,
    form {
      margin: auto;
    }
    form {
      flex-direction: column;
      padding-left: 5rem;
      height: 100%;
      max-height: 886px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1440px) {
    p {
      margin: 0 auto;
      padding: 10px;
    }
  }
`;

const Header = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  margin: 125px 35rem 10px;
  padding: 10px 10px 10px 4.5rem;
  width: 592px;

  i {
    padding: 10px 10px 10px 0;
    &:hover {
      text-decoration: underline;
    }
  }

  a {
    text-decoration: none;
    font-weight: 400;
    color: var(--black);
    font-size: 1.8rem;
    line-height: 36px;
    text-align: center;
  }
`;

const FormWrapper = styled.form`
  margin: 0px auto;
  width: 592px;
  height: 390px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;

  div {
    display: flex;
    flex-direction: column;
  }

  label {
    display: block;
    font-weight: 600;
    font-size: 0.8rem;
    line-height: 18px;
    padding: 0 0 10px 0;
  }

  input {
    border: 1px solid var(--blackBorderInput);
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 2rem;
    width: 280px;
    height: 40px;
  }
`;

const Button = styled.button`
  width: 178px;
  height: 40px;
  background-color: var(--black);
  color: var(--white);
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  padding: 8px 16px 8px 16px;
  transition: 0.2s;
  &:hover {
    transition: 0.2s;
    background-color: var(--white);
    color: var(--black);
  }
  align-self: flex-end;
`;

const Create = () => {
  const history = useHistory();

  const [modalVisible, setModalVisible] = useState(false);

  const handleModalVisible = () => {
    setModalVisible(true);
  };

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorURL, setErrorURL] = useState(false);
  const [errorURLText, setErrorURLText] = useState("");

  const checkURL = (url) => {
    if (!(url === "")) {
      let string = url;
      let regex = /(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)/;
      if (regex.test(string)) {
        setUrl(string);
      } else {
        setErrorURL(true);
        setErrorURLText("A URL não é uma imagem! Verifique o link colocado.");
        setUrl("");
      }
    }
  };

  const handleURlError = () => {
    if (url === "") {
      setErrorURLText("");
    }
  };

  const [name, setName] = useState("");
  const [job_role, setJob] = useState("");
  const [admission_date, setAdmission] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [project, setProject] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    setError(false);
  }, [name, job_role, admission_date, birthdate, project, url]);

  const reverseDate = (date) => {
    const reverse = date.split("-").reverse().join("/");
    return reverse;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const naver = {
      job_role,
      admission_date: reverseDate(admission_date),
      birthdate: reverseDate(birthdate),
      project,
      name,
      url,
    };

    try {
      await API.post("navers", naver);
      handleModalVisible();
      setTimeout(() => history.push("/home"), 3000);
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <>
      <NavBar />
      <Wrapper>
        <Header>
          <Link to="/home">
            <i className="fa fa-chevron-left"></i>
          </Link>
          Adicionar Naver
        </Header>
        <FormWrapper onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="age">Idade</label>
            <input
              type="date"
              placeholder="Idade"
              required
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />

            <label htmlFor="projects">Projetos que participou</label>
            <input
              type="text"
              placeholder="Projetos que participou"
              required
              value={project}
              onChange={(e) => setProject(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="job_role">Cargo</label>
            <input
              type="text"
              placeholder="Cargo"
              required
              minLength="3"
              value={job_role}
              onChange={(e) => setJob(e.target.value)}
            />

            <label htmlFor="admission_date">Tempo de empresa</label>
            <input
              type="date"
              placeholder="Tempo de empresa"
              required
              value={admission_date}
              onChange={(e) => setAdmission(e.target.value)}
            />

            <label htmlFor="url">URL da foto do Naver</label>
            <input
              type="url"
              placeholder="URL da foto do Naver"
              required
              onFocus={() => handleURlError()}
              onBlur={() => checkURL(url)}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />

            <Button type="submit">{loading ? "Loading" : "Salvar"}</Button>
          </div>
        </FormWrapper>
        {error && (
          <p style={{ textAlign: "center", color: "#FF0000" }}>
            Ocorreu um erro, verifique se todos os dados estão corretos!
          </p>
        )}
        {errorURL && (
          <p style={{ textAlign: "center", color: "#FF0000" }}>{errorURLText}</p>
        )}
      </Wrapper>

      <Modal visible={modalVisible} setVisible={setModalVisible} buttons={false}>
        Naver criado,Naver criado com sucesso!
      </Modal>
    </>
  );
};

export default Create;
