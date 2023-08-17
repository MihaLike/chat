<template>
	<div class="user-list__card-content">
		<h3 class="user-list__card-name">{{ props.user.name }}</h3>
		<p class="user-list__card-chat">
			{{ props.message.text }}
		</p>
		<span class="user-list__card-time">{{ props.message.time }}</span>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps({
		user: {
			type: Object,
			required: true,
		},
		message: {
			type: Object,
			required: true,
		},
	});
</script>
