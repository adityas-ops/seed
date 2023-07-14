/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        "dm":['DM Serif Display', 'serif'],
        "inter":['Inter', 'sans-serif']
      },
      backgroundImage: {
        'back1': "url('/background1.svg')",
        "fade-left":"linear-gradient(90deg,#e8f5f4,rgba(255,255,255,0))",
        "fade-right":"linear-gradient(90deg,transparent,#e8f5f4)",
        "lined":"linear-gradient(rgba(240,72,92,0),rgba(240,72,92,.5) 50%,rgba(255,255,255,0))",
        "mask":"linear-gradient(rgba(255,255,255,0),rgba(0,0,0,.6) 50%,rgba(0,0,0,.55))"
      },
    },
  },
  plugins: [],
}
