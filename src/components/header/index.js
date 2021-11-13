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
            <S.NavItem href="#">{homebtn}</S.NavItem>
            <S.NavItem href="#">{about}</S.NavItem>
            <S.NavItem href="#">{shows}</S.NavItem>
            <S.NavItem href="#">{tracks}</S.NavItem>
            <S.NavItem href="#">{photos}</S.NavItem>
            <S.Navbtn>{release}</S.Navbtn>
          </S.Navigation>
        </S.Menu>
        <S.HeaderIntro style={{backgroundImage:`url(${backgroundHeader.url})`}}>
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