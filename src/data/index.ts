import type { Chats } from '@/types/Chats';

export const chats: Chats = [
	{
		id: Date.now() - 10,
		name: 'User1',
		avatar: './img/user1.png',
		messages: [
			{
				id: 1692308435068,
				date: 'Thu Aug 17 2023 10:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey from user1 x1',
				type: 'user',
			},
			{
				id: 1692308435069,
				date: 'Thu Aug 17 2023 11:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey user1 x1',
				type: 'own',
			},
			{
				id: 1692308435070,
				date: 'Thu Aug 17 2023 12:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey from user1 x2',
				type: 'user',
			},

			{
				id: 1692308435071,
				date: 'Thu Aug 17 2023 14:02:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey user1 x2',
				type: 'own',
			},
		],
	},
	{
		id: Date.now() - 20,
		name: 'User2',
		avatar: './img/user2.png',
		messages: [
			{
				id: 1692308435072,
				date: 'Thu Aug 17 2023 10:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey from user2 x1',
				type: 'user',
			},
			{
				id: 1692308435073,
				date: 'Thu Aug 17 2023 11:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey user2 x1',
				type: 'own',
			},
			{
				id: 1692308435074,
				date: 'Thu Aug 17 2023 12:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey from user2 x2',
				type: 'user',
			},
			{
				id: 1692308435075,
				date: 'Thu Aug 17 2023 14:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey user2 x2',
				type: 'own',
			},
			{
				id: 1692308435076,
				date: 'Thu Aug 17 2023 14:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey from user2 x3',
				type: 'user',
			},
		],
	},
	{
		id: Date.now() - 30,
		name: 'User3',
		avatar: './img/user3.png',
		messages: [],
	},
	{
		id: Date.now() - 40,
		name: 'User4',
		avatar: './img/user4.png',
		messages: [],
	},
	{
		id: Date.now() - 50,
		name: 'User5',
		avatar: './img/user5.png',
		messages: [
			{
				id: 1692308435077,
				date: 'Thu Aug 17 2023 10:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey from user5 x1',
				type: 'user',
			},
			{
				id: 1692308435078,
				date: 'Thu Aug 17 2023 11:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey user5 x1',
				type: 'own',
			},
			{
				id: 1692308435079,
				date: 'Thu Aug 17 2023 12:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey from user5 x2',
				type: 'user',
			},
			{
				id: 1692308435080,
				date: 'Thu Aug 17 2023 14:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey user5 x2',
				type: 'own',
			},
			{
				id: 1692308435081,
				date: 'Thu Aug 17 2023 14:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey from user5 x3',
				type: 'user',
			},
		],
	},
	{
		id: Date.now() - 60,
		name: 'User6',
		avatar: './img/user6.png',
		messages: [
			{
				id: 1692308435082,
				date: 'Thu Aug 17 2023 10:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey from user6 x1',
				type: 'user',
			},
			{
				id: 1692308435083,
				date: 'Thu Aug 17 2023 11:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey user6 x1',
				type: 'own',
			},
			{
				id: 1692308435084,
				date: 'Thu Aug 17 2023 12:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey from user6 x2',
				type: 'user',
			},
			{
				id: 1692308435085,
				date: 'Thu Aug 17 2023 14:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey user6 x2',
				type: 'own',
			},
		],
	},
	{
		id: Date.now() - 70,
		name: 'User7',
		avatar: './img/user7.png',
		messages: [
			{
				id: 1692308435086,
				date: 'Thu Aug 17 2023 10:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey from user7',
				type: 'user',
			},
		],
	},
];
