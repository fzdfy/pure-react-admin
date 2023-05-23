import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import type { ActionType, ProColumns } from '@ant-design/pro-components'
import { PageContainer, ProTable } from '@ant-design/pro-components'
import { Button, Divider } from 'antd'
import type { FC } from 'react'
import { useRef } from 'react'

import { pureApi } from '@/apis/pure.api'
import type { TypesListMenuResp, UserListRequest } from '@/request'
import { getTableData } from '@/utils/table.service'

const columns: ProColumns[] = [
  {
    title: '编号',
    dataIndex: 'id',
    hideInSearch: true,
  },
  {
    title: '用户名',
    dataIndex: 'name',
    // render: (dom, entity) => {
    //   return (
    //     <a
    //       onClick={() => {
    //         setCurrentRow(entity)
    //         setShowDetail(true)
    //       }}>
    //       {dom}
    //     </a>
    //   )
    // },
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
  // {
  //   title: '部门',
  //   dataIndex: 'deptName',
  // },
  // {
  //   title: '职位',
  //   dataIndex: 'jobName',
  // },
  // {
  //   title: '角色',
  //   dataIndex: 'roleName',
  // },
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
            // handleUpdateModalVisible(true)
            // setCurrentRow(record)
          }}>
          编辑
        </Button>
        <Divider type='vertical' />
        <Button
          type='primary'
          danger
          icon={<DeleteOutlined />}
          onClick={() => {
            // showDeleteConfirm(record)
          }}>
          删除
        </Button>
      </>
    ),
  },
]

const getUserList = () => {
  return getTableData((params?: UserListRequest) => pureApi.userList(params))
}

const UserList: FC = () => {
  const ref = useRef<ActionType>()
  return (
    <PageContainer>
      <ProTable<TypesListMenuResp, UserListRequest>
        actionRef={ref}
        rowKey='id'
        columns={columns}
        request={getUserList()}
        search={{
          labelWidth: 'auto',
        }}
        toolBarRender={() => [
          <Button type='primary' key='primary' /* onClick={() => handleModalVisible(true)} */>
            <PlusOutlined /> 新建用户
          </Button>,
        ]}
      />
    </PageContainer>
  )
}

export default UserList
