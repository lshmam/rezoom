/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'w-24',
    'h-24',
    'w-32',
    'h-32',
    'w-40',
    'h-40',
    'w-48',
    'h-48',
    'w-56',
    'h-56',
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-yellow-500',
    'bg-red-500'
  ]
};