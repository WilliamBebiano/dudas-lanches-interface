import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'

import paths from '../../constants/paths'
const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
    icon: ShoppingBagIcon
  },
  {
    id: 2,
    label: 'Produtos',
    link: paths.Products,
    icon: FormatListBulletedIcon
  },
  {
    id: 3,
    label: 'Novo Produtos',
    link: paths.NewProduct,
    icon: AddShoppingCartIcon
  }
]

export default listLinks
