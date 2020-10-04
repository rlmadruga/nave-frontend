import styled from "styled-components";

const Button = styled.button`
  color: var(--white);
  background-color: var(--black);
  border: 1px solid var(--black);
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  width: 384px;
  height: 40px;
  margin-left: 7%;
  margin-right: auto;

  transition: 0.2s;
  &:hover {
    transition: 0.2s;
    background-color: var(--white);
    color: var(--black);
  }

  @media only screen and (min-width: 480px) and (max-width: 720px) {
    width: 85%;
  }

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export default Button;
