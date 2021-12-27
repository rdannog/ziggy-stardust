import React from 'react';
import { Link } from 'gatsby';
import * as S from '../header/style';
import { graphql, useStaticQuery } from 'gatsby'

const RightNav = ({ open }) => {
    const data = useStaticQuery(graphql`
    query {
       completedata{
        headers {
          homebtn
          photos
          tracks
          release
        }
      }
    }
`)
const {homebtn, photos, tracks, release} = data.completedata.headers[0]
  return (
    <div>
        <S.Navigation open={open}>
          <S.NavItem to="/">{homebtn}</S.NavItem>
          <S.NavItem to="/Photos">{photos}</S.NavItem>
          <S.NavItem to="/#tracks">{tracks}</S.NavItem>
          <Link to="/Buy">
            <S.Navbtn>{release}</S.Navbtn>
          </Link>
        </S.Navigation>
    </div>
  )
}

export default RightNav