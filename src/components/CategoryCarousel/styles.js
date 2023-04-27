import { Link } from 'react-router-dom/cjs/react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100vw;
  margin-left: auto;
  margin-right: auto;
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

  .jIqSqa {
    background-color: #e79d0f;
    box-shadow: #e79d0f 0px 0px 1px 3px;
  }
  .jIqSqa:hover .jIqSqa:focus {
    cursor: pointer;
    box-shadow: #e79d0f 0px 0px 1px 3px;
  }
  .kGqetR {
    box-shadow: #e79d0f 0px 0px 1px 2px;
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

export const ButtonLink = styled(Link)`
  width: 350px;
  height: 52.13px;
  background: #c12a21;
  border-radius: 30px;
  text-align: center;
  border: none;
  margin: 2rem;
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
