import React from 'react'

import Dudas from '../../assets/dudas-logo1.svg'
import { Container, Logo, LinksContainer, Link } from './styles'

export function Footer() {
  return (
    <Container>
      <Logo src={Dudas} alt="Logo Bobs" />
      <LinksContainer>
        <Link href="#">Sobre</Link>
        <Link href="#">
          <ul>
            <li>
              <a>Instagram</a>
            </li>
            <li>Facebook</li>
          </ul>
        </Link>
        <Link href="#">Contato</Link>
      </LinksContainer>
    </Container>
  )
}
