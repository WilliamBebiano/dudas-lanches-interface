import React from 'react'

import Acai from '../../assets/merchand-acai.svg'
import Hamburguer from '../../assets/merchand-hamb.svg'
import { Container, ImageDivision } from './styles'

function Promotion() {
  return (
    <Container>
      <ImageDivision src={Acai} alt="Acai" />
      <ImageDivision src={Hamburguer} alt="Hamburguer" />
    </Container>
  )
}

export default Promotion
