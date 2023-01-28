import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
	Plus_Jakarta_Sans as plusJakartaSans,
	Epilogue as epilogueFont,
} from "@next/font/google";

// ? Circular Font
const circular = plusJakartaSans({
	subsets: ["latin"],
	variable: "--font-circular",
});
const epilogue = epilogueFont({
	subsets: ["latin"],
	variable: "--font-epilogue",
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${circular.variable} ${epilogue.variable}`}>
			<Component {...pageProps} />
		</main>
	);
}
