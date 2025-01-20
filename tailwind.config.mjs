/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#ff2201',
				secondary: '#ffe425',
				info: '#03c2ca'
			},
			fontFamily: {
				'Yesteryear': ['Yesteryear']
			}
		},
	},
	plugins: [],
}
