import daisyui from "daisyui";
import { black } from "daisyui/src/theming/themes";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        black: {
          ...black, // Spread the default black theme properties
          "primary": "rgb(29, 155, 240)",
          "secondary": "rgb(24, 24, 24)",
          // You can add more customizations here:
          // "accent": "#somecolor",
          // "neutral": "#somecolor",
          // etc.
        }
      }
    ],
  }
}