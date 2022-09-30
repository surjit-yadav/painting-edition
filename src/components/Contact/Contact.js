import React from "react";
import styled from "styled-components";

import Footer from "../../sections/Footer";
import Loader from "../Loader";
import ScrollTriggerProxy from "../ScrollTriggerProxy";
import { AnimatePresence } from "framer-motion";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import about from "../../assets/art/about.jpg";
import Apoorva from "../../assets/teams/Apoorva Subbanna.jpg";
import Seema from "../../assets/teams/Seema Subbanna.jpg";
import Dhruv from "../../assets/teams/Dhruv Saklani.jpg";
const Section = styled.section`
  position: relative;
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -5rem auto;

  background-color: ${(props) => props.theme.body};

  @media (max-width: 600px) {
    min-height: 200vh !important;
    width: 100vw;
  }

  @media (max-width: 48em) {
    width: 90vw;
    background-color: transparent;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
`;

const SectionRight = styled.section`
  position: relative;
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -5rem auto;
  background-color: ${(props) => props.theme.body};

  @media (max-width: 600px) {
    min-height: 200vh !important;
    width: 100vw;
    margin-bottom:5rem;
  }

  @media (max-width: 48em) {
    width: 90vw;
    background-color: transparent;
    margin-top: -50rem;
    margin-bottom:20rem;
  }

  @media (max-width: 30em) {
    width: 100vw;
    // margin-top: -60rem;
  }
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: "ArialBold";
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 0;
  left: 13%;
  z-index: 5;

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontxxxl} - 5vw)`};
    position: relative;
    margin-left: -40rem;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxl};
    position: relative;
    margin-left: -10rem;
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
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  font-family: "ArialMedium";
  z-index: 5;
  margin-left: -5rem;
  margin-top: 10%;

  @media (max-width: 64em) {
    width: 80%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
    width: 80%;
    position: relative;
    margin-top: 0rem;
    margin-bottom: 5rem;
    padding: 2rem;
    font-weight: 600;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    width: 70%;
    margin-top: 4rem;
  }
`;

const Right = styled.div`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  font-family: "ArialMedium";
  z-index: 5;
  width: 70vw;
  margin-top: 10%;
  display:flex;
  gap:2rem;

  img {
    height: 40vh;
    width: 20vw;
    object-fit: cover;
    box-shadow: 0 0 0 0.5vw ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.body};
  }
  @media (max-width: 64em) {
    width: 80%;
    display: block;
    position: relative;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
    img {
      height: 50vh;
      width: 70vw;
    }
  }

  @media (max-width: 48em) {
    width: 80%;
    display: block;
    position: relative;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
  }
`;

const SectionBanner = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const SectionWrapper = styled.div`
  display: flex;
  width: 100vw;
  @media (max-width: 64em) {
    display: block;
  }
  @media (max-width: 48em) {
    display: block;
    margin-top: -50rem;
  }
  @media (max-width: 48em) {
    margin-top: -30rem;
  }
`;

const Contact = ({ loaded, containerRef }) => {
  let navigate = useNavigate();

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
            <SectionBanner id="home">
              <div
                style={{
                  position: "absolute",
                  zIndex: "10",
                  left: "40%",
                  top: "30%",
                }}
              ></div>
              <div id="about">
                <ul id="slideWrap">
                  <li>
                    <img src={about} height="20vh" alt="" />
                  </li>
                </ul>
              </div>
            </SectionBanner>
            <SectionWrapper>
              <Section id="content">
                <Title
                  data-scroll
                  data-scroll-speed="-2"
                  data-scroll-direction="horizontal"
                >
                  Contact -
                  <div style={{ border: "1px solid white", width: "4vw" }} />
                </Title>
                <Left
                  data-scroll
                  data-scroll-sticky
                  //  data-scroll-target="#fixed-target"
                >
                  {/* <ul className="aboutList">
        <li>
            Lorem ipsum
        </li>
        <li>
            Lorem ipsum
        </li>
        <li>
            Lorem ipsum
        </li>
        <li>
            Lorem ipsum
        </li>
       </ul> */}
                </Left>
              </Section>
              <SectionRight id="right">
                {/* <Title
                  data-scroll
                  data-scroll-speed="-2"
                  data-scroll-direction="horizontal"
                >
                  Overview -
                  <div style={{ border: "1px solid white", width: "4vw" }} />
                </Title> */}
                <Right
                  data-scroll
                  data-scroll-sticky
                  //  data-scroll-target="#fixed-target"
                >
                  
                    <div>
                      <img src={Apoorva} alt="Apoorva Subbanna" />
                      <br />
                      <br />
                      <p style={{ fontWeight: "600" }}>Apoorva Subbanna </p>
                      <br />
                      <p style={{ fontStyle: "italic", fontSize: "16px" }}>
                        {" "}
                        Founder and Creative Head Even though
                      </p>
                      <br />
 
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div>
                      <img src={Seema} alt="Apoorva Subbanna" />
                      <br />
                      <br />
                      <p style={{ fontWeight: "600" }}> Seema Subbanna </p>
                      <br />
                      <p style={{ fontStyle: "italic", fontSize: "16px" }}>
                        {" "}
                        Curator and Advisor
                      </p>
                      <br />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div>
                      <img src={Dhruv} alt="Apoorva Subbanna" />
                      <br />
                      <br />
                      <p style={{ fontWeight: "600" }}> Dhruv Saklani </p>
                      <br />
                      <p style={{ fontStyle: "italic", fontSize: "16px" }}>
                        {" "}
                        Business Development Head
                      </p>
                      <br />
                    </div>
                  
                </Right>
              </SectionRight>
            </SectionWrapper>

            <Footer />
          </main>
        </AnimatePresence>
      </LocomotiveScrollProvider>
    </div>
  );
};

export default Contact;
