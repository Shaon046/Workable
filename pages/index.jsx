import React from "react";
import styled from "styled-components";
import { Typography, Box, Button } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import Link from "next/link";
import Image from "next/image";
import CardOne from "./components/LandingPageUtils/CardOne";
import CardTwo from "./components/LandingPageUtils/CardTwo";
import CardThree from "./components/LandingPageUtils/CardThree";
import Footer from "./components/Footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Body = styled.div`
  max-width: 100%;
  margin: auto;
  position: relative;
`;

const SectionOne = styled.section`
  width: 100%;
  min-height: 100%;
  background-color: var(--primary-color);

  @media (max-width: 599px) {
    max-width: 599px;
  }

  @media (min-width: 600px) and (max-width: 959px) {
    min-width: 600px;
    max-width: 959px;
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

const SectionOneContainer = styled.div`
  display: grid;

  @media (max-width: 599px) {
    grid-template-columns: 100%;
  }

  @media (min-width: 600px) and (max-width: 959px) {
    grid-template-columns: 100%;
  }

  @media (min-width: 960px) and (max-width: 1279px) {
    grid-template-columns: 100%;
    min-height: 100vh;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    grid-template-columns: 40% 60%;
    min-height: 100vh;
  }

  @media (min-width: 1920px) {
    grid-template-columns: 40% 60%;
    min-height: 100vh;
  }
`;

const LeftGrid = styled.div`
  height: inherit;
  display: flex;
  justify-content: end;
  flex-direction: column;
  padding: 20px;
`;

const RightGrid = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: end;
`;

const CustomLink = styled(Link)`
  display: flex;
  font-weight: 800;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  &:hover {
    text-decoration: underline;
  }

  & .MuiSvgIcon-root {
    font-size: var(--font-m2);
    color: #00b7cd;
    margin-right: 5px;
    text-align: center;
  }
`;
const CustomButton = styled(Button)`
  background-color: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;

  &:hover {
    background-color: #ffffff;
    color: var(--primary-color);
  }
`;

//second section

const SecondSection = styled.section`
  width: 100%;
  background-color: #ffffff;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-content);
  margin: auto;

  @media (max-width: 599px) {
    padding: 5x;
  }
  @media (min-width: 600px) and (max-width: 959px) {
    padding: 10px;
  }
  @media (min-width: 960px) and (max-width: 1279px) {
    text-align: center;
    padding: 15px;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    text-align: center;
    padding: 20px;
  }

  @media (min-width: 1920px) {
    text-align: center;
    padding: 20px;
  }
`;

const Heading = styled.div`
  @media (max-width: 599px) {
    margin-top: 50px;
  }

  @media (max-width: 599px) {
    margin-top: 50px;
  }

  @media (min-width: 600px) and (max-width: 959px) {
    margin-top: 70px;
  }

  @media (min-width: 960px) and (max-width: 1279px) {
    margin-top: 150px;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    margin-top: 130px;
  }

  @media (min-width: 1920px) {
    margin-top: 130px;
  }
`;

const SecondSectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);

  margin-top: 5px;
  justify-content: center;
  align-items: center;

  @media (max-width: 599px) {
    grid-template-columns: 100%;
    padding: 5px;
  }
  @media (min-width: 600px) and (max-width: 959px) {
    grid-template-columns: 100%;
    padding: 10px;
  }

  @media (min-width: 960px) and (max-width: 1279px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding: 25px;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding: 30px;
  }

  @media (min-width: 1920px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding: 30px;
  }
`;

const TextContainer = styled.div`
  text-align: center;
  color: var(--primary-content);

  @media (max-width: 599px) {
    margin-bottom: 50px;
  }

  @media (min-width: 600px) and (max-width: 959px) {
    margin-bottom: 50px;
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

const LearnMore = styled(Link)`
  font-size: var(--font-xs);
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

//Section three

const SectionThree = styled.section`
  width: 100%;
`;

const WaveDesign = styled.div`
  height: 490px;
  background-image: url(Iwave.svg);
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;

  @media (max-width: 599px) {
    height: 203px;
  }
  @media (min-width: 600px) and (max-width: 959px) {
    height: 326px;
  }
  @media (min-width: 960px) and (max-width: 1279px) {
    background-size: cover;
    height: 435px;
  }
  @media (min-width: 1280px) and (max-width: 1919px) {
    height: 652px;
  }

  @media (min-width: 1920px) {
    height: 652px;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: var(--primary-content);

  @media (max-width: 767px) {
    grid-template-columns: 100%;
  }

  @media (min-width: 767px) {
    grid-template-columns: 100%;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const LeftContentBox = styled.div`
  /* background-image: url(worldMap.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain; */
  transform: translate(0, -5%);
`;
const RightContentBox = styled.div`
  justify-self: start;
  color: #ffffff;

  transform: translate(0, -20%);
`;

const BottomContainer = styled.div`
  width: 90%;
  margin: auto;
  padding-bottom: 60px;
  border-radius: 6px;
  @media (min-width: 1200px) {
    grid-column: 1/3;
  }
`;

const CarouselConatiner = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 6px 6px 0 0;
  display: flex;

  @media (max-width: 599px) {
    flex-direction: column;

    align-items: center;
    padding: 20px;
  }

  @media (min-width: 600px) and (max-width: 959px) {
    flex-direction: column;

    align-items: center;
    padding: 20px;
  }

  @media (min-width: 960px) and (max-width: 1279px) {
    height: 80vh;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    height: 80vh;
  }

  @media (min-width: 1920px) {
    height: 80vh;
  }
`;
const CarouselLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: inherit;
  width: 50%;
`;
const CarouselRight = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: column;
  height: inherit;
  width: 50%;
  padding: 20px;
`;

const Testimonial = styled.div`
  height: 20vh;
  background-color: #dddddd;
  border-radius: 0 0 6px 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
  box-shadow: 0 0 0 0/0 0 0 0/ 0 0 20px black/0 0 0 0;
  transform: translate(0, -36%);
`;

const TestimonialIcon = styled.div`
  height: 50px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9a9a9a;
`;

const SectionFour = styled.section`
  width: 100%;
`;

const SectionFourGridContainer = styled.div`
  display: grid;
  padding-bottom: 50px;
  @media (max-width: 767px) {
    grid-template-columns: 100%;
  }
  @media (min-width: 767px) {
    grid-template-columns: 100%;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const GridItems = styled.div`
  height: 300px;
  padding: 20px 60px 20px 60px;
`;

const Icon = styled.div`
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-color: #bfc2c4;
`;

const GridHeader = styled(Typography)`
  @media (max-width: 599px) {
    font-size: var(--font-l);
  }

  @media (min-width: 600px) and (max-width: 959px) {
    font-size: var(--font-l);
  }

  @media (min-width: 960px) and (max-width: 1279px) {
    font-size: var(--font-xl);
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    font-size: var(--font-xxl);
  }

  @media (min-width: 1920px) {
    font-size: var(--font-xxl);
  }
`;

const GridContentText = styled(Typography)`
  line-height: 1;

  @media (max-width: 599px) {
    font-size: var(--font-s);
  }

  @media (min-width: 600px) and (max-width: 959px) {
    font-size: var(--font-m-2);
  }

  @media (min-width: 960px) and (max-width: 1279px) {
    font-size: var(--font-l);
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    font-size: var(--font-l);
  }

  @media (min-width: 1920px) {
    font-size: var(--font-l);
  }
`;
const CustomButtonTwo = styled(Button)`
  background-color: var(--primary-color);
  color: #ffffff;

  &:hover {
    background-color: var(--primary-color);
    box-shadow: 0 0 20px gray;
  }
`;

const CarouselCourtesy = styled.div`
  display: flex;
  justify-content: start;
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

const Index = () => {
  const array = [1, 2, 3];
  const array2 = [1, 2, 3, 4, 5, 6];

  return (
    <Body>
      {/* //sectionOne */}

      <SectionOne>
        <SectionOneContainer>
          <LeftGrid>
            <Typography
              sx={{
                fontSize: "var(--font-m-2)",
                fontWeight: "800",
                color: "#ffe6ae",
              }}
            >
              HIRING PLATFORM | HR SOFTWARE
            </Typography>

            <Typography
              sx={{
                fontSize: "var(--font-xxl)",
                fontWeight: "700 ",
                lineHeight: "1",
                color: "#ffffff",
                marginTop: "20px",
              }}
            >
              A better way to recruit and manage successful teams
            </Typography>

            <Typography
              sx={{
                fontSize: "var(--font-l)",
                color: "#ffffff",
                marginTop: "30px",
              }}
            >
              Find, hire, onboard, and manage the right person for every job.
            </Typography>

            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "30px" }}
            >
              <CustomLink href="">
                <PlayCircleFilledWhiteIcon />{" "}
                <Typography
                  sx={{ fontSize: "var(--font-xs)", fontWeight: "800" }}
                >
                  SEE WORKABLE IN ACTION
                </Typography>
              </CustomLink>
              <CustomButton variant="contained" sx={{ marginLeft: "15px" }}>
                Contained
              </CustomButton>
            </Box>
          </LeftGrid>
          <RightGrid>
            <Image
              src="/connection.webp"
              width={600}
              height={500}
              alt="image"
              loading="eager"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </RightGrid>
        </SectionOneContainer>
      </SectionOne>

      {/* second  */}
      <SecondSection>
        <TextWrapper>
          <Heading>
            <Typography
              sx={{
                fontSize: "var(--font-xxl)",
                fontWeight: "700",
                lineHeight: "1.3",
              }}
            >
              Manage your entire process,
              <br />
              from sourcing to employee onboarding <br />
              and management
            </Typography>
          </Heading>
        </TextWrapper>

        <SecondSectionGrid>
          {/* column1 */}
          <CardOne />
          {/* column2 */}
          <CardTwo />

          {/* row2 */}
          {/* column1 */}
          <TextContainer>
            <Typography
              sx={{
                fontSize: "var(--font-l)",
                fontWeight: "800",
                color: "#ff5e16",
                margin: "10px",
              }}
            >
              SOURCE & ATTRACT
            </Typography>
            <Typography
              sx={{
                fontSize: "var(--font-xl)",
                fontWeight: "700",
                color: "#4e4646",
                lineHeight: "1",
                margin: "20px",
              }}
            >
              Find and attract <br />
              candidates
            </Typography>
            <Typography
              sx={{
                fontSize: "var(--font-l)",
                color: "#4e4646",
                lineHeight: "1",
                margin: "20px",
              }}
            >
              Fill your pipeline quickly with one-click job posting to 200+
              sites, AI-powered sourcing, employee referrals and more.
            </Typography>

            <LearnMore href="">LEARN MORE</LearnMore>
          </TextContainer>

          {/* column2 */}
          <TextContainer>
            <Typography
              sx={{
                fontSize: "var(--font-l)",
                fontWeight: "800",
                color: "#4385e0",
                margin: "10px",
              }}
            >
              EVALUATE & COLLABORATE
            </Typography>
            <Typography
              sx={{
                fontSize: "var(--font-xl)",
                fontWeight: "700",
                color: "#4e4646",
                lineHeight: "1",
                margin: "20px",
              }}
            >
              Move the right <br />
              applicants forward
            </Typography>
            <Typography
              sx={{
                fontSize: "var(--font-l)",
                color: "#4e4646",
                lineHeight: "1",
                margin: "20px",
              }}
            >
              {
                "Collaborate with hiring teams to evaluate applicants, gather feedback and decide who's best, all in one recruiting system."
              }
            </Typography>

            <LearnMore href="">LEARN MORE</LearnMore>
          </TextContainer>

          {/* row3 */}
          <CardThree />

          <CardThree />
          {/* row4 */}
          {/* column1 */}
          <TextContainer>
            <Typography
              sx={{
                fontSize: "var(--font-l)",
                fontWeight: "800",
                color: "#00b7cd",
                margin: "10px",
              }}
            >
              ONBOARD & MANAGE
            </Typography>
            <Typography
              sx={{
                fontSize: "var(--font-xl)",
                fontWeight: "700",
                color: "#4e4646",
                lineHeight: "1",
                margin: "20px",
              }}
            >
              Help great hires become great employees
            </Typography>

            <Typography
              sx={{
                fontSize: "var(--font-l)",
                color: "#4e4646",
                lineHeight: "1",
                margin: "20px",
              }}
            >
              Create custom onboarding experiences, have new hires e-sign
              documents, and store all employee info in one place.
            </Typography>

            <LearnMore href="">LEARN MORE</LearnMore>
          </TextContainer>
          {/* column2 */}
          <TextContainer>
            <Typography
              sx={{
                fontSize: "var(--font-l)",
                fontWeight: "800",
                color: "#4d52b1",
                margin: "10px",
              }}
            >
              AUTOMATE & HIRE
            </Typography>

            <Typography
              sx={{
                fontSize: "var(--font-xl)",
                fontWeight: "700",
                color: "#4e4646",
                lineHeight: "1",
                margin: "20px",
              }}
            >
              Make the best hire, <br />
              in half the time
            </Typography>
            <Typography
              sx={{
                fontSize: "var(--font-l)",
                color: "#4e4646",
                lineHeight: "1",
                margin: "20px",
              }}
            >
              Move faster on a recruiting platform that automates process and
              manual tasks, like scheduling interviews and getting approvals.
            </Typography>

            <LearnMore href="">LEARN MORE</LearnMore>
          </TextContainer>
        </SecondSectionGrid>
      </SecondSection>

      {/* SectionThree */}

      <SectionThree>
        <WaveDesign />
        <ContentContainer>
          <LeftContentBox>
            <Image
              src="/worldMap.png"
              alt="img"
              height={400}
              width={590}
              style={{ marginBottom: "80px", maxWidth: "100%", height: "auto" }}
            />
          </LeftContentBox>

          <RightContentBox>
            <Typography sx={{ fontSize: "var(--font-l)", fontWeight: "700" }}>
              Where great companies <br />
              hire great people
            </Typography>

            <Typography sx={{ fontSize: "var(--font-l)" }}>
              Since 2012, the world’s best companies have depended on Workable
              to find and hire the people they depend on.
            </Typography>

            <Box sx={{ marginTop: "20px" }}>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "var(--font-l)",
                  lineHeight: "0.8",
                }}
              >
                27,000
              </Typography>
              <Typography sx={{ fontWeight: "800" }}>COMPANIES</Typography>
            </Box>

            <Box sx={{ marginTop: "20px" }}>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "var(--font-l)",
                  lineHeight: "0.8",
                }}
              >
                1,500,000
              </Typography>
              <Typography sx={{ fontWeight: "800" }}>HIRES</Typography>
            </Box>

            <Box sx={{ marginTop: "20px" }}>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "var(--font-xxl)",
                  lineHeight: "0.8",
                }}
              >
                160,000,000
              </Typography>
              <Typography sx={{ fontWeight: "800" }}>CANDIDATES</Typography>
            </Box>
          </RightContentBox>

          <BottomContainer>
            <Carousel autoPlay={true} infiniteLoop={true} showStatus={false}>
              {array.map((data, index) => (
                <>
                  <CarouselConatiner>
                    <CarouselLeft>
                      <TextWrapper>
                        <GridHeader
                          sx={{
                            fontWeight: "700",
                            lineHeight: "1",
                            color: "#4d52b1",
                          }}
                        >
                          JOEY Restaurants cuts agency spend by 75%
                        </GridHeader>
                      </TextWrapper>
                    </CarouselLeft>

                    <CarouselRight>
                      <GridContentText>
                        {`JOEY Restaurants cuts agency spend by 75% "With the
                        insights we can gather using Workable, we’re able to
                        reduce our dependence on external recruitment agencies
                        to just one or two specialty roles a year."`}
                      </GridContentText>
                      <CarouselCourtesy>
                        <CarouselCourtesyImage>
                          <Image
                            src=""
                            alt=""
                            height=""
                            width=""
                            style={{ maxWidth: "100%", height: "auto" }}
                          />
                        </CarouselCourtesyImage>

                        <CarouselCourtesyText>
                          <p>name and tile </p> <p>position</p>
                        </CarouselCourtesyText>
                      </CarouselCourtesy>
                    </CarouselRight>
                  </CarouselConatiner>
                </>
              ))}
            </Carousel>
            <Testimonial>
              {array2.map((data, idx) => (
                <TestimonialIcon key={idx}>icon</TestimonialIcon>
              ))}
            </Testimonial>
          </BottomContainer>
        </ContentContainer>
      </SectionThree>

      {/* section four */}

      <SectionFour>
        <TextWrapper>
          <Typography sx={{ fontSize: "var(--font-xxl)", fontWeight: "700" }}>
            More reasons companies around <br />
            the world choose Workable
          </Typography>
        </TextWrapper>

        <SectionFourGridContainer>
          {array2.map((data, idx) => (
            <GridItems key={idx}>
              <TextContainer>
                <Icon>icon</Icon>
                <Typography
                  sx={{
                    fontSize: "var(--font-l)",
                    fontWeight: "700",
                    marginBottom: "30px",
                  }}
                >
                  World-class partners
                </Typography>
                <Typography sx={{ fontSize: "var(--font-l)" }}>
                  Connect with LinkedIn, Google and 70+ other apps and tools to
                  get more done.
                </Typography>
              </TextContainer>
            </GridItems>
          ))}
        </SectionFourGridContainer>

        <TextWrapper>
          <Typography
            sx={{
              fontSize: "var(--font-xxl)",
              fontWeight: "700",
              color: "var(--primary-color)",
            }}
          >
            Let’s grow together
          </Typography>
        </TextWrapper>
        <TextWrapper style={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: "var(--font-l)" }}>
            Explore our full platform with a 15-day free trial. <br />
            Post jobs, get candidates and onboard employees all in one place.
          </Typography>
        </TextWrapper>

        <TextWrapper style={{ padding: "40px" }}>
          <CustomButtonTwo>Start a free trial</CustomButtonTwo>
        </TextWrapper>
      </SectionFour>

      <Footer />
    </Body>
  );
};

export default Index;
