<template>
	<div class="filter-string">
		<div
			class="search-input"
			:class="{ 'search-input_empty-large': !isChatEmpty }"
		>
			<input
				type="text"
				placeholder=" Поиск по имени пользователя..."
				v-model="filterString"
			/>

      <button 
        v-if='filterString.length'
        class="button btn search-btn"
        @click='resetFilterString'
      >
        X
      </button>
		</div>
  </div>
</template>

<script setup lang="ts">
  import { Props } from './types';

  defineProps<Props>();
  const filterString = defineModel<string>('filterString', { required: true, default: '' });

  function resetFilterString() {
    filterString.value = ''
  }
</script>

 