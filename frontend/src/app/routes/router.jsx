import { createBrowserRouter } from 'react-router-dom'
import { Main } from '@pages/Main/ui/Main.jsx'
import { Auth } from '@pages/Auth/ui/Auth.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: "/main",
        element: ""
      },
      {
        path: "/search",
      },
      {
        path: "profile",
      }
    ]
  },
  {
    path: '/auth',
    element: <Auth />,
  },
])