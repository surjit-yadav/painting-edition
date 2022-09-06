import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef, useState } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Home from "./sections/Home";
import { AnimatePresence } from "framer-motion";
import About from "./sections/About";
import Shop from "./sections/Shop";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Banner from "./sections/Banner";
import axios from "axios";
import NewArrivals from "./sections/NewArrivals";
import Footer from "./sections/Footer";
import Loader from "./components/Loader";
import { useEffect } from "react";

function App() {
  const containerRef = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [productList, setProductList] = useState();

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

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options

            smartphone: {
              smooth: true,
            },

            tablet: {
              smooth: true,
            },
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>{loaded ? null : <Loader />}</AnimatePresence>

          <ScrollTriggerProxy />
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Home />
              <About />
              {/* <Shop productList={productList} /> */}
              {/* <Banner /> */}
              <NewArrivals productList={productList} />
              <Footer />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
