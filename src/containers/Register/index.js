import { yupResolver } from '@hookform/resolvers/yup'
// import { response } from 'express'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import LogoImage from '../../assets/dudas-logo1.svg'
import RegisterImg from '../../assets/register-bgnone.svg'
import { Button } from '../../components'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
  RegisterImage,
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

export function Register() {
  const users = useUser()
  console.log(users)
  const schema = yup.object().shape({
    name: yup.string().required('Porfavor insira seu nome'),
    email: yup
      .string()
      .email('Digite um e-mail valido')
      .required('E-mail é obrigatorio'),
    password: yup
      .string()
      .required('Senha é obrigatorio')
      .min(8, 'A senha deve ter no minimo 8 digitos'),
    confirmPassword: yup
      .string()
      .required('Senha é obrigatorio')
      .oneOf([yup.ref('password')], 'Senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Cadastro criado com sucesso', {
          position: 'top-right',
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        })
      } else if (status === 409) {
        toast.error('Usuario já cadastrado! Faca Login para continuar', {
          position: 'top-right',
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        })
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error('Falha no sistema! Tente novamente')
    }
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="Burguer" />

      <ContainerItens>
        <LogoDudas>
          <img src={LogoImage} alt="logo Dudas Lanches" width={200} />
        </LogoDudas>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <ContainerLogin>
            <LoginWrap>
              <h1>Cadastra-se</h1>

              <Label>Nome</Label>
              <Input
                type="text"
                {...register('name', { required: true })}
                error={errors.name?.message}
              />
              <Error>{errors.name?.message}</Error>

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

              <Label>Confirmar Senha</Label>
              <Input
                type="password"
                {...register('confirmPassword', { required: true })}
                error={errors.confirmPassword?.message}
              />
              <Error>{errors.confirmPassword?.message}</Error>
            </LoginWrap>

            <ButtonArea>
              <Button type="submit">Sign Up</Button>
            </ButtonArea>

            <SignInLink>
              Já possui conta ?{' '}
              <Link style={{ color: 'white' }} to="/login">
                Sign In
              </Link>
            </SignInLink>
          </ContainerLogin>
        </form>
      </ContainerItens>
    </Container>
  )
}
