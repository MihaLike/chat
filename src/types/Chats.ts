type Messages = {
	id: number;
	date: string;
	text: string;
	type: 'user' | 'own';
};

interface User {
	id: number;
	name: string;
	avatar: string;
	messages: Array<Messages>;
}

interface Chats extends Array<User> {}

type LastMessage = {
	id: number;
	chat: Messages | null;
};

export type { User, Messages, Chats, LastMessage };
