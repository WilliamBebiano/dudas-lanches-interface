import React from 'react'

import Homelogo from '../../assets/homelogo3.svg'
import {
  CategoryCarousel,
  Division,
  Footer,
  ProductCarousel,
  Header
} from '../../components'
import { Container, HomeImg, WrapperImg, ButtonNew } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      <WrapperImg>
        <div>
          <h1>
            <span>AMOR</span> A PRIMEIRA MORDIDA
          </h1>
          <ButtonNew>Eu quero agora!</ButtonNew>
        </div>
        <HomeImg src={Homelogo} alt="Logo da home" />
      </WrapperImg>
      <CategoryCarousel />
      <Division />
      <ProductCarousel />
      <Footer />
    </Container>
  )
}
