import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'
import { Link } from 'gatsby'

export function Menu() {
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
      <S.Menu>
        <S.LogoContainer>
          <S.NavItem to="/">
            <img src={logo.url} alt=""/>
          </S.NavItem>
        </S.LogoContainer>
        <S.Navigation>
          <S.NavItem to="ziggy-stardust_gatsby_landing-page/">{homebtn}</S.NavItem>
          <S.NavItem to="ziggy-stardust_gatsby_landing-page/Photos">{photos}</S.NavItem>
          <S.NavItem to="ziggy-stardust_gatsby_landing-page/#tracks">{tracks}</S.NavItem>
          <S.NavItem to="ziggy-stardust_gatsby_landing-page/#shows">{shows}</S.NavItem>
          <S.NavItem to="ziggy-stardust_gatsby_landing-page/#about">{about}</S.NavItem>
          <Link to="ziggy-stardust_gatsby_landing-page/Buy">
            <S.Navbtn>{release}</S.Navbtn>
          </Link>
        </S.Navigation>
      </S.Menu>
    )
  }