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

  padding-top: 20px;
  padding-bottom: 50px;

  align-items: center;

  @media (max-width: 767px) {
    grid-template-columns: 100%;
    justify-items: start;
    padding: 30px;
  }

  @media (min-width: 767px) {
    grid-template-columns: 100%;
    justify-items: start;
    padding: 30px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
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
  const footerArray = [
    "Job board distribution (200+)",
    "AI candidate sourcing",
    "Careers page builder",
    "Native language options",
    "Referrals portal with reporting",
    "Custom application forms",
    "LinkedIn Recruiter System Connect",
    "Social media campaigns",
    "Job board distribution (200+)",
    "AI candidate sourcing",
    "Social media campaigns",
  ];

  return (
    <Container>
      <FooterGrid>
        <ListWrapper>
          <p style={{ fontWeight: 900, fontSize: "18px", margin: "15px" }}>
            HEADING
          </p>

          <ul>
            {footerArray.map((data, idx) => (
              <List key={idx}>{data}</List>
            ))}
          </ul>
        </ListWrapper>

        <ListWrapper>
          <p style={{ fontWeight: 900, fontSize: "18px", margin: "15px" }}>
            HEADING
          </p>

          <ul>
            {footerArray.map((data, idx) => (
              <List key={idx}>{data}</List>
            ))}
          </ul>
        </ListWrapper>

        <ListWrapper>
          <p style={{ fontWeight: 900, fontSize: "18px", margin: "15px" }}>
            HEADING
          </p>

          <ul>
            {footerArray.map((data, idx) => (
              <List key={idx}>{data}</List>
            ))}
          </ul>
        </ListWrapper>
        <ListWrapper>
          <p style={{ fontWeight: 900, fontSize: "18px", margin: "15px" }}>
            HEADING
          </p>

          <ul>
            {footerArray.map((data, idx) => (
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







