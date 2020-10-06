import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 281px;
  height: 376px;
`;

const CardImage = styled.img`
  width: 281px;
  height: 281px;
  max-width: 100%;
  vertical-align: top;
  max-width: 40%;
`;

const CardTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  line-height: 18px;
  height: 18px;
`;

const CardSubTitle = styled.p`
  font-size: 1rem;
  line-height: 24px;
`;

const Card = (props) => {
  return (
    <CardWrapper>
      <CardImage>
        <img src={props.url} alt="Navers Pic" />
      </CardImage>
      <CardTitle>{props.name}</CardTitle>
      <CardSubTitle>{props.job_role}</CardSubTitle>
      <i className="fas fa-trash"></i>
      <Link to={`/update/${props.id}`}>
        <i className="fas fa-pen"></i>
      </Link>
    </CardWrapper>
  );
};

export default Card;
