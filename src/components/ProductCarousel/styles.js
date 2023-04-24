import styled from 'styled-components'
export const Container = styled.div`
  max-width: 100vw;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;
  background-color: #ffffff;

  .rec.rec-arrow {
    background: #312424;
    color: #fff;
  }
  .rec.rec-arrow:hover {
    border-radius: 50%;
    background: #e79d0f;
    color: white;
    border: none;
  }
  /* hide disabled buttons */
  .rec.rec-arrow:disabled {
    visibility: hidden;
  }
  h3 {
    color: #c12a21;
    line-height: 120%;
    font-weight: bold;
    font-size: calc(1.3rem + 0.2vw);
  }
  p {
    line-height: 120%;
    font-weight: bold;
    font-size: calc(1.3rem + 0.6vw);
  }
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 25px 0;
  margin-top: 35px;
  margin-bottom: 35px;
`

export const CategoryImg = styled.img`
  width: 30rem;
  height: 5.7rem;
`
export const CategoryImgShow = styled.img`
  width: 13rem;
  height: 12rem;
  border-radius: 15px;
  margin-top: 1rem;
`
export const WrapperProducts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 10px;
  margin: 15px;
  gap: 20px;
  border-radius: 15px;
  border: 1px solid #fff;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
`
export const Button = styled.button`
  width: 200px;
  height: 52.13px;
  background: #c12a21;
  border-radius: 30px;
  text-align: center;
  border: none;
  margin: 1rem;
  padding: 10px;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-decoration: none;

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
