module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#03B8D7",
          secondary:"#04C8A4",
          accent: "#3A4256",
          "primary-focus": "#0C7592",
          "secondary-focus": "#00A187",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
