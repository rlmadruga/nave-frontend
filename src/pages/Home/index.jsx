import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "../../components/Modal";
import NavBar from "../../components/Navbar";
import Card from "../../components/Card";
import API from "../../api/api";

const Header = styled.div`
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

const Wrapper = styled.div`
  display: inline-block;

  div {
    margin: 2rem 32px 0;
    margin-bottom: 3rem;
    width: 281px;
    height: 376px;
    text-align: left;
  }

  .title {
    font-weight: 600;
    font-size: 1rem;
    line-height: 18px;
    color: var(--black);
    margin-bottom: 5px;
    border: 1px solid #00ff00;
  }
  .subtitle {
    border: 1px solid #ff0000;
    font-size: 1rem;
    line-height: 24px;
    margin-top: 0;
  }

  a {
    background-color: transparent;
    color: var(--black);
  }

  i {
    margin-right: 16px;
  }

  img {
    cursor: pointer;
    object-fit: cover;
  }

  button {
    background-color: var(--white);
    border: none;
    cursor: pointer;
  }

  button:focus {
    border: none;
    outline: none;
  }
`;

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [idModal, setIdModal] = useState("");

  const [cardVisible, setCardVisible] = useState(false);
  const [idCard, setIdCard] = useState("");

  const [modalVisibleDelete, SetModalDelete] = useState(false);

  const handleCardVisible = (id) => {
    setIdCard(id);
    setCardVisible(true);
  };

  const handleModalVisible = (id) => {
    setIdModal(id);
    setModalVisible(true);
  };

  const handleModalDelete = () => {
    SetModalDelete(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const [navers, setNavers] = useState([]);
  const [id, setID] = useState("");
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;
    API.get("navers")
      .then((res) => {
        if (isMounted) {
          setNavers(res.data);
          setID([...id, ...res.data]);
          setLoad(true);
        }
      })
      .catch((err) => {
        setError(err.message);
        setLoad(true);
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  async function deleteNavers(id) {
    try {
      await API.delete(`navers/${id}`);
      setNavers(navers.filter((navers) => navers.id !== id));
      closeModal();
      handleModalDelete();
      setTimeout(() => window.location.reload(), 1500);
    } catch {
      alert("Erro ao Deletar, tente novamente!");
    }
  }

  return (
    <>
      <NavBar />
      <Header>
        <h1>Navers</h1>
        <Link to="/create">
          <button>Adicionar Naver</button>
        </Link>
      </Header>
      {load ? (
        <ul style={{ paddingInlineStart: "0px", textAlign: "center" }}>
          {error ? (
            <li>{error.message}</li>
          ) : (
            navers.map((navers) => {
              return (
                <Wrapper key={navers.id}>
                  <div>
                    <img
                      onClick={() => handleCardVisible(navers.id)}
                      width="281"
                      height="281"
                      src={navers.url}
                      alt={`${navers.name} Foto`}
                    />

                    <p className="title">{navers.name}</p>
                    <p className="subtitle">{navers.job_role}</p>
                    {/* <button onClick={() => handleCardVisible(navers.id)}>
                      <i className="far fa-plus-square"></i>
                    </button> */}
                    <button onClick={() => handleModalVisible(navers.id)}>
                      <i className="fas fa-trash"></i>
                    </button>
                    <Link to={`/update/${navers.id}`}>
                      <i className="fas fa-pen"></i>
                    </Link>
                  </div>
                </Wrapper>
              );
            })
          )}
        </ul>
      ) : (
        <div>
          <i
            style={{ position: "absolute", top: "50%", left: "50%", fontSize: "5rem" }}
            className="fas fa-spinner"
          ></i>
        </div>
      )}

      <Modal
        visible={modalVisible}
        setVisible={setModalVisible}
        buttons={true}
        deleteNavers={deleteNavers}
        id={idModal}
      >
        Excluir Naver,Tem certeza que deseja excluir este Naver?
      </Modal>

      <Modal visible={modalVisibleDelete} setVisible={SetModalDelete} buttons={false}>
        Naver excluído,Naver excluído com sucesso!
      </Modal>

      {cardVisible && (
        <Card
          visible={cardVisible}
          setVisible={setCardVisible}
          deleteNavers={deleteNavers}
          id={idCard}
        />
      )}
    </>
  );
};

export default Home;
