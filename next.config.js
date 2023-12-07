/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api2.khojgurbani.org',
                port: '',
                pathname: '/uploads/podcast_category/**',
            },
        ],
    },
}

module.exports = nextConfig
