import React from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 240px;
  width: 375px;
  background-color: #e8e8e8;
  justify-self: center;
  align-self: center;
  border-radius: 6px;
  box-shadow: 0 0 10px gray;
  position: relative;
  margin-bottom: 200px;
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
`;

const CardThree = () => {
  return (
    <Card>
      <InsideCard></InsideCard>
    </Card>
  );
};

export default CardThree;
