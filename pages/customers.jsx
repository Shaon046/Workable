import React from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Typography } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import ScreenSizeComponent from "./components/SreenSize";

//screen size

const Responsive = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  max-width: 100%;
`;
const SectionOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 325px;
  width: 80%;
  margin: auto;
`;

const Texts = styled.p`
  color: var(--primary-color);
  font-size: ${({ fontSize }) => fontSize};
  margin-top: 20px;
  text-align: center;

  @media (max-width: 767px) {
    font-size: ${({ fontSize }) => `calc(${fontSize} - 20%)`};
  }

  @media (min-width: 767px) {
    font-size: ${({ fontSize }) => `calc(${fontSize} - 10%)`};
  }

  @media (min-width: 1200px) {
    font-size: ${({ fontSize }) => fontSize};
  }
`;

const SectionTwo = styled.div`
  width: 100%;
`;
const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-left: 150px;
`;

const CarouselTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  width: 695px;
  height: 450px;
  background-color: #f0f0fb;
  padding: 20px 155px 20px 20px;
`;
const CarouselImageDiv = styled.div`
  width: 465px;
  height: 260px;
  background-color: #ccbbbb;
  border-radius: 6px;
  transform: translate(-150px, 0);
`;

const CarouselLogo = styled.div`
  width: 130px;
  height: 70px;
  background-color: #919191;
`;

const CarouselCourtesy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
const CarouselCourtesyImage = styled.div`
  border: 2px solid #22bfd3;
  padding: 5px;
  height: 65px;
  width: 65px;
  border-radius: 50px;
`;

const CarouselCourtesyText = styled.div`
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

////////section three

const SectionThree = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionThreeContent = styled.div`
  width: 70%;
  height: 350px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const ContentLeft = styled.div`
  justify-self: center;
  align-self: center;
`;
const ContentRight = styled.div`
  padding-left: 30px;
  justify-content: center;
  align-items: center;
  justify-self: center;
  align-self: center;
`;

const CustomListItemButton = styled(ListItemButton)`
  width: 230px;
  margin: auto;
  border-bottom: 1px solid gray;
  padding-bottom: 20px;

  .MuiSvgIcon-root {
    font-size: 30px;
  }

  &:hover {
    border-bottom: 1px solid var(--primary-color);
    color: var(--primary-color);
    background-color: transparent;
    .MuiSvgIcon-root {
      color: var(--primary-color);
      font-size: 30px;
    }
  }
`;

////section four

const spinAnimation = keyframes`
    0% {
        transform: translate(-2px, 0);
    }
    25% {
        transform: translate(0,-2px);
    }
    50% {
        transform: translate(2px,0);
    }
    75% {
        transform: translate(0,2px);
    }
   
    100% {
        transform: translate(-2px, 0);
    }
`;

const SectionFour = styled.div`
  width: 100%;
  height: 1000px;
  background-image: url(wave.svg);
  background-size: cover;
  background-repeat: no-repeat;
  /* background-color: var(--primary-content); */
  position: relative;
  z-index: 999;
`;

const RoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${({ height }) => height};
  width: ${({ height }) => height};

  border-radius: 100px;
  background-color: #ffffff;
  animation: ${spinAnimation} 4s linear infinite;
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  box-shadow: 0px 0px 10px gray;
  z-index: 10;
`;
const SectionFourContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  width: 100%;
  position: absolute;
  top: 40%;
`;
const LeftItem = styled.div`
  width: 100%;
  padding: 20px;
`;

const RightItem = styled.div``;

const StaticRoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${({ height }) => height};
  width: ${({ height }) => height};

  border-radius: 100px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px gray;
  z-index: 10;
`;

const List = styled.li`
  list-style-type: none;
  display: flex;
  padding: 3px;
  align-items: center;
  color: white;

  &:nth-child(1) {
  }
  &:nth-child(2) {
  }
  &:nth-child(3) {
  }
  &:nth-child(4) {
  }
  &:nth-child(5) {
  }
`;

const customers = () => {
  console.log(ScreenSizeComponent());
  const image = [
    {
      id: "0",
      author: "Alejandro Escamilla",
      width: 5000,
      height: 3333,
      url: "https://unsplash.com/photos/yC-Yzbqy7PY",
      download_url: "https://picsum.photos/id/0/5000/3333",
    },
    {
      id: "1",
      author: "Alejandro Escamilla",
      width: 5000,
      height: 3333,
      url: "https://unsplash.com/photos/LNRyGwIJr5c",
      download_url: "https://picsum.photos/id/1/5000/3333",
    },
    {
      id: "2",
      author: "Alejandro Escamilla",
      width: 5000,
      height: 3333,
      url: "https://unsplash.com/photos/N7XodRrbzS0",
      download_url: "https://picsum.photos/id/2/5000/3333",
    },
    {
      id: "3",
      author: "Alejandro Escamilla",
      width: 5000,
      height: 3333,
      url: "https://unsplash.com/photos/Dl6jeyfihLk",
      download_url: "https://picsum.photos/id/3/5000/3333",
    },
    {
      id: "4",
      author: "Alejandro Escamilla",
      width: 5000,
      height: 3333,
      url: "https://unsplash.com/photos/y83Je1OC6Wc",
      download_url: "https://picsum.photos/id/4/5000/3333",
    },
    {
      id: "5",
      author: "Alejandro Escamilla",
      width: 5000,
      height: 3334,
      url: "https://unsplash.com/photos/LF8gK8-HGSg",
      download_url: "https://picsum.photos/id/5/5000/3334",
    },
  ];

  return (
    <Responsive>
      <Main>
        <SectionOne>
          <Texts fontSize={"46px"} style={{ fontWeight: "600" }}>
            In good company
          </Texts>

          <Texts
            fontSize={"20px"}
            style={{ color: "black", lineHeight: "1.5", width: "540px" }}
          >
            Companies of all shapes and sizes are using Workable to advance
            their hiring — and their organizations.
          </Texts>
        </SectionOne>

        <SectionTwo>
          <Carousel>
            {image.map((image, key) => (
              <>
                <CarouselContainer>
                  <CarouselTextDiv>
                    <CarouselLogo>logo</CarouselLogo>
                    <Texts style={{ fontSize: " calc(12px + 1vw)" }}>
                      "This [in-person interview] process is not possible for us
                      right now due to the [COVID-19] crisis. This tool has
                      helped us be more efficient during this time and get our
                      jobs done. Thank you!"
                    </Texts>
                    <CarouselCourtesy>
                      <CarouselCourtesyImage>
                        <img src="" alt="" />
                      </CarouselCourtesyImage>

                      <CarouselCourtesyText>
                        <p>name and tile </p> <p>position</p>
                      </CarouselCourtesyText>
                    </CarouselCourtesy>
                  </CarouselTextDiv>

                  <CarouselImageDiv></CarouselImageDiv>
                </CarouselContainer>
              </>
            ))}
          </Carousel>
        </SectionTwo>

        <SectionThree>
          <SectionThreeContent>
            <ContentLeft>
              <Texts fontSize={"40px"} style={{ fontWeight: "900" }}>
                Improving outcomes, whatever the hiring challenge
              </Texts>
              <Texts fontSize={"16px"} style={{ fontWeight: "500" }}>
                There’s no challenge our customers haven’t seen — or solved.
                Here’s what they’ve been accomplishing lately.
              </Texts>
            </ContentLeft>
            <ContentRight>
              <div>
                <CustomListItemButton>
                  <ListItemIcon>
                    <PlayCircleFilledWhiteIcon />
                  </ListItemIcon>
                  <Typography fontWeight={600} fontSize={12} variant="body1">
                    GOING REMOTE
                  </Typography>
                </CustomListItemButton>
                <CustomListItemButton>
                  <ListItemIcon>
                    <PlayCircleFilledWhiteIcon />
                  </ListItemIcon>
                  <Typography fontWeight={600} fontSize={12} variant="body1">
                    CUTTING COSTS
                  </Typography>
                </CustomListItemButton>{" "}
                <CustomListItemButton>
                  <ListItemIcon>
                    <PlayCircleFilledWhiteIcon />
                  </ListItemIcon>
                  <Typography fontWeight={600} fontSize={12} variant="body1">
                    DIGITAL TRANSFORMATION
                  </Typography>
                </CustomListItemButton>{" "}
                <CustomListItemButton>
                  <ListItemIcon>
                    <PlayCircleFilledWhiteIcon />
                  </ListItemIcon>
                  <Typography fontWeight={600} fontSize={12} variant="body1">
                    REDUCING TIME TO HIRE
                  </Typography>
                </CustomListItemButton>{" "}
                <CustomListItemButton>
                  <ListItemIcon>
                    <PlayCircleFilledWhiteIcon />
                  </ListItemIcon>
                  <Typography fontWeight={600} fontSize={12} variant="body1">
                    RAPIDLY SCALING
                  </Typography>
                </CustomListItemButton>{" "}
                <CustomListItemButton>
                  <ListItemIcon>
                    <PlayCircleFilledWhiteIcon />
                  </ListItemIcon>
                  <Typography fontWeight={600} fontSize={12} variant="body1">
                    RAPIDLY SCALING
                  </Typography>
                </CustomListItemButton>
              </div>
            </ContentRight>
          </SectionThreeContent>
        </SectionThree>

        <SectionFour>
          <RoundContainer height={"200px"} top={"6%"} left={"20%"} />
          <RoundContainer height={"150px"} top={"18%"} left={"80%"} />

          <SectionFourContent>
            <LeftItem>
              <ul>
                <List>
                  <StaticRoundContainer height={"100px"} />{" "}
                  <p style={{ paddingLeft: "10px" }}>hello there</p>{" "}
                </List>

                <List>
                  <StaticRoundContainer height={"100px"} />{" "}
                  <p style={{ paddingLeft: "10px" }}>hello there</p>{" "}
                </List>

                <List>
                  <StaticRoundContainer height={"100px"} />{" "}
                  <p style={{ paddingLeft: "10px" }}>hello there</p>{" "}
                </List>

                <List>
                  <StaticRoundContainer height={"100px"} />{" "}
                  <p style={{ paddingLeft: "10px" }}>hello there</p>{" "}
                </List>
              </ul>
            </LeftItem>

            <RightItem></RightItem>
          </SectionFourContent>
        </SectionFour>
      </Main>
    </Responsive>
  );
};

export default customers;
