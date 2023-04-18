import axios from 'axios'

const apiDudasBurguer = axios.create({
  baseURL: 'http://localhost:3001'
})

export default apiDudasBurguer
