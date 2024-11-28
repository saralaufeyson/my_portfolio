import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"crimson-text": ["var(--font-crimson-text)", "serif"],
				aclonica: ["var(--font-aclonica)", "sans-serif"],
				"liber-baskerville": ["var(--font-liber-baskerville)", "serif"],
			},
		},
	},
	plugins: [],
};
export default config;
