import React, { useState } from "react";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  background-color: white;
  box-shadow: 1px 1px 10px gray;
  border-radius: 6px 6px 0 0;
  margin: auto;
  z-index: 1;
  padding-bottom: 50px;

  @media (max-width: 599px) {
    grid-template-columns: 100%;
    box-shadow: none;
    background-color: transparent;
    padding-top: 50px;
  }

  @media (min-width: 600px) and (max-width: 959px) {
    grid-template-columns: 100%;
    padding-top: 50px;
    box-shadow: none;
    background-color: transparent;
  }
`;

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

const PricingGrid = ({ packages }) => {
  const [expanded, setExpanded] = useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <GridSection>
      {packages &&
        packages.map((data, idx) => (
          <GridContainers key={idx}>
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
                {data.plan}
              </Typography>

              <Typography
                sx={{
                  background: "var(--gray-light)",
                  color: "var(--gray-deep)",
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
                color: "var(--primary-content)",
                backgroundColor: "var(--gray-light)",
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

            <div
              style={{
                display: "flex",
                marginTop: "20px",
                color: "var(--primary-content)",
              }}
            >
              <Typography sx={{ fontSize: "var(--font-s)", fontWeight: "400" }}>
                ${" "}
                <span
                  style={{ fontSize: "var(--font-xxl)", fontWeight: "900" }}
                >
                  {data.price}
                </span>{" "}
                USD
              </Typography>
            </div>

            <PlanContainer>
              <PlanDetails
                includes={data.includes}
                primiumTool={data.primiumTool}
              />
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
                  <PlanDetails
                    includes={data.includes}
                    primiumTool={data.primiumTool}
                  />
                </AccordionDetails>
              </Accordion>
            </AccordionContainer>
          </GridContainers>
        ))}
    </GridSection>
  );
};

export default PricingGrid;

const PlanDetails = ({ includes, primiumTool }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--gray-light)",
          height: "250px",
          flexDirection: "column",
          padding: "20px",
          color: "var(--primary-content)",
        }}
      >
        <Typography
          style={{
            textAlign: "start",
            marginBottom: "15px",
            fontWeight: "600px",
          }}
        >
          Includes :
        </Typography>

        <ul>
          {includes.map((data, idx) => (
            <li key={idx} style={{ marginBottom: "5px" }}>
              {data}
            </li>
          ))}
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
        <Typography style={{ fontSize: "10px", fontWeight: "900" }}>
          PREMIUM TOOLS
        </Typography>

        <Typography>Optional hiring tools for this plan.</Typography>

        <div>
          <ul>
            {primiumTool &&
              primiumTool.map((data, idx) => (
                <li
                  key={idx}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "center",
                    marginTop: "5px",
                  }}
                >
                  {" "}
                  <Typography
                    style={{
                      fontSize: "12px",
                      color: "var( --primary-color)",
                      fontWeight: "800",
                    }}
                  >
                    {Object.keys(data)}
                  </Typography>
                  <Typography>
                    +
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: "800",
                        color: "var(--primary-content)",
                      }}
                    >
                      ${data[Object.keys(data)]}
                    </span>
                    /mo
                  </Typography>{" "}
                </li>
              ))}
          </ul>
        </div>
      </GridBox>
    </>
  );
};
