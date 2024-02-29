import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Card = styled.div`
  height: 345px;
  width: 275px;
  justify-self: center;
  align-self: center;
  border-radius: 6px;
  box-shadow: 0 0 10px gray;
  position: relative;
  margin-bottom: 50px;
`;
const Box1 = styled.div`
  width: 100%;
  height: 35%;
  background-color: #fef1e9;
  border-radius: 6px 6px 0 0;
`;

const Circle = styled.div`
  height: ${({ height }) => height};
  width: ${({ height }) => height};

  border-radius: 100px;
  box-shadow: 0 0 10px gray;
  background-color: aliceblue;

  position: absolute;

  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
`;

const CardOne = () => {
  return (
    <Card>
      <Box1></Box1>
      <Circle height={"55px"} top={"20%"} left={"-10%"}>
        <Image src={"linkedin.svg"} alt={"linkedin"} height={55} width={55} />
      </Circle>
      <Circle height={"40px"} top={"70%"} left={"-25%"}>
        <Image src={"indeed.svg"} alt={"indeed"} height={37} width={37} />
      </Circle>
      <Circle height={"75px"} top={"10%"} right={"-20%"}>
        <Image src={"google.svg"} alt={"google"} height={73} width={73} />
      </Circle>
      <Circle height={"55px"} top={"70%"} right={"-25%"}>
        <Image src={"linkedin.svg"} alt={"linkedin"} height={55} width={55} />
      </Circle>

      <Circle height={"75px"} top={"90%"} right={"60%"}>
        <Image src={"google.svg"} alt={"google"} height={73} width={73} />
      </Circle>
    </Card>
  );
};

export default CardOne;
