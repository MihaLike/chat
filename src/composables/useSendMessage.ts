import { chats } from '@/data';
import type { Message } from '@/types/shared';

export async function useSendMessage(id: string, message: Message) {
	const index = chats.findIndex((chat) => chat.id === id);

  chats[index].messages.push(message);
}
 