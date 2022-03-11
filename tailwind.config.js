module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screen: {
      xs: "425px",
    },
    extend: {
      colors: {
        bluePrimary: "#062538",
        redPrimary: "#e0131",
        cream: "#fcf0e7"
      },
      backgroundImage: {
        "hero-background": "url('./assets/img-1.jpg')",
      }
    },
  },
  plugins: [],
};
