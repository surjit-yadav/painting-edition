import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  /* background-color: yellow; */
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;

  box-shadow: 0 0 0 2vw ${(props) => props.theme.text};
  border: 3px solid ${(props) => props.theme.body};

  z-index: 11;

  @media (max-width: 70em) {
    width: 40vw;
    height: 80vh;
  }

  @media (max-width: 64em) {
    width: 50vw;
    box-shadow: 0 0 0 60vw ${(props) => props.theme.text};
  }

  @media (max-width: 48em) {
    width: 60vw;
  }

  @media (max-width: 30em) {
    width: 80vw;
    height: 60vw;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  position: absolute;
  top: 5rem;
  left: 5%;
  z-index: 11;
  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Text = styled.div`
  width: 20%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 11;

  @media (max-width: 48em) {
    display: none;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 3rem;
  left: 50%;
  transform: translate(-50%, 0);
  width: 25vw;
  height: auto;

  /* width: 65%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 30vw;
  }
  @media (max-width: 48em) {
    width: 40vw;
    transform: translate(-95px, 0);
  }
  @media (max-width: 30em) {
    width: 60vw;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;

  img {
    width: 100%;
    height: auto;
    z-index: 5;
  }
`;

const Product = ({ img, title = "", category = "" }) => {
  return (
    <Item>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <h4>{category}</h4>
    </Item>
  );
};

const NewArrivals = ({ productList }) => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const ScrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = ScrollingRef.current;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom+=100% top-=100%",
          scroller: ".App", // locomotive element
          scrub: true,
          pin: true,
          // markers: true,
        },
        // we have increase scrolling height of this section same as the scrolling element width
        ease: "none",
      });

      // Vertical scrolling

      t1.fromTo(
        scrollingElement,
        {
          y: "0",
        },
        {
          y: "-100%",
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: "bottom top",
            scroller: ".App", // locomotive element
            scrub: true,
            // markers: true,
          },
          // we have increase scrolling height of this section same as the scrolling element width
        }
      );
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      // Let's clear instance
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="new-arrivals">
      <Overlay />
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        Art Gallery
      </Title>

      <Container ref={ScrollingRef}>
        {productList?.map((val) => (
          <Product img={val?.url} title={val?.name} category={val?.category} />
        ))}
      </Container>

      {/* <Text data-scroll data-scroll-speed="-4">
        Quisque ut nisi vel tortor suscipit commodo ut ac lectus. Aliquam
        iaculis tellus quis molestie consectetur. In orci velit, dictum a
        pulvinar quis, viverra ac ante. Aliquam vitae orci vestibulum,
        consectetur magna sed, semper orci. Praesent lacinia lobortis molestie.
        Ut nunc purus, pretium non neque vel, faucibus consequat risus.
        Vestibulum dictum ac nunc id consectetur.
        <br /> Phasellus ultricies neque a sapien fermentum, nec imperdiet
        turpis mattis. Suspendisse vel nisi sit amet mi luctus pulvinar. Etiam
        rhoncus egestas ex, ut pharetra mi. <br />
        Integer pretium in massa id porttitor. Nam mollis eros magna, vitae
        elementum magna sagittis eget. Ut vel scelerisque felis. Proin et
        iaculis risus, a elementum ipsum. Etiam venenatis nisi a arcu
        scelerisque ultrices.
      </Text> */}
    </Section>
  );
};

export default NewArrivals;
