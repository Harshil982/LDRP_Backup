/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        128: "64rem",
      },
      screens: {
        'md': '850px',
        // => @media (min-width: 992px) { ... }
      },
      colors: {
        darkbluefn: "#01204C",
        lightbluefn: "#1A6CE0",
        darkbluesn: "#032658",
        lightbluesn: "#1b6ce1",
        tableblue: "#1B6CE1",
        textGray : "#898989",
        inputBack : "#F1F0F0",
        textColor : "#373737",
        loginpage : "#0094FF"
      },
      boxShadow: {
        "3xl":
          "0px 4px 4px rgba(0, 0, 0, 0.25),inset 41.1994px -41.1994px 41.1994px rgba(57, 57, 57, 0.1),inset -41.1994px 41.1994px 41.1994px rgba(36, 36, 36, 0.1);",
      },
      backgroundImage: (theme) => ({
        "gradient-primary": `linear-gradient(112.49deg, ${theme(
          "colors.darkbluefn"
        )}, ${theme("colors.lightbluefn")})`,

        "gradient-secondary": `linear-gradient(112.49deg, ${theme(
          "colors.darkbluesn"
        )}, ${theme("colors.lightbluesn")})`,

        "gradient-footer": `linear-gradient(112.49deg, ${theme(
          "colors.darkbluefn"
        )}, ${theme("colors.lightbluefn")})`,
      }),
    },
  },
  plugins: [],
};
