import React, { useCallback } from 'react'
import axios from 'axios'
import { TOKEN_NAME } from '@environments'

const StatusEnum = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  WARNING: 'WARING',
  INFO: 'INFO'
}

export function useCallApi(url) {
  const token = localStorage.getItem(TOKEN_NAME)

  const api = axios.create({
    baseUrl: url,
    timeout: 5000,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const getMethod = useCallback(async (data = {}) => {
    try {
      const response = await api.get('/', data)
      return response.data
    } catch (err) {
      console.log(err)
    }
  })

  const postMethod = useCallback(async data => {
    try {
      const response = await api.post(null, data)
      return response.data
    } catch (err) {
      console.log(err)
    }
  })

  const putMethod = useCallback(async (id, data) => {
    try {
      const response = await api.put(`/${id}`, data)
      return response.data
    } catch (err) {
      console.log(err)
    }
  })

  const deleteMethod = useCallback(async id => {
    try {
      const response = await api.delete(`/${id}`)
      return response.data
    } catch (err) {
      console.log(err)
    }
  })

  return {
    getMethod,
    postMethod,
    putMethod,
    deleteMethod
  }
}
