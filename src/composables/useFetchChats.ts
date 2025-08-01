// Fetching users
import { chats } from '@/data/index';
import type { User } from '@/types/shared';

export async function useFetchChats(): Promise<User[]> {
	// Some async get data here
	return new Promise((res, rej) =>
		setTimeout(() => {
			res(chats);
		}, 1000)
	);
}
  