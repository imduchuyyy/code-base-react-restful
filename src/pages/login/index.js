import React from 'react'
import { useAuth } from '@contexts'

function Login(props) {
  const { login } = useAuth()
  return (
    <button onClick={() => login()}>login</button>
  )
}

export default Login