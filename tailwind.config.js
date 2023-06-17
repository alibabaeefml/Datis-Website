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
        blue2: "#5B95F5",
        purple: "rgb(107,50,253)",
        gray: "#FAFAFA",
        gray2: "#BDBDBD",
      },
    },
  },
  plugins: [],
};
