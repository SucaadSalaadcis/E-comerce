/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#B06161",
        secondaryColor: "#61A3BA",
        thirdColor: "#FFCD4B",
        fourthColor: "#CD5C08"

      }
    },
  },
  plugins: [],
}

