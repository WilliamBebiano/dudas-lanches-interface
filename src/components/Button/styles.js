import styled from 'styled-components'

export const ContainerButton = styled.button`
  width: 219px;
  height: 52.13px;
  background: #e79d0f;
  border-radius: 30px;
  text-align: center;
  margin-top: 2rem;
  font-size: 20px;
  line-height: 30px;
  color: #841416;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;

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
