// Fetching users
import { chats } from '@/data/index';
import type { Chats, Messages } from '@/types/Chats';

export function useFetchChats(): Chats {
	// Some async get data here
	return chats;
}

export function useSendMessage(id: number, message: Messages) {
	const index = chats.findIndex((chat) => chat.id === id);
	// Some post data here
	chats[index].messages.push(message);
}
