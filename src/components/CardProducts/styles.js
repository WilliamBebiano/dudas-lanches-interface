import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: max-content;
  margin: 2px;
  padding: 16px;
  border-radius: 30px;
  background: #e0e0e0;
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
`
export const Image = styled.img`
  width: 12rem;
  height: 10rem;
  border-radius: 10px;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 10rem;
  height: 10rem;
`
export const ProductName = styled.h3``
export const ProductPrice = styled.h2``
