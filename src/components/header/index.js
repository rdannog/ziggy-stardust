import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'


export function Header() {
    const data = useStaticQuery(graphql`
        query {
           completedata{
            headers {
              backgroundHeader {
                url
              }
              button
              homebtn
              logo {
                url
              }
              photos
              shows
              subtitle
              text
              title
              tracks
              release
              about
            }
          }
        }
    `)
    const {backgroundHeader, button, homebtn, logo, photos, shows, subtitle, text, title, tracks, release, about} = data.completedata.headers[0]
    
    return (
    <S.Container>
        <S.Menu>
          <S.LogoContainer>
            <img src={logo.url} alt=""/>
          </S.LogoContainer>
          <S.Navigation>
            <S.NavItem href="#home"><p>{homebtn}</p></S.NavItem>
            <S.NavItem href="#photos"><p>{photos}</p></S.NavItem>
            <S.NavItem href="#tracks"><p>{tracks}</p></S.NavItem>
            <S.NavItem href="#shows"><p>{shows}</p></S.NavItem>
            <S.NavItem href="#about"><p>{about}</p></S.NavItem>
            <S.Navbtn>{release}</S.Navbtn>
          </S.Navigation>
        </S.Menu>
        
        <S.HeaderIntro id="home" style={{backgroundImage:`url(${backgroundHeader.url})`}}>
          <S.TextIntro>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{text}</p>
            <button>{button}</button>
          </S.TextIntro>
        </S.HeaderIntro>
    </S.Container>
  )
}