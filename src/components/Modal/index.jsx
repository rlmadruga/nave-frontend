import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const ModalMain = styled.div`
  position: fixed;
  background: var(--white);
  width: 592px;
  height: ${(props) => (props.buttons === true ? "233px" : "160px")};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  div {
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  i {
    margin: 29px 29px 0 0;
    cursor: pointer;
  }

  .buttonDiv {
    justify-content: flex-end;
  }
`;

const ModalText = styled.p`
  margin: 32px 32px 0 32px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2.25rem;
`;

const ModalSubText = styled(ModalText)`
  font-size: 1rem;
  font-weight: 400;
  margin: 24px 0px 32px 32px;
`;

const CancelBtn = styled.button`
  width: 10rem;
  background-color: var(--white);
  color: var(--black);
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  margin-right: 24px;
  padding: 8px 16px 8px 16px;
  transition: 0.2s;
  &:hover {
    transition: 0.2s;
    background-color: var(--black);
    color: var(--white);
  }
`;

const DeleteBtn = styled(CancelBtn)`
  background-color: var(--black);
  color: var(--white);
  margin-right: 32px;
  &:hover {
    transition: 0.2s;
    background-color: var(--white);
    color: var(--black);
  }
`;

const Modal = (props) => {
  let fix = props.children.split(",");

  const handleModalWrapper = () => {
    props.setVisible(false);
  };
  return (
    <>
      {props.visible && (
        <ModalWrapper>
          <ModalMain buttons={props.buttons}>
            <div>
              <ModalText>{fix[0]}</ModalText>
              <i className="fas fa-times" onClick={handleModalWrapper}></i>
            </div>
            <ModalSubText>{fix[1]}</ModalSubText>
            {props.buttons && (
              <div className="buttonDiv">
                <CancelBtn onClick={handleModalWrapper}>Cancelar</CancelBtn>
                <DeleteBtn onClick={() => props.deleteNavers(props.id)}>Excluir</DeleteBtn>
              </div>
            )}
          </ModalMain>
        </ModalWrapper>
      )}
    </>
  );
};

export default Modal;
