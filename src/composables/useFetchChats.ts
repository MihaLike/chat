// Fetching users
import { chats } from '@/data/index.js';

export function useFetchChats() {
	// Some async get data here
	return chats;
}

export function useSendMessage(id: number, message: object) {
	const index = chats.findIndex((chat) => chat.id === id);
	// Some post data here
	chats[index].messages.push(message);
}
