/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['tryhackme-badges.s3.amazonaws.com'],
    },
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'tryhackme-badges.s3.amazonaws.com',
            port: '',
            pathname: '/DanArcherOnline.png',
        },
    ],
}

module.exports = nextConfig
