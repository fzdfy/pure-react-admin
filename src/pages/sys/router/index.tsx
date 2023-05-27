import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

const User = lazy(() => import('@/pages/sys/user'))
const Menu = lazy(() => import('@/pages/sys/menu'))
const Role = lazy(() => import('@/pages/sys/role'))

export const sysRouter: RouteObject[] = [
  {
    path: 'user/list',
    element: <User />,
  },
  {
    path: 'menu/list',
    element: <Menu />,
  },
  {
    path: 'role/list',
    element: <Role />,
  },
]
