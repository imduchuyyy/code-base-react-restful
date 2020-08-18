import React, { Suspense } from 'react'
import { render } from 'react-dom'
import App from './App'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter } from 'react-router-dom'
import './i18n'
import { I18nProvider, AuthProvider, SocketProvider } from '@contexts'
import { Loading } from '@components'

const rootElement = document.getElementById('root')
render(
  <React.StrictMode>
    <CookiesProvider>
      <I18nProvider>
        <SocketProvider>
          <AuthProvider>
            <Suspense fallback={<Loading />}>
              <BrowserRouter>
                <App></App>
              </BrowserRouter>
            </Suspense>
          </AuthProvider>
        </SocketProvider>
      </I18nProvider>
    </CookiesProvider>
  </React.StrictMode>,
  rootElement
)
