import type { User } from '@types'

export type Props = {
  isChatsLoading: boolean
}

export type Emits = {
  'openChat': [chat: User]
}   