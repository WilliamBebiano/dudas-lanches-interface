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
  justify-content: space-around;
  align-items: center;
  background: #e79d0f;
  /* background: #C12A21; */
  width: 100vw;
  max-height: 50vh;
  margin-bottom: 3rem;

  h1 {
    font-size: 4rem;
    padding: 10px;
    color: white;
    font-weight: 900;
    /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); */
    border-radius: 30px;
    text-align: right;
  }
  span {
    color: #c12a21;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`
export const Dudasimg = styled.img`
  width: calc(7rem + 5vw);
`
export const HomeImg = styled.img`
  width: 40vw;
`
export const CategoryList = styled.button`
  padding: 15px;
  margin: 1px;
  border: ${props => (props.isActiveCategory ? '1px solid #c12a21' : 'none')};
  border-radius: 5px;
  font-size: 16px;
  width: calc(6rem + 6vw);
  background: ${props => (props.isActiveCategory ? '#f5f5f5' : '#c12a21')};
  color: ${props => (props.isActiveCategory ? '#c12a21' : '#f5f5f5')};
  cursor: pointer;
  transition: transform 400ms cubic-bezier(0.68, -0.55, 0.27, 2.5),
    border-color 400ms ease-in-out, background-color 400ms ease-in-out;
  word-spacing: -2px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
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
