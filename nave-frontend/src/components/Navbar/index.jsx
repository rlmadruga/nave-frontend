import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { removeLogout } from "../../api/auth";
import Logo from "../../assets/img/logo.png";

const Nav = styled.nav`
  border: 1px solid var(--black);
  width: 100%;
  height: 85px;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;

  img {
    height: 37px;
  }

  a {
    font-weight: 600;
    color: var(--black);
    text-decoration: none;
    font-size: 1rem;
    line-height: 24px;
  }
`;

function NavBar() {
  return (
    <Nav>
      <a href="https:nave.rs" target="_black">
        <img src={Logo} alt="Nave.rs Logo" />
      </a>
      <div>
        <Link to="/" onClick={removeLogout}>
          Sair
        </Link>
      </div>
    </Nav>
  );
}

export default NavBar;
