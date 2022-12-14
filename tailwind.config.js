const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],

  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      colors,
    },
    extend: {},
  },
  plugins: [],
};
