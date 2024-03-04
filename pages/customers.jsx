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
import Link from "next/link";
import { Button } from "@mui/material";
import Footer from "./components/Footer";

//screen size

const Texts = styled.p`
  //remove it
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
`;

const SectionTwo = styled.div`
  width: 100%;
`;
const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;

  @media (max-width: 599px) {
    flex-direction: column;
  }

  @media (min-width: 600px) and (max-width: 959px) {
    flex-direction: column;
  }

  @media (min-width: 960px) and (max-width: 1279px) {
    flex-direction: column;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    flex-direction: row;
  }

  @media (min-width: 1920px) {
    flex-direction: row;
  }
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

  @media (max-width: 599px) {
    width: 80%;
    padding: 20px;
    align-items: center;
  }

  @media (min-width: 600px) and (max-width: 959px) {
    width: 80%;
    padding: 20px;
    align-items: center;
  }

  @media (min-width: 960px) and (max-width: 1279px) {
    width: 80%;
    padding: 20px;
    align-items: center;
  }
`;

const CarouselImageDiv = styled.div`
  width: 465px;
  height: 260px;
  background-color: #ccbbbb;
  border-radius: 6px;
  transform: translate(-150px, 0);
  margin-right: -150px;


  @media (max-width: 599px) { 
    width: 80%;
    padding: 20px ;
    transform: translate(0, 0);
  margin: 0px;
}

@media (min-width: 600px) and (max-width: 959px) { 
  width: 80%;
  padding: 20px ;
    transform: translate(0, 0);
  margin: 0px;
}

@media (min-width: 960px) and (max-width: 1279px) { 
  width: 80%;
  padding: 20px ;
    transform: translate(0, 0);
  margin: 0px;/ 
}

@media (min-width: 1280px) and (max-width: 1919px) { 
    /* CSS rules for large devices */ 
}

@media (min-width: 1920px) { 
    /* CSS rules for extra-large devices */ 
}


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
    font-size: var(--font-l-2);
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
  position: relative;
`;

const Wave = styled.div`
  width: 100%;
  transform: translateY(5%);
`;
const SectionFourContainer = styled.div`
  width: 100%;

  position: relative;
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
`;
const LeftItem = styled.div`
  max-width: 100%;
  height: 600px;
  padding: 20px;
  background-color: var(--primary-content);
`;

const RightItem = styled.div`
  background-color: var(--primary-content);

  height: 600px;
  padding-right: 60px;
  display: flex;
  flex-direction: column;

  position: relative;
`;

const RightItemBox = styled.div`
  width: 380px;
  height: 490px;
  box-shadow: 0 0 20px black;
  z-index: 100;
  font-style: italic;
  transform: translateY(10%);
`;

const InsideBoxTop = styled.div`
  height: 85%;
  background-color: #ffffff;
  margin-bottom: -20px;
`;
const CarouselContainerTwo = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const InsideBoxBottom = styled.div`
  height: 15%;
  background-color: #b5b5b5;
`;

const WhiteWave = styled.div`
  width: 100%;
  position: absolute;
  bottom: -40px;
`;

//section five
const SectionFive = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SectionFiveContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const GridItems = styled.div`
  height: 340px;
  margin: 5px;
  border-bottom: 1px solid #c1c1c1;
`;
const InsideImage = styled.div`
  height: 60%;
  border-radius: 6px;
  background-color: #cecece;

  &:hover {
    transform: translate(0, -5px);
    box-shadow: 1px 1px 5px gray;
    transition: all 0.3s;
  }
`;

const InsideTypography = styled(Link)`
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  padding: 20px;
  cursor: pointer;
  color: var(--primary-content);
  text-decoration: none;
  &:hover {
    color: var(--primary-color);
    text-decoration: none;
  }
`;

const CustomLink = styled(Link)`
  color: var(--primary-content);
  font-size: var(--font-xs);
  font-weight: 700;
  padding: 40px;
  text-decoration: none;
  &:hover {
    color: var(--primary-color);
    text-decoration: none;
  }
`;

const SectionSix = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CustomButton = styled(Button)`
  color: #ffffff;
  background-color: var(--primary-color);
  padding: 10px;
  margin: 50px;
  &:hover {
    box-shadow: 1px 1px 20px gray;
    color: #ffffff;
    background-color: var(--primary-color);
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

  const six = [1, 2, 3, 4, 5, 6];

  return (
    <Main>
      <SectionOne>
        <Typography
          sx={{
            fontSize: "var(--font-xxl)",
            fontWeight: "600",
            color: "var(--primary-color)",
          }}
        >
          In good company
        </Typography>

        <Typography
          sx={{
            fontSize: "var(--font-l)",
            color: "black",
            lineHeight: "1.5",
            maxWidth: "600px",
          }}
        >
          Companies of all shapes and sizes are using Workable to advance their
          hiring — and their organizations.
        </Typography>
      </SectionOne>

      <SectionTwo>
        <Carousel>
          {image.map((image, key) => (
            <>
              <CarouselContainer>
                <CarouselTextDiv>
                  <CarouselLogo>logo</CarouselLogo>
                  <Typography sx={{ fontSize: "var(--font-l)" }}>
                    This [in-person interview] process is not possible for us
                    right now due to the [COVID-19] crisis. This tool has helped
                    us be more efficient during this time and get our jobs done.
                    Thank you!
                  </Typography>
                  <CarouselCourtesy>
                    <CarouselCourtesyImage>
                      <Image src="" alt="" height="" width="" />
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
        <SectionFourContainer>
          <div>
            <Wave>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#373656"
                  fill-opacity="1"
                  d="M0,224L60,202.7C120,181,240,139,360,133.3C480,128,600,160,720,192C840,224,960,256,1080,234.7C1200,213,1320,139,1380,101.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
              </svg>

              <RoundContainer height={"200px"} top={"-2%"} left={"20%"} />
              <RoundContainer height={"150px"} top={"18%"} left={"80%"} />
            </Wave>
            <SectionFourContent>
              <LeftItem>
                <Image
                  src="/customers.webp"
                  alt="Customers"
                  height={500}
                  width={800}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                  layout="responsive"
                  objectFit="contain"
                />
              </LeftItem>

              <RightItem>
                <Typography
                  sx={{
                    fontSize: "var(--font-xl)",
                    fontWeight: "700",
                    lineHeight: "1",
                    color: "white",
                  }}
                >
                  Driven by those who <br />
                  drive hiring
                </Typography>

                <Typography
                  sx={{
                    marginTop: "40px",
                    fontSize: "var(--font-m-1)",
                    lineHeight: "1.5",
                    color: "white",
                  }}
                >
                  Our customers lead hiring at some of the world’s most
                  innovative companies. It takes ambition, ingenuity and a
                  hiring platform that puts them where they belong: in control.
                </Typography>

                <RightItemBox>
                  <InsideBoxTop>
                    <Carousel
                      showArrows={false}
                      showStatus={false}
                      infiniteLoop
                      autoPlay
                      stopOnHover
                      dynamicHeight
                    >
                      {image.map((image, key) => (
                        <>
                          <CarouselContainerTwo>
                            <Typography
                              sx={{
                                fontSize: "var(--font-l-2)",
                                color: "var(--primary-content)",
                                textAlign: "center",
                                lineHeight: "1.3",
                              }}
                            >
                              “As a Talent Recruiter, Workable is very helpful
                              for me to keep the pipeline ready for any open
                              positions, it does most of the jobs...”
                            </Typography>

                            <Typography
                              sx={{
                                marginTop: "10px",
                                fontSize: "var(--font-l)",
                                color: "var(--primary-content)",
                              }}
                            >
                              Zannoon M.
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "var(--font-m-2)",
                                color: "var(--primary-content)",
                              }}
                            >
                              Jul 07, 2022
                            </Typography>
                          </CarouselContainerTwo>
                        </>
                      ))}
                    </Carousel>
                  </InsideBoxTop>

                  <InsideBoxBottom></InsideBoxBottom>
                </RightItemBox>
              </RightItem>
            </SectionFourContent>
          </div>
        </SectionFourContainer>
        <WhiteWave>
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 390"
            xmlns="http://www.w3.org/2000/svg"
            class="transition duration-300 ease-in-out delay-150"
          >
            <path
              d="M 0,600 L 0,225 C 192.40000000000003,278.4666666666667 384.80000000000007,331.93333333333334 563,320 C 741.1999999999999,308.06666666666666 905.2,230.73333333333335 1049,204 C 1192.8,177.26666666666665 1316.4,201.13333333333333 1440,225 L 1440,600 L 0,600 Z"
              stroke="none"
              stroke-width="0"
              fill="#ffffff"
              fill-opacity="1"
              class="transition-all duration-300 ease-in-out delay-150 path-0"
            ></path>
          </svg>
        </WhiteWave>
      </SectionFour>

      <SectionFive>
        <SectionFiveContainer>
          {six.map((data, idx) => (
            <GridItems key={idx}>
              <InsideImage />
              <InsideTypography href={""}>
                <Typography
                  sx={{
                    fontSize: "var(--font-l-2)",
                    fontWeight: "600",
                    lineHeight: "1",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  voluptatibus
                </Typography>
              </InsideTypography>
            </GridItems>
          ))}
        </SectionFiveContainer>
        <CustomLink href={""}>SEE ALL CUSTOMER STORIES</CustomLink>
      </SectionFive>

      <SectionSix>
        <Typography
          sx={{
            fontSize: "var(--font-xxl) ",
            fontWeight: "700",
            color: "var(--primary-color)",
          }}
        >
          Let’s grow together
        </Typography>

        <Typography
          sx={{ marginTop: "30px", maxWidth: "600px", textAlign: "center" }}
        >
          Explore our full platform with a 15-day free trial. Post jobs, get
          candidates and onboard employees all in one place.
        </Typography>

        <CustomButton>Start a free trail</CustomButton>

        <Image
          src="/illu.webp"
          alt="illu"
          width={423}
          height={302}
          style={{ maxHeight: "100%", maxWidth: "100%", margin: "50px" }}
        />
      </SectionSix>

      <Footer />
    </Main>
  );
};

export default customers;
