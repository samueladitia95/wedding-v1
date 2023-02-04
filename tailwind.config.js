/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line
const defaultTheme = require("tailwindcss/defaultTheme");
// eslint-disable-next-line
const plugin = require("tailwindcss/plugin");

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				circular: ["var(--font-circular)", ...defaultTheme.fontFamily.sans],
				epilogue: ["var(--font-epilogue)", ...defaultTheme.fontFamily.sans],
				baskervville: [
					"var(--font-baskervville)",
					...defaultTheme.fontFamily.serif,
				],
				safira: [...defaultTheme.fontFamily.serif],
			},
			colors: {
				primary: "#DBD4C7",
				secondary: "#726C5D",
				"secondary-darken": "#8D8070",
				"secondary-lighten": "#A59B8F",
				"olive-darken": "#3F3931",
				"olive-lighten": "#D9D9D9",
				olive: "#58534B",
				cream: "#EAE6E2",
				brown: "#9D8452",
			},
			container: {
				padding: "2rem",
				center: true,
			},
			spacing: {
				narrow: "640px",
				wide: "1024px",
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				".scrollbar-hide": {
					/* IE and Edge */
					"-ms-overflow-style": "none",

					/* Firefox */
					"scrollbar-width": "none",

					/* Safari and Chrome */
					"&::-webkit-scrollbar": {
						display: "none",
					},
				},
			});
		}),
	],
};
