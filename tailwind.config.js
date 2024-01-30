/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			padding: {
				'56-25': '56.25%',
			},
			colors: {
				light: '#faf9fb',
				primaryLight: '#f4f0f7',
				primary: '#ece4f0',
				primaryDark: '#ddcfe3',
				secondaryLight: '#c7b0d0',
				secondary: '#b090bc',
				secondaryDark: '#9c79a9',
				ternaryLight: '#83618f',
				ternary: '#6e5277',
				ternaryDark: '#594360',
				dark: '#3c2942'
			},
			height: {
				'40': '40rem'
			}
		},
	},
	plugins: [],
}
