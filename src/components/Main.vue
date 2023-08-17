<template>
	<div class="container">
		<main>
			<div class="content">
				<!-- Users -->
				<section class="search">
					<div class="wrapper search__wrapper" :class="{ 'chat__filled-wrapper_small': status }">
						<div class="search-input">
							<input @input="filterByName" type="text" placeholder=" Поиск ..." v-model="search" />
							<button class="button btn search-btn">F</button>
						</div>
						<ul class="user-list">
							<li
								@click="openChat(chat.id)"
								v-for="(chat, index) of chatStore.getFilteredList"
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
									<!-- <LastMessage :user="chat" :message="lastMessages[index]" /> -->
								</article>
							</li>
						</ul>
						<!-- <div class="search__card">
							<h2 class="search__title">Тут пусто</h2>
							<p class="search__descr">Вы ещё никому не писали</p>
						</div> -->
					</div>
				</section>
				<!-- Chat -->
				<section class="chat">
					<Chat :chatStatus="status" :user="currentChat" @close="close" @update-last-message="changed++" />
				</section>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
	import { useChatStore } from '@/stores/useChatStore';
	import Chat from '@/components/Chat.vue';
	// import LastMessage from './LastMessage.vue';
	import { ref, reactive, computed, watch } from 'vue';
	import { formatDate } from '@/composables/useDate';
	import type { User, Messages } from '@/types/Chats';

	// Store
	const chatStore = useChatStore();
	chatStore.loadChatList();
	const chats = chatStore.getUserList;

	// State
	const status = ref(false);
	const currentChat = ref({} as User);
	const changed = ref(0);
	const search = ref('');
	const activeList = ref(-1);

	const filterByName = (): void => {
		chatStore.changed++;
		if (search.value.length < 1) {
			chatStore.filter = '';
		} else {
			chatStore.filter = search.value;
		}
	};

	// Close chat xs
	const close = () => {
		status.value = false;
	};

	// Last messages
	type LastMessage = {
		id: number;
		chat: Messages | null;
	};
	const lastMessages = computed(() => {
		let hook = changed.value;
		let acc: Array<LastMessage> = [];
		chats?.map((chat: User) => {
			acc.push({
				id: chat.id,
				chat: chat.messages ? chat.messages[chat.messages.length - 1] : null,
			});
		});
		return acc;
	});

	const renderLastMessage = (id: number) => {
		const result = ensure(lastMessages.value.find((message) => message.id == id));
		const date = result.chat?.date;
		let createDate: string = '';
		if (date !== undefined) {
			createDate = formatDate(new Date(date));
		}

		return {
			text: result.chat?.text,
			date: createDate,
		};
	};

	// Open chosen chat on click
	const openChat = (id: number) => {
		status.value = true;
		activeList.value = id;
		const result = chats?.find((chat) => chat.id === id) !== undefined;
		if (result !== undefined) {
			currentChat.value = ensure(chats?.find((chat) => chat.id === id));
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
