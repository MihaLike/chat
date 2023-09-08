<template>
	<div class="container">
		<main>
			<div class="content">
				<!-- Search -->
				<section
					class="search"
					:class="{ 'chat__filled-wrapper_small': chatStore.chatStatus }"
				>
					<MainSearch
						:chatsLoading="chatsLoading"
						@openChat="setCurrentChat"
						ref="searchComponent"
					/>
				</section>
				<!-- Chat -->
				<section class="chat">
					<MainChat
						:user="currentChat"
						@updateLastMessage="updateLastMessage"
					/>
				</section>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
	import MainSearch from '@/components/MainSearch.vue';
	import MainChat from '@/components/MainChat.vue';
	import { ref, computed } from 'vue';
	import { useChatStore } from '@/stores/useChatStore';
	import type { User, Messages } from '@/types/Chats';
	import { ensure } from '@/helpers/ensureArgument';

	// State
	const chatsLoading = ref(true);
	const currentChat = ref({} as User);
	// Accessing methods
	const searchComponent = ref();
	// Chat Store
	const chatStore = useChatStore();
	// Set current Chat
	const setCurrentChat = (chat: User) => {
		currentChat.value = chat;
	};
	//Update Last messages
	const updateLastMessage = (id: number, message: Messages) => {
		const chatId = ensure(chatStore.lastMessages?.find((message) => message.id == id));
		chatId.chat = message;
		// Trigger exposed method
		searchComponent.value.scrollToTop();
	};
	// Initial Loading
	chatStore
		.loadChatList()
		.then(() => {
			chatStore.sortChatList();
		})
		.catch((er) => {
			console.log('Error:', er);
		})
		.finally(() => {
			chatsLoading.value = false;
		});
</script>
