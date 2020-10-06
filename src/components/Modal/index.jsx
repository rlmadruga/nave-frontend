import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalMain = styled.div`
  position: fixed;
  background: var(--white);
  width: 592px;
  height: 160px;
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

const ModalButton = styled.button`
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
          <ModalMain>
            <div>
              <ModalText>{fix[0]}</ModalText>
              <i className="fas fa-times" onClick={handleModalWrapper}></i>
            </div>
            <ModalSubText>{fix[1]}</ModalSubText>
            {props.buttons && (
              <div>
                <ModalButton onClick={handleModalWrapper}>Cancelar</ModalButton>
                <ModalButton onClick={() => props.deleteNavers(props.id)}>
                  Excluir
                </ModalButton>
              </div>
            )}
          </ModalMain>
        </ModalWrapper>
      )}
    </>
  );
};

export default Modal;
