import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Footer from "./components/Footer";
import PricingGrid from "./components/pricingPageUtils/PricingGrid";
import ScreenSizeComponent from "./components/SreenSize";
import { Typography } from "@mui/material";

import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import StarIcon from '@mui/icons-material/Star';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

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

const Texts = styled.p`
  color: var(--primary-color);
  font-size: ${({ fontSize }) => fontSize};
  margin-top: 20px;
  text-align: center;

  @media (max-width: 767px) {
    font-size: ${({ fontSize }) => `calc(${fontSize} - 20%)`};
  }

  @media (min-width: 767px) {
    font-size: ${({ fontSize }) => `calc(${fontSize} - 10%)`};
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

const SectionTwo = styled.div`
  width: 100%;
  position: relative;
`;

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

// const SectionThreeGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   width: 95%;
//   margin: auto;

//   @media (max-width: 599px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (min-width: 600px) and (max-width: 959px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (min-width: 960px) and (max-width: 1279px) {
//     /* CSS rules for medium devices */
//   }
// `;

// const List = styled.li`
//   list-style: none;
//   margin-top: 2px;
// `;



const ListWrapper = styled.div`
margin-bottom: 20px;

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

const HeaderContainer=styled.div`
  display: flex;
  align-items: center;
`

const SectionThreeGrid = styled.div`
  display: grid;
  color: #616161;
  padding: 20px 20px 80px 20px;

  :nth-child(1),
    :nth-child(2) {
      justify-self: start;
    }

    :nth-child(3),
    :nth-child(4) {
      justify-self: end;
    }
  

  @media (max-width: 599px) {
    grid-template-columns: 100%;

 
    :nth-child(1),
    :nth-child(3),
    :nth-child(2),
    :nth-child(4) {
      justify-self:  start;
    }


  }

  @media (min-width: 600px) and (max-width: 959px) {
    padding: 40px;
   
    grid-template-columns: repeat(2, 1fr);
    :nth-child(1),
    :nth-child(3) {
      justify-self:  start;
    }

    :nth-child(2),
    :nth-child(4) {
      justify-self:  end;
    }


  }

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


const SectionFour = styled.div`
  margin-top: 200px;
  /* background: url("wave.svg"); */
  background-color: #d13b00;
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

   
@media (max-width: 599px) { 
  
 
 
}

@media (min-width: 600px) and (max-width: 959px) { 
  
 
 
}

@media (min-width: 960px) and (max-width: 1279px) { 
  

 
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


  const listItems = [
    "Job board distribution (200+)",
    "AI candidate sourcing",
    "Careers page builder",
    "Native language options",
    "Referrals portal with reporting",
    "Custom application forms",
    "LinkedIn Recruiter System Connect",
    "Social media campaigns",
    "Referrals portal with reporting",
    "Custom application forms",
    "LinkedIn Recruiter System Connect",
    "Social media campaigns"
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

      {/* //Grid */}
      <SectionTwo>
        <Container>
          <GridSection>
            {packages.map((data, idx) => (
              <PricingGrid
                key={idx}
                price={data.price}
                plan={data.plan}
                Includes={data.Includes}
              />
            ))}
          </GridSection>
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
              Get a live demo
            </PrimaryButton>
          </div>
        </SectionTwobuttonContainer>
      </SectionTwo>

      <Sectionthree>
        <Typography
          fontSize={"48px"}
          style={{
            fontWeight: "700",
            color: deepGray,
            margin: "30px 0 30px 0",
            textAlign: "center"
          }}
        >
          Features available in all plans
        </Typography>


<SectionThreeGrid>

<ListWrapper>
<HeaderContainer>
{<GpsFixedIcon sx={{marginRight:"10px" ,color:"var(--primary-color)" ,fontSize:"var(--font-l)",textAlign:"center"}}/>}
<Typography sx={{fontSize:"var(--font-l)" , color:"var(--primary-color)" ,fontWeight:"700" ,textAlign:"center" }} >
Source & attract </Typography> 
</HeaderContainer>
  
      
       {
        listItems.map((data,idx)=>(<List key={idx}>{data}</List>))
       } 

</ListWrapper>
       
<ListWrapper>
<HeaderContainer>
{<StarIcon sx={{marginRight:"10px" ,color:"var(--primary-color)" ,fontSize:"var(--font-l)" ,textAlign:"center"}}/>}
<Typography sx={{fontSize:"var(--font-l)" , color:"var(--primary-color)" ,fontWeight:"700" ,textAlign:"center" }} >
Evaluate & collaborate </Typography> 
</HeaderContainer>
{
        listItems.map((data,idx)=>(<List key={idx}>{data}</List>))
       } 
</ListWrapper>


<ListWrapper>
<HeaderContainer>
{<SettingsIcon sx={{marginRight:"10px" ,color:"var(--primary-color)" ,fontSize:"var(--font-l)" ,textAlign:"center"}}/>}
<Typography sx={{fontSize:"var(--font-l)" , color:"var(--primary-color)" ,fontWeight:"700" ,textAlign:"center" }} >
Automate & hire </Typography> 
</HeaderContainer>

{
        listItems.map((data,idx)=>(<List key={idx}>{data}</List>))
       } 
</ListWrapper>


<ListWrapper>
<HeaderContainer>
{<AccountTreeIcon sx={{marginRight:"10px" ,color:"var(--primary-color)" ,fontSize:"var(--font-l)" ,textAlign:"center"}}/>}
<Typography sx={{fontSize:"var(--font-l)" , color:"var(--primary-color)" ,fontWeight:"700" ,textAlign:"center" }} >
Onboard & manage </Typography> 
</HeaderContainer>
{
        listItems.map((data,idx)=>(<List key={idx}>{data}</List>))
       } 
</ListWrapper>
</SectionThreeGrid>


          
      </Sectionthree>

     
      
      <SectionFour>
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
      </SectionFour>

      <Footer />
    </Main>
  );
};

export default pricing;
