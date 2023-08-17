import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { useFetchChats } from '@/composables/useFetchChats';
import type { Chats } from '@/types/Chats';
// ref()s become state properties
// computed()s become getters
// function()s become actions

export const useChatStore = defineStore('chats', () => {
	let chatList: Chats | null = null;

	const filter = ref('');
	const changed = ref(0);

	const getUserList = computed(() => {
		return chatList;
	});

	const loadChatList = () => {
		chatList = useFetchChats();
	};

	// const loadFilteredList = (filter: string) => {
	// 	return chatList.filter((chat) => chat.name.includes(filter));
	// };

	const getFilteredList = computed(() => {
		let hook = changed.value;
		return chatList.filter((chat) => chat.name.toLowerCase().includes(filter.value));
	});

	// watch(
	// 	() => getFilteredList,
	// 	(n, o) => {
	// 		console.log('watcher triggereed', n, o);
	// 		// chats.reduce((acc, chat) => {
	// 		// 	let { id, messages } = chat;
	// 		// 	return { ...acc, [id]: messages.length > 0 ? chat.messages[messages.length - 1] : null };
	// 		// }, {});
	// 	},
	// 	{ deep: true }
	// );

	return { chatList, getUserList, loadChatList, getFilteredList, filter, changed };
});
