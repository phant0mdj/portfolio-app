/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'rgbgray': 'rgb(133, 133, 133)',
        gray: 'rgba(26, 26, 26, 0.6)',
        black: '#000000',
        white: 'rgb(255, 255, 255)',
        rgbblack: 'rgb(52, 52, 52)',
        aqua: 'rgb(25, 234, 184)',
      },
      backgroundImage:{
        'main': "url('/images/main.jpg')"
      },
      boxShadow: {
        glow: '0 0 10px rgba(255, 255, 255, 0.8)',
      },
      fontFamily: {
        'plus-jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
