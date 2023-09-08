import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { setDeviceType } from '@/helpers/deviceTypeChecker';

export const useGlobalStore = defineStore('global', () => {
	const userDeviceType = computed(() => {
		return setDeviceType();
	});

	return { userDeviceType };
});
