import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { useFetchChats } from '@/composables/useFetchChats';
import type { Chats, User, LastMessage } from '@/types/Chats';

export const useChatStore = defineStore('chats', () => {
	const chatList = ref(null as Chats | null);
	const filter = ref('');

	const lastMessages = ref([] as Array<LastMessage>);

	const getUserList = computed(() => {
		return chatList;
	});

	const loadChatList = () => {
		chatList.value = useFetchChats();

		chatList.value?.map((chat: User) => {
			lastMessages.value.push({
				id: chat.id,
				chat: chat.messages ? chat.messages[chat.messages.length - 1] : null,
			});
		});
	};

	const getFilteredList = computed(() => {
		return chatList.value?.filter((chat) => chat.name.toLowerCase().includes(filter.value));
	});

	return { chatList, getUserList, loadChatList, getFilteredList, filter, lastMessages };
});
