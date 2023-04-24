import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 100vw;
`
export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
export const PageLink = styled.div`
  margin: 15px;
  padding: 10px;
  color: ${props => (props.isActive ? '#000000' : 'rgba(0, 0, 25, 0.4)')};
  font-weight: 400;
  font-size: 18px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  cursor: pointer;
  text-decoration: none;
`
export const ContainerRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
export const ContainerText = styled.div`
  h3 {
    color: #000;
  }
  span {
    color: #000;
  }
  h4 {
    color: #c12a21;
    cursor: pointer;
  }
`
export const Line = styled.div`
  height: 40px;
  border-right: 0.5px solid #bababa;
`
