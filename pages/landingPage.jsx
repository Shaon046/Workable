import React from "react";
import styled from "styled-components";
import { Typography, Box, Button } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import Link from "next/link";
import Image from "next/image";
import CardOne from "./LandingPageUtils/CardOne";
import CardTwo from "./LandingPageUtils/CardTwo";
import CardThree from "./LandingPageUtils/CardThree";
import Footer from "./components/Footer";

const Body = styled.div`
  max-width: 100%;
  margin: auto;
`;
const SectionOne = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: var(--primary-color);
`;

const SectionOneContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;

  @media (max-width: 767px) {
    grid-template-columns: 100%;
  }

  @media (min-width: 767px) {
    grid-template-columns: 100%;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 40% 60%;
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
    font-size: 18px;
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

const SecondSection = styled.div`
  width: 100%;

  background-color: #ffffff;
`;
const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-content);

  padding: 20px;
  margin: auto;

  @media (min-width: 1200px) {
    text-align: center;
  }
`;

const SecondSectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  padding: 30px;
  margin-top: 5px;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    grid-template-columns: 100%;
  }

  @media (min-width: 767px) {
    grid-template-columns: 100%;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

const TextContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const LearnMore = styled(Link)`
  font-size: 12px;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const landingPage = () => {
  return (
    <Body>
      {/* //sectionOne */}

      <SectionOne>
        <SectionOneContainer>
          <LeftGrid>
            <Typography
              sx={{ fontSize: "20px", fontWeight: "800", color: "#ffe6ae" }}
            >
              HIRING PLATFORM | HR SOFTWARE
            </Typography>

            <Typography
              sx={{
                fontSize: "46px",
                fontWeight: "700 ",
                lineHeight: "1",
                color: "#ffffff",
                marginTop: "20px",
              }}
            >
              A better way to recruit and manage successful teams
            </Typography>

            <Typography
              sx={{ fontSize: "24px", color: "#ffffff", marginTop: "30px" }}
            >
              Find, hire, onboard, and manage the right person for every job.
            </Typography>

            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "30px" }}
            >
              <CustomLink href="">
                <PlayCircleFilledWhiteIcon />{" "}
                <Typography sx={{ fontSize: "12px", fontWeight: "800" }}>
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
            />
          </RightGrid>
        </SectionOneContainer>
      </SectionOne>

      <SecondSection>
        <TextWrapper>
          <Typography
            sx={{
              marginTop: "130px",
              fontSize: "48px",
              fontWeight: "700",
              lineHeight: "1.3",
            }}
          >
            Manage your entire process,
            <br />
            from sourcing to employee onboarding <br />
            and management
          </Typography>
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
                fontSize: "20px",
                fontWeight: "800",
                color: "#ff5e16",
                margin: "10px",
              }}
            >
              SOURCE & ATTRACT
            </Typography>
            <Typography
              sx={{
                fontSize: "32px",
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
                fontSize: "20px",
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
                fontSize: "20px",
                fontWeight: "800",
                color: "#4385e0",
                margin: "10px",
              }}
            >
              EVALUATE & COLLABORATE
            </Typography>
            <Typography
              sx={{
                fontSize: "32px",
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
                fontSize: "20px",
                color: "#4e4646",
                lineHeight: "1",
                margin: "20px",
              }}
            >
              Collaborate with hiring teams to evaluate applicants, gather
              feedback and decide who's best, all in one recruiting system.
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
                fontSize: "20px",
                fontWeight: "800",
                color: "#00b7cd",
                margin: "10px",
              }}
            >
              ONBOARD & MANAGE
            </Typography>
            <Typography
              sx={{
                fontSize: "32px",
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
                fontSize: "20px",
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
                fontSize: "20px",
                fontWeight: "800",
                color: "#4d52b1",
                margin: "10px",
              }}
            >
              AUTOMATE & HIRE
            </Typography>

            <Typography
              sx={{
                fontSize: "32px",
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
                fontSize: "20px",
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
      <Footer />
    </Body>
  );
};

export default landingPage;
