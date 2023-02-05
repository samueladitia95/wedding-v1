/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: false,
		optimizeCss: false,
	},
	reactStrictMode: true,
	images: {
		domains: ["via.placeholder.com", "www.placekitten.com"],
	},
};

module.exports = nextConfig;
