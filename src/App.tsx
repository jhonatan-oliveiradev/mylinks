import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Admin } from './pages/Admin'
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
  }
])

export { router };