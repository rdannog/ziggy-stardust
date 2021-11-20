import React from 'react'
import { Helmet } from "react-helmet";
import {Link, graphql, useStaticQuery} from 'gatsby'
import * as S from '../styles/style'
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
          }
        }
    `)
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
                    <div data-aos="flip-down">
                        <S.MainImg src="https://www.grindhousedatabase.com/images/Ziggystardustposter.jpg" alt=""/> 
                    </div>
                    <div data-aos="flip-down">
                        <S.MainImg src="https://preview.redd.it/5nlcv00vmlu11.jpg?auto=webp&s=48a85835b2235823f6628f3e9b33ca6e9fe0f6c2" alt=""/> 
                    </div>
                    <div data-aos="flip-down">
                        <S.MainImg src="https://resize-media.festival-cannes.com/fit-in/2560x1103/film_film/0002/22/e790972103e17ccf67593d826a7e91e5f6742cd7.jpeg" alt=""/>
                    </div>
                    <div data-aos="flip-down">
                        <S.MainImg src="https://roadie-metal.com/wp-content/uploads/2020/02/artrockstore-david-bowie-ziggy-stardust-and-the-spiders-from-mars-album_1024x1024.jpg" alt=""/> 
                    </div>
                    <div data-aos="flip-down"> 
                        <S.MainImg src="http://arquivos.consultoriadorock.com/content/2012/06/back.jpg" alt=""/> 
                    </div>
                    <div data-aos="flip-down">
                        <S.MainImg src="https://img.discogs.com/8-evy8P4U4F1mWzn1SHLPrVSGUU=/fit-in/600x597/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-9246521-1477305005-2800.jpeg.jpg" alt=""/> 
                    </div>
                    
                    <div data-aos="flip-down">
                        <S.MainImg src="http://arquivos.consultoriadorock.com/content/2012/06/bowiebolder.jpg" alt=""/> 
                    </div>
                    <div data-aos="flip-down">
                        <S.MainImg src="http://arquivos.consultoriadorock.com/content/2012/06/tumblr_lb82jbEmJE1qc7qvfo1_500.jpg" alt=""/> 
                    </div>
                    <div data-aos="flip-down">
                        <S.MainImg src="http://arquivos.consultoriadorock.com/content/2012/06/david-bowie-5-1.jpg" alt=""/>
                    </div>
                    <div data-aos="flip-down">
                        <S.MainImg src="https://lh3.googleusercontent.com/proxy/l715E8IoImL85jCkWH_pu9_jmgfaAfDndtdgfd2jnuN5BkUa20_9PVuX_QcD3LSAQWabRlbScupsYscU-w" alt=""/> 
                    </div>
                   
                    <div data-aos="flip-down">
                        <S.MainImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvqq0d1f8f42tOQzUUzwnMB6mkjB6k55iPIg&usqp=CAU" alt=""/>
                    </div>
                   
                    <div data-aos="flip-down">
                        <S.MainImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEFVHHifXIO7QO1Rbhw00OOlpguQvZ3UFIFw&usqp=CAU" alt=""/> 
                    </div>
                    <div data-aos="flip-down">
                        <S.MainImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-EdzTewo3NkJvUwSJBJ6Svp3-6EQhh3jIoA&usqp=CAU" alt=""/> 
                    </div>
                    <div data-aos="flip-down">
                        <S.MainImg src="https://amouthfulofpennies.files.wordpress.com/2016/07/david-bowie-ziggy-stardust-performance.jpg?w=900" alt=""/> 
                    </div>
                    <div data-aos="flip-down">
                        <S.MainImg src="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-245265-bowie-ziggy.jpg?resize=1800,1200&w=1800" alt=""/> 
                    </div>
                    
                    <div data-aos="flip-down">
                        <S.MainImg src="https://static.spin.com/files/2020/09/Screen-Shot-2020-09-16-at-2.44.57-PM-1600281902.png" alt=""/> 
                    </div>
                    <div data-aos="flip-down">
                        <S.MainImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS9_bdB8Dulu03R9lWPDD85-3XVFpTmgWSrQ&usqp=CAU" alt=""/> 
                    </div>
                    <div data-aos="flip-down">
                        <S.MainImg src="https://classicalbumsundays.com/wp-content/uploads/2011/05/bowie.jpg" alt=""/> 
                    </div>
                    
               </S.ImageContainer>
            </S.Main>

        </div>
    )
}
export default Photos;