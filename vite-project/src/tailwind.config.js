/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Add this line
      ".src/.{js,jsx,ts}"
    ],
    theme: {
      extend: { fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        funky: ['Agency FB', 'Impact', 'sans-serif'],
      },},
    },
    plugins: [],
  }
  