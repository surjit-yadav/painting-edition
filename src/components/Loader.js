import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import video from "../assets/logoAnimation.mp4";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  touch-action: none;
  overflow: hidden;

  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};

  img {
    width: 8rem;
    height: auto;
    overflow: visible;

    stroke-linejoin: round;
    stroke-linecap: round;

    g {
      path {
        stroke: ${(props) => props.theme.text};
      }
    }
  }

  @media (max-width: 48em) {
    img {
      width: 20vw;
    }
  }
`;

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  padding-top: 1.5rem;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 2, yoyo: Infinity, ease: "easeInOut" },
  },
};

const pathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 0.1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

const Loader = () => {
  return (
    <Container
      initial={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: "100%",
        opacity: 0,
      }}
      transition={{ duration: 2 }}
    >
      <video
        src={video}
        type="video/mp4"
        height="300px"
        width="300px"
        autoPlay
        muted
        loop
      />
      {/* <motion.img
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        src={logo}
        alt="logo"
      />

      <Text variants={textVariants} initial="hidden" animate="visible">
        ART FOR UNITY
      </Text> */}
    </Container>
  );
};

export default Loader;
