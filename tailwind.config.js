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
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-8deg)",
          },
          "50%": {
            transform: "rotate(8deg)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
