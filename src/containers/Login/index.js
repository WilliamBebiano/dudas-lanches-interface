import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import LogoImage from '../../assets/dudas-logo1.svg'
import LoginImg from '../../assets/img-login4.svg'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  Button,
  SignInLink,
  ContainerLogin,
  LogoDudas,
  LoginWrap,
  ButtonArea,
  Error
} from './styles'

function Login() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Digite um e-mail valido')
      .required('E-mail é obrigatorio'),
    password: yup
      .string()
      .required('Senha é obrigatorio')
      .min(8, 'A senha deve ter no minimo 8 digitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = data => console.log(data)

  return (
    <Container>
      <LoginImage src={LoginImg} alt="Burguer" />
      <ContainerItens>
        <LogoDudas>
          <img src={LogoImage} alt="logo Dudas Lanches" width={200} />
        </LogoDudas>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <ContainerLogin>
            <LoginWrap>
              <h1>Login</h1>

              <Label>Email</Label>
              <Input
                type="email"
                {...register('email', { required: true })}
                error={errors.email?.message}
              />
              <Error>{errors.email?.message}</Error>

              <Label>Senha</Label>
              <Input
                type="password"
                {...register('password', { required: true })}
                error={errors.password?.message}
              />
              <Error>{errors.password?.message}</Error>
            </LoginWrap>

            <ButtonArea>
              <Button type="submit">Sign In</Button>
            </ButtonArea>

            <SignInLink>
              Não possui conta ? <a>Sign Up</a>
            </SignInLink>
          </ContainerLogin>
        </form>
      </ContainerItens>
    </Container>
  )
}

export default Login
