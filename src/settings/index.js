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
        <link rel="shortcut icon" href="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDY0IDY0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZWZjYzAwO308L3N0eWxlPjwvZGVmcz48dGl0bGUvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIyMi44OCA5IDE4LjI3IDM1LjQ1IDI3LjQ4IDM1LjQ1IDIyLjg4IDU1IDQ0LjczIDI3LjQgMzQuMzggMjcuNCA0My41OCA5IDIyLjg4IDkiLz48L3N2Zz4=" type="image/x-icon" />        
        {AOS.init()};
      </Helmet>
      
    </div>
  )
}