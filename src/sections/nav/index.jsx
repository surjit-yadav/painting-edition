import React from "react";
import styled from "styled-components";

const Nav = () => {
  const Navu = styled.div`
    position: absolute;
    top: 300px;
    right: 600px;
  `;

  const NavContent = styled.div``;

  const ToggleBtn = styled.div`
    font-size: 35px;
    color: #0e2431;
  `;

  const Span = styled.span`
    position: absolute;
    transform: rotate(calc(var(--my-css-var) * (360deg / 8))) translateY(120px);
    .one {
      transform: rotate(calc(1turn - 32deg)) translateY(10px);
    }

    .two {
      transform: rotate(calc(360deg - 90deg)) translateY(10px);
    }

    .three {
      transform: rotate(calc(360deg / 4deg)) translateY(10px);
    }

    .four {
      transform: rotate(calc(22deg + 23deg)) translateY(10px);
    }

    .five {
      transform: rotate(45deg) translateY(10px);
    }

    a {
      height: 60px;
      width: 60px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      box-sizing: 0 0 20px rgba(0, 0, 0, 0.2);
      text-decoration: none;

      i {
        font-size: 24px;
        color: #0e2431;
      }
    }
  `;
  return (
    <Navu>
      <NavContent>
        <ToggleBtn>
          <i class="bx bx-plus"></i>
        </ToggleBtn>
        <Span style={{ "--my-css-var": 0 }}>
          <a href="#">
            <i class="bx bxs-color"></i>
          </a>
        </Span>
        <Span style={{ "--my-css-var": 1 }}>
          <a href="#">
            <i class="bx bx-home-alt-2"></i>
          </a>
        </Span>
        <Span class="three">
          <a href="#">
            <i class="bx bx-tachometer"></i>
          </a>
        </Span>
        <Span class="four">
          <a href="#">
            <i class="bx bx-checkbox-minus"></i>
          </a>
        </Span>
        <Span class="five">
          <a href="#">
            <i class="bx bx-tachometer"></i>
          </a>
        </Span>
        <Span class="one">
          <a href="#">
            <i class="bx bx-tachometer"></i>
          </a>
        </Span>
        <Span class="one">
          <a href="#">
            <i class="bx bx-tachometer"></i>
          </a>
        </Span>
        <Span style={`--i:1;`}>
          <a href="#">
            <i class="bx bx-tachometer"></i>
          </a>
        </Span>
      </NavContent>
    </Navu>
  );
};

export default Nav;
