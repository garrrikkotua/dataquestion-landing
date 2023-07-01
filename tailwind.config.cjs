/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: "#148DFC",
				"brand-light": "#8adcff",
				secondary: "#c4edff",
				accent: "#0e80b0",
				"gradient-start": "#0061ff",
				"gradient-end": "#60efff",
			},
		},
	},
	plugins: [],
}
