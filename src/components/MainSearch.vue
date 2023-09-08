<template>
	<div class="wrapper search__wrapper">
		<div
			class="search-input"
			:class="{ 'search-input_empty-large': !chatsNotEmpty }"
		>
			<input
				@input="filterByName"
				type="text"
				placeholder=" Поиск ..."
				v-model="search"
			/>
			<button class="button btn search-btn">F</button>
		</div>

		<div
			v-if="props.chatsLoading"
			class="loader"
		>
			<img
				src="../assets/loader.gif"
				alt="Loader"
				class="loader"
			/>
		</div>
		<TransitionGroup
			name="list"
			tag="ul"
			class="user-list"
			v-if="chatsNotEmpty && !props.chatsLoading"
		>
			<div
				ref="topOfUserList"
				:key="11"
			></div>
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
						<h3 class="user-list__card-name">{{ chat.name }}</h3>
						<p class="user-list__card-chat">
							{{ renderLastMessage(chat.id).text }}
						</p>
						<span class="user-list__card-time">{{ renderLastMessage(chat.id).date }}</span>
					</div>
				</article>
			</li>
		</TransitionGroup>
		<div
			v-if="!chatsNotEmpty && !chatsLoading"
			class="search__card"
		>
			<h2 class="search__title">Тут пусто</h2>
			<p class="search__descr">Вы ещё никому не писали</p>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue';
	import { useChatStore } from '@/stores/useChatStore';
	import { useGlobalStore } from '@/stores/useGlobalStore';
	import { formatDate } from '@/composables/useDate';
	import { ensure } from '@/helpers/ensureArgument';
	import { MOBILE_DEVICE } from '@/utils/utils';

	// State
	const chatsLoading = ref(true);
	const search = ref('');
	const topOfUserList = ref();
	// Chat Store
	const chatStore = useChatStore();
	const chats = chatStore.getUserList;
	// Global Store
	const globalStore = useGlobalStore();
	// Props
	const props = defineProps({
		chatsLoading: {
			type: Boolean,
			required: true,
		},
	});
	// Emits
	const emits = defineEmits(['openChat']);

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

	// Render Last Messages
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

	// Open chosen chat on click
	const openChat = (id: number) => {
		chatStore.chatStatus = true;
		chatStore.activeChat = id;
		emits('openChat', ensure(chats.value?.find((chat) => chat.id === id)));
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
