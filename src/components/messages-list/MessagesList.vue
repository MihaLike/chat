<template>
	<div
		v-if="chatStore.chatStatus"
		class="chat wrapper chat__filled-wrapper"
		:class="{ 'chat__filled-wrapper_small': !chatStore.chatStatus }"
	>
		<!-- Chat Header -->
		<div class="chat__header">
			<button
				@click="closeChat"
				class="button back-btn_small"
			>
				<svg
					width="13"
					height="21"
					viewBox="0 0 13 21"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M10.0371 20.0827L0.792152 10.9458C0.402616 10.5612 0.402616 9.93981 0.792152 9.5542L10.0371 0.417333C10.5995 -0.139111 11.5144 -0.139111 12.0777 0.417333C12.64 0.973776 12.64 1.87687 12.0777 2.43332L4.16913 10.2505L12.0777 18.0657C12.64 18.6231 12.64 19.5262 12.0777 20.0827C11.5144 20.6391 10.5995 20.6391 10.0371 20.0827Z"
						fill="white"
					/>
				</svg>
			</button>

			<article class="chat-user-card">
				<img
					:src="user.avatar"
					alt="User Avatar"
					class="chat-user-card__photo"
				/>
				<div class="chat-card-content">
					<h3 class="chat-card-content__card-name">{{ user.name }}</h3>
					<span class="chat-card-content__card-time">Был 7 часов назад</span>
				</div>
			</article>

			<button
				@click="closeChat"
				class="button close-btn close-btn_large"
			>
        X
      </button>
		</div>

		<!-- Chat Box  -->
		<div class="chat-box">
			<!-- <span class="chat-box__date" :class="{ shown: showDate }">Сегодня</span> -->
			<div
				class="user-message-wrapper"
				v-for="message of user.messages"
				:key="message.id"
				:class="{ 'user-message-wrapper_end': message.type === 'own', 'user-message-wrapper_start': message.type === 'user' }"
			>
				<img
					v-if="message.type === 'user'"
					:src="user.avatar"
					alt="User Avatar"
					class="user-message-photo"
				/>
				<div :class="{ 'own-message': message.type === 'own', 'user-message': message.type === 'user' }">
					<h3
						v-if="message.type === 'user'"
						class="user-message__name"
					>
						{{ user.name }}
					</h3>
					<p class="own-message__text">
						{{ message.text }}
					</p>
					<br />
					<span class="own-message__time">{{ formatDate(new Date(message.date)) }}</span>
				</div>
			</div>
			<div ref="bottom"></div>
		</div>

		<div class="chat-input">
			<input
				@keyup.enter="sendMessage"
				type="text"
				placeholder="Напишите сообщение ..."
				v-model="textMessage"
				ref="chatinput"
			/>
			<button
				@click="sendMessage"
				class="button btn send-btn"
			>
				<svg
					width="8"
					height="15"
					viewBox="0 0 8 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4.30515 14.2443C4.31088 14.2064 4.31353 14.1681 4.31306 14.1298V2.0541L4.3748 2.1964C4.43621 2.33549 4.51979 2.46202 4.62175 2.57033L6.3288 4.4003C6.54341 4.64131 6.88866 4.68181 7.14682 4.49627C7.42192 4.28032 7.48165 3.8662 7.28022 3.57127C7.26393 3.54745 7.24618 3.5248 7.22708 3.50352L4.1402 0.194353C3.89923 -0.0642586 3.50833 -0.0644861 3.26709 0.193836L0.179726 3.50352C-0.0610315 3.76234 -0.0604915 4.18138 0.180941 4.43949C0.199945 4.4598 0.220164 4.47877 0.241463 4.49627C0.499623 4.68181 0.844872 4.64131 1.05949 4.4003L2.76962 2.57364C2.8603 2.47654 2.93633 2.3649 2.99496 2.24273L3.07831 2.04418L3.07831 14.0934C3.0666 14.4315 3.28691 14.7281 3.59691 14.7916C3.93347 14.8501 4.25055 14.6051 4.30515 14.2443Z"
						fill="#FF9839"
					/>
				</svg>
			</button>
		</div>
	</div>
  
	<div
		v-else
		class="wrapper chat__empty-wrapper"
		:class="{ 'chat__filled-wrapper_small': !chatStore.chatStatus }"
	>
		<svg
			class="chat__icon"
			xmlns="http://www.w3.org/2000/svg"
			width="120"
			height="91"
			viewBox="0 0 120 91"
			fill="none"
		>
			<g clip-path="url(#clip0_3_52422)">
				<path
					d="M110.27 82.3126C109.405 85.7875 108.757 87.9593 108.324 88.1765C105.081 90.5655 16.8649 94.2577 11.4595 85.7875C10.5946 84.4844 7.13513 80.3579 6.05405 76.4486C5.83783 75.797 5.62162 74.9283 5.4054 74.2768C-3.8919 35.4009 1.08108 6.7326 3.02702 5.86387C18.1622 -0.651647 116.108 -1.95475 119.351 2.82329C122.162 6.94978 114.595 63.6348 110.27 82.3126Z"
					fill="url(#paint0_linear_3_52422)"
				/>
				<path
					opacity="0.4"
					d="M119.568 3.04051C118.919 -3.04064 111.568 25.4104 109.405 47.5632C107.676 63.6348 107.459 86.0047 107.892 87.0906C108.541 88.1765 122.162 29.3197 119.568 3.04051Z"
					fill="#C60055"
				/>
				<path
					opacity="0.4"
					d="M110.27 82.3127C109.405 85.7876 108.757 87.9594 108.324 88.1766C105.081 90.5656 16.8649 94.2578 11.4595 85.7876C10.5946 84.4845 6.48648 78.4033 5.62161 74.2769C10.1622 84.0501 25.9459 91.4344 63.5676 90.1313C101.189 88.8282 107.459 87.5251 110.27 82.3127Z"
					fill="#C60055"
				/>
				<path
					opacity="0.4"
					d="M3.02702 5.86392C2.59458 9.33886 29.4054 44.7398 47.3513 53.4272C65.2973 62.1145 109.405 8.6873 119.568 3.04053C119.568 3.04053 120 3.47489 120 5.86392C120 8.25294 79.1351 39.093 71.3513 47.5632C63.7838 56.0334 102.486 86.4391 108.541 88.3937C108.541 88.3937 107.027 89.2625 106.162 89.0453C105.297 88.3937 74.8108 66.0238 67.027 50.3866C67.027 50.3866 58.5946 57.7708 53.6216 57.988C48.6486 58.2052 43.027 51.4725 41.7297 51.0381C41.7297 51.0381 17.2973 73.6252 14.4865 87.0906C14.4865 87.0906 14.4865 88.1766 12.973 85.7875C11.4594 83.3985 39.7838 51.2553 39.7838 50.6038C39.7838 49.9522 11.6757 23.2386 3.02702 5.86392Z"
					fill="#C60055"
				/>
				<path
					opacity="0.4"
					d="M44.3243 51.9068C44.3243 51.9068 50.8108 60.8113 53.8378 60.8113C59.4594 60.8113 66.1622 59.291 84.3243 43.2194C116.973 14.334 118.054 3.90918 118.054 3.90918C118.054 3.90918 107.243 14.5512 89.9459 30.4056C72.6486 46.26 59.4594 52.9927 55.5676 54.2958C52.1081 55.3817 44.3243 51.9068 44.3243 51.9068Z"
					fill="#C60055"
				/>
				<path
					opacity="0.3"
					d="M119.568 3.04055C119.135 2.82337 106.811 -1.73749 76.3243 3.04055C44.973 7.81859 8.86486 1.0859 4.75675 7.16704C0.432429 13.031 1.94594 19.7637 1.51351 33.4463C1.08108 46.4773 5.18919 71.8878 5.62162 74.2768C-3.8919 35.4009 1.08108 6.73267 3.02702 5.86394C18.1622 -0.651574 116.108 -1.73749 119.568 3.04055Z"
					fill="#C60055"
				/>
				<path
					opacity="0.3"
					d="M7.78377 7.38408C5.62161 8.47 18.3784 23.2385 30.054 37.1383C41.7297 51.038 62.054 49.7349 75.2432 40.8304C88.4324 31.9258 113.73 6.73253 112.432 3.90914C111.135 1.08575 81.0811 4.12632 56.6486 5.42942C32 6.73253 11.2432 5.64661 7.78377 7.38408Z"
					fill="#FFB64A"
				/>
				<path
					opacity="0.2"
					d="M14.2703 86.8734C12.973 83.8329 28.7568 65.3722 56.2162 65.8066C83.6757 66.4582 103.135 88.6109 103.135 88.6109C103.135 88.6109 46.0541 94.2577 14.2703 86.8734Z"
					fill="#EB5694"
				/>
				<path
					opacity="0.4"
					d="M87.7838 73.1909C87.7838 73.1909 94.0541 79.7064 99.027 83.6157C104.216 87.525 105.946 88.8281 105.946 88.8281C105.946 88.8281 108.108 89.6969 108.973 87.0907C109.838 84.2673 100.541 84.4845 87.7838 73.1909Z"
					fill="#C60055"
				/>
				<path
					d="M68.7567 53.427C67.027 52.3411 73.9459 65.5893 84.3243 74.0595C94.4865 82.5297 103.135 87.0905 103.135 87.0905C103.135 87.0905 89.5135 73.1908 68.7567 53.427Z"
					fill="#FFD8A7"
				/>
				<path
					d="M15.1351 84.2671C15.1351 84.2671 31.3513 61.2456 41.7297 50.8208C41.7297 51.038 21.1892 64.2862 15.1351 84.2671Z"
					fill="#FFD8A7"
				/>
				<path
					opacity="0.4"
					d="M109.405 45.6084C107.676 68.4127 115.459 46.6943 117.838 33.4461C120.216 20.1979 118.054 5.21223 118.054 3.90913C118.054 2.38884 110.919 26.2791 109.405 45.6084Z"
					fill="#C60055"
				/>
				<path
					opacity="0.2"
					d="M16.8649 47.1289C17.0811 44.5227 20.3243 44.7399 20.7568 45.8258C21.1892 46.9117 20.1081 49.5179 18.5946 49.9523C17.0811 50.3866 16.8649 48.432 16.8649 47.1289Z"
					fill="#C60055"
				/>
				<path
					opacity="0.2"
					d="M92.5405 11.5107C92.7567 8.90451 96 9.12169 96.4324 10.2076C96.8649 11.2935 95.7838 13.8997 94.2703 14.3341C92.7567 14.5513 92.5405 12.5966 92.5405 11.5107Z"
					fill="#C60055"
				/>
				<path
					opacity="0.2"
					d="M15.7838 45.1742C17.7297 42.7852 15.3513 34.9666 9.94594 35.4009C4.54054 35.8353 7.13513 43.6539 9.94594 45.6086C12.5405 47.3461 14.7027 46.2601 15.7838 45.1742Z"
					fill="#C60055"
				/>
				<path
					d="M53.6216 54.2959C51.027 53.8615 85.8378 33.8806 85.8378 33.8806C85.8378 33.8806 65.7297 52.1241 53.6216 54.2959Z"
					fill="#FFC59F"
				/>
				<path
					opacity="0.4"
					d="M3.02702 5.86377C3.02702 5.86377 5.83783 15.637 15.7838 28.4509C25.7297 41.2647 44.3243 51.9067 44.3243 51.9067C44.3243 51.9067 14.2703 27.7993 3.02702 5.86377Z"
					fill="#C60055"
				/>
				<path
					d="M44.1081 29.7541C35.6757 33.0119 32.4324 38.8759 31.3514 49.3007C30.0541 59.7255 53.1892 73.1909 63.7838 64.0692C74.3784 55.1646 73.9459 41.2649 70.9189 33.6634C67.8919 26.2792 48.6487 28.0167 44.1081 29.7541Z"
					fill="url(#paint1_linear_3_52422)"
				/>
				<path
					opacity="0.8"
					d="M65.9459 47.1288C65.9459 54.7302 59.6757 61.0285 52.1081 61.0285C44.5405 61.0285 38.2703 54.7302 38.2703 47.1288C38.2703 39.5273 44.5405 33.229 52.1081 33.229C59.6757 33.229 65.9459 39.5273 65.9459 47.1288Z"
					fill="#D40055"
				/>
				<path
					d="M53.8378 59.5082C60.4056 59.5082 65.7297 53.9657 65.7297 47.1287C65.7297 40.2917 60.4056 34.7493 53.8378 34.7493C47.2701 34.7493 41.946 40.2917 41.946 47.1287C41.946 53.9657 47.2701 59.5082 53.8378 59.5082Z"
					fill="#F20041"
				/>
				<path
					opacity="0.8"
					d="M32.2162 54.0788C32.2162 54.0788 39.1351 63.4177 51.8919 64.938C64.6486 66.4583 69.8378 56.4678 71.3514 48.432C72.8649 40.3962 68.973 31.4917 68.973 31.4917C68.973 31.4917 71.3514 33.2292 71.7838 34.7495C72.2162 36.2697 73.2973 52.7757 73.7297 57.3366C74.1622 61.8974 67.027 68.6301 54.9189 69.4989C42.8108 70.1504 34.8108 58.8569 32.2162 54.0788Z"
					fill="#C90055"
				/>
				<path
					opacity="0.5"
					d="M38.2703 45.3912C38.9189 52.5583 37.4054 50.1693 43.2432 41.2648C49.0811 32.3602 63.3513 39.9617 64.6486 41.2648C65.9459 42.5679 60.3243 31.2743 50.1622 33.229C40 34.9664 38.2703 45.3912 38.2703 45.3912Z"
					fill="#A10055"
				/>
				<path
					opacity="0.3"
					d="M32.2162 52.3412C33.2973 57.1192 38.2703 57.1192 39.3514 56.6848C40.4324 56.2505 35.6757 48.8662 38.7027 40.6132C41.946 32.1431 49.5135 29.5369 58.8108 33.229C68.1081 36.9211 68.1081 33.0118 67.2433 31.4915C66.3784 29.9712 49.5135 25.4104 40.6487 31.4915C31.7838 37.5727 31.7838 49.735 32.2162 52.3412Z"
					fill="#FFB64A"
				/>
				<path
					opacity="0.3"
					d="M56.8649 64.9378C54.2703 62.766 64 57.1192 67.2432 50.3865C70.4865 43.6538 70.0541 52.124 68.1081 57.5536C66.1622 63.2003 56.8649 64.9378 56.8649 64.9378Z"
					fill="#FFB64A"
				/>
				<path
					d="M54.4865 29.1025C51.8919 29.7541 57.0811 33.4462 61.1892 33.0118C65.2973 32.3603 60.3243 27.7994 54.4865 29.1025Z"
					fill="white"
				/>
				<path
					d="M56.8649 64.2863C55.5676 64.0691 59.4595 60.5941 60.5406 61.0285C61.8378 61.4629 59.8919 64.9378 56.8649 64.2863Z"
					fill="white"
				/>
				<path
					opacity="0.2"
					d="M78.4865 57.3364C78.9189 61.8973 98.8108 82.3126 104.216 83.6157C109.622 84.9188 105.514 47.346 105.297 37.1384C105.081 26.9307 78.0541 51.9068 78.4865 57.3364Z"
					fill="#EB5694"
				/>
				<path
					opacity="0.2"
					d="M84.3243 74.0596C77.8378 70.8019 87.5676 81.4439 91.8919 85.3532C96.4324 89.2625 102.27 88.6109 103.135 88.1766C104 87.9594 91.4595 81.0095 84.3243 74.0596Z"
					fill="#DC6A94"
				/>
				<path
					d="M6.7027 9.33878C11.2432 16.2887 22.0541 9.33878 35.8919 6.94976C49.7297 4.77792 15.3513 3.25764 10.3784 4.77792C5.4054 6.29821 6.7027 9.33878 6.7027 9.33878Z"
					fill="#FFD8A7"
				/>
			</g>
			<defs>
				<linearGradient
					id="paint0_linear_3_52422"
					x1="60.0473"
					y1="91.0818"
					x2="60.0473"
					y2="-9.92511e-05"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#FFA274" />
					<stop
						offset="1"
						stop-color="#FFC488"
					/>
				</linearGradient>
				<linearGradient
					id="paint1_linear_3_52422"
					x1="52.0463"
					y1="67.1278"
					x2="52.0463"
					y2="28.3031"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#DE0086" />
					<stop
						offset="1"
						stop-color="#FF003B"
					/>
				</linearGradient>
				<clipPath id="clip0_3_52422">
					<rect
						width="120"
						height="91"
						fill="white"
					/>
				</clipPath>
			</defs>
		</svg>
		<h2 class="chat__title">Чат не выбран</h2>
		<p class="chat__descr">Выберите чат, начните общение!</p>
	</div>
</template>

<script setup lang="ts">
	import { ref, onUpdated, nextTick, watch } from 'vue';
	import { useSendMessage } from '@/composables/useSendMessage';
	import { formatDate } from '@/composables/useDate';
	import { useChatStore } from '@/stores/useChatStore';
	import { useGlobalStore } from '@/stores/useGlobalStore';
	import { MOBILE_DEVICE } from '@/utils/utils';
  import type { Emits, Props } from './types';
 
	const props = defineProps<Props>();

	const emit = defineEmits<Emits>();
 
	// Store
	const chatStore = useChatStore();
	// Global Store
	const globalStore = useGlobalStore();

	const textMessage = ref('');
	const bottom = ref();
	const chatinput = ref();

	const sendMessage = async () => {
		// no empty messages
		if (textMessage.value === '') {
			chatinput.value?.focus();
			return;
		}
		useSendMessage(props.user.id, {
			id: Date.now().toString(),
			date: new Date().toString(),
			text: textMessage.value,
			type: 'own',
		});
    
		emit('updateLastMessage', props.user.id, {
			id: Date.now().toString(),
			date: new Date().toString(),
			text: textMessage.value,
			type: 'own',
		}); 
		textMessage.value = '';
		await nextTick().then(() => {
			// MOBILE BROWSERS
			if (globalStore.userDeviceType === MOBILE_DEVICE) {
				bottom.value?.scrollIntoView();
			} else bottom.value?.scrollIntoView({ behavior: 'smooth' });
		});
		chatinput.value?.focus();
		chatStore.sortChatList();
	};

	// Close chat XS
	const closeChat = () => {
		chatStore.chatStatus = false;
		chatStore.activeChat = null;
	};
	// Watch on chat changed
	watch(
		() => props.user,
		() => {
			chatinput.value?.focus();
			textMessage.value = '';
		}
	);

	// Scroll to last message
	onUpdated(() => {
		bottom.value?.scrollIntoView({ behavior: 'smooth' });
	});
</script>
