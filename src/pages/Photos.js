import React from 'react'
import { Helmet } from "react-helmet";
import {Link, graphql, useStaticQuery} from 'gatsby'
import * as S from '../components/styles/style'
import AOS from 'aos';
import { createGlobalStyle } from "styled-components";

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
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: black; 
}
::-webkit-scrollbar-thumb {
  background: #B8834F; 
}
::-webkit-scrollbar-thumb:hover {
  background: darkgoldenrod; 
}
}
a{
  text-decoration:none;
  cursor:pointer;
}
button:hover{
  transition:0.7s ease-in;
}
`
 function Photos() {
    const data = useStaticQuery(graphql`
        query {
           completedata{
            headers {
              homebtn
              logo {
                url
              }
              photos
              shows
              tracks
              release
              about
            }
            photos {
                gallery {
                  url
                }
            }
            footers {
                copyright
                refs
            }
          }
        }
    `)
    const {copyright, refs} = data.completedata.footers[0]
    const {gallery} = data.completedata.photos[0]
    const {homebtn, logo, photos, shows, tracks, release, about} = data.completedata.headers[0]
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
            <script>
                {AOS.init()};
            </script>
            <S.Menu>
                <S.LogoContainer>
                    <Link to="/"><img src={logo.url} alt=""/></Link>
                </S.LogoContainer>
                <S.Navigation>
                    <S.NavItem href="#home">
                        <Link to="/">{homebtn}</Link>
                    </S.NavItem>
                    <S.NavItem href="#photos">
                        <Link to="/#photos">{photos}</Link>
                    </S.NavItem>
                    <S.NavItem href="#tracks">
                        <Link to="/#tracks">{tracks}</Link>
                    </S.NavItem>
                    <S.NavItem href="#shows">
                        <Link to="/#shows">{shows}</Link>
                    </S.NavItem>
                    <S.NavItem href="#about">
                        <Link to="/#about">{about}</Link>
                    </S.NavItem>
                    <S.Navbtn>{release}</S.Navbtn>
                </S.Navigation>
            </S.Menu>            
            <S.Main >
                <S.Title>
                    <h1>{photos}</h1>
                </S.Title>
               <S.ImageContainer>
                    {gallery.map((item) => (
                        <div data-aos="flip-down">
                            <S.MainImg src={item.url} alt=""/>
                        </div>
                    ))} 
               </S.ImageContainer>
            </S.Main>
            <S.Copyright>
                <p>{copyright}</p>
            </S.Copyright>
            <S.References>
                <p>{refs}</p>
            </S.References>
        </div>
    )
}
export default Photos;