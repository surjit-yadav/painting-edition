import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 100%;
  color: ${(props) => props.theme.text};
  z-index: 5;

  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;

  img {
    width: 5rem;
    height: auto;
    overflow: visible;

    stroke-linejoin: round;
    stroke-linecap: round;

    stroke: ${(props) => props.theme.text};
  }
  svg {
    width: 2rem;
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

  @media (max-width: 40em) {
    top: 0;
    img {
      margin-left:"-2px";
    width: 4rem;
  }
    svg {
    width: 2rem;
   
`;

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.text};
  padding-bottom: 0.5rem;
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 1,
    transition: {
      duration: 2, // 2
      delay: 5,
      ease: "easeInOut",
    },
  },
};

const pathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, delay: 3, ease: "easeInOut" },
  },
};

const DrawerContainer = styled(motion.div)`
  height: 100vh;
  width: 10vw;
  border-radius: 6px;
  z-index: 6;
  position: absolute;
  right: ${(props) => (props.click ? 0 : `calc(-50vh - 4em)`)};

  transition: all 0.3s ease;

  @media (max-width: 40em) {
    right: ${(props) => (props.click ? 0 : `calc(-50vh - 4em)`)};
    width: 50vw;
  }
`;

const MenuItems = styled(motion.ul)`
  position: absolute;
  top: 52%;
  height: 12rem;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  width: 100%;
  margin-top: 0;
  padding: 0 1rem;

  @media (max-width: 40em) {
    flex-direction: column;
    padding: 0 10px 0 10px;
    width: 90%;
    height: 20vh;
  }
`;

const MenuItem = styled(motion.li)`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  align-items: flex-start;
  cursor: pointer;

  @media (max-width: 40em) {
    flex-direction: column;
    padding: 0.5rem 0;
  }
`;

const MenuBtn = styled.div`
  cursor: pointer;
`;

const Logo = () => {
  const [click, setClick] = useState(false);

  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let ele = document.querySelector(id);
    setClick(!click);
    scroll.scrollTo(ele, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Container>
      <motion.img
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        src={logo}
        alt="logo"
      />

      <Text variants={textVariants} initial="hidden" animate="visible">
        ART FOR UNITY
      </Text>

      <button onClick={() => setClick(!click)} style={{ marginRight: "20px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-list-ul"
          viewBox="0 0 16 16"
        >
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            fill-rule="evenodd"
            d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
          />
        </svg>
      </button>

      <DrawerContainer
        click={click}
        initial={{
          x: "-100%",
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 2, // 2
          delay: 5,
        }}
      >
        <MenuItems
          drag="y"
          dragConstraints={{
            top: 0,
            bottom: 70,
          }}
          dragElastic={0.05}
          dragSnapToOrigin
        >
          <MenuItem
            onClick={() => handleScroll("#home")}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
          >
            Home
          </MenuItem>
          <MenuItem
            onClick={() => handleScroll(".about")}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
          >
            about
          </MenuItem>
          <MenuItem
            onClick={() => handleScroll("#new-arrivals")}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
          >
            art gallery
          </MenuItem>
        </MenuItems>
      </DrawerContainer>
    </Container>
  );
};

export default Logo;
