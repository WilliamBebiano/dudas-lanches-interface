import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import Homelogo from '../../assets/homelogo3.svg'
import {
  CategoryCarousel,
  Division,
  Footer,
  ProductCarousel
} from '../../components'
import { Container, HomeImg, WrapperImg, ButtonNew } from './styles'

export function Home() {
  const history = useHistory()
  return (
    <Container>
      <WrapperImg>
        <div>
          <h1>
            <span>AMOR</span> A PRIMEIRA MORDIDA
          </h1>
          <ButtonNew onClick={() => history.push('/produtos')}>
            Eu quero agora!
          </ButtonNew>
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
