/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // Modern blue
          light: '#60a5fa',
          dark: '#1e40af',
        },
        secondary: {
          DEFAULT: '#7c3aed', // Spiritual purple
          light: '#a78bfa',
          dark: '#5b21b6',
        },
        accent: {
          DEFAULT: '#059669', // Nature green
          light: '#34d399',
          dark: '#047857',
        },
        background: {
          light: '#f8fafc',
          dark: '#1e293b',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 