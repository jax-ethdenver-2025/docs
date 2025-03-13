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
					slug: 'docs/docs/intro'
				},
				{
					label: 'Iroh',
					slug: 'docs/docs/iroh'
				},
				{
					label: 'Blake3',
					slug: 'docs/docs/blake3'
				},
				{
					label: 'Eigen Trust',
					slug: 'docs/docs/eigen_trust'
				},
				{
					label: 'Consensus',
					slug: 'docs/docs/consensus'
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
