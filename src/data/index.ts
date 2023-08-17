import type { Chats } from '@/types/Chats';

export const chats: Chats = [
	{
		id: Date.now() - 10,
		name: 'User1',
		messages: [
			{
				id: 1692308435068,
				date: 'Thu Aug 17 2023 10:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey from user1 x1',
				type: 'user',
			},
			{
				id: 1692308435045,
				date: 'Thu Aug 17 2023 11:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey user1 x1',
				type: 'own',
			},
			{
				id: 1692308435043,
				date: 'Thu Aug 17 2023 12:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey from user1 x2',
				type: 'user',
			},

			{
				id: 1692308435032,
				date: 'Thu Aug 17 2023 14:02:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey user1 x2',
				type: 'own',
			},
		],
	},
	{
		id: Date.now() - 20,
		name: 'User2',
		messages: [
			{
				id: 1692308435011,
				date: 'Thu Aug 17 2023 10:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey from user2 x1',
				type: 'user',
			},
			{
				id: 1692308435012,
				date: 'Thu Aug 17 2023 11:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey user2 x1',
				type: 'own',
			},
			{
				id: 1692308435013,
				date: 'Thu Aug 17 2023 12:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey from user2 x2',
				type: 'user',
			},
			{
				id: 1692308435041,
				date: 'Thu Aug 17 2023 14:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey user2 x2',
				type: 'own',
			},
			{
				id: 1692308435042,
				date: 'Thu Aug 17 2023 14:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey from user2 x3 FFF',
				type: 'user',
			},
		],
	},
	{
		id: Date.now() - 30,
		name: 'emptyChatUser',
		messages: [],
	},
	{
		id: Date.now() - 40,
		name: '4',
		messages: [],
	},
];
