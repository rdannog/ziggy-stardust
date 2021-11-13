import React from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Main } from "../components/main";

const GlobalStyle = createGlobalStyle`
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
  cursor:default;
  font-family: 'Bebas Neue', cursive;  
  scroll-behavior: smooth;
  color:#fff;
}
body{
  background-color:#000;
}
a{
  text-decoration:none;
  cursor:pointer;
}
button:hover{
  transition:0.7s ease-in;
}
`

export default function Index() {
  return (
    <div>
      <Helmet>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        </style>
        <title>ZIGGY STARDUST</title>
        <link href="" rel="icon" type="image/x-icon" />
      </Helmet>
      <GlobalStyle/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}