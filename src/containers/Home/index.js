import React from 'react'

import DudasLogo from '../../assets/dudas-logo1.svg'
import Homelogo from '../../assets/homelogo3.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import Division from '../../components/Division'
import Footer from '../../components/Footer'
import ProductCarousel from '../../components/ProductCarousel'
import Promotion from '../../components/Promotion'
import { Container, HomeImg, WrapperImg, Dudasimg } from './styles'

function Home() {
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
export default Home
