import type { MenuDataItem } from '@ant-design/pro-components'
import { ProLayout } from '@ant-design/pro-components'
import { Spin } from 'antd'
import type { FC, ReactNode } from 'react'
import { Suspense, useEffect, useMemo } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'

import logo from '@/assets/logo.jpg'
import { useInitData } from '@/hooks/useInitData'

import { transformMenuData } from './menu.service'

const PureLayout: FC = () => {
  const location = useLocation()
  const { MENU_LIST } = useInitData()
  const renderMenuData = useMemo(() => {
    return () => transformMenuData(MENU_LIST)
  }, [MENU_LIST])
  const navigate = useNavigate()
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/welcome')
    }
  }, [location.pathname, navigate])

  return (
    <ProLayout
      logo={logo}
      title='pure react admin'
      location={{
        pathname: location.pathname,
      }}
      layout='mix'
      navTheme='light'
      theme='light'
      fixSiderbar
      fixedHeader
      menuDataRender={renderMenuData}
      menuItemRender={(item: MenuDataItem, defaultDom: ReactNode) => {
        if (!item.path) return defaultDom
        return <Link to={item.path}>{defaultDom}</Link>
      }}>
      <div style={{ height: '100vh' }}>
        <Suspense
          fallback={
            <div className='text-center pt-11'>
              <Spin />
            </div>
          }>
          <Outlet />
        </Suspense>
      </div>
    </ProLayout>
  )
}

export default PureLayout
