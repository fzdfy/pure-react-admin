import { atomWithStorage } from 'jotai/utils'

export const CURRENT_TOKEN_KEY = 'CURRENT_TOKEN'

export const tokenAtom = atomWithStorage<string>(CURRENT_TOKEN_KEY, '')
