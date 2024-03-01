import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const Main = styled.div`
  width: 100%;
  border-radius: 50% 51% 0% 74% / 6% 1% 10% 10%;
  background-color: var(--primary-content);
`;

const Container = styled.div`
  width: 95%;
  margin: auto;

  @media (max-width: 767px) {
    width: 460px;
    padding-bottom: 0px;
    transform: translate(0%, 3%);
  }
  @media (min-width: 767px) {
    width: 560px;
    transform: translate(0%, 3%);padding-bottom: 0px;
  }
  @media (min-width: 1200px) {
    width: 95%;
    transform: translate(0%, 0%); padding-bottom: 70px;
    
 
  }
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 0fr);
  width: 100%;
  background-color: white;
  box-shadow: 1px 1px 10px gray;
  border-radius: 6px 6px 0 0;
  margin: auto;
  z-index: 1;

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    box-shadow: none;
  }

  @media (min-width: 767px) {
    grid-template-columns: repeat(1, 1fr);

    box-shadow: none;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GridContainers = styled.div`
  background-color: white;
  margin: 0 10px 0 10px;

  border-radius: 6px;
  margin-top: 10px;

  @media (max-width: 767px) {
    margin-top: 10px;
    padding: 20px;
  }

  @media (min-width: 767px) {
    margin-top: 10px;
    padding: 20px;
  }

  @media (min-width: 1200px) {
    margin-top: 0;
    padding: 0;
  }
`;

const GridBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
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
    font-size: ${({ fontSize }) => fontSize};
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

  border-radius: 0 0 6px 6px;
  padding: 10px;
  margin: auto;
  
`;

const AccordionContainer = styled.div`
  @media (max-width: 767px) {
    visibility: visible;
  }

  @media (min-width: 767px) {
    visibility: visible;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

const PlanContainer = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }

  @media (max-width: 1200px) {
    visibility: visible;
  }
`;


const primaryColor = "var( --primary-color)";
const primarycontent = "var(--primary-content)";
const lightGray = "var(--gray-light)";
const deepGray = "var(--gray-deep)";
const centerText = { display: "flex", alignItems: "center" };

const PlanDetails = () => (
  <>
    {" "}
    <div
      style={{
        backgroundColor: lightGray,
        height: "250px",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <p
        style={{
          textAlign: "start",
          marginBottom: "15px",
          fontWeight: "600px",
        }}
      >
        Includes :
      </p>
      <ul>
        <li style={{ marginBottom: "5px" }}>Features available in all plans</li>
        <li style={{ marginBottom: "5px" }}>Up to 2 active jobs</li>
        <li style={{ marginBottom: "5px" }}>
          200 AI sourcing profile views per month
        </li>
      </ul>
    </div>
    <GridBox
      style={{
        height: "210px",
        border: "1px solid gray ",
        borderRadius: "6px",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <p style={{ fontSize: "10px", fontWeight: "900" }}>PREMIUM TOOLS</p>

      <p>Optional hiring tools for this plan.</p>

      <div>
        <ul>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
              marginTop: "5px",
            }}
          >
            {" "}
            <p
              style={{
                fontSize: "12px",
                color: primaryColor,
                fontWeight: "800",
              }}
            >
              {" "}
              VIDEO INTERVIEWS
            </p>
            <p>
              + <span style={{ fontSize: "20px", fontWeight: "800" }}>$49</span>
              /mo
            </p>{" "}
          </li>

          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
              marginTop: "5px",
            }}
          >
            {" "}
            <p
              style={{
                fontSize: "12px",
                color: primaryColor,
                fontWeight: "800",
              }}
            >
              VIDEO INTERVIEWS
            </p>
            <p>
              + <span style={{ fontSize: "20px", fontWeight: "800" }}>$49</span>
              /mo
            </p>{" "}
          </li>

          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
              marginTop: "5px",
            }}
          >
            {" "}
            <p
              style={{
                fontSize: "12px",
                color: primaryColor,
                fontWeight: "800",
              }}
            >
              VIDEO INTERVIEWS
            </p>
            <p>
              + <span style={{ fontSize: "20px", fontWeight: "800" }}>$49</span>
              /mo
            </p>{" "}
          </li>
        </ul>
      </div>
    </GridBox>
  </>
);

const PricingGrid = () => {
  const packages = [
    {
      plan: "Starter",
      price: 149,
      Includes: [
        "Features available in all plans",
        "  Up to 2 active jobs",
        " 200 AI sourcing profile views per month",
      ],

      primiumTool: [
        { "VIDEO INTERVIEWS": "$49" },
        { TEXTING: 39 },
        { " ASSESSMENTS": 29 },
      ],
    },
    {
      plan: "Standard",
      price: 349,
      Includes: [
        "Features available in all plans",
        "  Up to 2 active jobs",
        " 200 AI sourcing profile views per month",
      ],

      primiumTool: [
        { "VIDEO INTERVIEWS": "$49" },
        { TEXTING: 39 },
        { " ASSESSMENTS": 29 },
      ],
    },
    {
      plan: "primium",
      price: 549,
      Includes: [
        "Features available in all plans",
        "  Up to 2 active jobs",
        " 200 AI sourcing profile views per month",
      ],

      primiumTool: [
        { "VIDEO INTERVIEWS": "$49" },
        { TEXTING: 39 },
        { " ASSESSMENTS": 29 },
      ],
    },
  ];

  const [expanded, setExpanded] = useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Main>
      {/* <Shape /> */}
      <Container>
        <Section>
          {/* Grid One */}
          <GridContainers>
            <GridBox>
              <Texts
                fontSize={"46px"}
                style={{ color: primarycontent, fontWeight: "700" }}
              >
                {packages[0].plan}
              </Texts>

              <Texts
                style={{
                  background: lightGray,
                  color: deepGray,
                  height: "1rem",
                  borderRadius: "30px",
                  padding: "3px",
                  fontSize: "7px",
                  fontWeight: "800",
                  ...centerText,
                }}
              >
                MONTHLY ONLY
              </Texts>
            </GridBox>
            <Texts
              fontSize={"13px"}
              style={{
                width: "100%",
                color: "black",
                backgroundColor: lightGray,
                height: "40px",
                padding: "4px",
                fontWeight: "700",
                borderRadius: "6px",
                ...centerText,
              }}
            >
              UP TO 50 EMPLOYEES
            </Texts>

            <div style={{ display: "flex", marginTop: "20px" }}>
              <Texts style={{ fontSize: "12px", fontWeight: "400" }}>
                ${" "}
                <span style={{ fontSize: "48px", fontWeight: "900" }}>
                  {packages[0].price}
                </span>{" "}
                USD
              </Texts>
            </div>

            <PlanContainer>
              <PlanDetails />
            </PlanContainer>

            <AccordionContainer>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Show more
                </AccordionSummary>
                <AccordionDetails>
                  <PlanDetails />
                </AccordionDetails>
              </Accordion>
            </AccordionContainer>
          </GridContainers>

          {/* /////Grid Two */}
          <GridContainers>
            <GridBox>
              <Texts
                fontSize={"46px"}
                style={{ color: primarycontent, fontWeight: "700" }}
              >
                {packages[1].plan}
              </Texts>

              <Texts
                style={{
                  background: lightGray,
                  color: deepGray,
                  height: "1rem",
                  borderRadius: "30px",
                  padding: "3px",
                  fontSize: "7px",
                  fontWeight: "800",
                  ...centerText,
                }}
              >
                MONTHLY ONLY
              </Texts>
            </GridBox>
            <Texts
              fontSize={"13px"}
              style={{
                width: "100%",
                color: "black",
                backgroundColor: lightGray,
                height: "40px",
                padding: "4px",
                fontWeight: "700",
                borderRadius: "6px",
                ...centerText,
              }}
            >
              UP TO 50 EMPLOYEES
            </Texts>

            <div style={{ display: "flex", marginTop: "20px" }}>
              <Texts style={{ fontSize: "12px", fontWeight: "400" }}>
                ${" "}
                <span style={{ fontSize: "48px", fontWeight: "900" }}>
                  {" "}
                  {packages[1].price}
                </span>{" "}
                USD
              </Texts>
            </div>

            <div
              style={{
                backgroundColor: lightGray,
                height: "250px",
                flexDirection: "column",
                padding: "20px",
              }}
            >
              <p
                style={{
                  textAlign: "start",
                  marginBottom: "15px",
                  fontWeight: "600px",
                }}
              >
                Includes :
              </p>
              <ul>
                <li style={{ marginBottom: "5px" }}>
                  Features available in all plans
                </li>
                <li style={{ marginBottom: "5px" }}>Up to 2 active jobs</li>
                <li style={{ marginBottom: "5px" }}>
                  200 AI sourcing profile views per month
                </li>
              </ul>
            </div>

            <GridBox
              style={{
                height: "210px",
                border: "1px solid gray ",
                borderRadius: "6px",
              }}
            ></GridBox>
          </GridContainers>

          {/* /////Grid Three */}
          <GridContainers>
            <GridBox>
              <Texts
                fontSize={"46px"}
                style={{ color: primarycontent, fontWeight: "700" }}
              >
                {packages[2].plan}
              </Texts>

              <Texts
                style={{
                  background: lightGray,
                  color: deepGray,
                  height: "1rem",
                  borderRadius: "30px",
                  padding: "3px",
                  fontSize: "7px",
                  fontWeight: "800",
                  ...centerText,
                }}
              >
                MONTHLY ONLY
              </Texts>
            </GridBox>
            <Texts
              fontSize={"13px"}
              style={{
                width: "100%",
                color: "black",
                backgroundColor: lightGray,
                height: "40px",
                padding: "4px",
                fontWeight: "700",
                borderRadius: "6px",
                ...centerText,
              }}
            >
              UP TO 50 EMPLOYEES
            </Texts>

            <div style={{ display: "flex", marginTop: "20px" }}>
              <Texts style={{ fontSize: "12px", fontWeight: "400" }}>
                ${" "}
                <span style={{ fontSize: "48px", fontWeight: "900" }}>
                  {" "}
                  {packages[2].price}
                </span>{" "}
                USD
              </Texts>
            </div>

            <div
              style={{
                backgroundColor: lightGray,
                height: "250px",
                flexDirection: "column",
                padding: "20px",
              }}
            >
              <p
                style={{
                  textAlign: "start",
                  marginBottom: "15px",
                  fontWeight: "600px",
                }}
              >
                Includes :
              </p>
              <ul>
                <li style={{ marginBottom: "5px" }}>
                  Features available in all plans
                </li>
                <li style={{ marginBottom: "5px" }}>Up to 2 active jobs</li>
                <li style={{ marginBottom: "5px" }}>
                  200 AI sourcing profile views per month
                </li>
              </ul>
            </div>

            <GridBox
              style={{
                height: "210px",
                border: "1px solid gray ",
                borderRadius: "6px",
              }}
            ></GridBox>
          </GridContainers>
        </Section>

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
            <Texts>
              The 15-day trial includes the complete feature set of the Standard
              plan. No credit card required.
            </Texts>
            <PrimaryButton style={{ width: "30%" }}>
              Get a live demo
            </PrimaryButton>
          </div>
        </SectionTwobuttonContainer>
      </Container>
    </Main>
  );
};

export default PricingGrid;
