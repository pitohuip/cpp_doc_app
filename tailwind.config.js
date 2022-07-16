/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.{haml, html, js}",
            "./public/js/*.js"],
  theme: {
    extend: {
      colors: {
        night: {
          100: '#4c566a',
          200: '#434c5e',
          300: '#3b4252',
          400: '#2e3440',
        },
        storm: {
          100: '#f8f9fb',
          200: '#eceff4',
          300: '#e5e9f0',
          400: '#d8dee9',
        },
        frost: {
          100: '#8fbcbb',
          200: '#88c0d0',
          300: '#81a1c1',
          400: '#5e81ac',
        },
        aurora: {
          100: '#bf616a',
          200: '#d08770',
          300: '#ebcb8b',
          400: '#a3be8c',
          500: '#b48ead',
        },
      },
      fontFamily: {
        sans: ['Rubik', 'system-ui'],
        serif: ['Rubik', 'Georgia'],
        mono: ['Jetbrains Mono', 'SFMono-Regular'],
      },
    },
  },
  plugins: [],
}
