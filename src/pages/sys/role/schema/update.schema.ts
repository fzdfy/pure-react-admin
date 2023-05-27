import type { ISchema } from '@formily/react'

export const updateUserSchema: ISchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      title: '用户名',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      required: true,
    },
    nickName: {
      type: 'string',
      title: '昵称',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      required: true,
    },
    mobile: {
      type: 'string',
      title: '手机号',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      required: true,
    },
    email: {
      type: 'string',
      title: '邮箱',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      required: true,
    },
  },
}
