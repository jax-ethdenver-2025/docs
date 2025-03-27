// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	site: "https://jax-ethdenver-2025.github.io",
	base: "docs",
	integrations: [
		starlight({
			title: 'jax docs.',
			logo: { src: './src/assets/icon.svg' },
			social: {
				github: 'https://github.com/jax-ethdenver-2025',
			},
			sidebar: [
				{
					label: 'Introduction',
					slug: 'docs/intro'
				},
				{
					label: 'Storage',
					items: [
						{
							slug: 'docs/storage/iroh'
						},
						{
							slug: 'docs/storage/blake3'
						},
					]
				},
				{
					label: 'Consensus',
					items: [
						{
							slug: 'docs/consensus/peer_trust'
						},
						{
							slug: 'docs/consensus/eigen_layer'
						},
					]
				}
			],
			customCss: ['./src/tailwind.css'],
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
			},
		}),
		tailwind({ applyBaseStyles: false }),
		icon({
			include: {
				lucide: ['database', 'github', 'book'],
			},
		}),
	],
});
