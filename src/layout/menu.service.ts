import type { MenuDataItem } from '@ant-design/pro-components'

import type { TypesListMenuData } from '@/request'

export const transformMenuData = (menus: TypesListMenuData[]): MenuDataItem[] => {
  return menus.map((p) => {
    const children = menus.filter((q) => q.parentId === p.id)
    return {
      key: p.path,
      path: p.path,
      name: p.name,
      children: children && transformMenuData(children),
      // TODO: icon
      // icon: <IconFont type={v.icon} />,
    }
  })
}
