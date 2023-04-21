import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState({})

  const putProductsInCart = async product => {
    // setCartProducts(userInfo)
    // await localStorage.setItem(
    //   'dudaslanches:userData',
    //   JSON.stringify(userInfo)
    // )
    console.log(product)
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem('dudaslanches:cartInfo')
      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData))
      }
    }
    loadUserData()
  }, [])

  return (
    <CartContext.Provider value={{ putProductsInCart, cartProducts }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useUser must be uses with UserContext')
  }
  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}
