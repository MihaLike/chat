import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useFetchChats } from '@/composables/useFetchChats';
import type { Chats, User, LastMessage } from '@/types/Chats';

export const useChatStore = defineStore('chats', () => {
	const chatList = ref(null as Chats | null);
	const filter = ref('');

	const lastMessages = ref([] as Array<LastMessage>);

	const getUserList = computed(() => {
		return chatList;
	});

	const loadChatList = async () => {
		await useFetchChats().then((res) => {
			chatList.value = res;
			chatList.value.map((chat: User) => {
				lastMessages.value.push({
					id: chat.id,
					chat: chat.messages ? chat.messages[chat.messages.length - 1] : null,
				});
			});
		});
	};

	const sortChatList = () => {
		chatList.value?.sort((a, b) => {
			if (a.messages.length > 0 && b.messages.length > 0) {
				if (a.messages[a.messages.length - 1].id < b.messages[b.messages.length - 1].id) {
					return 1;
				}

				if (a.messages[a.messages.length - 1].id > b.messages[b.messages.length - 1].id) {
					return -1;
				}
			}
			if (a.messages.length == 0) {
				return 0;
			}
			if (b.messages.length == 0) {
				return -1;
			}
			return 0;
		});
	};

	const getFilteredList = computed(() => {
		return chatList.value?.filter((chat) => chat.name.toLowerCase().includes(filter.value));
	});

	return { chatList, getUserList, loadChatList, sortChatList, getFilteredList, filter, lastMessages };
});
