import { createBrowserRouter } from 'react-router-dom'

import { ErrorPage } from './pages/404'
import { Admin } from './pages/Admin'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Social } from './pages/Social'
import { Private } from './routes/Private'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/admin",
    element: <Private><Admin /></Private>
  },
  {
    path: "/admin/social",
    element: <Private><Social /></Private>,
  },
  {
    path: "*",
    element: <ErrorPage />
  }
])

export { router };