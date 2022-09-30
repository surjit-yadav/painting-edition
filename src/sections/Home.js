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
         <div  style={{position:'absolute',zIndex:'10' ,
                  left:'40%',
                  top:'30%'
                 
                 }}>
      <Logo logoSize='large' showText={true} />
      </div>
      <SliderSection />
      {/* <Nav /> */}
      {/* <CoverVideo /> */}

      {/* <NavBar /> */}
    </Section>
  );
};

export default Home;
