/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}", "./dist/*.html"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      md: "576px",
      lg: "1024px",
    },

    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      flexBasis: {
        "1/3-gap-2": "calc(33.3% - (2/3 * 0.5rem))",
      },
      spacing: {
        320: "20rem",
        190: "190px",
        544: "34rem",
        324: "324px",
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        primary: "#112D4E",
        secondary: "#3F72AF",
        background: "#F9F7F7",
        accent: "#DBE2EF",
      },
    },
  },
  plugins: [],
};
