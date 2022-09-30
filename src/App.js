import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { useRef, useState } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./assets/fonts/arialbd.ttf";
import "./assets/fonts/ArialMdm.ttf";
import Content from "./components/Content";

import axios from "axios";

import React, { useEffect } from "react";
import Logo from "./components/Logo";
import FloatingMenu from "./components/FloatingMenu/FloatingMenu";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutUS from "./components/AboutUS/AboutUs";
import OurTeams from "./components/OurTeam/OurTeam";
import Contact from "./components/Contact/Contact";

function App() {
  const containerRef = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [productList, setProductList] = useState();
  const [toggleMenu, setToggleMenu] = useState(false);

  const [getData, setData] = useState(null);

  const getContentData = (value) => {
    switch (value) {
      case "Art Education":
        return `In a country that is known to have had the oldest civilization, the oldest city and has been home to some of the oldest artworks and sculptures created in history of the world, it is astonishing how little we as a nation know about Art and the role it has played in through different phases of evolution. We as an organization believe that comprehending Art means to understand people, cultures, history as well as society. Therefore we feel that it is a great way to build an understanding about the various historical, spiritual, environmental, social as well as political issues. On the other hand it is a tool to establish a connection with people as it allows one to explore and express themselves without any pressure or prejudice.

    For us, Art is a visual language that we wish to use for solving all kinds of problems at the micro/macro level and as a mode of self discovery for people of all age groups and sectors, through specially designed modules and programs.`;
      case "Art Dealing":
        return `Art industry globally is pegged at about 65 billion dollars annually in the organized space and at about Rs. 1700 cr. in India per annum as of 2017. Hence we can confidently say that it is the safest long term investment if you buy correctly. With years of experience and hard work towards building this as our core competence, not only do we advise you on which artists to buy but also the art works that are the safest to invest in. With us we bring authenticity, integrity and credibility, which is paramount for this business.

    We as a family come with a compounding experience together of over 70 years in the industry and understand it from the perspective of an artist, art critique, buyers ourselves, curators and investment advisors. We have access to over 300 artists, ranging from the most prominent, most skilled, to the newest. No matter what the budget, we can still provide you art works from the standpoint of investment. We cater to all art requirements that an individual may have.`;
      default:
        return "";
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  const fetchProducts = () => {
    axios({
      // Endpoint to send files
      url: "https://publicp.herokuapp.com/images/",
      method: "GET",
      headers: {
        // Add any auth token here
        authorization: "your token comes here",
      },
      // Attaching the form data
      // data: formData,
    })
      // Handle the response from backend here
      .then((res) => {
        setProductList(res?.data?.post);
      })

      // Catch errors if any
      .catch((err) => {});
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const useOutsideClick = (callback) => {
    const ref = React.useRef();

    React.useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback();
        }
      };

      document.addEventListener("click", handleClick);

      return () => {
        document.removeEventListener("click", handleClick);
      };
    }, [ref]);

    return ref;
  };

  const handleClickOutside = () => {
    setToggleMenu(false);
  };

  const myref = useOutsideClick(handleClickOutside);

  return (
    <>
      {loaded && (
        <div ref={myref}>
          <FloatingMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        </div>
      )}

      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <div style={{ position: "absolute", zIndex: "10", margin: "3rem" }}>
          <a href="/">
          <Logo />

          </a>
        </div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <LandingPage
                  setData={setData}
                  loaded={loaded}
                  containerRef={containerRef}
                />
              }
            />
            <Route
              path="/content"
              element={
                <Content
                  loaded={loaded}
                  containerRef={containerRef}
                  title={getData?.title}
                  contentData={getContentData(getData?.title)}
                  img={getData?.img}
                />
              }
            />

            <Route
              path="/aboutus"
              element={<AboutUS loaded={loaded} containerRef={containerRef} />}
            />
            <Route
              path="/teams"
              element={<OurTeams loaded={loaded} containerRef={containerRef} />}
            />

            <Route
              path="/contact"
              element={<Contact loaded={loaded} containerRef={containerRef} />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
