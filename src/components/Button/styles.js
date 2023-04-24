import styled from 'styled-components'

export const ContainerButton = styled.button`
  width: 23rem;
  height: 52.13px;
  background: #841416;
  border-radius: 30px;
  text-align: center;
  margin-top: 2rem;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`
