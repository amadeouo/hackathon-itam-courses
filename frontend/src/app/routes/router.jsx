import { createBrowserRouter } from 'react-router-dom'
import { Home } from '@pages/Home/ui/Home.jsx'
import { Auth } from '@pages/Auth/ui/Auth.jsx'

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