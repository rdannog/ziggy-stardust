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
          <S.NavItem to="/">{homebtn}</S.NavItem>
          <S.NavItem to="/Photos">{photos}</S.NavItem>
          <S.NavItem to="/#tracks">{tracks}</S.NavItem>
          <S.NavItem to="/#shows">{shows}</S.NavItem>
          <S.NavItem to="/#about">{about}</S.NavItem>
          <Link to="/Buy">
            <S.Navbtn>{release}</S.Navbtn>
          </Link>
        </S.Navigation>
      </S.Menu>
    )
  }