/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['tryhackme-badges.s3.amazonaws.com', 'cdn.sanity.io'],
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
                pathname: '',
            },
        ],
    },
}

module.exports = nextConfig
