export const chats = [
	{
		id: Date.now() - 10,
		name: 'User1',
		messages: [
			{
				date: 'Thu Aug 17 2023 10:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey from user1 x1',
				type: 'user',
			},
			{
				date: 'Thu Aug 17 2023 11:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey user1 x1',
				type: 'own',
			},
			{
				date: 'Thu Aug 17 2023 12:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey from user1 x2',
				type: 'user',
			},

			{
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
				date: 'Thu Aug 17 2023 10:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey from user2 x1',
				type: 'user',
			},
			{
				date: 'Thu Aug 17 2023 11:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey user2 x1',
				type: 'own',
			},
			{
				date: 'Thu Aug 17 2023 12:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey from user2 x2',
				type: 'user',
			},
			{
				date: 'Thu Aug 17 2023 14:42:50 GMT+0300 (Москва, стандартное время)',
				text: 'Hey user2 x2',
				type: 'own',
			},
			{
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
