import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import LogoImage from '../../assets/dudas-logo1.svg'
import RegisterImg from '../../assets/register-bgnone.svg'
import Button from '../../components/Button'
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

function Register() {
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
    const response = await api.post('users', {
      name: clientData.name,
      email: clientData.email,
      password: clientData.password
    })
    console.log(response)
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
              Já possui conta ? <a>SignIn</a>
            </SignInLink>
          </ContainerLogin>
        </form>
      </ContainerItens>
    </Container>
  )
}

export default Register
