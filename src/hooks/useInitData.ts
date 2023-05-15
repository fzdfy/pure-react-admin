import { useQueries } from '@tanstack/react-query'
import { useAtom } from 'jotai'

import { pureApi } from '@/apis/pure.api'
import { userAtom } from '@/store/user.atom'

export const useInitData = () => {
  const [user, setUser] = useAtom(userAtom)

  const results = useQueries({
    queries: [
      {
        queryKey: ['pureApi.userInfo', user.id],
        queryFn: () => {
          return pureApi.userInfo({ userId: String(user.id) })
        },
        staleTime: Infinity,
        onSuccess: (res: { avatar: string }) => {
          setUser((draft) => {
            draft.avatar = res.avatar
          })
        },
      },
      {
        queryKey: ['pureApi.menuList'],
        queryFn: () => {
          return pureApi.menuList()
        },
        staleTime: Infinity,
      },
    ],
  })
  return {
    MENU_LIST: results[1].data?.data || [],
  }
}
