/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito", "Fraunces"],
      },
      colors: {
        nightBlack: "#0A0A0A",
        deepBlue: "#2A77F4",
        seasalt: "#F7F7F7",
        darkBlue: "#152744",
        good: "#8AEF95",
        bad: "#FF2B4B",
      },
    },
  },
  plugins: [],
};
