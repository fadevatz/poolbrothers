/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        flagBlue: {
          DEFAULT: '#003B73',
          dark: '#00254A',
          light: '#00529E',
          hover: '#002D59',
        },
        poolCyan: {
          DEFAULT: '#00D2D2',
          light: '#33E0E0',
          dark: '#00A3A3',
          hover: '#00B8B8',
        },
        stripedRed: {
          DEFAULT: '#C8102E',
          dark: '#9E0B22',
          light: '#E02444',
        },
        brightWhite: '#FFFFFF',
        pbIce: '#F4F8FA',
        pbDark: '#0A1728',
      },
      fontFamily: {
        sans: ['Inter', 'Lato', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px rgba(0, 59, 115, 0.35)',
        'glow-cyan': '0 0 25px rgba(0, 210, 210, 0.4)',
        'glow-red': '0 0 25px rgba(200, 16, 46, 0.35)',
        'pb': '0 10px 30px -10px rgba(0, 59, 115, 0.15)',
      },
      backgroundImage: {
        'flag-stripe': 'linear-gradient(135deg, #003B73 0%, #00254A 100%)',
        'cyan-gradient': 'linear-gradient(135deg, #00D2D2 0%, #00A3A3 100%)',
        'red-gradient': 'linear-gradient(135deg, #C8102E 0%, #9E0B22 100%)',
      }
    },
  },
  plugins: [],
}
