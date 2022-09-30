import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  color: ${(props) => props.theme.text};
  z-index: 5;
   background-color: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.text};
  padding-bottom: 0.5rem; 
  margin-top:-3.5rem;

  @media (max-width: 600px) {
    font-size: ${(props) => props.theme.fontlg};
  }
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
      duration: 1, // 2
      delay: 1,
      ease: "easeInOut",
    },
  },
};

const pathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 1, delay: 1, ease: "easeInOut" },
  },
};

const DrawerContainer = styled(motion.div)`
  display: none;
  @media (max-width: 40em) {
    display: ${(props) => (props.click ? "flex" : `none`)};
    background: rgba(0, 0, 0, 0.7);
    color: ${(props) => props.theme.text};
    justify-content: space-between;
    z-index: 6;
    transition: all 0.3s ease;
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 100%;
    height: auto;
  }
`;

const MenuItems = styled(motion.ul)`
  list-style: none;
  margin-top: 0;
  padding: 0 1rem;
  @media (max-width: 40em) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    padding: 0 10px 0 10px;
    margin-top: 1rem;
    width: 100vw;
    height: 100vh;
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



const Menu = styled.div`
  display: flex;
  gap: 2rem;
  position: relative;
  right: 5rem;

  @media (max-width: 40em) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 40em) {
    top: 0;
    display: block;
    position: relative;
    right: 2rem;
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
  }
`;
const MenuText = styled(motion.div)`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  cursor: pointer;
  padding-bottom: 0.5rem;
`;

const Logo = ({logoSize,showText}) => {
  const [click, setClick] = useState(false);

  const SideLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: ${logoSize==='large' ? '25rem' : '8rem'};
    height: auto;
    overflow: visible;

    stroke-linejoin: round;
    stroke-linecap: round;

    stroke: ${(props) => props.theme.text};



  }

  @media (max-width: 600px) {
    margin-top:${logoSize==='large' ? '8vh' :'-2vh'};
    margin-left:${logoSize==='large' ? '-90px' :'-40px'};
    img {
      width: ${logoSize==='large' ? '18rem' : '4rem'};
    }
  }
  // @media (max-width: 40em) {
  //   top: 0;
  //   img {
  //     margin-left: "-8px";
  //     width: 4rem;
  //   }
  // }
`;

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

  console.log(click, "click");
  return (
<>
<SideLogo>
        <motion.img
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          src={logo}
          alt="logo"
        />

        {showText &&   <Text variants={textVariants} style={{color:"black" ,fontSize:'0px'}} initial="hidden" animate="visible">
          ART FOR UNITY
        </Text>}
      </SideLogo>
      </>

    // <Container>
   

    //   {/* <Menu>
    //     <MenuText
    //       variants={textVariants}
    //       initial="hidden"
    //       animate="visible"
    //       onClick={() => handleScroll("#home")}
    //     >
    //       Home
    //     </MenuText>
    //     <MenuText
    //       variants={textVariants}
    //       initial="hidden"
    //       animate="visible"
    //       onClick={() => handleScroll(".about")}
    //     >
    //       About
    //     </MenuText>
    //     <MenuText
    //       variants={textVariants}
    //       initial="hidden"
    //       animate="visible"
    //       onClick={() => handleScroll("#new-arrivals")}
    //     >
    //       Art Gallery
    //     </MenuText>
    //   </Menu> */}
    //   {/* <MobileMenu onClick={() => setClick(!click)}>
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="16"
    //       height="16"
    //       fill="currentColor"
    //       class="bi bi-list-ul"
    //       viewBox="0 0 16 16"
    //     >
    //       <motion.path
    //         variants={pathVariants}
    //         initial="hidden"
    //         animate="visible"
    //         fill-rule="evenodd"
    //         d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
    //       />
    //     </svg>
    //   </MobileMenu>
    //   <DrawerContainer
    //     click={click}
    //     initial={{
    //       x: "-100%",
    //     }}
    //     animate={{
    //       x: 0,
    //     }}
    //     transition={{
    //       duration: 2, // 2
    //       delay: 5,
    //     }}
    //   >
    //     <span
    //       style={{ position: "relative", left: "15rem", cursor: "pointer" }}
    //       onClick={() => setClick(!click)}
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="32"
    //         height="32"
    //         fill="currentColor"
    //         class="bi bi-x"
    //         viewBox="0 0 16 16"
    //       >
    //         <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    //       </svg>
    //     </span>
    //     <MenuItems
    //       drag="x"
    //       dragConstraints={{
    //         top: 0,
    //         bottom: 70,
    //       }}
    //       dragElastic={0.05}
    //       dragSnapToOrigin
    //     >
    //       <MenuItem
    //         onClick={() => handleScroll("#home")}
    //         whileHover={{ scale: 1.1, y: -5 }}
    //         whileTap={{ scale: 0.9, y: 0 }}
    //       >
    //         Home
    //       </MenuItem>
    //       <MenuItem
    //         onClick={() => handleScroll(".about")}
    //         whileHover={{ scale: 1.1, y: -5 }}
    //         whileTap={{ scale: 0.9, y: 0 }}
    //       >
    //         about
    //       </MenuItem>
    //       <MenuItem
    //         onClick={() => handleScroll("#new-arrivals")}
    //         whileHover={{ scale: 1.1, y: -5 }}
    //         whileTap={{ scale: 0.9, y: 0 }}
    //       >
    //         art gallery
    //       </MenuItem>
    //     </MenuItems> */}
    //   {/* </DrawerContainer> */}
    // </Container>
  );
};

export default Logo;
