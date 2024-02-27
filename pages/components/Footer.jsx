import React from "react";
import styled from "styled-components";

const List = styled.li`
  font-size: 16px;
  width: 500;
  list-style: none;
  margin-top: 20px;
`;

const FooterGrid = styled.div`
  display: grid;
  color: #ffffff;

  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 20px;
  justify-self: center;
  align-self: center;
  justify-items: center;
  align-items: center;
  background-color: var(--primary-content);
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
    <>
      <FooterGrid>
        <div>
          <p style={{ fontWeight: 900, fontSize: "18px", margin: "15px" }}>
            heading
          </p>

          <ul>
            {footerArray.map((data, idx) => (
              <List key={idx}>{data}</List>
            ))}
          </ul>
        </div>

        <div>
          <p style={{ fontWeight: 900, fontSize: "18px", margin: "15px" }}>
            heading
          </p>

          <ul>
            {footerArray.map((data, idx) => (
              <List key={idx}>{data}</List>
            ))}
          </ul>
        </div>

        <div>
          <p style={{ fontWeight: 900, fontSize: "18px", margin: "15px" }}>
            heading
          </p>

          <ul>
            {footerArray.map((data, idx) => (
              <List key={idx}>{data}</List>
            ))}
          </ul>
        </div>
        <div>
          <p style={{ fontWeight: 900, fontSize: "18px", margin: "15px" }}>
            heading
          </p>

          <ul>
            {footerArray.map((data, idx) => (
              <List key={idx}>{data}</List>
            ))}
          </ul>
        </div>
      </FooterGrid>
    </>
  );
};

export default Footer;
