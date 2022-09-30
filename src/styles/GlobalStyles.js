import { createGlobalStyle } from "styled-components";
import "@fontsource/kaushan-script";
import "@fontsource/sirin-stencil";

const GlobalStyles = createGlobalStyle`

*, *::before, *::after{
    margin:0;
    padding:0;
}

@font-face {
  font-family: "ArialBold";
  src: local("ArialBold"),
   url("./assets/fonts/arialbd.ttf") format("truetype");
  font-weight: bold;
  }

  @font-face {
    font-family: "ArialMedium";
    src: local("ArialMedium"),
     url("./assets/fonts/ArialMdm.ttf") format("truetype");
    font-weight: medium;
    }
    

body{
    font-family:"ArialMedium";
    overflow:hidden;
    background-color: #202020;
}




h1,h2,h3,h4,h5,h6{
    margin:0;
    padding:0;
}



a{
    color:inherit;
    text-decoration:none;
}
::-webkit-scrollbar {display:none;}

html {
    scroll-behavior: smooth;
  }
  .sc-kLwhqv{
background-color:transparent !important;
border:#fff !important;

  }

  #about ul li img {
    width: 100vw;
    height: 80vh;
    object-fit: cover
  }

  .btn {
    background-color:#FFF !important;
    padding:0.5rem;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    cursor:pointer;
  }
  
  .aboutList{
    list-style-type: none;

  }

.aboutList > li {
  padding:5px;
}

  .App{
    position:relative;
  }
  #next,#prev{
    display:none;
  }
.jhMJsX{
  background-color:#fff !important;
  border-raddius:50% !important;
  height:5px !important;
  width:5px !important;
}




`;
export default GlobalStyles;
