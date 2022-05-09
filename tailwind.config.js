module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#03B8D7",
          secondary:"#04C8A4",
          accent: "#3A4256",
          "primary-focus": "#0C7592",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
