import type { FetchParams, RequestContext, ResponseContext } from '@/request'
import { PureApi } from '@/request'

export const pureApi = new PureApi()
  .withPreMiddleware((context: RequestContext) => {
    const token = localStorage.getItem('_token') || ''
    context.init.headers = { ...context.init.headers, Authorization: token }
    return Promise.resolve(context as FetchParams)
  })
  .withPostMiddleware((context: ResponseContext) => {
    // TODO: 401
    // TODO: data 脱壳
    return Promise.resolve(context.response)
  })
