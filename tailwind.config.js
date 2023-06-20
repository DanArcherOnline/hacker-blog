/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1792px',
        // => @media (min-width: 1792px) { ... }
        '4xl': '2048px'
        // => @media (min-width: 2048px) { ... }
      },
      fontFamily: {
        'lato': ['var(--font-lato)'],
        'inter': ['var(--font-inter)'],
        'sourceSerif4': ['var(--font-source-serif-4)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'page-bg-grey': '#121212',
        'card-grey': '#212123',
        'body-text-grey': '#C0C0C7',
        'accent-pink': '#EC3174',
        'card-content-grey': '#333333',
      },
      borderRadius: {
        DEFAULT: '2.5rem'
      },
      backgroundImage: {
        'dragon-img': "url('https://images.unsplash.com/photo-1548412576-d92cb3275e23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2374&q=80')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/container-queries'),
    require('tailwindcss/plugin')(function ({ addBase }) {
      addBase({
        '[type="search"]::-webkit-search-decoration': { display: 'none' },
        '[type="search"]::-webkit-search-cancel-button': { display: 'none' },
        '[type="search"]::-webkit-search-results-button': { display: 'none' },
        '[type="search"]::-webkit-search-results-decoration': { display: 'none' },
      })
    }),
  ],
}
