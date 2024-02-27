import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Footer from "./components/Footer";
import PricingGrid from "./components/pricingPage/PricingGrid";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Main = styled.div`
  width: 100%;
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
    font-size: ${({ fontSize }) => `calc(${fontSize} - 60%)`};
  }

  @media (min-width: 767px) {
    font-size: ${({ fontSize }) => `calc(${fontSize} - 30%)`};
  }

  @media (min-width: 1200px) {
    font-size: ${({ fontSize }) => fontSize};
  }
`;

const PrimaryButton = styled(Button)`
  background-color: var(--primary-color);
  margin-top: 20px;
  height: 50px;
  padding: 9px;
  color: white;
  margin-top: 10px;
  &:hover {
    background-color: var(--primary-color);
    box-shadow: 1px 1px 20px gray;
  }
`;

const SectionTwobuttonContainer = styled.div`
  background-color: #ffffff;
  width: 95%;
  border-radius: 0 0 6px 6px;
  padding: 10px;
  margin: auto;
`;

const Sectionthree = styled.div`
  margin-top: 300px;
  height: 325px;
`;

const SectionThreeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 95%;
  margin: auto;
  padding-left: 20px;
`;

const List = styled.li`
  list-style: none;
  margin-top: 2px;
`;

const Shape = styled.div`
  position: absolute;
  z-index: -1;
  height: 1200px;
  width: 100%;

  border-radius: 100% 0% 0% 82% / 59% 10% 10% 5%;
  background-color: var(--primary-content);

  @media (max-width: 767px) {
    height: 2700px;
    border-radius: 84% 0% 49% 81% / 12% 58% 1% 34%;
  }

  @media (min-width: 767px) {
    height: 2700px;
    border-radius: 84% 0% 49% 81% / 12% 58% 1% 34%;
  }

  @media (min-width: 1200px) {
    height: 1200px;
  }
`;

const Review = styled.div`
  margin-top: 200px;
  background: url("wave.svg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 700px;
`;

const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  transform: translate(0, 10%);

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Reviewcard = styled.div`
  height: 175px;
  width: 375px;
  margin-top: 20px;
  background-color: #ffffff;
`;

////Style variables
const primaryColor = "var( --primary-color)";
const primarycontent = "var(--primary-content)";
const lightGray = "var(--gray-light)";
const deepGray = "var(--gray-deep)";
const centerText = { display: "flex", alignItems: "center" };

const pricing = () => {
  return (
    <Main>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <SectionOne>
        <Texts fontSize={"46px"} style={{ fontWeight: "900" }}>
          Feature-rich plans with upfront pricing
        </Texts>

        <Texts
          fontSize={"20px"}
          style={{ color: "black", lineHeight: "1.5", width: "400" }}
        >
          Over 27,000 companies have hired 1.5 million candidates with Workable.
          Manage your entire process, from sourcing to employee onboarding and
          management with the world’s most complete recruiting software.
        </Texts>

        <PrimaryButton variant="contained" styled={{ marginTop: "20px" }}>
          Contained <NavigateNextIcon />{" "}
        </PrimaryButton>
      </SectionOne>

      {/* 
//////design */}

      <Shape />

    <PricingGrid/>

      

      <Sectionthree>
        <Texts
          fontSize={"48px"}
          style={{
            fontWeight: "700",
            color: deepGray,
            margin: "130px 0 130px 0",
          }}
        >
          Features available in all plans
        </Texts>

        <SectionThreeGrid style={{ width: "95%" }}>
          {/* ////grid one */}
          <div>
            <p style={{ fontWeight: 700, fontSize: "18px", margin: "15px" }}>
              SectionThreeGrid
            </p>

            <ul>
              <List>Job board distribution (200+)</List>
              <List>AI candidate sourcing</List>
              <List>Careers page builder</List>
              <List>Native language options</List>
              <List>Referrals portal with reporting</List>
              <List>Custom application forms</List>
              <List>LinkedIn Recruiter System Connect</List>
              <List>Social media campaigns</List>
              <List>Job board distribution (200+)</List>
              <List>AI candidate sourcing</List>

              <List>Social media campaigns</List>
            </ul>
          </div>

          {/* ////grid two */}
          <div>
            <p style={{ fontWeight: 700, fontSize: "18px", margin: "15px" }}>
              SectionThreeGrid
            </p>

            <ul>
              <List>Job board distribution (200+)</List>
              <List>AI candidate sourcing</List>
              <List>Careers page builder</List>
              <List>Native language options</List>
              <List>Referrals portal with reporting</List>
              <List>Custom application forms</List>
              <List>LinkedIn Recruiter System Connect</List>
              <List>Social media campaigns</List>

              <List>Referrals portal with reporting</List>
              <List>Custom application forms</List>
              <List>LinkedIn Recruiter System Connect</List>
              <List>Social media campaigns</List>
            </ul>
          </div>

          {/* ////grid three */}
          <div>
            <p style={{ fontWeight: 700, fontSize: "18px", margin: "15px" }}>
              SectionThreeGrid
            </p>

            <ul>
              <List>Job board distribution (200+)</List>
              <List>AI candidate sourcing</List>
              <List>Careers page builder</List>
              <List>Native language options</List>
              <List>Referrals portal with reporting</List>
              <List>Custom application forms</List>
              <List>LinkedIn Recruiter System Connect</List>
              <List>Social media campaigns</List>
            </ul>
          </div>

          {/* ////grid four */}
          <div>
            <p style={{ fontWeight: 700, fontSize: "18px", margin: "15px" }}>
              SectionThreeGrid
            </p>

            <ul>
              <List>Job board distribution (200+)</List>
              <List>AI candidate sourcing</List>
              <List>Careers page builder</List>
              <List>Native language options</List>
              <List>Referrals portal with reporting</List>
              <List>Custom application forms</List>
              <List>LinkedIn Recruiter System Connect</List>
              <List>Social media campaigns</List>
              <List>LinkedIn Recruiter System Connect</List>
              <List>Social media campaigns</List>
            </ul>
          </div>
        </SectionThreeGrid>
      </Sectionthree>

      {/* /////Review */}

      <Review>
        <ReviewGrid>
          <p
            style={{
              gridColumn: "1/3",
              gridRow: "2/3",
              fontSize: "48px",
              fontWeight: "900",
              padding: "40px",
              color: "white",
            }}
          >
            of GetApp reviewers recommend Workable to a friend or colleague
          </p>
          <Reviewcard
            style={{
              gridColumn: "3/4",
              gridRow: "1/2",
              boxShadow: " 0 10px 10px gray",
            }}
          />
          <Reviewcard style={{ gridColumn: "3/4", gridRow: "2/3" }} />
          <Reviewcard style={{ gridColumn: "3/4", gridRow: "3/4" }} />
          <Reviewcard
            style={{
              gridColumn: "2/3",
              gridRow: "3/4",
              transform: "translate(10%,-10%)",
            }}
          />
        </ReviewGrid>
      </Review>
      <Footer />
    </Main>
  );
};

export default pricing;
