/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        bebasNue: ["Bebas Neue", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        updown: "moveUpDown 3s infinite ease-in-out",
        cardHover: "scaleUpCard 3s infinite ease-in-out",
      },
      keyframes: {
        scaleUpCard: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(50px)",
          },
        },
        moveUpDown: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-50px)",
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
