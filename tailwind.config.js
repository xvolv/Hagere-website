/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        permanent: ['Permanent Marker', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
        ga: ['Ga Maamli', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

