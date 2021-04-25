import axios from 'axios'

const api = axios.create({
  baseURL: '',
  headers: {'Authorization': `Bearer - `}
})

export default api