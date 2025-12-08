import { createBrowserRouter } from 'react-router-dom'
import { Main } from '@pages/Main/ui/Main.jsx'
import { Auth } from '@pages/Auth/ui/Auth.jsx'
import {MainMenu} from "@modules/MainMenu/ui/MainMenu";
import {ProfileMenu} from "@modules/ProfileMenu/ui/ProfileMenu";
import {Hack} from "@pages/Hack/ui/Hack";
import {PageWrapper} from "@shared/page-wrapper/ui/PageWrapper";
import {UserProfile} from "@modules/UserProfile/ui/UserProfile";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        path: "/main",
        element: <MainMenu />,
      },
      {
        path: "/search",
        element: <MainMenu isSearchPage />,
      },
      {
        path: "profile",
        element: <ProfileMenu />,
      }
    ]
  },
  {
    path: '/auth',
    element: <Auth />,
  },
  {
    path: '/hack',
    element: <Hack />,
    children: [
      {
        path: ':idHack',
        element: '',
      }
    ],
  },
  {
    path: 'users',
    element: <PageWrapper />,
    children: [
      {
        path: ':idUser',
        element: <UserProfile />,
      }
    ]
  }
])