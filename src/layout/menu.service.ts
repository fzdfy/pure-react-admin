import type { MenuDataItem } from '@ant-design/pro-components'

import type { TypesListMenuData } from '@/request'

export const transformMenuData = (menus: TypesListMenuData[], root = true): MenuDataItem[] => {
  const _menus = root ? menus.filter((p) => p.parentId === 0) : menus
  return _menus.map((q) => {
    const children = menus.filter((r) => r.parentId === q.id)
    return {
      key: `${q.id}${q.path}`,
      path: q.path,
      name: q.name,
      children: children && transformMenuData(children, false),
      // TODO: icon
      // icon: <IconFont type={v.icon} />,
    }
  })
}
