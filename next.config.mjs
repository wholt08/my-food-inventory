/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/my-food-inventory',
    images: {
      unoptimized: true,
    },
    assetPrefix: '/my-food-inventory/',  // Add this line
    distDir: 'out',
    // Make sure static assets are handled correctly
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            publicPath: '/my-food-inventory/',
          },
        },
      });
      return config;
    },
  }
  
  export default nextConfig;