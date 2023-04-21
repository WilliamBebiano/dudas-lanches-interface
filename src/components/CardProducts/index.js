import PropTypes from 'prop-types'
import React from 'react'

import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import {
  Container,
  Image,
  ProductName,
  ProductPrice,
  Wrapper
} from '../CardProducts/styles'

export function CardProducts({ product }) {
  return (
    <Container>
      <Image src={product.url} alt="imagem do produto" />
      <Wrapper>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
        <Button
          style={{
            border: 'none',
            background: '#C12A21',
            marginTop: 5,
            color: '#ffffff',
            width: '10rem'
          }}
        >
          Adicionar
        </Button>
      </Wrapper>
    </Container>
  )
}

CardProducts.propTypes = {
  product: PropTypes.object
}
