/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/my-food-inventory',
    images: {
      unoptimized: true,
    }
  }
  
  export default nextConfig;  // Changed from module.exports to export default