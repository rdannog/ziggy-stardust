import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'


export function Main() {
    const data = useStaticQuery(graphql`
        query {
            completedata{
              mains {
                bottomTitle
                label
                trackbackground {
                  url
                }
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
                playBtn {
                  url
                }
                seeMore
                track
                tracklist
                tracksubtitle
                vidTxt1
                vidTxt2
                vid1 {
                  url
                }
                vid2 {
                  url
                }
              }
            }
        }
    `)
    const {seeMore, trackbackground, track, tracklist, tracksubtitle, vidTxt1, vidTxt2, vid1, vid2, bottomTitle, label, mainImg1, mainImg2, mainImg3, mainImg4, playBtn} = data.completedata.mains[0]
    
    return (
    <S.Container>
        <S.BandContainer>
          <S.MemberContainer>
            <S.Memberimg style={{backgroundImage:`url(${mainImg1.url})`}}>
            </S.Memberimg>
            <S.MemberInfo>
              <h3>{label}</h3>
              <button>{seeMore}</button>
            </S.MemberInfo>
          </S.MemberContainer>
          <S.MemberContainer>
            <S.Memberimg  style={{backgroundImage:`url(${mainImg2.url})`}}>
              
            </S.Memberimg>
            <S.MemberInfo>
              <h3>{label}</h3>
              <button>{seeMore}</button>
            </S.MemberInfo>
          </S.MemberContainer>
          <S.MemberContainer>
            <S.Memberimg style={{backgroundImage:`url(${mainImg3.url})`}}>
            </S.Memberimg>
            <S.MemberInfo>
              <h3>{label}</h3>
              <button>{seeMore}</button>
            </S.MemberInfo>
          </S.MemberContainer>
          <S.MemberContainer>
            <S.Memberimg style={{backgroundImage:`url(${mainImg4.url})`}}>
            </S.Memberimg>
            <S.MemberInfo>
              <h3>{label}</h3>
              <button>{seeMore}</button>
            </S.MemberInfo>
          </S.MemberContainer>
        </S.BandContainer>
        <S.TracksContainer style={{backgroundImage:`url(${trackbackground.url})`}}>
          <S.Content>
            <h2>{tracklist}</h2>
            <p>{tracksubtitle}</p>
            <ul>
              {track.map((item)=><li>{item}</li>)}
            </ul>
          </S.Content>
        </S.TracksContainer>
        <S.VidContainer>
          <h2>{bottomTitle}</h2>
          <S.BoxCard>
            <S.VidContent>
              <S.Video style={{backgroundImage:`url(${vid1.url})`}}>
                <img src={playBtn.url} alt=""/>
              </S.Video>
              <S.Name>
                <h3>{vidTxt1}</h3>
              </S.Name>
            </S.VidContent>
            <S.VidContent>
              <S.Video style={{backgroundImage:`url(${vid2.url})`}}>
                <img src={playBtn.url} alt=""/>
              </S.Video>
              <S.Name>
                <h3>{vidTxt2}</h3>
              </S.Name>
            </S.VidContent>
          </S.BoxCard>
        </S.VidContainer>
    </S.Container>
  )
}