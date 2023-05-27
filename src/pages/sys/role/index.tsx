import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import type { ActionType, ProColumns } from '@ant-design/pro-components'
import { PageContainer, ProTable } from '@ant-design/pro-components'
import NiceModal from '@ebay/nice-modal-react'
import { Button, Divider, Typography } from 'antd'
import type { FC } from 'react'
import { useRef } from 'react'

import { pureApi } from '@/apis/pure.api'
import { formDrawer } from '@/components/form'
import AntdModal from '@/components/modal'
import type { RoleListRequest, TypesListRoleResp } from '@/request'
import { getTableData } from '@/utils/table.service'

import { addUserSchema } from './schema/add.schema'
import { updateUserSchema } from './schema/update.schema'

const getRoleList = () => {
  return getTableData((params?: RoleListRequest) => pureApi.roleList(params))
}

const RoleList: FC = () => {
  const ref = useRef<ActionType>()

  const showDeleteRoleModal = (record: any) => {
    NiceModal.show(AntdModal, {
      title: <Typography.Title>删除角色</Typography.Title>,
      children: <Typography.Text>确认删除{record.name}?</Typography.Text>,
      onOk: () => {
        pureApi.roleDelete({ body: { id: record.id } }).then(() => {
          ref.current?.reload()
        })
      },
    })
  }

  const columns: ProColumns[] = [
    {
      title: '编号',
      dataIndex: 'id',
      hideInSearch: true,
    },
    {
      title: '用户名',
      dataIndex: 'name',
    },
    {
      title: '昵称',
      dataIndex: 'nickName',
    },
    {
      title: '手机号',
      dataIndex: 'mobile',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueEnum: {
        0: { text: '禁用', status: 'Error' },
        1: { text: '正常', status: 'Success' },
      },
    },

    {
      title: '创建人',
      dataIndex: 'createBy',
      hideInSearch: true,
      hideInTable: true,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'dateTime',
      hideInSearch: true,
      hideInTable: true,
    },
    {
      title: '更新人',
      dataIndex: 'lastUpdateBy',
      hideInSearch: true,
      hideInTable: true,
    },
    {
      title: '更新时间',
      dataIndex: 'lastUpdateTime',
      valueType: 'dateTime',
      hideInSearch: true,
      hideInTable: true,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          <Button
            type='primary'
            icon={<EditOutlined />}
            onClick={() => {
              const drawer = formDrawer({
                title: '编辑角色',
                schema: updateUserSchema,
                onOk: (values) => {
                  return pureApi.roleUpdate({ body: values }).then(() => {
                    ref.current?.reload()
                  })
                },
              })
              drawer.open({
                initialValues: { ...record },
              })
            }}>
            编辑
          </Button>
          <Divider type='vertical' />
          <Button
            type='primary'
            danger
            icon={<DeleteOutlined />}
            onClick={() => {
              showDeleteRoleModal(record)
            }}>
            删除
          </Button>
        </>
      ),
    },
  ]

  return (
    <PageContainer>
      <ProTable<TypesListRoleResp, RoleListRequest>
        actionRef={ref}
        rowKey='id'
        columns={columns}
        request={getRoleList()}
        search={{
          labelWidth: 'auto',
        }}
        toolBarRender={() => [
          <Button
            type='primary'
            key='primary'
            onClick={() => {
              const drawer = formDrawer({
                title: '新建角色',
                schema: addUserSchema,
                onOk: (values) => {
                  return pureApi.roleAdd({ body: values }).then(() => {
                    ref.current?.reload()
                  })
                },
              })
              drawer.open({
                initialValues: {},
              })
            }}>
            <PlusOutlined />
            新建角色
          </Button>,
        ]}
      />
    </PageContainer>
  )
}

export default RoleList
