import {
  faCartShopping,
  faUser,
  faArrowRightFromBracket
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import Dudas from '../../assets/dudas-logo1.svg'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  PageLink,
  ContainerRight,
  ContainerText,
  Line
} from './styles'

export function Header() {
  const { logout, userData } = useUser()

  const {
    push,
    location: { pathname }
  } = useHistory()

  const logoutUser = () => {
    logout()
    push('/login')
  }
  return (
    <Container>
      <ContainerLeft>
        <img src={Dudas} style={{ width: 100 }} />
        <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => push('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          {' '}
          Ver Produtos{' '}
        </PageLink>
      </ContainerLeft>
      <ContainerRight>
        <PageLink>
          <FontAwesomeIcon
            onClick={() => push('/carrinho')}
            icon={faCartShopping}
            color={'#e79d0f'}
            size="s"
          />
        </PageLink>
        <Line></Line>
        <PageLink>
          <FontAwesomeIcon icon={faUser} size="s" />
        </PageLink>
        <ContainerText>
          <h3>
            <span>Olá,</span> {userData.name}{' '}
          </h3>
          <h4 onClick={logoutUser}>
            Sair <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </h4>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
