import { ProLayout } from '@ant-design/pro-components'
import { Spin } from 'antd'
import type { FC } from 'react'
import { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import logo from '@/assets/logo.jpg'

const PureLayout: FC = () => {
  const location = useLocation()
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
      fixedHeader>
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
