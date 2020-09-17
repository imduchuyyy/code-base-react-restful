import React, { Suspense } from 'react'
import { render } from 'react-dom'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter } from 'react-router-dom'
import '@translations'
import { I18nProvider, AuthProvider, SocketProvider } from '@contexts'
import { Loading } from '@components'
import App from './App'

const rootElement = document.getElementById('root')
render(
  <React.StrictMode>
    <CookiesProvider>
      <I18nProvider>
        <SocketProvider>
          <AuthProvider>
            <Suspense fallback={<Loading />}>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </Suspense>
          </AuthProvider>
        </SocketProvider>
      </I18nProvider>
    </CookiesProvider>
  </React.StrictMode>,
  rootElement
)
