export const routes = [
  {
    label: 'Login',
    path: '/login',
    component: 'login',
    status: 'public'
  },
  {
    label: 'Register',
    path: '/register',
    component: 'register',
    status: 'public'
  },
  {
    label: 'App',
    path: '/',
    component: 'root',
    status: 'private',
    private: true,
    routes: [
      {
        label: 'Dashboard',
        path: '/dashboard',
        component: 'dashboard'
      },
      {
        label: 'home',
        path: '/home',
        component: 'home'
      },
      {
        label: 'user',
        path: '/user/:invitationId',
        component: 'user',
        exact: true
      }
    ]
  },
  {
    label: 'NoMatch',
    path: '*',
    component: 'NoMatch',
    status: 'notfound'
  }
]
