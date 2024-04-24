import React from "react";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Typography } from "@mui/material";

const Grid = styled.div`
  display: grid;

  @media (min-width: 960px) and (max-width: 1279px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1920px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const AccordionWrapper = styled.div`
  display: none;
  @media (max-width: 599px) {
    display: block;
  }
  @media (min-width: 600px) and (max-width: 959px) {
    display: block;
  }
`;

const CustomAccordion = styled(Accordion)`
  border: none;
  box-shadow: none;
`;

const ShowListContainer = styled.div`
  padding: 60px;
  padding-right: 0;
  @media (max-width: 599px) {
    display: none;
  }
  @media (min-width: 600px) and (max-width: 959px) {
    display: none;
  }
`;

const ShowList = styled.div`
  @media (max-width: 599px) {
    display: none;
  }

  @media (min-width: 600px) and (max-width: 959px) {
    display: none;
  }
`;

const List = styled.li`
  font-size: 16px;
  width: 500;
  list-style: none;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    color: #ababab;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Features = ({ features }) => {
  return (
    <Grid>
      {features && features.map((data, idx) => (
        <div key={idx}>
          {/* conditional redner */}
          {
            <AccordionWrapper>
              <CustomAccordion>
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <HeaderContainer>
                    {
                      <data.icon
                        sx={{
                          marginRight: "10px",
                          color: "var(--primary-color)",
                          fontSize: "var(--font-l)",
                          textAlign: "center",
                        }}
                      />
                    }
                    <Typography
                      sx={{
                        fontSize: "var(--font-l)",
                        color: "var(--primary-color)",
                        fontWeight: "700",
                        textAlign: "center",
                      }}
                    >
                      {data.header}
                    </Typography>
                  </HeaderContainer>
                </AccordionSummary>
                <AccordionDetails>
                  {data && data.data.map((data, idx) => (
                    <List key={idx}>{data}</List>
                  ))}
                </AccordionDetails>
              </CustomAccordion>
            </AccordionWrapper>
          }

          {/* conditional redner */}
          {
            <ShowListContainer>
              <ShowList>
                <HeaderContainer>
                  {
                    <data.icon
                      sx={{
                        marginRight: "10px",
                        color: "var(--primary-color)",
                        fontSize: "var(--font-l)",
                        textAlign: "center",
                      }}
                    />
                  }
                  <Typography
                    sx={{
                      fontSize: "var(--font-l)",
                      color: "var(--primary-color)",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    {data.header}
                  </Typography>
                </HeaderContainer>
                {data.data.map((data, idx) => (
                  <List key={idx}>{data}</List>
                ))}
              </ShowList>
            </ShowListContainer>
          }
        </div>
      ))}
    </Grid>
  );
};

export default Features;
