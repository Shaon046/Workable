import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Main=styled.div`
    width: 100%;

`
const SectionOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 325px;
  width: 80%;
  margin: auto;
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



const SectionTwo=styled.div`
width : 100%;

`
const CarouselContainer=styled.div`
       display: flex;
    align-items: center;
    justify-content: center;
`

const CarouselTextDiv=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

width: 695px;
height: 450px;
background-color: #f0f0fb;
`
const CarouselImageDiv=styled.div`
    width: 465px;
height: 260px;
background-color: #ccbbbb;
border-radius: 6px;
transform    : translate(-150px,0);
`

const customers = () => {
const image =[{
    "id": "0",
    "author": "Alejandro Escamilla",
    "width": 5000,
    "height": 3333,
    "url": "https://unsplash.com/photos/yC-Yzbqy7PY",
    "download_url": "https://picsum.photos/id/0/5000/3333"
    },
    {
    "id": "1",
    "author": "Alejandro Escamilla",
    "width": 5000,
    "height": 3333,
    "url": "https://unsplash.com/photos/LNRyGwIJr5c",
    "download_url": "https://picsum.photos/id/1/5000/3333"
    },
    {
    "id": "2",
    "author": "Alejandro Escamilla",
    "width": 5000,
    "height": 3333,
    "url": "https://unsplash.com/photos/N7XodRrbzS0",
    "download_url": "https://picsum.photos/id/2/5000/3333"
    },
    {
    "id": "3",
    "author": "Alejandro Escamilla",
    "width": 5000,
    "height": 3333,
    "url": "https://unsplash.com/photos/Dl6jeyfihLk",
    "download_url": "https://picsum.photos/id/3/5000/3333"
    },
    {
    "id": "4",
    "author": "Alejandro Escamilla",
    "width": 5000,
    "height": 3333,
    "url": "https://unsplash.com/photos/y83Je1OC6Wc",
    "download_url": "https://picsum.photos/id/4/5000/3333"
    },
    {
    "id": "5",
    "author": "Alejandro Escamilla",
    "width": 5000,
    "height": 3334,
    "url": "https://unsplash.com/photos/LF8gK8-HGSg",
    "download_url": "https://picsum.photos/id/5/5000/3334"
    }]
    

  return (
    <Main>
<SectionOne>
        <Texts fontSize={"46px"} style={{ fontWeight: "900" }}>
        In good company
        </Texts>

        <Texts
          fontSize={"20px"}
          style={{ color: "black", lineHeight: "1.5", width: "540px" }}
        >
          Companies of all shapes and sizes are using Workable to advance their hiring — and their organizations.
        </Texts>

      
      </SectionOne>

<SectionTwo>
    <Carousel>

    {image.map((image, key) => (<>
        <CarouselContainer>
          <CarouselTextDiv>
          
          
          </CarouselTextDiv>
          
          <CarouselImageDiv></CarouselImageDiv>
          </CarouselContainer></>
         
        ))}
    </Carousel>





</SectionTwo>


    </Main>
  )
}

export default customers