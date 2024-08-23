
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: "#4a4a4a",
        black: "#000",
        darkseagreen: "#6cb074",
        gainsboro: "#d9d9d9",
        gray: "#232323",
        indianred: "#c64f51",
        "neutral-gray-400": "#94a3b8",
        "neutral-gray-800": "#1e293b",
        darksalmon: "#d07357",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "lgi-3": "19.3px",
        "base-5": "15.5px",
      },
    },
    fontSize: {
      "57xl": "76px",
      "42xl": "61px",
      "27xl": "46px",
      "45xl": "64px",
      "32xl": "51px",
      "19xl": "38px",
      "124xl": "143px",
      "38xl": "57px",
      "17xl": "36px",
      "71xl": "90px",
      "26xl": "45px",
      "8xl": "27px",
      "50xl-6": "69.6px",
      "37xl": "56px",
      "23xl": "42px",
      "35xl-1": "54.1px",
      "24xl": "43px",
      "13xl": "32px",
      "77xl": "96px",
      "29xl": "48px",
      "10xl": "29px",
      inherit: "inherit",
    },
    screens: {
      mq4925: {
        raw: "screen and (max-width: 4925px)",
      },
      mq3450: {
        raw: "screen and (max-width: 3450px)",
      },
      mq1950: {
        raw: "screen and (max-width: 1950px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};