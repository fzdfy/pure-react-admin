import { Result } from 'antd'
import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'

import PureLayout from '@/layout/PureLayout'

const Dashboard = lazy(() => import('@/pages/dashboard'))
const File = lazy(() => import('@/pages/file'))
const Mms = lazy(() => import('@/pages/mms'))
const Login = lazy(() => import('@/pages/sys/login'))

const appRouterConfig: RouteObject[] = [
  {
    path: '/',
    element: <PureLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'file',
        element: <File />,
      },
      {
        path: 'mms',
        element: <Mms />,
      },
      // {
      //   path: '*',
      //   element: <Result status='404' title='404' subTitle='Sorry, the page you visited does not exist.' />,
      // },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
]

const Router = () => useRoutes(appRouterConfig)

export default Router