/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React, { useLayoutEffect, useRef } from "react";
import "./SliderSection.css";
import web0 from "../assets/art/web0.jpg";
import web1 from "../assets/art/web1.jpg";
import web2 from "../assets/art/web2.jpg";
import web3 from "../assets/art/web3.jpg";
import web4 from "../assets/art/web4.jpg";
import web5 from "../assets/art/web5.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const SliderSection = () => {
  var responsiveSlider = function () {
    var slider = document.getElementById("slider");
    var sliderWidth = slider?.offsetWidth;
    var slideList = document?.getElementById("slideWrap");
    var count = 1;
    var items = slideList?.querySelectorAll("li").length;
    var prev = document?.getElementById("prev");
    var next = document?.getElementById("next");

    window.addEventListener("resize", function () {
      sliderWidth = slider.offsetWidth;
    });

    var prevSlide = function () {
      if (count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      } else if ((count = 1)) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
    };

    var nextSlide = function () {
      if (count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      } else if ((count = items)) {
        slideList.style.left = "0px";
        count = 1;
      }
    };

    next?.addEventListener("click", function () {
      nextSlide();
    });

    prev?.addEventListener("click", function () {
      prevSlide();
    });

    setInterval(function () {
      nextSlide();
    }, 5000);
  };

  window.onload = function () {
    responsiveSlider();
  };

  return (
    <div id="slider">
      <ul id="slideWrap">
      <li>
          <img src={web0} alt="" />
        </li>
        <li>
          <img src={web1} alt="" />
        </li>
        <li>
          <img src={web2} alt="" />
        </li>
        <li>
          <img src={web3} alt="" />
        </li>
        <li>
          <img src={web4} alt="" />
        </li>
        <li>
          <img src={web5} alt="" />
        </li>
      </ul>
      <a id="prev" href="#">
        &#8810;
      </a>
      <a id="next" href="#">
        &#8811;
      </a>
    </div>
  );
};

export default SliderSection;
