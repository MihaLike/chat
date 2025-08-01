import type { Message, User } from '@types'

export type Props = {
  user: User | null
}

export type Emits = {
'updateLastMessage': [userId: string, message: Message]
}   