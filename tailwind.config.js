/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Poppins', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

