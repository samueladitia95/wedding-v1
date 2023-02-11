/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: false,
		optimizeCss: false,
	},
	reactStrictMode: true,
	images: {
		domains: [
			"via.placeholder.com",
			"www.placekitten.com",
			"digital-invitation-1.s3.ap-southeast-1.amazonaws.com",
		],
	},
};

module.exports = nextConfig;
