/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hightlight': '#f2f2f2'

      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        'promoBannerImg': "url('/img/banner.png')"
      }

    },
  },
  plugins: [],
}

