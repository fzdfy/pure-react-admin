import type { IDrawerProps, IFormDrawer, IFormLayoutProps, IModalProps } from '@formily/antd-v5'
import { FormButtonGroup, FormDialog, FormDrawer, FormLayout, Submit } from '@formily/antd-v5'
import type { Form } from '@formily/core'
import type { ISchema } from '@formily/react'
import { Button, message } from 'antd'
import type { ReactNode } from 'react'

import SchemaField from './schemaField'

interface FormDrawerProps {
  title: IDrawerProps | string
  schema: ISchema
  onOk?: (val: any) => void
  okText?: ReactNode
  onClose?: () => void
  id?: string
}

export const formDrawer = (props: FormDrawerProps) => {
  const { title, onClose, schema, onOk, okText = 'OK', id = 'form-drawer' } = props
  const iTitle = typeof title === 'string' ? { title } : title
  const drawer = FormDrawer(Object.assign({}, iTitle, { maskClosable: true, onClose }), id, () => {
    return (
      <FormLayout labelCol={6}>
        <SchemaField schema={schema} />
        <FormDrawer.Footer>
          <FormButtonGroup align='center'>
            <Submit onSubmit={onOk}>{okText}</Submit>
            <Button
              type='primary'
              onClick={() => {
                onClose && onClose()
                drawer.close()
              }}>
              cancel
            </Button>
          </FormButtonGroup>
        </FormDrawer.Footer>
      </FormLayout>
    )
  })
  return drawer
}
