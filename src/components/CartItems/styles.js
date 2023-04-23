import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
  padding: 10px;
  width: max-content;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;

  p {
    font-size: 16px;
    color: #b5b5b5;
  }
`

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  width: max-content + 2vw;
  padding: 10px;
  grid-gap: 10px 15px;

  img {
    border-radius: 15px;
    width: 135px;
    padding: 5px;
  }

  p {
    font-size: 16px;
    color: #000000;
    text-align: justify;
  }
  .quantity-container {
    display: flex;
    align-items: baseline;
    gap: 20px;

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
    }
    button:hover {
      color: grey;
    }
    button:active {
      color: yellow;
    }
  }
  .delete-button {
    height: 30px;
    background: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
  .grid-total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const EmptyCart = styled.div`
  padding: 20px;
  text-align: center;
  font-weight: bold;
`
