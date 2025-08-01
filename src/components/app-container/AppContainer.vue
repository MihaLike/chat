<template>
	<div class="app-container">
    <div class="app-container__content">
      <section
        class="search"
        :class="{ 'chat__filled-wrapper_small': chatStore.chatStatus }"
      >
        <ChatsList
          ref="searchComponent"
          :is-chats-loading="isChatsLoading"
          @open-chat="setCurrentChat"
        /> 
      </section>

      <section>
        <MessagesList
          :user="currentChat"
          :is-chats-loading="isChatsLoading"
          @update-last-message="updateLastMessage"
        />
      </section> 
    </div>
	</div>
</template>
 
<script setup lang="ts"> 
	import { ChatsList, MessagesList } from '@/components';
	import { ref } from 'vue';
	import { useChatStore } from '@/stores/useChatStore';
	import type { User, Message } from '@/types/shared';
	import { ensure } from '@/helpers/ensureArgument';
 
	// State
	const isChatsLoading = ref(true);
	const currentChat = ref<User | null>(null); 
	// Accessing methods
	const searchComponent = ref();
	// Chat Store
	const chatStore = useChatStore();
	// Set current Chat
	const setCurrentChat = (chat: User) => {
		currentChat.value = chat;
	}; 
	//Update Last messages
	const updateLastMessage = (id: string, message: Message) => {
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
			isChatsLoading.value = false;
		});
</script>

<style>
 .app-container {
    padding: 127px 130px;
 }


</style>