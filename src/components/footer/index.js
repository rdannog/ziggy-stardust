import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'


export function Footer() {
    const data = useStaticQuery(graphql`
        query {
            completedata{
              footers {
                copyright
                date1
                date2
                facebook
                instagram
                links
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
    const {copyright, refs, date1, date2,facebook, instagram, links, list1, list2, list3, list4, twitter, txt1, txt2, txt3, txt4, youtube, logo} = data.completedata.footers[0]
    
    return (
    <S.Container>
      <a href="#about" id="about">.</a>
        <S.FooterBar data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
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
                    {links.map((item) => (
                      <a href="" target="_blank" rel="noopener noreferrer">{item}</a>
                    ))}
                  </S.LinkItem>
                </S.LinkList>
              </S.Links>
              <S.SocialMedia>
                <h2>{list4}</h2>
                <S.SocialMediaItem>
                  <a href="#" target="_blank" rel="noopener noreferrer">{youtube}</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">{facebook}</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">{instagram}</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">{twitter}</a>
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