import styled from "styled-components";

const FormWrapper = styled.div`
  margin: 156px auto;
  display: flex;
  width: 448px;
  height: 408px;

  border: 1px solid #212121;
  box-sizing: border-box;

  img {
    margin: 40px 0px 32px 106px;
  }

  label {
    width: 60.34px;
    height: 18px;
    left: 448px;
    top: 296px;

    margin: 0px 32px 4px 32px;

    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: var(--black);
  }

  input {
    height: 40px;
    width: 384px;

    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    margin: 0px 32px 32px 32px;
    padding: 8px 0 8px 8px;
    border: 1px solid var(--blackBorderInput);

    box-sizing: border-box;
    &::placeholder {
      color: #9e9e9e;
    }
  }
`;

export default FormWrapper;
