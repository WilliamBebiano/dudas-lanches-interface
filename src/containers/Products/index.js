import React, { useEffect, useState } from 'react'

import DudasLogo from '../../assets/dudas-logo1.svg'
import Homelogo from '../../assets/homelogo3.svg'
import CardProducts from '../../components/CardProducts'
import Footer from '../../components/Footer'
import api from '../../services/api'
import {
  Container,
  HomeImg,
  WrapperImg,
  Dudasimg,
  CategoryList,
  ProductsContainer
} from './styles'

function Products() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

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

  return (
    <Container>
      <WrapperImg>
        <HomeImg src={Homelogo} alt="Logo da home" />
        <Dudasimg src={DudasLogo} alt="Logo da home" />
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
      <ProductsContainer>
        {products &&
          products.map(product => (
            <CardProducts key={product.id} product={product} />
          ))}
      </ProductsContainer>
      <Footer />
    </Container>
  )
}
export default Products
