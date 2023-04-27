import ReactSelect from 'react-select'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #efefef;
  min-height: 100vh;
`
export const ProdutsImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 5px;
`

export const ReactSelectStyle = styled(ReactSelect)`
  width: 250px;

  .css-13cymwt-control {
    cursor: pointer;
  }
`
export const Menu = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 20px 0;
`

export const LinkMenu = styled.a`
  color: #323d5d;
  cursor: pointer;
  font-weight: ${props => (props.isActiveStatus ? 'bold' : '400')};
  border-bottom: ${props =>
    props.isActiveStatus ? '2px solid #e79d0f' : 'none'};
  width: 150px;
  text-align: center;
  padding-bottom: 5px;
`
