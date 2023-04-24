import React from 'react'

import Dudas from '../../assets/dudas-logo1.svg'
import Facebook from '../../assets/facebook.svg'
import Insta from '../../assets/instagram.svg'
import WhatssApp from '../../assets/whatsApp.svg'
import { Container, Logo, LinksContainer, Link, LinkContato } from './styles'

export function Footer() {
  return (
    <Container>
      <Logo src={Dudas} alt="Logo Bobs" />
      <LinksContainer>
        <LinkContato>
          <div>
            <p>Faça seu pedido também pelo </p>
            <p>
              <img src={WhatssApp} /> (12) 98101-7193
            </p>
          </div>
          <div>
            <p>Contato</p>
            <p>Tel: (12) 3948-8054</p>
            <p>
              Av. Nicanor Reis, n° 114 . Parque Interlagos - São José dos Campos
            </p>
          </div>
        </LinkContato>
        <Link>
          <a href="https://www.instagram.com/dudaslanches_1/">
            <img src={Insta} />
          </a>
          <a href="https://www.facebook.com/DudasDelivery/">
            <img src={Facebook} />
          </a>
        </Link>
      </LinksContainer>
    </Container>
  )
}
