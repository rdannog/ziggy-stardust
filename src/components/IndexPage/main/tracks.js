import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'

export function Tracks() {
    const data = useStaticQuery(graphql`
        query {
            completedata{
              mains {
                trackbackground {
                  url
                }
                track
                tracklist
                tracksubtitle
              }
            }
        }
    `)
    const {trackbackground, track, tracklist, tracksubtitle} = data.completedata.mains[0]
    
    return (
        <S.TracksContainer id="tracks" style={{backgroundImage:`url(${trackbackground.url})`}}>
            <S.Content>
            <h2>{tracklist}</h2>
            <p>{tracksubtitle}</p>
            <ul>
                {track.map((item)=><li>{item}</li>)}
            </ul>
            </S.Content>
      </S.TracksContainer>
  )
}