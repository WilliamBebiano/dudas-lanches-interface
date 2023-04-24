import styled from 'styled-components'

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
`

export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
  padding: 15px;
  width: calc(20rem + 4vw);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .container-top {
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-tax delivery-tax-price';

    .title {
      grid-area: title;
      margin-bottom: 20px;
    }

    .items {
      grid-area: items;
    }
    .items-price {
      grid-area: items-price;
    }
    .delivery-tax {
      grid-area: delivery-tax;
    }
    .delivery-tax-price {
      grid-area: delivery-tax-price;
    }
  }
  .container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
    font-size: 24px;
  }
`
