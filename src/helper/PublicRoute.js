import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { useAuth } from '@contexts'

export default function PublicRoute({ children, ...rest }) {
  let { isAuth } = useAuth()
  let location = useLocation()

  return isAuth ? (
    <Redirect
      to={{
        pathname: '/',
        state: { from: location }
      }}
    />
  ) : (
    <Route {...rest}>{children}</Route>
  )
}
