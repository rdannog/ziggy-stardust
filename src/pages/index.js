import React from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Main } from "../components/main";
import {GlobalStyle} from "./style/style";


export default function Index() {
  return (
    <div>
      <Helmet>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        </style>
        <title>ZIGGY STARDUST</title>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <link href="" rel="icon" type="image/x-icon" />
      </Helmet>
      <GlobalStyle/>
      <Header/>
      <Main/>
      <Footer/>
      <script>
        {AOS.init()};
      </script>
    </div>
  )
}