/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "370px",
      },
      colors: {
        blue: "rgb(72,1,255)",
        purple: "rgb(107,50,253)",
        gray: "#FAFAFA",
      },
    },
  },
  plugins: [],
};
