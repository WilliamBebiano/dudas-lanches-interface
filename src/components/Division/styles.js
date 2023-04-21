import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 30vh;
  background: #e79d0f;
  margin-top: 4rem;
  margin-bottom: 4rem;
  z-index: 1;
`

export const ImageDivision = styled.img`
  height: 60vh;
  width: 50vw;
  transform: rotate(-10deg);
  z-index: 9999;
`
export const ImageComb = styled.img`
  width: 50vw;
`
