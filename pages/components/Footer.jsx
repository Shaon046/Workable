import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Container = styled.footer`
  background-color: var(--primary-content);
`;

const ListWrapper = styled.div`
  @media (max-width: 767px) {
    padding-top: 20px;
  }

  @media (min-width: 767px) {
    padding-top: 20px;
  }

  @media (min-width: 1200px) {
    padding-top: 0px;
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

const FooterGrid = styled.div`
  display: grid;
  color: #ffffff;
  padding: 20px 20px 80px 20px;

  @media (max-width: 599px) {
    grid-template-columns: 100%;
  }

  @media (min-width: 600px) and (max-width: 959px) {
    grid-template-columns: 100%;
  }

  @media (min-width: 960px) and (max-width: 1279px) {
    grid-template-columns: repeat(4, 1fr);
    :nth-child(1),
    :nth-child(2) {
      justify-self: start;
    }

    :nth-child(3),
    :nth-child(4) {
      justify-self: end;
    }
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    grid-template-columns: repeat(4, 1fr);
    :nth-child(1),
    :nth-child(2) {
      justify-self: start;
    }

    :nth-child(3),
    :nth-child(4) {
      justify-self: end;
    }
  }

  @media (min-width: 1920px) {
    grid-template-columns: repeat(4, 1fr);
    :nth-child(1),
    :nth-child(2) {
      justify-self: start;
    }

    :nth-child(3),
    :nth-child(4) {
      justify-self: end;
    }
  }
`;

const Social = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid white;
  color: #ffffff;
`;

const LeftDiv = styled.div`
  padding: 10px;
`;
const RightDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 10px;
`;
const IconWrapper = styled.div`
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    color: #ababab;
  }
`;
const Footer = () => {
  const footerone = [
    "User",
    "Source & attract",
    "Evaluate & collaborate",
    "Automate & hire",
    "Onboard & manage",
    "Reduce time to hire",
    "Modernize the candidate experience",
    "Improve DEI",
    "Ensure compliance",
  ];

  const footertwo = [
    "Pricing",
    "Why Workable",
    "Post a job for free",
    "Help center",
    "Partners & integrations",
    "Become a partner",
    "Developer API",
    "Security",
    "Real-time customer satisfaction",
  ];

  const footerthree = [
    "Job descriptions",
    "Applicant tracking",
    "Interview questions",
    "Hiring resources",
    "Hiring templates",
    "Hiring tutorials",
    "Free Tools for Managers",
  ];

  const footerfour = [
    "Work with us",
    "Backstage",
    "Press",
    "Contact us",
    "About",
  ];

  return (
    <Container>
      <FooterGrid>
        <ListWrapper>
          <p style={{ fontWeight: 900, fontSize: "18px", marginTop: "15px" }}>
            PRODUCT
          </p>

          <ul>
            {footerone.map((data, idx) => (
              <List key={idx}>{data}</List>
            ))}
          </ul>
        </ListWrapper>

        <ListWrapper>
          <p style={{ fontWeight: 900, fontSize: "18px", marginTop: "15px" }}>
            PLATFORM
          </p>

          <ul>
            {footertwo.map((data, idx) => (
              <List key={idx}>{data}</List>
            ))}
          </ul>
        </ListWrapper>

        <ListWrapper>
          <p style={{ fontWeight: 900, fontSize: "18px", marginTop: "15px" }}>
            EMPLOYER RESOURCES
          </p>

          <ul>
            {footerthree.map((data, idx) => (
              <List key={idx}>{data}</List>
            ))}
          </ul>
        </ListWrapper>

        <ListWrapper>
          <p style={{ fontWeight: 900, fontSize: "18px", marginTop: "15px" }}>
            WORKABLE
          </p>

          <ul>
            {footerfour.map((data, idx) => (
              <List key={idx}>{data}</List>
            ))}
          </ul>
        </ListWrapper>
      </FooterGrid>

      <Social>
        <LeftDiv>
          <Typography>Americas: +1 857 990 9675</Typography>
          <Typography>Europe & Rest of World: +44 203 826 8149</Typography>
        </LeftDiv>

        <RightDiv>
          <IconWrapper>
            <LinkedInIcon />
          </IconWrapper>

          <IconWrapper>
            <XIcon />
          </IconWrapper>

          <IconWrapper>
            <FacebookIcon />
          </IconWrapper>

          <IconWrapper>
            <InstagramIcon />
          </IconWrapper>
        </RightDiv>
      </Social>
    </Container>
  );
};

export default Footer;
