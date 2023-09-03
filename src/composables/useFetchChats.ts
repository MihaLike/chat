// Fetching users
import { chats } from '@/data/index';
import type { Chats, Messages } from '@/types/Chats';

export async function useFetchChats(): Chats {
	// Some async get data here
	return new Promise((res, rej) =>
		setTimeout(() => {
			res(chats);
		}, 1000)
	);
}

export async function useSendMessage(id: number, message: Messages) {
	const index = chats.findIndex((chat) => chat.id === id);
	// Some post data here
	chats[index].messages.push(message);
}
