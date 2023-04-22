import React from 'react'

import DudasLogo from '../../assets/dudas-logo1.svg'
import Homelogo from '../../assets/homelogo3.svg'
import { Footer } from '../../components'
// import api from '../../services/api'
import { Container, HomeImg, WrapperImg, Dudasimg } from './styles'

export function Cart() {
  return (
    <Container>
      <WrapperImg>
        <HomeImg src={Homelogo} alt="Logo da home" />
        <Dudasimg src={DudasLogo} alt="Logo da home" />
      </WrapperImg>

      <Footer />
    </Container>
  )
}
