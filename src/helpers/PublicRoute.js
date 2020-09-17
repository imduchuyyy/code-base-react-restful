import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { useAuth } from '@contexts'

export function PublicRoute({ children, ...rest }) {
  const { isAuth } = useAuth()
  const location = useLocation()

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
