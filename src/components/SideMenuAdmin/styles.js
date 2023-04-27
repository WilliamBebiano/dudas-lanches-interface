import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background: #3c3c3c;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
  min-width: 300px;
  top: 0;
  left: 0;

  hr {
    margin: 50px 15px;
  }

  .icon {
    color: #ffffff;
    margin-right: 10px;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  background: ${props => (props.isActive ? '#565656' : 'none')};
  border-radius: 2px;
  margin: 10px;
  padding-left: 20px;
`

export const ListLinK = styled(Link)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  text-decoration: none;
`
