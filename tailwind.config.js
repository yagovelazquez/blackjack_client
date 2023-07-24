/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: '#f3f3f4',
        gray900: '#676a6c',
        primary: '#1ab394',
        primary700: '#18a689'
      }
    },
  },
  plugins: [],
}