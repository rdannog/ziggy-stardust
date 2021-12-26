import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import * as S from '../../styles/photosPage'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

export function PhotoGallery() {
    const data = useStaticQuery(graphql`
        query {
           completedata{
            headers {
              photos
            }
            photos {
                gallery {
                  url
                }
            }
            footers {
                copyright
                refs
            }
          }
        }
    `)
    const {copyright, refs} = data.completedata.footers[0]
    const {gallery} = data.completedata.photos[0]
    const {photos} = data.completedata.headers[0]
    return (
        <div>       
            <S.Main >
                <S.Title>
                    <h1>{photos}</h1>
                </S.Title>
               <S.ImageContainer>
                    {gallery.map((item) => (
                        <div>
                            <S.MainImg data-aos="flip-down" src={item.url} alt=""/>
                        </div>
                    ))} 
               </S.ImageContainer>
            </S.Main>
            <S.Copyright>
                <p>{copyright}</p>
            </S.Copyright>
            <S.References>
                <p>{refs}</p>
            </S.References>
        </div>
    )
}