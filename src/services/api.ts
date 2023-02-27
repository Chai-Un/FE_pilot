import axios from 'axios'
import { mockData } from './mock'

const instance = axios.create({
  baseURL: import.meta.env.BASE_URL || ''
})

function responseInterceptorFn(response: any) {
  return response
}

const requestInterceptorFn = (config: any) => {
  if (import.meta.env.VITE_MODE === 'TEST') {
    console.log('Access mock data: ', `${config.method.toUpperCase()} /${config.url}`)
    throw mockData[`${config.method.toUpperCase()} /${config.url}`]
  }
  return config
}

const requestErrorFn = (error: any) => {
  if (import.meta.env.VITE_MODE === 'TEST') {
    console.log('Resolve mock data:', error)
    return Promise.resolve(error)
  }
  return Promise.reject(error)
}

instance.interceptors.response.use(responseInterceptorFn, requestErrorFn)
instance.interceptors.request.use(requestInterceptorFn)

export default instance
