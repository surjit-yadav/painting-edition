import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import Nav from "./nav";
import SliderSection from "./SliderSection";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const Home = () => {
  return (
    <Section id="home">
      <SliderSection />
      {/* <Nav /> */}
      {/* <CoverVideo /> */}

      {/* <NavBar /> */}
    </Section>
  );
};

export default Home;
