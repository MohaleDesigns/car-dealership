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
        primary: '#002C5E',
        secondary: '#DD1B22',
        tertiary: '#004ADE',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
