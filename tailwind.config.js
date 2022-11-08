/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#40BFFF",
        primaryTransparent: "#BCDDFE",
        primaryMuted: "#33A0FF",
        secendery: "#FF4858",
        bleuNavy: "#385C8E",
        bleuTwitter: "#03A9F4",
        dark: "#262626",
        darkClear: "#22262A",
        darkBlue: "#223263",
        darkMuted: "#373737",
        grayClear: "#F6F7F8",
        grayMuted: "#C1C8CE",
        grayNeutral: "#9098B1",
        star: "#FFC600",
      },
    },
  },
  plugins: [],
};
