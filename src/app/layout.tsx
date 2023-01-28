import "./globals.css";
import { Plus_Jakarta_Sans as plusJakartaSans } from "@next/font/google";

// ? Circular Font
const circular = plusJakartaSans({
	subsets: ["latin"],
	variable: "--font-circular",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={circular.variable}>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>{children}</body>
		</html>
	);
}
