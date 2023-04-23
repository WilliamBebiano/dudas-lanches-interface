import React from 'react'

import Homelogo from '../../assets/homelogo3.svg'
import {
  CategoryCarousel,
  Division,
  Footer,
  ProductCarousel,
  Promotion,
  Header
} from '../../components'
import { Container, HomeImg, WrapperImg, ButtonNew } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      <WrapperImg>
        <div>
          <h3>#EUVEJO </h3>
          <h2>#EUQUERO</h2>
          <h1>#EUCOMPRO</h1>
          <ButtonNew>#EUQUERO!</ButtonNew>
        </div>
        <HomeImg src={Homelogo} alt="Logo da home" />
      </WrapperImg>
      <CategoryCarousel />
      <ProductCarousel />
      <Division />
      <Promotion />
      <Footer />
    </Container>
  )
}
