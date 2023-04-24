import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import Products from '../../assets/Ofertas1.svg'
import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  CategoryImg,
  CategoryImgShow,
  Wrapper,
  WrapperProducts,
  Button
} from './styles'

export function ProductCarousel() {
  const [products, setProducts] = useState([])
  const { putProductsInCart } = useCart()
  const { push } = useHistory()
  useEffect(() => {
    async function loadProduct() {
      const { data } = await api.get('products')

      const onlyOffer = data.filter(product => product.offer)

      setProducts(onlyOffer)
    }

    loadProduct()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]
  return (
    <Container>
      <Wrapper>
        <CategoryImg src={Products} alt="Logo da home" />
      </Wrapper>
      <Carousel
        itemsToShow={3}
        breakPoints={breakPoints}
        enableAutoPlay={true}
        autoPlaySpeed={5000}
        isInfinite={true}
      >
        {products &&
          products.map(offer => (
            <div key={offer.id}>
              <WrapperProducts>
                <CategoryImgShow src={offer.url} alt="foto da categoria" />
                <h3>{offer.name}</h3>
                <p>{formatCurrency(offer.price)}</p>
                <Button
                  onClick={() => {
                    push('/carrinho')
                    putProductsInCart(offer)
                  }}
                >
                  Peça Agora
                </Button>
              </WrapperProducts>
            </div>
          ))}
      </Carousel>
    </Container>
  )
}
