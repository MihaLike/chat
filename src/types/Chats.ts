type Messages = {
	date: string;
	text: string;
	type: 'user' | 'own';
};

interface User {
	id: number;
	name: string;
	messages: Array<Messages>;
}

export interface Chats extends Array<User> {}
