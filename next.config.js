/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tryhackme-badges.s3.amazonaws.com',
                port: '',
                pathname: '/DanArcherOnline.png',
            },
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
