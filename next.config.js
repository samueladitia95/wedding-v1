/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: false,
		optimizeCss: true,
	},
	reactStrictMode: true,
	images: {
		domains: ["via.placeholder.com"],
	},
};

module.exports = nextConfig;
