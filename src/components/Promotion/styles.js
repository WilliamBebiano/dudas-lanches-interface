import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`
export const WrapperDivision = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  justify-content: space-evenly;
`

export const ImageDivision = styled.img`
  height: 50rem;
  width: 30rem;
`
