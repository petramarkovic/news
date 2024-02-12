/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	return {
		define: {
			'process.env.REACT_APP_API_KEY': JSON.stringify(env.REACT_APP_API_KEY)
		},
		plugins: [react()],
		test: {
			globals: true,
			environment: 'jsdom',
			setupFiles: './src/setup.ts',
			// you might want to disable it, if you don't have tests that rely on CSS
			// since parsing CSS is slow
			css: true,
		},
	};
});
