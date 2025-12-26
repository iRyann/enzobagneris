/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
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
