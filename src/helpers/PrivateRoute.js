import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { useAuth } from '@contexts'

export function PrivateRoute({ children, ...rest }) {
  const { isAuth } = useAuth()
  const location = useLocation()

  return isAuth ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Redirect
      to={{
          pathname: '/login',
          state: { from: location }
        }}
    />
    )
}
