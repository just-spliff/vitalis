/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	theme: {
		colors: {
			light: '#FFFFFF',
			rasinblack: '#1E1E24',
			caraibben: '#006D77',
			nonphoto: '#8EDCE6'
		},
		fontFamily: {
			montserrat: 'Montserrat, sans-serif',
			nicomoji: 'Nico-Moji'
		},
		screens: {
			large: '1290px',
			mid: '1010px',
			small: '920px',
			ss: '300px'
		}
	}
};
export default config;
