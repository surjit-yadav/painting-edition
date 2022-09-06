import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";

import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 5;
  positions: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }

  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;

  background-color: ${(props) => props.theme.gray};
  /* width: 65%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const Item = styled(motion.div)`
  width: 20rem;
  margin-right: 6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  h1 {
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    align-items: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;

const Product = ({ img, title = "", category = "" }) => {
  return (
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img src={img} alt={title} />
      <h1>{category}</h1>
      <h1>{title}</h1>
    </Item>
  );
};

const Shop = ({ productList }) => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", // locomotive element
          scrub: true,
          pin: true,
          //   markers: true,
        },
        // we have increase scrolling height of this section same as the scrolling element width
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      // Horizontal scrolling

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", // locomotive element
          scrub: true,
          //   markers: true,
        },
        // we have increase scrolling height of this section same as the scrolling element width
        x: -pinWrapWidth,
        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      // Let's clear instance
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="shop">
      <Title data-scroll data-scroll-speed="-1">
        New Collections
      </Title>
      <Left>
        <p>
          Quisque ut nisi vel tortor suscipit commodo ut ac lectus. Aliquam
          iaculis tellus quis molestie consectetur. In orci velit, dictum a
          pulvinar quis, viverra ac ante. Aliquam vitae orci vestibulum,
          consectetur magna sed, semper orci. Praesent lacinia lobortis
          molestie. Ut nunc purus, pretium non neque vel, faucibus consequat
          risus. Vestibulum dictum ac nunc id consectetur.
          <br /> Phasellus ultricies neque a sapien fermentum, nec imperdiet
          turpis mattis. Suspendisse vel nisi sit amet mi luctus pulvinar. Etiam
          rhoncus egestas ex, ut pharetra mi. <br />
        </p>
      </Left>

      <Right ref={horizontalRef}>
        {productList?.map((val) => (
          <Product img={val?.url} title={val?.name} category={val?.category} />
        ))}
      </Right>
    </Section>
  );
};

export default Shop;
