import { createBrowserRouter } from 'react-router-dom'
import { Home } from './views/Home.jsx'
import { Auth } from './views/Auth.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth',
    element: <Auth />,
  },
])