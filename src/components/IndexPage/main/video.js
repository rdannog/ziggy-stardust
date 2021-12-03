import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'


export function Video() {
    const data = useStaticQuery(graphql`
        query {
            completedata{
              mains {
                bottomTitle
                playBtn {
                  url
                }
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
    const {vidTxt1, vidTxt2, vid1, vid2, bottomTitle, playBtn} = data.completedata.mains[0]
    
    return (
        <S.VidContainer id="shows">
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
    )
}