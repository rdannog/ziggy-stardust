import React from 'react'
import * as S from './style'
import {Band} from './band'
import {Tracks} from './tracks'
import {Video} from './video'


export function Main() {
  return (
    <S.Container id="photos">
        <Band/>
        <Tracks/>
        <Video/>
    </S.Container>
  )
}