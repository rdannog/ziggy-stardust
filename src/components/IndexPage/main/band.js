import React from 'react'
import { Link } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'


export function Band() {
    const data = useStaticQuery(graphql`
        query {
            completedata{
              mains {
                label
                mainImg1 {
                  url
                }
                mainImg2 {
                  url
                }
                mainImg3 {
                  url
                }
                mainImg4 {
                  url
                }
                seeMore
              }
            }
        }
    `)
    const {seeMore, label, mainImg1, mainImg2, mainImg3, mainImg4} = data.completedata.mains[0]
    
    return (
        <S.BandContainer>
        <S.MemberContainer>
          <S.Memberimg style={{backgroundImage:`url(${mainImg1.url})`}}>
          </S.Memberimg>
          <S.MemberInfo>
            <h3>{label}</h3>
            <Link to="/Photos">
              <button>{seeMore}</button>
            </Link>
          </S.MemberInfo>
        </S.MemberContainer>
        <S.MemberContainer>
          <S.Memberimg  style={{backgroundImage:`url(${mainImg2.url})`}}>
            
          </S.Memberimg>
          <S.MemberInfo>
            <h3>{label}</h3>
            <Link to="/Photos">
              <button>{seeMore}</button>
            </Link>
          </S.MemberInfo>
        </S.MemberContainer>
        <S.MemberContainer>
          <S.Memberimg style={{backgroundImage:`url(${mainImg3.url})`}}>
          </S.Memberimg>
          <S.MemberInfo>
            <h3>{label}</h3>
            <Link to="/Photos">
              <button>{seeMore}</button>
            </Link>
          </S.MemberInfo>
        </S.MemberContainer>
        <S.MemberContainer>
          <S.Memberimg style={{backgroundImage:`url(${mainImg4.url})`}}>
          </S.Memberimg>
          <S.MemberInfo>
            <h3>{label}</h3>
            <Link to="/Photos">
              <button>{seeMore}</button>
            </Link>
          </S.MemberInfo>
        </S.MemberContainer>
      </S.BandContainer>
  )
}