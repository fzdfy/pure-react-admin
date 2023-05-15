import type { MenuDataItem } from '@ant-design/pro-components'
import { ProLayout } from '@ant-design/pro-components'
import { Spin } from 'antd'
import type { FC, ReactNode } from 'react'
import { Suspense } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import logo from '@/assets/logo.jpg'
import { useInitData } from '@/hooks/useInitData'

import { transformMenuData } from './menu.service'

const PureLayout: FC = () => {
  const location = useLocation()
  const { MENU_LIST } = useInitData()
  console.log('MENU_LIST', MENU_LIST)
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
      menuDataRender={() => transformMenuData(MENU_LIST)}
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
