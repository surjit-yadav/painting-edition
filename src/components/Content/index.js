import React from "react";
import styled from "styled-components";

import Footer from "../../sections/Footer";
import Loader from "../Loader";
import ScrollTriggerProxy from "../ScrollTriggerProxy";
import { AnimatePresence } from "framer-motion";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem auto;
  background-color: ${(props) => props.theme.body};

  @media (max-width: 600px) {
    min-height: 200vh !important;
  }

  @media (max-width: 48em) {
    width: 90vw;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
`;

const Title = styled.h1`
  width: 70vw;

  font-size: ${(props) => props.theme.fontxxl};
  font-family: "ArialBold";
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  left: 10%;
  z-index: 5;

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontxxxl} - 5vw)`};
    top: 12px;
    left: 0;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

const SubTitle = styled.h6`
  width: 70vw;
  font-size: ${(props) => props.theme.fontmd};
  font-family: "Kaushan Script";
  font-weight: 100;
  color: ${(props) => props.theme.text};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontsm} - 5vw)`};
    top: 0;
    left: 0;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Left = styled.div`
  width: 70vw;
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  font-family: "ArialMedium";
  z-index: 5;
  margin-top: 10%;

  @media (max-width: 64em) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(1px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }

  @media (max-width: 600px) {
    top: 22% !important;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    width: 70%;
  }
`;

const Right = styled.div`
  width: 70vw;
  display: flex;
  gap: 5em;
  justify-content: center;
  margin-top: 10%;
  margin-bottom: 10%;
  img {
    height: 50vh;
    width: 50vw;
    object-fit: cover;
    box-shadow: 0 0 0 0.5vw ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.body};
  }

  @media (max-width: 600px) {
    margin-top: 20%;
    flex-wrap: wrap !important;
    img {
      width: 60% !important;
      height: 40% !important;
    }
  }

  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;

    img {
      height: 20vh;
      width: 20vw;
      object-fit: cover;
      top: 50%;
    }
  }
`;
const Index = ({ title, img, loaded, containerRef, contentData }) => {
  let navigate = useNavigate();

  useEffect(()=>{
    if(title===undefined){
        navigate('/')
    }
  },[])

  return (
    <div>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          // ... all available Locomotive Scroll instance options

          smartphone: {
            smooth: true,
          },

          tablet: {
            smooth: true,
          },
        }}
        watch={
          [
            //..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
          ]
        }
      >
        <AnimatePresence>{loaded ? null : <Loader />}</AnimatePresence>

        <AnimatePresence>
          <main className="App" data-scroll-container ref={containerRef}>
            <Section id="content">
              <Title
                data-scroll
                data-scroll-speed="-2"
                data-scroll-direction="horizontal"
              >
                {title}
              </Title>
              <Left
                data-scroll
                data-scroll-sticky
                //  data-scroll-target="#fixed-target"
              >
                {contentData}
              </Left>
              <Right>
                <img
                  data-scroll
                  data-scroll-speed="-1"
                  src={img}
                  alt="content"
                />
              </Right>
            </Section>

            <Footer />
          </main>
        </AnimatePresence>
      </LocomotiveScrollProvider>
    </div>
  );
};

export default Index;
