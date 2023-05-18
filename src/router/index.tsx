import { lazy } from 'react'
import { RequireAuth } from 'react-auth-kit'
import type { RouteObject } from 'react-router-dom'

import PureLayout from '@/layout/PureLayout'
import { sysRouter } from '@/pages/sys/router'

const Dashboard = lazy(() => import('@/pages/dashboard'))
const File = lazy(() => import('@/pages/file'))
const Mms = lazy(() => import('@/pages/mms'))
const Welcome = lazy(() => import('@/pages/welcome'))
const Login = lazy(() => import('@/pages/sys/login'))
const NotFound = lazy(() => import('@/components/NotFound'))

const appRouterConfig: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: (
      <RequireAuth loginPath='/login'>
        <PureLayout />
      </RequireAuth>
    ),
    children: [
      {
        index: true,
        path: 'welcome',
        element: <Welcome />,
      },
      {
        path: 'file',
        element: <File />,
      },
      {
        path: 'mms',
        element: <Mms />,
      },
      {
        path: 'system',
        children: sysRouter,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]

export default appRouterConfig
