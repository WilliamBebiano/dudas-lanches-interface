import styled from 'styled-components'

export const Container = styled.div`
  background: #e5e5e5;
`
export const WrapperImg = styled.div`
  display: flex;
  justify-content: center;
  background: #e79d0f;
  /* background: #C12A21; */
  width: 100vw;
  max-height: 50vh;

  h3 {
    font-size: 4rem;
    padding: 10px;
    margin: 5px;
    color: white;
    /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); */
    border-radius: 30px;
    text-align: left;
    font-weight: 900;
  }
  h2 {
    font-size: 4.5rem;
    padding: 10px;
    margin: 5px;
    color: white;
    font-weight: 900;
    /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); */
    border-radius: 30px;
    text-align: center;
  }
  h1 {
    font-size: 5rem;
    padding: 10px;
    margin: 5px;
    color: white;
    font-weight: 900;
    /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); */
    border-radius: 30px;
    text-align: right;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`

export const HomeImg = styled.img`
  width: 40vw;
`
export const ButtonNew = styled.button`
  position: relative;
  font-size: 30px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 2.5em;
  display: inline-block;
  border-radius: 6em;
  transition: all 0.2s;
  border: none;
  font-family: inherit;
  font-weight: 900;
  color: white;
  background-color: #c12a21;
  margin-bottom: 15px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }
  &::after {
    background-color: #fff;
  }

  &::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }
`
