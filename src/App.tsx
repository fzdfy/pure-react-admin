import { ProConfigProvider } from '@ant-design/pro-components'
import { App as RootApp, ConfigProvider } from 'antd'
import { useRoutes } from 'react-router-dom'

import routerConfig from './router'

function App() {
  const element = useRoutes(routerConfig)

  return (
    <>
      <ConfigProvider>
        <ProConfigProvider>
          <RootApp className='h-screen'>{element}</RootApp>
        </ProConfigProvider>
      </ConfigProvider>
    </>
  )
}

export default App
