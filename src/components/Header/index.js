import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import Dudas from '../../assets/dudas-logo1.svg'
import {
  Container,
  ContainerLeft,
  PageLink,
  ContainerRight,
  ContainerText
} from './styles'

export function Header() {
  return (
    <Container>
      <ContainerLeft>
        <img src={Dudas} style={{ width: 100 }} />
        <PageLink>Home</PageLink>
        <PageLink> Ver Produtos </PageLink>
      </ContainerLeft>
      <ContainerRight>
        <PageLink>
          <FontAwesomeIcon icon={faCartShopping} size="s" />
        </PageLink>
        <div>|</div>
        <PageLink>
          <FontAwesomeIcon icon={faUser} size="s" />
        </PageLink>
        <ContainerText>
          <p>Olá William </p>
          <p>Sair</p>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
