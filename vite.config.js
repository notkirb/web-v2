import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	base: "",
	root: 'src',
	build: {
		outDir: 'public'
	},
	define: {
		BUILD_DATE: JSON.stringify(new Date().toISOString())
	}
});
