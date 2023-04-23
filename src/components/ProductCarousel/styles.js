import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100vw;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;

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
  border-radius: 15px;
  border: 1px solid #fff;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
`
