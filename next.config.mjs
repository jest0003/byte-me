/** @type {import('next').NextConfig} */
const nextConfig = {
	/* config options here */
	cacheComponents: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "dummyjson.com/products/category",
				port: "",
				pathname: "/**",
				search: "",
			},
		],
	},
};

export default nextConfig;
