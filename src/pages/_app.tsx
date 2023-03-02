import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
	Epilogue as epilogueFont,
	Baskervville as baskervvilleFont,
} from "next/font/google";

import localFont from "next/font/local";

const circular = localFont({
	src: [
		{
			path: "../../public/circular/CircularStd-Medium.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/circular/CircularStd-MediumItalic.ttf",
			weight: "400",
			style: "italic",
		},
		{
			path: "../../public/circular/CircularStd-Book.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/circular/CircularStd-BookItalic.ttf",
			weight: "500",
			style: "italic",
		},
		{
			path: "../../public/circular/CircularStd-Bold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/circular/CircularStd-BoldItalic.ttf",
			weight: "600",
			style: "italic",
		},
		{
			path: "../../public/circular/CircularStd-Black.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/circular/CircularStd-BlackItalic.ttf",
			weight: "700",
			style: "italic",
		},
	],
	variable: "--font-circular",
});
const safira = localFont({
	src: [
		{
			path: "../../public/safira/SafiraMarch-Thin.otf",
			weight: "100",
			style: "normal",
		},
		{
			path: "../../public/safira/SafiraMarch-ExtraLight.otf",
			weight: "200",
			style: "normal",
		},
		{
			path: "../../public/safira/SafiraMarch-Light.otf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/safira/SafiraMarch-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/safira/SafiraMarch-Medium.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/safira/SafiraMarch-SemiBold.otf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/safira/SafiraMarch-Bold.otf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/safira/SafiraMarch-ExtraBold.otf",
			weight: "800",
			style: "normal",
		},
		{
			path: "../../public/safira/SafiraMarch-Black.otf",
			weight: "900",
			style: "normal",
		},
	],
	variable: "--font-safira",
});
const epilogue = epilogueFont({
	subsets: ["latin"],
	variable: "--font-epilogue",
});
const baskervville = baskervvilleFont({
	subsets: ["latin"],
	variable: "--font-baskervville",
	weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main
			className={`${circular.variable} ${epilogue.variable} ${baskervville.variable} ${safira.variable}`}
		>
			<Component {...pageProps} />
		</main>
	);
}
