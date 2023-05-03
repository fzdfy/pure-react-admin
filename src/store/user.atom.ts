import { atomWithImmer } from 'jotai-immer'

export const userAtom = atomWithImmer({
  id: 0,
  status: '',
  currentAuthority: '',
  userName: '',
})
