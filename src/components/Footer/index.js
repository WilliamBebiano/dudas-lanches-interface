import React from 'react'

import Dudas from '../../assets/dudas-logo1.svg'
import { Container, Logo, LinksContainer, Link } from './styles'

export function Footer() {
  return (
    <Container>
      <Logo src={Dudas} alt="Logo Bobs" />
      <LinksContainer>
        <Link href="#">Sobre</Link>
        <Link href="#">Contato</Link>
        <Link href="#">Termos de uso</Link>
        <Link href="#">Política de privacidade</Link>
      </LinksContainer>
    </Container>
  )
}
