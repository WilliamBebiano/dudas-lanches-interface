import styled from 'styled-components'

export const Container = styled.div`
  background: #e79d0f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 40vh;
  padding: 4rem;
`

export const Logo = styled.img`
  width: 100px;
  height: auto;
`

export const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-evenly;
  align-items: center;
  width: 70vw;
`

export const Link = styled.a`
  font-size: 14px;
  color: #000;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    color: #999;
  }
`
