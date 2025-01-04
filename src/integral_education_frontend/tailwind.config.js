/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#9B317B',
				'primary-light': '#1a6404',
				secondary: '007aff',
				tertiary: '#BF5926',
			},
			fontFamily: {
				sans: ['Poppins'],
			},
		},
	},
	plugins: [],
};