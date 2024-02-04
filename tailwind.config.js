/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#1E6F9F',
        blue: '#4EA8DE',
        'purple-dark': '#5E60CE',
        purple: '#8284FA',
        danger: '#E25858',
        'base-gray-700': '#0D0D0D',
        'base-gray-600': '#1A1A1A',
        'base-gray-500': '#262626',
        'base-gray-400': '#333333',
        'base-gray-300': '#808080',
        'base-gray-200': '#D9D9D9',
        'base-gray-100': '#F2F2F2',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
