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
				safira: ["var(--font-safira)", ...defaultTheme.fontFamily.serif],
			},
			colors: {
				soil1: "#DBD4C7",
				soil2: "#EAE6E2",
				soil4: "#BDB6AC",
				soil7: "#8D8070",
				soil8: "#A59B8F",
				soil10: "#D9D9D9",
				soil11: "#58534B",
				soil12: "#9D8452",
				soil13: "#726C5D",
				soil14: "#2C2B2A",
				soil15: "#1D1A17",
				soil16: "#312D28",
				soil17: "#26231F",
				soil18: "#9D9B99",
				soil19: "#816B3F",
				soil20: "#A49D94",
				soil21: "#61564B",
				clothes1: "#D4C4AF",
				clothes2: "#B48E53",
				clothes3: "#764633",
				clothes4: "#8F8B70",
				clothes5: "#D4C4AF",
				clothes6: "#565A41",
				clothes7: "#8A949B",
				clothes8: "#2D2217",
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
				"text-wide": "960px",
				"text-narrow": "550px",
				qna: "900px",
				"qna-small": "700px",
				"bt-circle-lg": "450px",
			},
			borderRadius: {
				"4xl": "2rem",
				"br-lg": "300px",
			},
			backgroundImage: {
				intro:
					"url('https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/image_landing_page_desktop.jpg')",
				brideandgroom:
					"url('https://digital-invitation-1.s3.ap-southeast-1.amazonaws.com/irwanclaudia/gallery_3_desktop.jpg')",
			},
			transitionDuration: {
				2000: "2000ms",
				5000: "5000ms",
			},
			fontSize: {
				xxs: ["8px", "8px"],
				xsm: ["10px", "12px"],
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
