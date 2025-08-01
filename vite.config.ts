import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [
    vue(),
    dts({
      outDir: 'dist',
      rollupTypes: true, // Склеивает всё в один файл index.d.ts
      include: ['src/**/*.ts', 'src/**/*.vue'], // Поддержка Vue и TypeScript
      exclude: ['node_modules', 'dist'],
    }),
  ],
	resolve: {
		alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@types': fileURLToPath(new URL('./src/types', import.meta.url)),
      '@helpers': fileURLToPath(new URL('./src/helpers', import.meta.url)),
      '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
		},
    extensions: ['.vue', '.ts', '.js', '.json'],  
	},
	base: '/chat/',
});
  