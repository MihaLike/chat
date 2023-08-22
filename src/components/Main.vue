<template>
	<div class="container">
		<main>
			<div class="content">
				<!-- Users -->
				<section class="search" :class="{ 'chat__filled-wrapper_small': status }">
					<div class="wrapper search__wrapper">
						<div class="search-input" :class="{ 'search-input_empty-large': !chatsNotEmpty }">
							<input @input="filterByName" type="text" placeholder=" Поиск ..." v-model="search" />
							<button class="button btn search-btn">F</button>
						</div>
						<ul class="user-list" v-if="chatsNotEmpty">
							<li
								@click="openChat(chat.id)"
								v-for="chat of chatStore.getFilteredList"
								:key="chat.id"
								class="user-list__item"
								:class="{ 'user-list_active': chat.id === activeList }">
								<article class="user-list__card">
									<img src="/img/user1.png" alt="User Avatar" class="user-list__card_photo" />
									<div class="user-list__card-content">
										<h3 class="user-list__card-name">{{ chat.name }}</h3>
										<p class="user-list__card-chat">
											{{ renderLastMessage(chat.id).text }}
										</p>
										<span class="user-list__card-time">{{ renderLastMessage(chat.id).date }}</span>
									</div>
								</article>
							</li>
						</ul>
						<div v-else class="search__card">
							<h2 class="search__title">Тут пусто</h2>
							<p class="search__descr">Вы ещё никому не писали</p>
						</div>
					</div>
				</section>
				<!-- Chat -->
				<section class="chat">
					<Chat :chatStatus="status" :user="currentChat" @close="close" @update-last-message="updateLastMessage" />
				</section>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
	import { useChatStore } from '@/stores/useChatStore';
	import Chat from '@/components/Chat.vue';
	import { ref, computed } from 'vue';
	import { formatDate } from '@/composables/useDate';
	import type { User, Messages } from '@/types/Chats';

	// Store
	const chatStore = useChatStore();
	chatStore.loadChatList();
	const chats = chatStore.getUserList;

	// State
	const status = ref(false);
	const currentChat = ref({} as User);
	const search = ref('');
	const activeList = ref(-1);

	const chatsNotEmpty = computed(() => {
		return chatStore.chatList?.length;
	});

	const filterByName = (): void => {
		if (search.value.length < 1) {
			chatStore.filter = '';
		} else {
			chatStore.filter = search.value;
		}
	};

	// Last messages
	const renderLastMessage = (id: number) => {
		const chatId = ensure(chatStore.lastMessages?.find((message) => message.id == id));
		const date = chatId.chat?.date;
		let createDate: string = '';
		if (date !== undefined) {
			createDate = formatDate(new Date(date));
		}
		return {
			text: chatId.chat?.text,
			date: createDate,
		};
	};

	const updateLastMessage = (id: number, message: Messages) => {
		const chatId = ensure(chatStore.lastMessages?.find((message) => message.id == id));
		chatId.chat = message;
	};

	// Close chat xs
	const close = () => {
		status.value = false;
	};

	// Open chosen chat on click
	const openChat = (id: number) => {
		status.value = true;
		activeList.value = id;
		const result = chats.value?.find((chat) => chat.id === id) !== undefined;
		if (result !== undefined) {
			currentChat.value = ensure(chats.value?.find((chat) => chat.id === id));
		} else {
			return;
		}
	};

	// Checking that .find return value
	function ensure<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
		if (argument === undefined || argument === null) {
			throw new TypeError(message);
		}
		return argument;
	}
</script>
