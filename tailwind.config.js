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
		},
	},
	plugins: [],
};
