import React from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 375px;
  width: 375px;
  justify-self: center;
  align-self: center;
  border-radius: 6px;
  box-shadow: 0 0 10px gray;
  position: relative;
  position: relative;
`;

const Box = styled.div`
  height: 250px;
  width: 150px;
  border-radius: 6px;
  background-color: aliceblue;
  box-shadow: 0 0 10px gray;
  position: absolute;
  right: -10%;
  bottom: -10%;
`;

const CardTwo = () => {
  return (
    <Card>
      <Box></Box>
    </Card>
  );
};

export default CardTwo;
