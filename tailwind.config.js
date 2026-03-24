/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: '#4338CA',
          'indigo-dark': '#312E81',
          'indigo-hover': '#3730A3',
          'indigo-light': '#EEF2FF',
          'indigo-100': '#E0E7FF',
          'indigo-500': '#6366F1',
          teal: '#0D9488',
          'teal-dark': '#115E59',
          'teal-light': '#14B8A6',
          'teal-glow': '#2DD4BF',
        }
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    }
  },
  plugins: []
}
