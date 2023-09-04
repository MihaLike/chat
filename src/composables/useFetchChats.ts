// Fetching users
import { chats } from '@/data/index';
import type { Chats } from '@/types/Chats';

export async function useFetchChats(): Promise<Chats> {
	// Some async get data here
	return new Promise((res, rej) =>
		setTimeout(() => {
			res(chats);
		}, 1000)
	);
}
