import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

const Login = lazy(() => import('@/pages/sys/login'))

const routerConfig: RouteObject[] = [
  {
    path: 'login',
    element: <Login />,
  },
]
export default routerConfig
