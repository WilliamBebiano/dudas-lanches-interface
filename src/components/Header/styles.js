import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  color: #000000;
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
  font-weight: 400;
`
export const ContainerRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
export const ContainerText = styled.div`
  h3 {
    color: #e79d0f;
  }
  span {
    color: #000;
  }
  h4 {
    color: #c12a21;
  }
`
