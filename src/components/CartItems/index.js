import { faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Container, Header, Body, EmptyCart } from './styles'

export function CartItems() {
  const { cartProducts, increaseProducts, decreaseProducts, deleteProducts } =
    useCart()

  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preco</p>
        <p style={{ paddingRight: 30 }}>Quantidade</p>
        <p>Total</p>
      </Header>
      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map(product => (
          <Body key={product.id}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className="quantity-container">
              <button onClick={() => decreaseProducts(product.id)}>
                <FontAwesomeIcon
                  icon={faMinus}
                  size="2xs"
                  style={{ color: '#000000' }}
                />{' '}
              </button>
              <p>{product.quantity}</p>
              <button onClick={() => increaseProducts(product.id)}>
                {' '}
                <FontAwesomeIcon
                  icon={faPlus}
                  style={{ color: '#054e04' }}
                  size="2xs"
                />{' '}
              </button>
            </div>
            <p className="grid-total">
              {formatCurrency(product.price * product.quantity)}{' '}
              <button
                className="delete-button"
                onClick={() => deleteProducts(product.id)}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  size="xs"
                  style={{ color: '#c12a21' }}
                />
              </button>
            </p>
          </Body>
        ))
      ) : (
        <EmptyCart> Carrinho Vazio </EmptyCart>
      )}
    </Container>
  )
}
