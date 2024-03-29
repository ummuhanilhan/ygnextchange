/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  important: false,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./@packages/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
    "./src/@shared/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/utils/**/*.{js,ts,jsx,tsx}",
    "./src/stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'map': "url('/assets/harita.png')",
      },
      colors:{
        yg:{
          lightblue: '#f7f6fb',
          blue: '#0069B4',
          orange: '#F39200',
          gray: '#868A9A',
          darkgray: '#aaa',
          green: '#1DBF73',
        },
      },
      fontSize:{
        'bigger': '1.2rem',
        'big': '1.1rem',
        'medium': '1rem',
        'small': '.9rem',
        'smallest': '.85rem',
    
      }
    },
 
  },
  plugins: [
    require('@tailwindcss/typography'),

  ],
}