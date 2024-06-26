import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Footer from "./components/Footer";
import PricingGrid from "./components/pricingPageUtils/PricingGrid";
import { Typography } from "@mui/material";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import StarIcon from "@mui/icons-material/Star";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import Features from "./components/pricingPageUtils/Features";

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
  width: 100%;
  margin: auto;

  @media (max-width: 599px) {
    height: auto;
    padding: 30px;
  }

  @media (min-width: 600px) and (max-width: 959px) {
    height: auto;
    padding: 30px;
  }

  @media (min-width: 960px) and (max-width: 1279px) {
    height: auto;
    padding: 30px;
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

const SectionTwo = styled.div`
  width: 100%;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  margin: auto;
  padding: 40px 20px 70px 20px;

  border-radius: 50% 20% 17% 100% / 21% 0% 0% 18%;
  background-color: var(--primary-content);

  @media (max-width: 599px) {
    border-radius: 26% 73% 77% 23% / 3% 5% 3% 4%;
    padding: 0 10px 0 10px;
  }

  @media (min-width: 600px) and (max-width: 959px) {
    border-radius: 26% 73% 77% 23% / 3% 5% 3% 4%;
    padding: 0 10px 0 10px;
  }

  @media (min-width: 960px) and (max-width: 1279px) {
    /* CSS rules for medium devices */
  }
`;

const SectionTwobuttonContainer = styled.div`
  background-color: #ffffff;

  border-radius: 0 0 6px 6px;
  padding: 10px;
  margin: auto;

  @media (max-width: 599px) {
    margin-bottom: 20px;
  }

  @media (min-width: 600px) and (max-width: 959px) {
  }

  @media (min-width: 960px) and (max-width: 1279px) {
  }
`;

//section three

const Sectionthree = styled.div`
  width: 100%;
`;

//sectionFour

const SectionFour = styled.div`
  width: 100%;
`;

const SvgContainer = styled.div`
  transform: translate(0, 4%);

  @media (max-width: 599px) {
    transform: translate(0, 7%);
  }

  @media (min-width: 600px) and (max-width: 959px) {
    transform: translate(0, 6%);
  }
`;

const SectionFourGird = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  background-color: var(--primary-content);
  padding-top: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid gray;

  @media (max-width: 599px) {
    grid-template-columns: 100%;
  }

  @media (min-width: 600px) and (max-width: 959px) {
    grid-template-columns: 100%;
    gap: 20px 20px;
  }

  @media (min-width: 960px) and (max-width: 1279px) {
    grid-template-columns: 100%;
    gap: 20px 20px;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    height: 650px;
  }

  @media (min-width: 1920px) {
    height: 650px;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: end;

  @media (max-width: 599px) {
    align-items: center;
  }

  @media (min-width: 600px) and (max-width: 959px) {
    align-items: center;
  }
  @media (min-width: 960px) and (max-width: 1279px) {
    align-items: center;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    /* CSS rules for large devices */
  }

  @media (min-width: 1920px) {
    /* CSS rules for extra-large devices */
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1280px) and (max-width: 1919px) {
    transform: translate(0, -25%);

    > div:nth-child(1) {
      box-shadow: 0 0 10px #363555;
    }
  }

  @media (min-width: 1920px) {
    transform: translate(0, -25%);
    > div:nth-child(1) {
      box-shadow: 0 0 10px #363555;
    }
  }
`;

const HeadingTextBox = styled.div`
  display: flex;

  @media (max-width: 599px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 600px) and (max-width: 959px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 960px) and (max-width: 1279px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

const ReviewLeft = styled.div`
  height: 220px;
  width: 375px;
  margin-top: 20px;

  grid-column: 1/2;
`;

const ReviewRight = styled.div`
  height: 220px;
  width: 375px;
  margin-top: 20px;
  background-color: #ffffff;
  grid-column: 2/3;
  @media (max-width: 599px) {
    justify-self: center;
  }

  @media (min-width: 600px) and (max-width: 959px) {
    justify-self: center;
  }

  @media (min-width: 960px) and (max-width: 1279px) {
    justify-self: center;
  }
`;

const InsideBoxTop = styled.div`
  height: 80%;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: var(--primary-content);
`;
const InsideBoxBottom = styled.div`
  height: 20%;
  border-top: 1px solid gray;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: aliceblue;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 130px;
  height: 130px;
  background-color: #4d52b1;
  border-radius: 50%;
  border: 4px solid wheat;
`;

const pricing = () => {
  const packages = [
    {
      plan: "Starter",
      price: 129,
      includes: [
        "Features available in all plans",
        "  Up to 2 active jobs",
        " 200 AI sourcing profile views per month",
      ],

      primiumTool: [
        { "VIDEO INTERVIEWS": 49 },
        { TEXTING: 39 },
        { " ASSESSMENTS": 29 },
      ],
    },

    {
      plan: "Standard",
      price: 349,
      includes: [
        "Features available in all plans",
        "  Up to 2 active jobs",
        " 200 AI sourcing profile views per month",
      ],

      primiumTool: [
        { "VIDEO INTERVIEWS": 49 },
        { TEXTING: 39 },
        { " ASSESSMENTS": 29 },
      ],
    },

    {
      plan: "primium",
      price: 549,
      includes: [
        "Features available in all plans",
        "  Up to 2 active jobs",
        " 200 AI sourcing profile views per month",
      ],

      primiumTool: [
        { "VIDEO INTERVIEWS": 49 },
        { TEXTING: 39 },
        { " ASSESSMENTS": 29 },
      ],
    },
  ];

  const features = [
    {
      data: [
        "Anonymized screening",
        "Interview kits & scorecards",
        "2 way calendar integration (Gmail/365)",
        "Candidate self-scheduling",
        "Multi-part interview scheduling",
        "Zoom integration",
        "3rd party background checks",
        "Share candidate",
        "Advanced access rights",
        "Custom candidate profiles",
        "Top-rated mobile app",
      ],
      header: "First Object Header",
      icon: GpsFixedIcon,
    },
    {
      data: [
        "Anonymized screening",
        "Interview kits & scorecards",
        "2 way calendar integration (Gmail/365)",
        "Candidate self-scheduling",
        "Multi-part interview scheduling",
        "Zoom integration",
        "3rd party background checks",
        "Share candidate",
        "Advanced access rights",
        "Custom candidate profiles",
        "Top-rated mobile app",
      ],
      header: "Second Object Header",
      icon: StarIcon,
    },
    {
      data: [
        "Anonymized screening",
        "Interview kits & scorecards",
        "2 way calendar integration (Gmail/365)",
        "Candidate self-scheduling",
        "Multi-part interview scheduling",
        "Zoom integration",
        "3rd party background checks",
        "Share candidate",
        "Advanced access rights",
        "Custom candidate profiles",
        "Top-rated mobile app",
      ],
      header: "Third Object Header",
      icon: SettingsIcon,
    },
    {
      data: [
        "Anonymized screening",
        "Interview kits & scorecards",
        "2 way calendar integration (Gmail/365)",
        "Candidate self-scheduling",
        "Multi-part interview scheduling",
        "Zoom integration",
        "3rd party background checks",
        "Share candidate",
        "Advanced access rights",
        "Custom candidate profiles",
        "Top-rated mobile app",
      ],
      header: "Fourth Object Header",
      icon: AccountTreeIcon,
    },
  ];

  return (
    <Main>
      <SectionOne>
        <Typography
          sx={{
            fontSize: "var(--font-xxl)",
            fontWeight: "700",
            textAlign: "center",
            color: " var(--primary-color)",
          }}
        >
          Feature-rich plans with upfront pricing
        </Typography>

        <Typography
          sx={{
            fontSize: "var(--font-l)",
            color: "gray",
            lineHeight: "1.5",
            Width: "850px",
          }}
        >
          Over 27,000 companies have hired 1.5 million candidates with Workable.
          Manage your entire process, from sourcing to employee onboarding and
          management with the world’s most complete recruiting software.
        </Typography>

        <PrimaryButton variant="contained" style={{ marginTop: "40px" }}>
          Contained <NavigateNextIcon />{" "}
        </PrimaryButton>
      </SectionOne>

      <SectionTwo>
        <Container>
          <PricingGrid packages={packages} />
        </Container>

        <SectionTwobuttonContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",

              marginBottom: "50px",
            }}
          >
            <Typography sx={{ margin: "20px", textAlign: "center" }}>
              The 15-day trial includes the complete feature set of the Standard
              plan. No credit card required.
            </Typography>
            <PrimaryButton style={{ width: "30%" }}>
              <Typography
                sx={{
                  fontSize: "var(--font-m)",
                }}
              >
                Get a live demo
              </Typography>
            </PrimaryButton>
          </div>
        </SectionTwobuttonContainer>
      </SectionTwo>

      <Sectionthree>
        <Typography
          fontSize={"48px"}
          style={{
            fontWeight: "700",
            color: "var(--gray-deep)",
            margin: "30px 0 30px 0",
            textAlign: "center",
          }}
        >
          Features available in all plans
        </Typography>

        <Features features={features} />
      </Sectionthree>

      <SectionFour>
        <SvgContainer>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240">
            <path
              fill="#363555"
              fill-opacity="1"
              d="M0,64L60,53.3C120,43,240,21,360,58.7C480,96,600,192,720,218.7C840,245,960,203,1080,176C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </SvgContainer>

        <SectionFourGird>
          <Left>
            <HeadingTextBox>
              <Circle>
                <Typography
                  sx={{
                    fontSize: "var(--font-xxl)",
                    fontWeight: "700",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  96%
                </Typography>
              </Circle>

              <Typography
                sx={{
                  fontSize: "var(--font-xxl)",
                  fontweight: "800",
                  color: "white",
                  lineHeight: "1",
                  maxWidth: "490px",
                  marginBottom: "20px",
                }}
              >
                of GetApp reviewers recommend Workable to a friend or colleague
              </Typography>
            </HeadingTextBox>

            <ReviewLeft>
              <InsideBoxTop>
                <Typography
                  sx={{
                    fontSize: "var(--font-l-2)",
                    textAlign: "center",
                    lineHeight: "1.3",
                    fontWeight: "600",
                  }}
                >
                  “The easiest applicant tracking software to figure out.”
                </Typography>
              </InsideBoxTop>
              <InsideBoxBottom>
                <div>logo</div>
                <div>rating</div>
              </InsideBoxBottom>
            </ReviewLeft>
          </Left>

          <Right>
            <ReviewRight>
              <InsideBoxTop>
                <Typography
                  sx={{
                    fontSize: "var(--font-l-2)",
                    textAlign: "center",
                    lineHeight: "1.3",
                    fontWeight: "600",
                  }}
                >
                  “The easiest applicant tracking software to figure out.”
                </Typography>
              </InsideBoxTop>
              <InsideBoxBottom>
                <div>logo</div>
                <div>rating</div>
              </InsideBoxBottom>
            </ReviewRight>

            <ReviewRight>
              <InsideBoxTop>
                <Typography
                  sx={{
                    fontSize: "var(--font-l-2)",
                    textAlign: "center",
                    lineHeight: "1.3",
                    fontWeight: "600",
                  }}
                >
                  “The easiest applicant tracking software to figure out.”
                </Typography>
              </InsideBoxTop>
              <InsideBoxBottom>
                <div>logo</div>
                <div>rating</div>
              </InsideBoxBottom>
            </ReviewRight>

            <ReviewRight>
              <InsideBoxTop>
                <Typography
                  sx={{
                    fontSize: "var(--font-l-2)",
                    textAlign: "center",
                    lineHeight: "1.3",
                    fontWeight: "600",
                  }}
                >
                  “The easiest applicant tracking software to figure out.”
                </Typography>
              </InsideBoxTop>
              <InsideBoxBottom>
                <div>logo</div>
                <div>rating</div>
              </InsideBoxBottom>
            </ReviewRight>
          </Right>
        </SectionFourGird>
      </SectionFour>
      <Footer />
    </Main>
  );
};

export default pricing;
