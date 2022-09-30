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
  }

  @media (max-width: 48em) {
    width: 90vw;
    background-color: transparent;
    margin-top: -40rem;
    margin-bottom: 20rem;
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
    margin-left: -20rem;
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
  width: 43vw;
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
    width: 80%;
    display: flex;
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

const AboutUS = ({ loaded, containerRef }) => {
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
                  About us -
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
                <Title
                  data-scroll
                  data-scroll-speed="-2"
                  data-scroll-direction="horizontal"
                >
                  Overview -
                  <div style={{ border: "1px solid white", width: "4vw" }} />
                </Title>
                <Right
                  data-scroll
                  data-scroll-sticky
                  //  data-scroll-target="#fixed-target"
                >
                  <div>
                    Like Elizabeth Broun very rightly says, “Art is not always
                    about pretty things. It is about who we are, what happened
                    to us and how our lives are affected.” History has played
                    testimony to the fact that Art has always held the power to
                    transform society just as Art is always influenced by the
                    surroundings, events and mindset of the people at any given
                    point of time. Even though its relevance can be undermined,
                    the impact it has is incomparable, as it defies the
                    divisiveness of society, caste, religion, gender and
                    financial status. Visual language enjoys the freedom of
                    expression and the process of creation, as much as it allows
                    differentiation in perspective. In a world where people
                    struggle to find common ground, we want to use Art as a
                    means of bringing people together.
                    <br />
                    <br />
                    <div style={{ fontWeight: 700 }}> Background- </div>
                    <br />
                    When I think back at my most initial memories, I recall
                    observing people who were passionate in expressing their
                    ideas because as a child it caught my attention. Even though
                    I didn’t always understand the conversation, I think
                    subconsciously it impacted my thought process and I started
                    believing that when one finds something one is truly
                    passionate about, it has the potential to touch lives and
                    transform the world. For me visual language became that
                    tool. While on one side I was exploring the process of
                    expression through visuals, on the other I was absorbing and
                    observing what existed around me. Growing up in an
                    environment where I was constantly surrounded by artists,
                    connoisseurs and art enthusiasts, I got an insight into a
                    world that otherwise only a few understood. The legacy that
                    I inherited from my father who is a senior artist and was
                    the ex vice chairman of Lalit Kala Academy; and mother who
                    has been a curator, art adviser and ran a successful Art
                    Gallery in Delhi, has been the biggest gift for me.
                    <br />
                    <br />
                    Because of the insight into the industry from all quarters,
                    I was able to identify the challenges people were facing in
                    and outside the art fraternity. Most people in the country
                    didn’t understand Art and its role in our lives or they felt
                    that one needed a certain eclectic intellect with a
                    combination of deep pockets to be able to afford it. On the
                    other hand even the ones that had substantial interest,
                    found it hard to trust the authenticity of the art works or
                    advice of the ones initiating the sale. Hence, they became
                    observers and appreciators rather than buyers and investors.
                    This impacted the artists too. Hence, the realisation of the
                    need for a venture like Art for Unity.
                    
                    <br />
                    <br />
                    <div style={{ fontWeight: 700 }}>  Our vision-  </div>
                    <br />
                    India has always had a rich cultural heritage and an abundance of art.
                    Through Art for Unity we want to create a platform that is
                    incorporative and where there is something for everyone. We
                    want to use Art as a tool for reflection, storytelling,
                    historical analysis, problem solving, bringing people
                    together, social/environmental education, multiplication of
                    wealth, means of expression and creation. It is amazing how
                    much potential Art as a medium has and how little we have
                    actually been able to utilize it.
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

export default AboutUS;
