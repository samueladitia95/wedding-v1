import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
	Plus_Jakarta_Sans as plusJakartaSans,
	Epilogue as epilogueFont,
	Baskervville as baskervvilleFont,
} from "next/font/google";

// ? Circular Font
const circular = plusJakartaSans({
	subsets: ["latin"],
	variable: "--font-circular",
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
			className={`${circular.variable} ${epilogue.variable} ${baskervville.variable}`}
		>
			<Component {...pageProps} />
		</main>
	);
}
