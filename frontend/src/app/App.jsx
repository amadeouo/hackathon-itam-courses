import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.jsx'
import {MainProvider} from "./main-context/main-provider";

export const App = () => {
  return (
    <MainProvider>
      <RouterProvider router={router} />
    </MainProvider>
  )
}

