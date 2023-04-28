import { ProConfigProvider } from '@ant-design/pro-components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { App as RootApp, ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'

import AppRouter from './router'

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <ConfigProvider>
        <ProConfigProvider>
          <QueryClientProvider client={queryClient}>
            <RootApp className='h-screen'>
              <BrowserRouter>
                <AppRouter />
              </BrowserRouter>
            </RootApp>
          </QueryClientProvider>
        </ProConfigProvider>
      </ConfigProvider>
    </>
  )
}

export default App
