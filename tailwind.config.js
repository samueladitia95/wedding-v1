/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				circular: ["var(--font-circular)", ...defaultTheme.fontFamily.sans],
				safira: [...defaultTheme.fontFamily.serif],
			},
			colors: {
				primary: "#DBD4C7",
				secondary: "#726C5D",
				"secondary-lighten": "#8D8070",
			},
			container: {
				padding: "2rem",
				center: true,
			},
			spacing: {
				narrow: "640px",
			},
		},
	},
	plugins: [],
};
