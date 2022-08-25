/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
    "./src/shared/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        yukgetir:{
          lightblue: '#F6F8FB',
          blue: '#0069B4',
          orange: '#F39200',
          gray: '#868A9A',
          green: '#1DBF73',
        }
      }
    },
  },
  plugins: [],
}
