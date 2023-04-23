import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100vw;
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
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const WrapperMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  width: 35rem;
  height: 40rem;
  margin: 5px;
  padding: 15px;
  border-radius: 15px;
  margin-top: 1rem;
  border: 1px solid #fff;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
`

export const CategoryImg = styled.img`
  margin-top: 2rem;
  width: 30rem;
`
export const CategoryImgShow = styled.img`
  width: 33rem;
  height: 32rem;
  border-radius: 30px;
  /* margin-top: 1rem; */
  padding: 15px;
`
