import styled from 'styled-components'

import { Button } from '../../../components/Button'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background: #565656;
    border-radius: 10px;
    padding: 30px;
  }
`

export const Label = styled.p`
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 3px;
`

export const Input = styled.input`
  height: 40px;
  border-radius: 8px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  border: none;
  margin-bottom: 5px;
  width: 100%;
  min-width: 300px;
`
export const ButtonStyled = styled(Button)`
  width: 100%;
  font-size: 18px;
`
export const LabelUpload = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px dashed #ffffff;
  padding: 10px;
  align-items: center;
  font-size: 14px;
  margin-bottom: 20px;
  color: #ffffff;
  cursor: pointer;
  height: 84px;

  input {
    opacity: 0;
    width: 100%;
    cursor: pointer;
  }
`
