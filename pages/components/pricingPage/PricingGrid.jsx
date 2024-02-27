import React from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material';




const Container=styled.div`
    
width: 95%;
margin: auto;

@media (max-width: 767px) {
    width: 560px;
}

@media (min-width: 767px)  {
    width: 560px;
}


@media (min-width: 1200px) {
    width: 95%;
}



`





const Sectiontwo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 0fr);
width: 100%;
  background-color: white;
  padding: 30px;
  box-shadow: 1px 1px 10px gray;
  border-radius: 6px 6px 0 0;
  margin: auto;
  z-index: 1;

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  
  }
`;

const GridContainers = styled.div`
  background-color: white;
  margin: 0 10px 0 10px;
  padding: 30px 0;
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
    font-size: ${({ fontSize }) => `calc(${fontSize} - 60%)`};
  }

  @media (min-width: 767px) {
    font-size: ${({ fontSize }) => `calc(${fontSize} - 30%)`};
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







const primaryColor = "var( --primary-color)";
const primarycontent = "var(--primary-content)";
const lightGray = "var(--gray-light)";
const deepGray = "var(--gray-deep)";
const centerText = { display: "flex", alignItems: "center" };









const PricingGrid = () => {
  return (<Container>
  <Sectiontwo>
    {/* /////Grid One */}
    <GridContainers>
      <GridBox>
        <Texts
          fontSize={"46px"}
          style={{ color: primarycontent, fontWeight: "700" }}
        >
          Standard{" "}
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
          $ <span style={{ fontSize: "48px", fontWeight: "900" }}>149</span>{" "}
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
                +{" "}
                <span style={{ fontSize: "20px", fontWeight: "800" }}>
                  $49
                </span>
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
                +{" "}
                <span style={{ fontSize: "20px", fontWeight: "800" }}>
                  $49
                </span>
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
                +{" "}
                <span style={{ fontSize: "20px", fontWeight: "800" }}>
                  $49
                </span>
                /mo
              </p>{" "}
            </li>
          </ul>
        </div>
      </GridBox>
    </GridContainers>

    {/* /////Grid Two */}
    <GridContainers>
      <GridBox>
        <Texts
          fontSize={"46px"}
          style={{ color: primarycontent, fontWeight: "700" }}
        >
          Standard{" "}
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
          $ <span style={{ fontSize: "48px", fontWeight: "900" }}>149</span>{" "}
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
          Standard{" "}
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
          $ <span style={{ fontSize: "48px", fontWeight: "900" }}>149</span>{" "}
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
  </Sectiontwo>
  
  
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
    
  )
}

export default PricingGrid