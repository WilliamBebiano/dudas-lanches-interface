import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import Homelogo from '../../assets/homelogo3.svg'
import { CardProducts, Footer, Header } from '../../components'
import api from '../../services/api'
import {
  Container,
  HomeImg,
  WrapperImg,
  CategoryList,
  ProductsContainer,
  WrapperConteudo
} from './styles'

export function Products({ location: { state } }) {
  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredproducts, setFilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      const newCategories = [{ id: 0, name: 'Todos' }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data } = await api.get('products')

      setProducts(data)
    }
    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        product => product.category_id === activeCategory
      )
      setFilteredProducts(newFilteredProducts)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <Header />
      <WrapperImg>
        <div>
          <h1>
            DO JEITO QUE <span>VOCÊ</span> GOSTA!
          </h1>
        </div>
        <HomeImg src={Homelogo} alt="Logo da home" />
      </WrapperImg>

      <WrapperImg style={{ background: 'none', justifyContent: 'center' }}>
        {categories &&
          categories.map(category => (
            <CategoryList
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryList>
          ))}
      </WrapperImg>
      <WrapperConteudo>
        <ProductsContainer>
          {filteredproducts &&
            filteredproducts.map(product => (
              <CardProducts key={product.id} product={product} />
            ))}
        </ProductsContainer>
      </WrapperConteudo>
      <Footer />
    </Container>
  )
}

Products.propTypes = {
  location: PropTypes.object
}
