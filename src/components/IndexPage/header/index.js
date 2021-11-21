import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as S from './style'
import { Menu } from './menu'

export function Header() {
    const data = useStaticQuery(graphql`
        query {
           completedata{
            headers {
              backgroundHeader {
                url
              }
              button
              subtitle
              text
              title
            }
          }
        }
    `)
    const {backgroundHeader, button, subtitle, text, title} = data.completedata.headers[0]
    
    return (
    <S.Container>
        <Menu/>
        <S.HeaderIntro style={{backgroundImage:`url(${backgroundHeader.url})`}}>
          <S.TextIntro>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{text}</p>
            <button>
              <Link to="/Buy">
                {button}
              </Link>
            </button>
          </S.TextIntro>
        </S.HeaderIntro>
    </S.Container>
  )
}