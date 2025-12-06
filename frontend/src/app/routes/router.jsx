import { createBrowserRouter } from 'react-router-dom'
import { Main } from '@pages/Main/ui/Main.jsx'
import { Auth } from '@pages/Auth/ui/Auth.jsx'
import {MainMenu} from "@modules/MainMenu/ui/MainMenu";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: "/main",
        element: <MainMenu />,
      },
      {
        path: "/search",
        element: <MainMenu isSearchPage />,
      },
      {
        path: "profile",
        element: "",
      }
    ]
  },
  {
    path: '/auth',
    element: <Auth />,
  },
])