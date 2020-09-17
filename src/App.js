import React, { lazy } from 'react'
import { hot } from 'react-hot-loader'
import { PrivateRoute, PublicRoute } from '@helpers'
import { Switch, Route } from 'react-router-dom'
import { routes } from './routes'

function App() {
  return (
    <Switch>
      {
        routes && routes.map((route, i) => {
          const LazyComponent = lazy(() => {
            return new Promise(resolve => {
              setTimeout(() => resolve(import(`@pages/${route.component}/index.js`)), 500)
            })
          })
          switch (route.status) {
            case 'public':
              return (
                <PublicRoute key={i} path={route.path} exact={route.exact}>
                  <LazyComponent />
                </PublicRoute>
              )
            case 'private':
              return (
                <PrivateRoute key={i} path={route.path} exact={route.exact}>
                  {/* <Layout {...route}> */}
                  <LazyComponent {...route} />
                  {/* </Layout> */}
                </PrivateRoute>
              )
            default:
              return (
                <Route key={i} path={route.path} exact={route.exact}>
                  <LazyComponent />
                </Route>
              )
          }
        })
      }
    </Switch>
  )
}

export default hot(module)(App)
