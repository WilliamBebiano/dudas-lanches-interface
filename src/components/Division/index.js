import React from 'react'

import Coca from '../../assets/divisionCoca.svg'
import Combinacao from '../../assets/DUPLA PERFEITA.svg'
import Hamburguer from '../../assets/register-bgnone.svg'
import { Container, ImageDivision, ImageComb } from './styles'

export function Division() {
  return (
    <Container>
      <ImageDivision src={Hamburguer} alt="Hamburguer" />
      <ImageComb src={Combinacao} alt="Hamburguer" />
      <ImageDivision src={Coca} alt="Hamburguer" />
    </Container>
  )
}
