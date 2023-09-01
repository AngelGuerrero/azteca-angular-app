/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#17A54D",
          600: "#0F7D2E",
          700: "#0B5A1D",
          800: "#06340D",
          900: "#031B07",
        },
        secondary: {
          500: "#278252",
          600: "#1B5E3E",
          700: "#12422C",
          800: "#07211A",
          900: "#03110D",
        },
        'secondary-hover': {
          500: "#1DD69F"
        },
        'principal-text': {
          300: "#D4D7DA",
          400: "#B9BBBE",
          500: "#2E3032",
          600: "#1F2021",
          700: "#121314",
          800: "#050506",
          900: "#000000",
        },
        'secondary-text': {
          500: "#F1F1F1"
        }
      }
    },
  },
  plugins: [],
}
