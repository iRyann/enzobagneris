/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1400px',
        '3xl': '1920px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
      colors: {
        nature: {
          dark: '#284B3A',
          light: '#F3EFE7',
          accent: '#D85C36',
          soft: '#F2AFA0',
          text: '#1F1F1F',
          muted: '#5A5A5A',
        },
      },
      fontFamily: {
        serif: ['"Lora"', 'serif'],
        display: ['"Playfair Display SC"', 'serif'],
        heading: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
