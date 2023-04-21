import React from 'react'

import DudasLogo from '../../assets/dudas-logo1.svg'
import Homelogo from '../../assets/homelogo3.svg'
import {
  CategoryCarousel,
  Division,
  Footer,
  ProductCarousel,
  Promotion
} from '../../components'
import { Container, HomeImg, WrapperImg, Dudasimg } from './styles'

export function Home() {
  return (
    <Container>
      <WrapperImg>
        <HomeImg src={Homelogo} alt="Logo da home" />
        <Dudasimg src={DudasLogo} alt="Logo da home" />
      </WrapperImg>
      <CategoryCarousel />
      <ProductCarousel />
      <Division />
      <Promotion />
      <Footer />
    </Container>
  )
}
