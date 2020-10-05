import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../../components/Navbar";

const Header = styled.div`
  border: 1px solid var(--black);
  width: 100%;
  height: 85px;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  margin-top: 5rem;

  h1 {
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 48px;
    display: flex;
    align-items: center;
  }

  button {
    width: 10rem;
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
  }
`;

const Card = styled.div`
  width: 281px;
  height: 420px;
`;

const Home = () => {
  return (
    <>
      <NavBar />
      <Header>
        <h1>Navers</h1>
        <Link to="/create">
          <button>Adicionar Naver</button>
        </Link>
      </Header>
    </>
  );
};

export default Home;
