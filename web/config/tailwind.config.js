/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      // sm: '480px',
      // md: '768px',
      // lg: '976px',
      // xl: '1440px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#6FB203',
        secondary: '#212121',
        tertiary: '#7F7F7F',
        darkGreen: '#1C6547',
        customBlack: '#1D1D1B',
        customWhite: '#FFFFF1',
      },
      // fontFamily: {
      //   Montserrat: ['Montserrat', 'sans-serif'],
      //   Caveat: ['Caveat', 'cursive'],
      // },
    },
  },
  plugins: [],
}
