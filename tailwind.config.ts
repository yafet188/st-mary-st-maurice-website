import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E4A853',  // The gold/orange color from your CTAs
        'navy': '#1F2937',     // Dark header color
        'white': '#FFFFFF',
        'black': '#000000',
      },
      fontFamily: {
        sans: ['var(--font-inter)'], // We can adjust this based on your preferred font
        heading: ['var(--font-heading)'], // For your bold headlines
      },
      spacing: {
        'section': '5rem',     // Standard section padding
        'container': '2rem',   // Standard container padding
      },
    },
  },
  plugins: [],
}

export default config