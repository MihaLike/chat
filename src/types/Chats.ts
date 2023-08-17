type Messages = {
	id: number;
	date: string;
	text: string;
	type: 'user' | 'own';
};

interface User {
	id: number;
	name: string;
	messages: Array<Messages>;
}

interface Chats extends Array<User> {}

export type { User, Messages, Chats };
