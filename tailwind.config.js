/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./src/**/*.{html,js,css}",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        'sc-yellow': '#EAC435',
        'sc-red': '#FB4D3D',
        'sc-blue': '#2AB7CA',
        'black-20': 'rgba(0,0,0,0.2)',
        // Leaflet service themes (sampled from SCP leaflets)
        'leaflet-green-dark': '#455F2A',
        'leaflet-green': '#567836',
        'leaflet-green-light': '#83AF50',
        'leaflet-teal-dark': '#146D7A',
        'leaflet-teal': '#19ADB4',
        'leaflet-teal-mid': '#097982',
        'leaflet-purple-dark': '#52317F',
        'leaflet-purple': '#794CAF',
        'leaflet-purple-light': '#B897C6',
      },
      fontFamily: {
        'header': ['Montserrat', 'Karla', 'sans-serif'],
        'fancy': ['Montserrat', 'Karla', 'sans-serif'],
        'main': ['Karla', 'sans-serif'],
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
      }
    },
  },
  plugins: [],
} 