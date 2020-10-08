import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../api/api";
import styled from "styled-components";

const CardWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const CardMain = styled.div`
  position: fixed;
  background: var(--white);
  width: 50vw; /*1006px */
  height: auto; /*503px */
  min-width: 500px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CardImage = styled.div`
  width: auto; /*50%*/
  height: 503px; /**100% */
  float: left;
  min-width: 250px;
  box-sizing: border-box;

  img {
    width: 25vw;
    min-width: 250px;
    height: 503px;
    object-fit: cover;
  }
`;

const CardContainer = styled.div`
  width: 50%;
  height: 503px;
  float: right;
  padding: 32px 21px 27px 30px;

  div:after {
    content: "";
    display: table;
    clear: both;
  }

  i {
    cursor: pointer;
    position: absolute;
    right: 1rem;
  }

  .fa-trash,
  .fa-pen {
    position: relative;
    left: 0;
    margin-top: 76px;
    margin-right: 16px;
  }

  a {
    color: var(--black);
  }

  @media only screen and (max-width: 1141px) {
    .fa-trash,
    .fa-pen {
      margin-top: 49px !important;
    }
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 26px;
  margin-bottom: 10px;
`;

const CardSubTitle = styled.h5`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  margin-bottom: 24px;
  margin-top: 0px;
`;

const CardText = styled.h5`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 10px;
`;

const CardSubText = styled(CardText)`
  font-weight: 400;
  margin-bottom: 24px;
  margin-top: 0px;
`;

const Card = ({ id, ...props }) => {
  const [name, setName] = useState("");
  const [job_role, setJob] = useState("");
  const [admission_date, setAdmission] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [project, setProject] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function requestApi() {
      const response = await API.get(`navers/${id}`);
      setLoading(true);
      let age = response.data.birthdate.split("T");
      let ageYear = age[0].split("-");
      let today = new Date().toISOString().slice(0, 10).split("-");
      let resultAge = today[0] - ageYear[0] + " anos";

      let admission = response.data.admission_date.split("T");
      let adYear = admission[0].split("-");
      let today2 = new Date().toISOString().slice(0, 10).split("-");
      let resultAd = 0;

      if (today2[0] === adYear[0] && today2[1] === adYear[1]) {
        resultAd = today2[2] - adYear[2] + " dias";
      } else if (today2[0] === adYear[0]) {
        resultAd = today2[1] - adYear[1] + " meses";
      } else {
        resultAd = today2[0] - adYear[0] + " anos";
      }

      setName(response.data.name);
      setJob(response.data.job_role);
      setAdmission(resultAd);
      setBirthdate(resultAge);
      setProject(response.data.project);
      setUrl(response.data.url);
    }
    requestApi();
  }, [id]);

  const handleCardWrapper = () => {
    props.setVisible(false);
  };

  return (
    <>
      {props.visible && loading && (
        <CardWrapper>
          <CardMain>
            <CardImage>
              <img src={url} alt="Navers Pic" />
            </CardImage>
            <CardContainer>
              <i className="fas fa-times" onClick={handleCardWrapper}></i>
              <CardTitle>{name}</CardTitle>
              <CardSubTitle>{job_role}</CardSubTitle>
              <CardText>Idade</CardText>
              <CardSubText>{birthdate}</CardSubText>
              <CardText>Tempo de empresa</CardText>
              <CardSubText>{admission_date}</CardSubText>
              <CardText>Projetos que participou</CardText>
              <CardSubText>{project}</CardSubText>
              <i className="fas fa-trash" onClick={() => props.handleModalVisible(id)}></i>
              <Link to={`/update/${id}`}>
                <i className="fas fa-pen"></i>
              </Link>
            </CardContainer>
          </CardMain>
        </CardWrapper>
      )}
    </>
  );
};

export default Card;
