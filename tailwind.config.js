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
				soil1: "#DBD4C7",
				soil2: "#EAE6E2",
				soil4: "#BDB6AC",
				soil5: "#A89A85",
				soil6: "#959186",
				soil7: "#8D8070",
				soil8: "#A59B8F",
				soil9: "#3F3931",
				soil10: "#D9D9D9",
				soil11: "#58534B",
				soil12: "#9D8452",
				soil13: "#726C5D",
			},
			container: {
				padding: "2rem",
				center: true,
			},
			spacing: {
				narrow: "640px",
				wide: "1300px",
				"ultra-wide": "1440px",
				tall: "1024px",
			},
			backgroundImage: {
				intro: "url('https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/image_landing_page_desktop.jpg')",
				brideandgroom: "url('https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/gallery_3_desktop.jpg')"
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
