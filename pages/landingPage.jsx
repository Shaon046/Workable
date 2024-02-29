import React from "react";
import styled from "styled-components";
import { Typography, Box, Button } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import Link from "next/link";
import Image from "next/image";
import CardOne from "./LandingPageUtils/CardOne";

const Main = styled.div`
  width: 100%;
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
   
    grid-template-columns: 100%
}

@media (min-width: 767px)  {
   
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
flex-direction :column ;
padding: 20px;
  
`;

const RightGrid = styled.div`
height: inherit;
display: flex;
justify-content:center;
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

const SecondSection=styled.div`
    width: 100%;
    min-height: 200vh;
    background-color: #ffffff;
    
`
 const TextWrapper=styled.div`
 
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-content);
  
    padding: 20px;
    margin: auto;

    @media (min-width: 1200px) {
        text-align: center;
}
 `

const SecondSectionGrid=styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
   
justify-content: center;
align-items: center;
`


















const landingPage = () => {
  return (
    <Main>
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
    marginTop:"130px",
    fontSize:'48px',
    fontWeight:"700",
    lineHeight:"1.3"
}}>Manage your entire process,<br />
from sourcing to employee onboarding <br />
and management</Typography>
</TextWrapper>



<SecondSectionGrid>

<CardOne/>

</SecondSectionGrid>

</SecondSection> 

    </Main>
  );
};

export default landingPage;
