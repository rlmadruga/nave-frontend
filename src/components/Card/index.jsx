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
  width: 1006px;
  height: 503px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CardImage = styled.div`
  width: 50%;
  height: 100%;
  float: left;
`;

const CardContainer = styled.div`
  width: 50%;
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
`;

const Card = ({ id, ...props }) => {
  const [name, setName] = useState("");
  const [job_role, setJob] = useState("");
  const [admission_date, setAdmission] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [project, setProject] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    async function requestApi() {
      const response = await API.get(`navers/${id}`);

      let age = response.data.birthdate.split("T");
      let ageYear = age[0].split("-");
      let today = new Date().toISOString().slice(0, 10).split("-");
      let resultAge = today[0] - ageYear[0];

      let admission = response.data.admission_date.split("T");
      let adYear = admission[0].split("-");
      let today2 = new Date().toISOString().slice(0, 10).split("-");
      let resultAd = today2[0] - adYear[0];

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
      {props.visible && (
        <CardWrapper>
          <CardMain>
            <CardImage>
              <img
                style={{ width: "503px", height: "503px" }}
                src={url}
                alt="Navers Pic"
              />
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
              <i className="fas fa-trash"></i>
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
