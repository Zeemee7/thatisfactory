import preprocess from "svelte-preprocess";
import { vitePreprocess } from "@sveltejs/kit/vite";

import node from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;',
			},
		}),
	],

	kit: {
		adapter: node()
	},
};

export default config;
