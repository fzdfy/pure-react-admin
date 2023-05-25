import { ProConfigProvider } from '@ant-design/pro-components'
import NiceModal from '@ebay/nice-modal-react'
import { App as RootApp, ConfigProvider } from 'antd'
import { useRoutes } from 'react-router-dom'

import routerConfig from './router'

function App() {
  const element = useRoutes(routerConfig)

  return (
    <>
      <ConfigProvider>
        <ProConfigProvider>
          <NiceModal.Provider>
            <RootApp className='h-screen'>{element}</RootApp>
          </NiceModal.Provider>
        </ProConfigProvider>
      </ConfigProvider>
    </>
  )
}

export default App
