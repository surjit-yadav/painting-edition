import React from "react";
import styled from "styled-components";
import CoverVideo from "../components/CoverVideo";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
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
      {/* <CoverVideo /> */}
      <Logo />
      {/* <NavBar /> */}
    </Section>
  );
};

export default Home;