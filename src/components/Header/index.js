import {
  faCartShopping,
  faUser,
  faArrowRightFromBracket
} from '@fortawesome/free-solid-svg-icons'
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
          <FontAwesomeIcon icon={faCartShopping} color={'#e79d0f'} size="s" />
        </PageLink>
        <div>|</div>
        <PageLink>
          <FontAwesomeIcon icon={faUser} size="s" />
        </PageLink>
        <ContainerText>
          <h3>
            <span>Olá</span> William{' '}
          </h3>
          <h4>
            Sair <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </h4>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
