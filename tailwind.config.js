/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        'primary': '#215056',
        'primary-light': '#4297AB',
        'neutral800': '#A5ACBA',
        'gray025': '#919BA7',
        'gray050': '#5F6D7E',
        'gray300': '#2E3545',
        'gray700': '#272D37',
        'bg-black': '#222222',
        'text-black': '#111111',
        'text-fade-white': '#FEFEF5',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}