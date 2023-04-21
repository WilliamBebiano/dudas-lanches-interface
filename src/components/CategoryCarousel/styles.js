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
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #841416; */
`
export const WrapperMenu = styled.div`
  display: flex;
  flex-direction: row;
  width: 60rem;
  height: 28rem;
  margin: 5px;
  padding: 5px;
  border-radius: 15px;
  margin-top: 1rem;
`

export const CategoryImg = styled.img`
  margin-top: 2rem;
  width: 30rem;
`
export const CategoryImgShow = styled.img`
  width: 33rem;
  height: 30rem;
  border-radius: 15px;
  margin-top: 1rem;
`
export const CategoryName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #ffffff;
  width: 25rem;
  height: 25rem;
  margin: 5px;
  padding: 5px;
  border-radius: 15px;
  margin-top: 1rem;
`
export const CategoryDescribe = styled.p`
  line-height: 22px;
  font-size: 18px;
  margin: 5px;
  padding: 5px;
  margin-top: 1rem;
  text-align: justify;
`
