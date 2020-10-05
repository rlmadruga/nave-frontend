import React from "react";
import styled from "styled-components";
import NavBar from "../../components/Navbar";

const Header = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  margin: 125px 344px 10px;
  padding: 10px 10px 10px 85px;
`;

const FormWrapper = styled.form`
  margin: 0px 344px;
  padding: 0px 20px 20px 0;
  width: 920px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;

  div {
    margin: 0 auto;
    padding: 0px 10px 10px 10px;
    display: flex;
    flex-direction: column;
  }

  label {
    display: block;
    font-weight: 600;
    font-size: 1rem;
    line-height: 18px;
    padding: 0 0 10px 0;
  }
  input {
    border: 1px solid var(--blackBorderInput);
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 1rem;
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
  return (
    <>
      <NavBar />
      <Header>&lt; Adicionar Naver</Header>
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
          <input type="text" placeholder="URL da foto do Naver" />
          <Button>Salvar</Button>
        </div>
      </FormWrapper>
    </>
  );
};

export default Create;
