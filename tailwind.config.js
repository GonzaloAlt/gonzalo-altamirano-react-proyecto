module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-rug": {
          400: "#f19182",
          500: "#ef7a68",
          600: "#bf422e",
          700: "#a33828",
          900: "#891b0c",
        },
        fontFamily: {
          LeagueGotic: ["League Gothic", "sans-serif"],
        },
        SmoochSans: ["Smooch Sans", "sans-serif"],
      },
      animation: ["animate-spin"],
    },
  },
  plugins: [],
};
