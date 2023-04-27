import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'

import api from '../../../services/api'
import { Container, Label, Input, ButtonStyled, LabelUpload } from './styles'

function NewProducts() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const { register, handleSubmit, control } = useForm()
  const onSubmit = data => console.log(data)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }
    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome</Label>
        <Input type="text" {...register('name')} />

        <Label>Preco</Label>
        <Input type="number" {...register('price')} />

        <LabelUpload>
          {fileName || (
            <>
              <CloudUploadIcon />
              Carregue a Imagem do Produto
            </>
          )}
          <input
            type="file"
            id="imagem-input"
            accept="image/png, image/jpeg"
            {...register('file')}
            onChange={value => {
              setFileName(value.target.files[0]?.name)
            }}
          />
        </LabelUpload>

        <Controller // usado para controlar lib de terceiros ( ver doc de reactHook form)
          name="category_id"
          control={control}
          render={({ field }) => {
            return (
              <Select
                {...field}
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
                placeholder="Categorias do Produto"
              />
            )
          }}
        ></Controller>

        <ButtonStyled>Adicionar Produto</ButtonStyled>
      </form>
    </Container>
  )
}

export default NewProducts
