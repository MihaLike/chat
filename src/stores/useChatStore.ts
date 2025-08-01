import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useFetchChats } from '@/composables/useFetchChats';
import type { User, LastMessage } from '@/types/shared';

export const useChatStore = defineStore('chats', () => {
	const chatList = ref<null | User[]>(null);
	const filterString = ref('');
	const chatStatus = ref(false);
	const activeChat = ref<null | string>(null);
 
	const lastMessages = ref<LastMessage[]>([]);

	const loadChatList = async () => {
		await useFetchChats()
    .then((chats: User[]) => {
			chatList.value = chats;
			chatList.value?.map((chat: User) => {
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
		return chatList.value?.filter((chat) => chat.name.toLowerCase().includes(filterString.value));
	});

	return { 
    chatList,
    loadChatList, 
    sortChatList, 
    getFilteredList, 
    filterString, 
    lastMessages, 
    chatStatus, 
    activeChat
  };
});
