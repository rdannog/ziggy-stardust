import React from 'react'
import * as S from './style'


export function BuyIndex() {
  return (
    <S.Container>
        <S.Description>
            <div className='info'>
              <div className='images'>
                <img src="https://m.media-amazon.com/images/I/A1rxQMeiz9L._AC_SL1500_.jpg" alt=""/>
                <img className='album' src="https://cover.box3.net/newsimg/dvdmov/max1319758172-back-cover.jpg" alt=""/>
              </div>
              <div className='text'>
                <h2>David Bowie - Ziggy Stardust</h2>
                <h3>R$ 59.99</h3>
                <p><b>The Rise and Fall of Ziggy Stardust and the Spiders from Mars</b> (muitas vezes encurtado para Ziggy Stardust) é o quinto álbum de estúdio do músico britânico David Bowie.</p>
                <p>A obra conta a história do alter ego de Bowie, chamado Ziggy Stardust, um rock star que age como um mensageiro de seres extraterrestres. Bowie criou o personagem em Nova York, enquanto promovia Hunky Dory, e interpretou-o numa turnê por Reino Unido, Japão e América do Norte.</p>
                <p>O álbum e seu personagem ficaram conhecidos pelas influências no glam rock e pelos seus temas, que tratavam de exploração sexual e de visão de vida. Esses fatores, ao lado das ambiguidades que cercavam a sexualidade de Bowie, e corroborados pela performance inovadora de "Star Man" no Top of the Pops, levaram o álbum a ter um caráter controverso e a ser considerado uma obra seminal. O conceito do álbum explora os campos da artificialidade do rock em geral, discutindo questões políticas, sobre uso de drogas e sobre orientação sexual. O álbum foi por várias vezes considerado um dos maiores álbuns de todos os tempos, sendo que a revista Rolling Stone considerou-o o 35° melhor. Foi classificado como o vigésimo melhor por uma pesquisa britânica, em 1997, o 24° melhor pela revista Q, um dos 100 melhores lançamentos pela revista Time e aclamado pela revista Melody Maker como o melhor disco dos anos 70. </p>
                <p>O som do disco é metálico, melodramático, cheio de pianos grandiosos – quase cinematográficos e guitarras distorcidas que representam as ruínas do mundo que Ziggy encontra pela frente. A grandiosidade musical em si não era novidade para Bowie, mas aqui foi a primeira vez que a execução refletiu com fidelidade e justiça o alcance de suas ideias incríveis durante um álbum inteiro. Musicalmente falando, Ziggy Stardust and The Spiders From Mars é um daqueles discos visionários que continua se revelando a cada nova audição. É sexy, é dramático, é violento, é divertido, é provocador, é entorpecente. Foi um dos momentos fundamentais na obra de Bowie, consagrando criador e criatura e mudando para sempre sua importância na cultura pop.
                </p>
                <p className='description'>CATEGORIAS: CDs, Heavy / Hard / Gothic / Rock</p>
                <p>TEMPO TOTAL: 38 minutos e 32 segundos</p>
                <p>LANÇAMENTO: 6 de junho de 1972</p>
                <div className='form'>
                  <h2>Inscreva-se para comprar:</h2>
                  <input type="email" placeholder="Digite seu email"/>
                  <button>Inscrever-se</button>
                </div>
              </div>
            </div>
        </S.Description>
        {/* <p>David Bowie: vocais, guitarra e saxofone Mick (Ronno) Ronson: guitarra, piano e vocais Mick (Woody) Woodmansey: bateria Trevor Bolder: baixo</p> */}
    </S.Container>
  )
}