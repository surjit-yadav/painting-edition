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
  width: 43vw;
  margin-top: 10%;
  img {
    height: 50vh;
    width: 20vw;
    object-fit: cover;
    box-shadow: 0 0 0 0.5vw ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.body};
  }
  @media (max-width: 64em) {
    width: 80%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
    img {
      height: 50vh;
      width: 90vw;
    }
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

const OurTeams = ({ loaded, containerRef }) => {
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
                  Our Team -
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
                    <div>
                      <img src={Apoorva} alt="Apoorva Subbanna" />
                      <br />
                      <br />
                      <p style={{ fontWeight: "600" }}>Apoorva Subbanna </p>
                      <br />
                      <p style={{ fontStyle: "italic", fontSize: "16px" }}>
                        {" "}
                        Founder and Creative Head 
                      </p>
                      <br />
                      Apoorva completed her schooling from Sardar Patel
                      Vidyalaya and went on to do her Bachelors and Masters in
                      Visual Arts, painting, from MS University and Delhi
                      University subsequently; her creative pursuits actually
                      began when she was toddler. Her parents fondly recall how
                      she started playing around with colors and painting before
                      she even started walking, when she was just 7 months old.
                      This can be attributed to the creative atmosphere of the
                      house and her exposure to field ever since she was born,
                      as her father was one of the most prominent national award
                      winning artists and the Vice Chairman of Lalit Kala
                      Academy; and mother was a designer and an Art
                      consultant/owner of one of the prime Art Galleries located
                      in New Delhi, the culture capital of India. Hence, it was
                      no surprise when she decided to professionally pursue the
                      same, expressing herself through painting and art writing.
                      She was awarded the HRD scholarship by the cultural
                      Ministry and the Government of India for excellence in her
                      field for a time period of two years. Further she got the
                      opportunity to be a part of many National Camps by the
                      Lalit Kala Academy. Wanting to push the envelope further,
                      she dabbled into design with a few logos and interior
                      projects. Being a people’s person and with the heart of
                      working in the education domain, she took up the job at
                      NIFT, Delhi as a visiting faculty and a jury member, where
                      she enjoyed interacting with some extremely bright minds
                      and helped them tap into their creative potential. Apoorva
                      believes that life is about growing and learning every
                      day, in which her spiritual journey, practice and training
                      of Buddhism has played a major role. She also feels that
                      along with the satiating mind, travel exposes one to
                      different cultures, people, visual and cerebral
                      experiences that compare to none other.
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
                      Coming from a family of agriculturists, Seema had a
                      burning desire to carve a niche for herself and make a
                      difference in the world. She fought her way out of the
                      small town and into the creative field, where she trained
                      as a designer. Professionally, she has worked on some of
                      the most prestigious projects like- Festivals of India
                      (held in France, America, and Japan etc.), Paul Salon,
                      Heritage, heading interiors department for Ravissant and
                      heading North India for Titan and Tanishq as their Chief
                      Visual Merchandiser amongst many others; eventually
                      tapping into the art domain and managing one of the most
                      prominent Art galleries in the country. Seema was awarded
                      a Fellowship by the Charles Wallace India Trust, through
                      The British Council where she was attached with The
                      British Museum, Victoria & Albert Museum and the National
                      Gallery in London, UK. This opportunity gave her immense
                      exposure and she started with her own Art Gallery after
                      coming back and there has been no looking back since. Many
                      artists who got their first break with her, are doing
                      extremely well. She has helped many people in building art
                      portfolios advising them on how to invest in Art. She has
                      also curated some of the most path breaking shows that
                      were the first of their kind in the field. Eventually,
                      moving away from the restrictions of a regular gallery
                      space, enjoying her free spirited personality and being
                      honest to her creative and spiritual pursuits she
                      diversified into many other projects, independent
                      curatorial ventures and is continuing to run a successful
                      business.
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
                      While as a kid Dhruv was sporty and driven by victory, he
                      also boasted of having great negotiation skills, starting
                      at the smallest level of The Doon School mess. Coming from
                      a well rounded business family of Dehradun, he got on-job
                      training and business guidance at every stage in his life
                      and he learnt how to smell opportunities of growth and
                      turn them into profitable businesses. For technical
                      knowledge he completed his MBA from University of
                      Edinburgh with focus on modules on strategy and
                      negotiation. 
                      <br/>
                      Dhruv has diverse work experience in various
                      industries ranging from financial services to healthcare
                      and trading. After working with the Temasek Group and GVK
                      EMRI (Emergency Services-Healthcare Industry), managing
                      the government relations, he joined his family business as
                      the Director. During this phase the turnover of the
                      company increased many folds through strategic management,
                      designed expansion of the network as well as putting
                      together a meticulously planned product portfolio. He was
                      able to create a module where everyone was a beneficiary.
                      He then decided to start his own business and succeeded in
                      representing world renowned companies such as Philips,
                      Karlstorz, B.Baun in the medical equipment space. He
                      shares our belief that one can never grow in isolation but
                      the fact that growth can only be achieved when everyone is
                      winning. To keep up with the pace of growth across the
                      world, Dhruv voraciously reads and enjoys traveling to
                      explore different cultures.

                  
                    </div>
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

export default OurTeams;
