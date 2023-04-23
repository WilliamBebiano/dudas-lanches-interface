import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Category from '../../assets/Nosso Menu1.svg'
import api from '../../services/api'
import { Button } from '../Button'
import {
  Container,
  CategoryImg,
  CategoryImgShow,
  Wrapper,
  WrapperMenu
} from './styles'

export function CategoryCarousel() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategories()
  }, [])

  return (
    <Container>
      <Wrapper>
        <CategoryImg src={Category} alt="Nosso Menu" />
      </Wrapper>
      <Carousel
        itemsToShow={2}
        enableAutoPlay={true}
        autoPlaySpeed={5000}
        isInfinite={true}
      >
        {categories &&
          categories.map(category => (
            <div key={category.id}>
              <WrapperMenu>
                <CategoryImgShow src={category.url} alt="foto da categoria" />

                <Button
                  style={{
                    border: 'none',
                    background: '#C12A21',
                    color: '#ffffff',
                    width: 350,
                    margin: 25,
                    padding: 10
                  }}
                >
                  + VEJA MAIS
                </Button>
              </WrapperMenu>
            </div>
          ))}
      </Carousel>
    </Container>
  )
}
