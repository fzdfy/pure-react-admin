import { AlipayOutlined, LockOutlined, TaobaoOutlined, UserOutlined, WeiboOutlined } from '@ant-design/icons'
import { LoginFormPage, ProFormCheckbox, ProFormText } from '@ant-design/pro-components'
import { css, cx } from '@emotion/css'
import { useQuery } from '@tanstack/react-query'
import { Divider, Space } from 'antd'
import { useAtom } from 'jotai'
import type { FC } from 'react'
import { useState } from 'react'
import { useSignIn } from 'react-auth-kit'
import { useNavigate } from 'react-router-dom'

import { pureApi } from '@/apis/pure.api'
import type { UserLoginRequest } from '@/request'
import { userAtom } from '@/store/user.atom'

const Login: FC = () => {
  const iconStyles = css`
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: '18px',
    verticalAlign: 'middle',
    cursor: 'pointer',
  `

  const navigate = useNavigate()
  const signIn = useSignIn()
  const [loginParams, setLoginParams] = useState<UserLoginRequest>()
  const [, setUser] = useAtom(userAtom)

  const { data, isFetching } = useQuery(
    ['pureApi.userLogin', loginParams],
    () => {
      return pureApi.userLogin(loginParams!)
    },
    {
      onSuccess: (res) => {
        // if (res.code) {
        //   message.error(res.message)
        //   return
        // }
        // 设置apiKey
        setUser((draft) => {
          draft.id = res.id
          draft.status = res.status
          draft.currentAuthority = res.currentAuthority
          draft.userName = res.userName
        })
        const isSign = signIn({
          token: res.token,
          tokenType: 'Bearer',
          expiresIn: 9999999999,
          authState: { name: 'admin' },
        })
        if (isSign) {
          setTimeout(() => {
            navigate('/', { replace: true })
          }, 500)
        }
      },
      enabled: !!loginParams,
    },
  )

  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <LoginFormPage
        backgroundImageUrl='https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png'
        title='Pure react admin'
        subTitle=' '
        loading={isFetching}
        submitter={{
          searchConfig: {
            submitText: 'Login',
          },
        }}
        onFinish={async (values) => {
          console.log(values)
          setLoginParams({ userLogin: values } as UserLoginRequest)
          return Promise.resolve(true)
        }}
        actions={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <Divider plain>
              <span style={{ color: '#CCC', fontWeight: 'normal', fontSize: 14 }}>其他登录方式</span>
            </Divider>
            <Space align='center' size={24}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: 40,
                  width: 40,
                  border: '1px solid #D4D8DD',
                  borderRadius: '50%',
                }}>
                <AlipayOutlined className={cx(iconStyles)} style={{ color: '#1677FF' }} />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: 40,
                  width: 40,
                  border: '1px solid #D4D8DD',
                  borderRadius: '50%',
                }}>
                <TaobaoOutlined className={cx(iconStyles)} style={{ color: '#FF6A10' }} />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: 40,
                  width: 40,
                  border: '1px solid #D4D8DD',
                  borderRadius: '50%',
                }}>
                {/* <WeiboOutlined style={{ ...iconStyles, color: '#333333' }} /> */}
                <WeiboOutlined className={cx(iconStyles)} style={{ color: '#333333' }} />
              </div>
            </Space>
          </div>
        }>
        <ProFormText
          name='userName'
          fieldProps={{
            size: 'large',
            prefix: <UserOutlined className='prefixIcon' />,
          }}
          placeholder='用户名'
          rules={[
            {
              required: true,
              message: '请输入用户名!',
            },
            {
              max: 30,
              message: '最大长度不能超过30个字符',
            },
          ]}
        />
        <ProFormText.Password
          name='password'
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined className='prefixIcon' />,
          }}
          placeholder='密码'
          rules={[
            {
              required: true,
              message: '请输入密码！',
            },
            {
              min: 6,
              message: '最小长度不能低于6个字符',
            },
            {
              max: 30,
              message: '最大长度不能超过30个字符',
            },
          ]}
        />
        <div
          style={{
            marginBlockEnd: 24,
          }}>
          <ProFormCheckbox noStyle name='autoLogin'>
            自动登录
          </ProFormCheckbox>
          <a
            style={{
              float: 'right',
            }}>
            忘记密码
          </a>
        </div>
      </LoginFormPage>
    </div>
  )
}
export default Login
