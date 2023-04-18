import styled from 'styled-components'

import BackgroundImage from '../../assets/vetor-bg2.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #373737;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Mansalva', cursive;
`

export const RegisterImage = styled.img`
  background: url(${BackgroundImage}) no-repeat;
  height: 100vh;
  width: 50vw;
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 50vw;
`
export const LogoDudas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30vw;
  height: 50vh;
  background: #373737;
  padding: 10px 50px;

  h1 {
    color: #ffffff;
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`
export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  text-align: left;
`
export const Error = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: #cc1717;
  margin-bottom: 5px;
  text-align: left;
`
export const Input = styled.input`
  width: 23vw;
  height: 38.32px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  margin-bottom: 10px;
  border: ${props => (props.error ? '2px solid #CC1717;' : 'none')};
  padding-left: 1rem;
`
export const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`

export const SignInLink = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
