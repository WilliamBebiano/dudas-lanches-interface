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
  width: 200px;
  height: auto;
`

export const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-evenly;
  align-items: center;
  width: 70vw;
`

export const Link = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  align-items: center;
  font-size: 14px;
  color: #000;

  margin-right: 10px;

  img {
    width: 60px;
    border-radius: 180px;
  }
`
export const LinkContato = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 16px;
  color: #ffffff;
  margin-right: 10px;
  gap: 15px;

  img {
    width: 35px;
    border-radius: 180px;
  }
  p {
    display: flex;
    align-items: center;
  }
`
