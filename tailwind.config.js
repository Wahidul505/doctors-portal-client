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
          primary: "#0FCFEC",
          secondary:"#19D3AE",
          accent: "#3A4256",
          "primary-focus": "orange",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
