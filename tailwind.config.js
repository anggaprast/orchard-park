/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        'plusjs': ["Plus Jakarta Sans", 'sans-serif'],
      },
      animation: {
        'slide': 'slide 30s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          },
        },
      },
    },
  },
  plugins: [],
}