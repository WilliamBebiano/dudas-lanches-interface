import axios from 'axios'

const apiDudasBurguer = axios.create({
  baseURL: 'http://localhost:3001'
})

apiDudasBurguer.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('dudaslanches:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`

  return config
})
export default apiDudasBurguer
