import React from 'react'

import Homelogo from '../../assets/homelogo3.svg'
import { Footer, CartItems, CartResume, Header } from '../../components'
// import api from '../../services/api'
import { Container, HomeImg, WrapperImg, Wrapper } from './styles'

export function Cart() {
  return (
    <Container>
      <Header />
      <WrapperImg>
        <div>
          <h1>
            VOCÊ VAI QUERER <span>MAIS!</span>
          </h1>
        </div>
        <HomeImg src={Homelogo} alt="Logo da home" />
      </WrapperImg>
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
      <Footer />
    </Container>
  )
}
