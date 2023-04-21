import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Category from '../../assets/Nosso Menu1.svg'
import api from '../../services/api'
import ContainerButton from '../Button'
import {
  Container,
  CategoryImg,
  CategoryImgShow,
  Wrapper,
  WrapperMenu,
  CategoryName,
  CategoryDescribe
} from './styles'

function CategoryCarousel() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategories()
  }, [])

  const categoryDescription = [
    {
      name: 'Hot Dogs',
      describe:
        'Delicie-se com nosso cachorro quente! Salsicha de qualidade, pão macio e deliciosos acompanhamentos. O lanche perfeito para qualquer hora do dia.'
    },
    {
      name: 'Hamburguer',
      describe:
        'Descubra nossa ampla variedade de hambúrgueres! Suculentos e repletos de sabor, com opções que vão desde o clássico até opções diferenciadas. Temos um hambúrguer para todos os gostos.'
    },
    {
      name: 'Bebidas',
      describe:
        'Não deixe de experimentar nossas bebidas refrescantes! Temos opções de refrigerantes clássicos e também o delicioso Açaí, perfeito para os dias quentes. Refresque-se e aproveite sua refeição conosco'
    },
    {
      name: 'Pasteis',
      describe:
        'Prove nossos pasteis deliciosos e crocantes! Com uma variedade de sabores, incluindo carne, queijo, frango e palmito, nossos pasteis são perfeitos para um lanche rápido ou uma refeição completa. Venha experimentar nossas opções!'
    },
    {
      name: 'Caldinhos',
      describe:
        'Aqueça-se com nossos caldinhos deliciosos! Temos opções como feijão, mandioquinha, todos feitos com ingredientes frescos e selecionados. Ideal para acompanhar nossos pasteis ou como uma refeição leve e saborosa. Experimente!'
    }
  ]

  const getCategoryDescription = categoryName => {
    let description = ''
    categoryDescription.forEach(category => {
      if (category.name === categoryName) {
        description = category.describe
      }
    })
    return description
  }

  return (
    <Container>
      <Wrapper>
        <CategoryImg src={Category} alt="Nosso Menu" />
      </Wrapper>
      <Carousel
        itemsToShow={1}
        enableAutoPlay={true}
        autoPlaySpeed={5000}
        isInfinite={true}
      >
        {categories &&
          categories.map(category => (
            <div key={category.id}>
              <WrapperMenu>
                <CategoryImgShow src={category.url} alt="foto da categoria" />
                <CategoryName>
                  <h1 style={{ color: '#C12A21' }}>{category.name}</h1>
                  <CategoryDescribe>
                    {' '}
                    {getCategoryDescription(category.name)}
                  </CategoryDescribe>
                  <ContainerButton
                    style={{
                      border: 'none',
                      background: '#C12A21',
                      color: '#ffffff',
                      width: 350
                    }}
                  >
                    + VEJA MAIS
                  </ContainerButton>
                </CategoryName>
              </WrapperMenu>
            </div>
          ))}
      </Carousel>
    </Container>
  )
}
export default CategoryCarousel
