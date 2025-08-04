/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#E6BE8A',   // Пудрово-золотой
          DEFAULT: '#D4AF37', // Классическое золото
          muted: '#BD9865',   // Тёплый бежево-золотой
        },
      },
    },
  },
  plugins: [],
};
