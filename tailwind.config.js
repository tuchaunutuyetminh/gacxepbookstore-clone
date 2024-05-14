/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        main: '1220px'
      },
      colors: {
        primary: '#498374'
      },
      backgroundImage: {
        'bg-breadcrumb': "url('/src/assets/images/bg_breadcrumb.webp')"
      }
    },
  },
  plugins: [],
}

