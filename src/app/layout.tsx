import type { Metadata } from "next";
import { Aclonica, Crimson_Text, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const crimsonText = Crimson_Text({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
	variable: "--font-crimson-text",
});

const aclonica = Aclonica({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-aclonica",
});

const liberBaskerville = Libre_Baskerville({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-liber-baskerville",
});

export const metadata: Metadata = {
	title: "K Laya Sree",
	description: "UI/UX Designer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`
                    ${crimsonText.variable} 
                    ${aclonica.variable} 
                    ${liberBaskerville.variable}
										max-w-7xl mx-auto
                `}
			>
				{children}
			</body>
		</html>
	);
}
