import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

const List = lazy(() => import('@/pages/sys/user'))

export const sysRouter: RouteObject[] = [
  {
    path: 'user/list',
    element: <List />,
  },
]
