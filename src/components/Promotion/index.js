import React from 'react'

import Acai from '../../assets/merchand-acai.svg'
import Hamburguer from '../../assets/merchand-hamb.svg'
import { Container, ImageDivision, WrapperDivision } from './styles'

export function Promotion() {
  return (
    <Container>
      <WrapperDivision>
        <ImageDivision src={Acai} alt="Acai" />
        <ImageDivision src={Hamburguer} alt="Hamburguer" />
      </WrapperDivision>
    </Container>
  )
}
