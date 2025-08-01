<template>
	<div class="chats-list wrapper">
		<FilterString
      v-model:filter-string='filterString'
      :is-chat-empty="isChatEmpty"
    />
 
    <AppLoader
      v-if="isChatsLoading"      
      comment="Загрузка чатов..."
    />

		<TransitionGroup
			name="list"
			tag="ul"
			class="user-list"
			v-else-if="isChatEmpty && !isChatsLoading"
		>
			<div 
				ref="topOfUserList"
				:key="11"
			/>

			<li
				@click="openChat(chat.id)"
				v-for="chat of chatStore.getFilteredList"
				:key="chat.id"
				class="user-list__item"
				:class="{ 'user-list_active': chat.id === chatStore.activeChat }"
			>
				<article class="user-list__card">
					<img
						:src="chat.avatar"
						alt="User Avatar"
						class="user-list__card-photo"
					/>
					<div class="user-list__card-content">
						<h3 class="user-list__card-name">
              {{ chat.name }}
            </h3>

						<p class="user-list__card-chat">
							{{ renderLastMessage(chat.id).text }}
						</p>

						<span class="user-list__card-time">
              {{ renderLastMessage(chat.id).date }}
            </span>
					</div>
				</article>
			</li>
		</TransitionGroup>

		<div 
      v-else-if="isChatEmpty && !isChatsLoading"
			class="search__card"
		>
			<h2 class="search__title">
        Тут пусто
      </h2>

			<p class="search__descr">
        Вы ещё никому не писали
      </p>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue';
	import { useChatStore,useGlobalStore } from '@stores';
	import { formatDate } from '@/composables/useDate';
	import { ensure } from '@/helpers/ensureArgument';
	import { MOBILE_DEVICE } from '@/utils/utils';
  import type { Emits, Props } from './types';
  import FilterString from '../filter-string/FilterString.vue';
  import { storeToRefs } from 'pinia';
import AppLoader from '../app-loader/AppLoader.vue';

  defineProps<Props>();
	const emits = defineEmits<Emits>();

	// Chat Store
	const chatStore = useChatStore();
  const {
    filterString,
    chatList,
    lastMessages,
    chatStatus,
    activeChat,
  } = storeToRefs(chatStore);

	// Global Store
	const globalStore = useGlobalStore();

	// State
	const topOfUserList = ref();

	const isChatEmpty = computed<boolean>(() => !!chatList.value?.length);

	// Render Last Message
	const renderLastMessage = (id: string) => {
		const chatId = ensure(lastMessages.value.find((message) => message.id == id));
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

	// Open chosen chat on click
	const openChat = (id: string) => {
    if (activeChat.value === id) {
      activeChat.value = null;
      return;
    }
		chatStatus.value = true;
		activeChat.value = id;
		emits('openChat', ensure(chatList.value?.find((chat) => chat.id === id)));
	}; 

	// Scroll to top of user list
	const scrollToTop = () => {
		// MOBILE BROWSERS
		if (globalStore.userDeviceType === MOBILE_DEVICE) {
			topOfUserList.value?.scrollIntoView();
		} else topOfUserList.value?.scrollIntoView({ behavior: 'smooth' });
	};
	// Expose METHODS to parent component
	defineExpose({
		scrollToTop,
	});
</script>

<style scoped>
  .chats-list {
    position: relative;
  }
	/* .list-move, */
	.list-enter-active,
	.list-leave-active {
		transition: all 0.3s ease;
	}

	.list-enter-from,
	.list-leave-to {
		opacity: 0;
		transform: translateX(30px);
	}
	.list-leave-active {
		position: absolute;
	}
</style>
