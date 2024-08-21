/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero_1': "url('/img/bg_1.jpg')",
        'mobile_hero_1': "url('/img/mobile_bg1.jpg')",
      }
    },
  },
  plugins: [],
}

