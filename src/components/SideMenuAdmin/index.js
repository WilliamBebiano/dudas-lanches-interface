import LogoutIcon from '@mui/icons-material/Logout'
import PropTypes from 'prop-types'
import React from 'react'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ItemContainer, ListLinK } from './styles'

export function SideMenuAdmin({ path }) {
  const { logout } = useUser()
  return (
    <Container>
      <hr></hr>
      {listLinks.map(item => (
        <ItemContainer key={item.id} isActive={path === item.link}>
          <item.icon className="icon" />
          <ListLinK to={item.link}>{item.label}</ListLinK>
        </ItemContainer>
      ))}
      <hr></hr>
      <ItemContainer style={{ position: 'absolute', bottom: 30 }}>
        <LogoutIcon className="icon" />
        <ListLinK to="/login" onClick={logout}>
          Sair
        </ListLinK>
      </ItemContainer>
    </Container>
  )
}
SideMenuAdmin.propTypes = {
  path: PropTypes.string
}
