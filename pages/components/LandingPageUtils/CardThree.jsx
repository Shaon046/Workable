import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: auto;
  @media (max-width: 599px) {
    padding: 20px 0 20px 0;
  }

  @media (min-width: 600px) and (max-width: 959px) {
    padding: 20px 0 20px 0;
  }

  @media (min-width: 960px) and (max-width: 1279px) {
    /* CSS rules for medium devices */
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    /* CSS rules for large devices */
  }

  @media (min-width: 1920px) {
    /* CSS rules for extra-large devices */
  }
`;

const Card = styled.div`
  background-color: #e8e8e8;
  justify-self: center;
  align-self: center;
  border-radius: 6px;
  box-shadow: 0 0 10px gray;
  position: relative;

  @media (max-width: 599px) {
    height: 192px;
    width: 300px;
    margin-bottom: 140px;
  }

  @media (min-width: 600px) and (max-width: 959px) {
    height: 192px;
    width: 300px;
    margin-bottom: 140px;
  }

  @media (min-width: 960px) and (max-width: 1279px) {
    height: 240px;
    width: 375px;
    margin-bottom: 200px;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    height: 240px;
    width: 375px;
    margin-bottom: 200px;
  }

  @media (min-width: 1920px) {
    height: 240px;
    width: 375px;
    margin-bottom: 200px;
  }
`;

const InsideCard = styled.div`
  height: 240px;
  width: 375px;
  background-color: #d3d3d3;
  border-radius: 6px;
  box-shadow: 0 0 10px gray;
  position: absolute;
  top: 60%;
  left: 20%;
  @media (max-width: 599px) {
    height: 192px;
    width: 300px;
    left: 7%;
  }
  @media (min-width: 600px) and (max-width: 959px) {
    height: 192px;
    width: 300px;
    left: 20%;
  }
  @media (min-width: 960px) and (max-width: 1279px) {
    height: 240px;
    width: 375px;
    left: 20%;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    height: 240px;
    width: 375px;
    left: 20%;
  }

  @media (min-width: 1920px) {
    height: 240px;
    width: 375px;
    left: 20%;
  }
`;

const CardThree = () => {
  return (
    <Wrapper>
      <Card>
        <InsideCard></InsideCard>
      </Card>
    </Wrapper>
  );
};

export default CardThree;
