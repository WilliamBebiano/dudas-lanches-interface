import CancelIcon from '@mui/icons-material/Cancel'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'
import { Container, Img, EditarIcon } from './styles'

function ListProducts() {
  const [products, setProducts] = useState()

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('products')

      setProducts(data)
    }
    loadOrders()
  }, [])

  function isOffer(offerStatus) {
    if (offerStatus) {
      return <CheckBoxIcon style={{ color: 'green' }} />
    }
    return <CancelIcon style={{ color: '#CC1717' }} />
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Precos</TableCell>
              <TableCell align="center">Produtos em oferta</TableCell>
              <TableCell>Imagem do Produto</TableCell>
              <TableCell align="center">Editar Produto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map(products => (
                <TableRow
                  key={products.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {products.name}
                  </TableCell>
                  <TableCell>{formatCurrency(products.price)}</TableCell>
                  <TableCell align="center">
                    {isOffer(products.offer)}
                  </TableCell>
                  <TableCell align="center">
                    {' '}
                    <Img src={products.url} style={{ width: 70 }} />
                  </TableCell>
                  <TableCell align="center">
                    <EditarIcon />{' '}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ListProducts
