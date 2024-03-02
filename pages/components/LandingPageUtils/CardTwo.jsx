import React from "react";
import styled from "styled-components";

const Card = styled.div`
  justify-self: center;
  align-self: center;
  border-radius: 6px;
  box-shadow: 0 0 10px gray;
  position: relative;
  position: relative;

  @media (max-width: 599px) {
    height: 300px;
    width: 300px;
    margin: 50px 0;
  }

  @media (min-width: 600px) and (max-width: 959px) {
    height: 300px;
    width: 300px;
    margin: 50px 0;
  }

  @media (min-width: 960px) and (max-width: 1279px) {
    height: 375px;
    width: 375px;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    height: 375px;
    width: 375px;
  }

  @media (min-width: 1920px) {
    height: 375px;
    width: 375px;
  }
`;

const Box = styled.div`
  border-radius: 6px;
  background-color: aliceblue;
  box-shadow: 0 0 10px gray;
  position: absolute;
  right: -10%;
  bottom: -10%;

  @media (max-width: 599px) {
    height: 200px;
    width: 120px;
  }

  @media (min-width: 600px) and (max-width: 959px) {
    height: 200px;
    width: 120px;
  }

  @media (min-width: 960px) and (max-width: 1279px) {
    height: 250px;
    width: 150px;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    height: 250px;
    width: 150px;
  }

  @media (min-width: 1920px) {
    height: 250px;
    width: 150px;
  }
`;

const CardTwo = () => {
  return (
    <Card>
      <Box></Box>
    </Card>
  );
};

export default CardTwo;
