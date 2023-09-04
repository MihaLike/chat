import { chats } from '@/data';
import type { Messages } from '@/types/Chats';

export async function useSendMessage(id: number, message: Messages) {
	const index = chats.findIndex((chat) => chat.id === id);
	// Some post data here
	chats[index].messages.push(message);
}
