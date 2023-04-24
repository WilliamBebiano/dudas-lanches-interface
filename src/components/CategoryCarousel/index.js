import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import Category from '../../assets/Nosso Menu1.svg'
import api from '../../services/api'
import {
  Container,
  CategoryImg,
  CategoryImgShow,
  Wrapper,
  WrapperMenu,
  ButtonLink
} from './styles'

export function CategoryCarousel() {
  // const history = useHistory()

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
                <ButtonLink
                  to={{
                    pathname: '/produtos',
                    state: { categoryId: category.id }
                  }}
                >
                  {category.name}
                </ButtonLink>
              </WrapperMenu>
            </div>
          ))}
      </Carousel>
    </Container>
  )
}
