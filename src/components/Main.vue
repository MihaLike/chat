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
								:class="{ 'user-list_active': index === activeList }">
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

	// Store
	const chatStore = useChatStore();
	chatStore.loadChatList();
	const chats = reactive(chatStore.getUserList);

	// State
	const status = ref(false);
	let currentChat = ref({});
	const changed = ref(0);
	const search = ref('');

	const filterByName = () => {
		chatStore.changed++;
		if (search.value.length < 1) {
			chatStore.filter = '';
		} else {
			chatStore.filter = search.value;
		}
	};

	// close chat xs
	const close = () => {
		status.value = false;
	};

	// Last message
	const lastMessages = computed(() => {
		let hook = changed.value;
		let acc = [];
		chats.map((chat) => {
			let o = { id: chat.id, chat: chat.messages ? chat.messages[chat.messages.length - 1] : null };
			acc.push(o);
		});
		return acc;
	});

	const renderLastMessage = (id: number) => {
		return {
			text: lastMessages.value.find((message) => message.id == id).chat?.text,
			date: formatDate(new Date(lastMessages.value.find((message) => message.id == id).chat?.date)),
		};
	};

	const activeList = ref(-1);

	const openChat = (id: number) => {
		status.value = true;
		activeList.value = id;
		currentChat.value = chats.find((chat) => chat.id === id);
	};

	// watch(
	// 	() => currentChat,
	// 	(n, o) => {
	// console.log('watcher triggereed', n, o);
	// chats.reduce((acc, chat) => {
	// 	let { id, messages } = chat;
	// 	return { ...acc, [id]: messages.length > 0 ? chat.messages[messages.length - 1] : null };
	// }, {});
	// 	},
	// 	{ deep: true }
	// );
</script>
