import PropTypes from 'prop-types'
import React from 'react'

import formatCurrency from '../../utils/formatCurrency'
import ContainerButton from '../Button'
import {
  Container,
  Image,
  ProductName,
  ProductPrice,
  Wrapper
} from '../CardProducts/styles'

function CardProducts({ product }) {
  return (
    <Container>
      <Image src={product.url} alt="imagem do produto" />
      <Wrapper>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
        <ContainerButton
          style={{
            border: 'none',
            background: '#C12A21',
            marginTop: 5,
            color: '#ffffff',
            width: 100
          }}
        >
          Adicionar
        </ContainerButton>
      </Wrapper>
    </Container>
  )
}

export default CardProducts

CardProducts.propTypes = {
  product: PropTypes.object
}
