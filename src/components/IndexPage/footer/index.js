import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'

export function Footer() {
    const data = useStaticQuery(graphql`
        query {
            completedata{
              headers {
                homebtn
                logo {
                  url
                }
                photos
                release
                about
              }
              footers {
                copyright
                date1
                date2
                facebook
                instagram
                list1
                list2
                list3
                list4
                twitter
                txt1
                txt2
                txt3
                txt4
                youtube
                refs
                logo {
                  url
                }
              }
            }
        }
    `)
    const {copyright, refs, date1, date2,facebook, instagram, list1, list2, list3, list4, twitter, txt1, txt2, txt3, txt4, youtube, logo} = data.completedata.footers[0]
    const {homebtn, photos, about} = data.completedata.headers[0]

    return (
    <S.Container id="about">
        <S.FooterBar>
            <S.Logo>
              <img src={logo.url} alt="logo"/>
            </S.Logo>
            <S.Contact>
              <S.BandMembers>
                <h2>{list1}</h2>
                <S.BandMember>
                  <p>{txt1}</p>
                  <p>{txt2}</p>
                  <p>{txt3}</p>
                  <p>{txt4}</p>
                </S.BandMember>
              </S.BandMembers>
              <S.Show>
                <h2>{list2}</h2>
                <S.Date>
                  <p>{date1}</p>
                  <p>{date1}</p>
                  <p>{date2}</p>
                  <p>{date2}</p>
                </S.Date>
              </S.Show>
              <S.Links>
                <h2>{list3}</h2>
                <S.LinkList>
                  <S.LinkItem>
                    <S.NavItem to="/">{homebtn}</S.NavItem>
                    <S.NavItem to="/Photos">{photos}</S.NavItem>
                    <S.NavItem to="/#about">{about}</S.NavItem>
                  </S.LinkItem>
                </S.LinkList>
              </S.Links>
              <S.SocialMedia>
                <h2>{list4}</h2>
                <S.SocialMediaItem>
                  <a href="https://www.youtube.com/channel/UC8YgWcDKi1rLbQ1OtrOHeDw" target="_blank" rel="noreferrer noopener">{youtube}</a>
                  <a href="https://www.facebook.com/davidbowie" target="_blank" rel="noreferrer noopener">{facebook}</a>
                  <a href="https://www.instagram.com/davidbowie/" target="_blank" rel="noreferrer noopener">{instagram}</a>
                  <a href="https://twitter.com/DavidBowieReal" target="_blank" rel="noreferrer noopener">{twitter}</a>
                </S.SocialMediaItem>
              </S.SocialMedia>
            </S.Contact>
        </S.FooterBar>
        <S.Copyright>
          <p>{copyright}</p>
        </S.Copyright>
        <S.References>
          <p>{refs}</p>
        </S.References>
    </S.Container>
  )
}