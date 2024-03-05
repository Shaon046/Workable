import React, { useState } from "react";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";






const GridContainers = styled.div`
  background-color: white;
  margin: 0 10px 0 10px;
  border-radius: 6px;
  margin-top: 10px;

  @media (max-width: 599px) {
    width: auto;
    justify-self: center;
    align-self: center;
    padding: 40px;
  }

  @media (min-width: 600px) and (max-width: 959px) {
    max-width: 600px;
    justify-self: center;
    align-self: center;
    padding: 40px;
  }

  @media (min-width: 960px) and (max-width: 1279px) {
    justify-self: center;
    align-self: center;
    max-width: 600px;
    padding: 40px;
  }
`;

const GridBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
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

const PricingGrid = ({ plan, price, Includes }) => {
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
  
   
       
          <GridContainers>
            <GridBox>
              <Typography
                sx={{
                  fontSize: "var(--font-xxl)",
                  color: "var(--primary-content)",
                  fontWeight: "700",
                  marginTop: "20px",
                  textAlign: "center",
                }}
              >
                {packages[0].plan}
              </Typography>

              <Typography
                sx={{
                  background: lightGray,
                  color: deepGray,
                  height: "1rem",
                  borderRadius: "30px",
                  padding: "3px",
                  fontSize: "7px",
                  fontWeight: "800",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                MONTHLY ONLY
              </Typography>
            </GridBox>

            <Typography
              sx={{
                width: "100%",
                color: "black",
                backgroundColor: lightGray,
                height: "40px",
                padding: "4px",
                fontWeight: "700",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                fontSize: "var(--font-s)",
              }}
            >
              UP TO 50 EMPLOYEES
            </Typography>

            <div style={{ display: "flex", marginTop: "20px" }}>
              <Typography sx={{ fontSize: "var(--font-s)", fontWeight: "400" }}>
                ${" "}
                <span
                  style={{ fontSize: "var(--font-xxl)", fontWeight: "900" }}
                >
                  {packages[0].price}
                </span>{" "}
                USD
              </Typography>
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


  

      
  
  );
};

export default PricingGrid;
