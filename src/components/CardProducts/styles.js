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
  background: #fff;
  box-shadow: 10px 10px 10px #bebebe, -10px -10px 10px #ffffff;
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
  align-items: center;
  width: 10rem;
  height: 10rem;
  /* border: 1px solid #fff;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff; */
`
export const ProductName = styled.h3`
  text-align: center;
`
export const ProductPrice = styled.h2``
