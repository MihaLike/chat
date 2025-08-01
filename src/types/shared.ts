export type Message = {
	id: string;
	date: string;
	text: string;
	type: 'user' | 'own';
};

export interface User {
	id: string;
	name: string;
	avatar: string;
	messages: Message[];
}

export type LastMessage = {
	id: string;
	chat: Message | null;
};
   