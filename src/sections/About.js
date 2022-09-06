import React from "react";
import styled from "styled-components";
import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};

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
  font-family: "Kaushan Script";
  font-weight: 300;
  color: ${(props) => props.theme.text};

  position: absolute;
  top: 2rem;
  left: 5%;
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
  font-weight: 200;
  z-index: 5;
  margin-top: 6%;

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
  .small-img-1 {
    height: 50vh;
    width: 50vw;
    object-fit: cover;
    box-shadow: 0 0 0 0.5vw ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.body};
  }
  .small-img-2 {
    height: 50vh;
    width: 50vw;
    object-fit: cover;
    box-shadow: 0 0 0 0.5vw ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.body};
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
    .small-img-1 {
      height: 20vh;
      width: 20vw;
      object-fit: cover;
      ${
        "" /* width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%; */
      }
    }
    .small-img-2 {
      ${
        "" /* width: 30%;
      height: auto;
      left: 60%;
      bottom: 20%; */
      }
      height: 20vh;
      width: 20vw;
      object-fit: cover;
    }
  }
`;
const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <SubTitle
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        LESS IS MORE
      </SubTitle>
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        MASSIMO VIGNELLI
      </Title>
      <Left
        data-scroll
        data-scroll-sticky
        //  data-scroll-target="#fixed-target"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        fringilla justo ut dolor iaculis pharetra. Nullam elementum, ex vel
        sagittis placerat, nisi velit rhoncus dolor, sed ullamcorper felis lorem
        in libero. Pellentesque erat augue, gravida ut turpis sed, varius
        pretium velit.
        <br /> Aenean fermentum, urna at tempus rutrum, elit diam egestas
        mauris, a lobortis ex ipsum ac nibh. Proin sit amet ex luctus, euismod
        odio ut, laoreet lectus. Ut vehicula, velit at ornare aliquet, dui ipsum
        laoreet ligula, condimentum maximus erat ipsum ac justo. <br />
        Morbi sed sagittis eros. Ut nec diam ac mauris commodo aliquam.
        Vestibulum ut tellus interdum, rhoncus nunc eu, tincidunt nibh. Donec
        ullamcorper mauris nibh, sit amet ullamcorper nibh aliquam sit amet.
        Curabitur tempus consectetur arcu, a malesuada urna tempor non.
      </Left>
      <Right>
        <img data-scroll data-scroll-speed="-1" src={img1} alt="About us" />
        <img
          data-scroll
          data-scroll-speed="3"
          src={img2}
          alt="About us"
          className="small-img-1"
        />
        <img
          data-scroll
          data-scroll-speed="-1"
          src={img3}
          alt="About us"
          className="small-img-2"
        />
      </Right>
    </Section>
  );
};

export default About;
