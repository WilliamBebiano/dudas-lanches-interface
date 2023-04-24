import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  overflow-x: hidden;
`
export const WrapperImg = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #e79d0f;
  /* background: #C12A21; */
  width: 100vw;
  max-height: 50vh;

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

export const HomeImg = styled.img`
  width: 40vw;
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #ffffff;
`
