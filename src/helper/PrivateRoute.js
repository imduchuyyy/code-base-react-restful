import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { useAuth } from '@contexts'

export default function PrivateRoute({ children, ...rest }) {
  let { isAuth } = useAuth()
  let location = useLocation()

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
