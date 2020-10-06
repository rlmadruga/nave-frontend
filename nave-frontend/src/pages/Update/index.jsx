import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  /* padding: 0px 20px 20px 0; */
  /* width: 920px; */
  width: 592px;
  height: 390px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;

  div {
    /* margin: 0 auto; */
    /* padding: 0px 10px 10px 10px; */
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

const Update = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalVisible = () => {
    setModalVisible(true);
  };

  return (
    <>
      <NavBar />
      <Wrapper>
        <Header>
          <Link to="/home">
            <i className="fa fa-chevron-left"></i>
          </Link>
          Editar Naver
        </Header>
        <FormWrapper>
          <div>
            <label htmlFor="name">Nome</label>
            <input type="text" placeholder="Nome" />
            <label htmlFor="age">Idade</label>
            <input type="date" placeholder="Idade" />
            <label htmlFor="projects">Projetos que participou</label>
            <input type="text" placeholder="Projetos que participou" />
          </div>
          <div>
            <label htmlFor="position">Cargo</label>
            <input type="text" placeholder="Cargo" />
            <label htmlFor="jobTime">Tempo de empresa</label>
            <input type="text" placeholder="Tempo de empresa" />
            <label htmlFor="image">URL da foto do Naver</label>
            <input type="url" placeholder="URL da foto do Naver" />
            <Button>Salvar</Button>
          </div>
        </FormWrapper>
      </Wrapper>
      <button onClick={handleModalVisible}>Abrir Modal</button>
      <Modal visible={modalVisible} setVisible={setModalVisible}>
        Naver atualizado,Naver atualizado com sucesso!
      </Modal>
    </>
  );
};

export default Update;
