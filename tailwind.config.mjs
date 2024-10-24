/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {colors: {
			'custom-blue-background': '#101426','hover-blue-background': '#171b2c',"hover-ligth-background":"#b8b8e5"
		  },
		  keyframes: {
			fadeInUp: {
			  '0%': { opacity: 0, transform: 'translateY(50px)' },
			  '100%': { opacity: 1, transform: 'translateY(0)' },
			},
		  },
		  animation: {
			fadeInUp: 'fadeInUp 0.3s ease-out forwards',
		  },},
	},
	plugins: [
		function ({ addUtilities }) {
		  addUtilities({
			'.hide-scrollbar': {
			  'scrollbar-width': 'none', /* Firefox */
			  '-ms-overflow-style': 'none', /* IE and Edge */
			},
			'.hide-scrollbar::-webkit-scrollbar': {
			  display: 'none', /* Chrome, Safari, Edge */
			},
		  })
		}
	  ],
}
