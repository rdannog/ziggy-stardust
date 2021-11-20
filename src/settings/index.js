import React from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";


export function Settings() {
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
        
        {AOS.init()};
      </Helmet>
      
    </div>
  )
}