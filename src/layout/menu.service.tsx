import * as Icon from '@ant-design/icons'
import type { MenuDataItem } from '@ant-design/pro-components'
import type { FC } from 'react'
import React from 'react'

import type { TypesListMenuData } from '@/request'

const IconFont: FC<{ type: string }> = (props) => {
  return React.createElement((Icon as any)[props.type])
}

export const transformMenuData = (menus: TypesListMenuData[], root = true): MenuDataItem[] => {
  const _menus = root ? menus.filter((p) => p.parentId === 0) : menus
  return _menus.map((q) => {
    const children = menus.filter((r) => r.parentId === q.id)
    return {
      key: `${q.id}${q.path}`,
      path: q.path,
      name: q.name,
      children: children && transformMenuData(children, false),
      icon: <IconFont type={q.icon} />,
    }
  })
}
