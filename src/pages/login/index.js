import React from 'react'
import { useAuth } from '@contexts'

function Login() {
  const { login } = useAuth()
  return (
    <button type="submit" onClick={() => login()}>login</button>
  )
}

export default Login
