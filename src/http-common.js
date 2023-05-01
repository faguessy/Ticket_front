import axios from 'axios'
export const url = 'http://localhost:8080/'
export default axios.create(
  {
    baseURL: 'http://localhost:8080/',
    headers: { accept: 'application/json' }
  })
