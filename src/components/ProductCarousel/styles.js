import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;

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
  /* background: #841416; */
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
