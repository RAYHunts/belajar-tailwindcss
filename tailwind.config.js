/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#FF6363",
        "secondary": "#FFA63D",
        "tertiary": "#38A169",
      },
      container: {
        center: true,
        padding: "1rem",
      },  
    }
  },
  plugins: [],
}

