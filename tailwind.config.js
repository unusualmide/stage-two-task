/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-300': '#D1D5DB',
        'rose-700': '#BE123C',
        'gray-400': '#9CA3AF',
        'gray-900': '#111827',
        'white-50%': '#F3F4F6',
        'grey-400': '#9CA3AF',
        'grey-500': '#6B7280',
        'bleck-100': '#333',
        'bleck-200': '#666',
        'red-70%': '#BE123C',
        'red-40%': '#F8E7EB',
        'white-soft': '#E8E8E8',
        'black-soft': '#404040',
        'grey-soft': '#C7C7C7',
      },
      backgroundImage: {
        'header-poster': "url('/src/assets/Poster.svg')",
      }

    },
  },
  plugins: [],
}

