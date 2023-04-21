import styled from 'styled-components'

export const Container = styled.div`
  background: #f5f5f5;
`
export const WrapperConteudo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
`
export const WrapperImg = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: #e79d0f;
  /* background: #C12A21; */
  width: 100vw;
`
export const Dudasimg = styled.img`
  width: calc(7rem + 5vw);
`
export const HomeImg = styled.img`
  width: calc(20rem + 6vw);
`
export const CategoryList = styled.button`
  padding: 15px;
  margin: 1px;
  border: ${props => (props.isActiveCategory ? '1px solid #c12a21' : 'none')};
  border-radius: 5px;
  font-size: large;
  font-weight: 900;
  width: calc(6rem + 6vw);
  background: ${props => (props.isActiveCategory ? '#f5f5f5' : '#c12a21')};
  color: ${props => (props.isActiveCategory ? '#c12a21' : '#f5f5f5')};
`
export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  padding: 15px;
  margin-top: 20px;
`
