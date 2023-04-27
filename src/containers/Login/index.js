import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import LogoImage from '../../assets/dudas-logo1.svg'
import LoginImg from '../../assets/register-bgnone.svg'
import { Button } from '../../components'
import paths from '../../constants/paths'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SignInLink,
  ContainerLogin,
  LogoDudas,
  LoginWrap,
  ButtonArea,
  Error
} from './styles'

export function Login() {
  const history = useHistory()
  const { putUserData } = useUser()

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

  const onSubmit = async clientData => {
    let data = null // declare data with an initial null value
    try {
      const response = await api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      })
      data = response.data // update the data value here
      putUserData(data)

      toast.success(`Bem-Vindo(a) ao Dudas Lanches ${data.name}!`, {
        position: 'top-right',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      })
    } catch (error) {
      toast.error('Verificar E-mail e senha ', {
        position: 'top-right',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      })
    }

    setTimeout(() => {
      if (data && data.admin) {
        // check if data exists here
        history.push(paths.Order)
      } else {
        history.push('/')
      }
    }, 1000)
  }

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
              Não possui conta ?{' '}
              <Link style={{ color: 'white' }} to="/cadastro">
                Sign Up
              </Link>
            </SignInLink>
          </ContainerLogin>
        </form>
      </ContainerItens>
    </Container>
  )
}
