import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans as plusJakartaSans } from "@next/font/google";

// ? Circular Font
const circular = plusJakartaSans({
	subsets: ["latin"],
	variable: "--font-circular",
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={circular.variable}>
			<Component {...pageProps} />
		</main>
	);
}
