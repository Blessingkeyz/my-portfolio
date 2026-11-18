/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        dark: {
          bg: '#0F1624',
          bg2: '#0E131F',
          card: '#1A2236',
        },
        light: {
          bg: '#F2F2F2',
          bg2: '#F8FAFC',
          card: '#F1F5F9',
        },
        accent: {
          cyan: '#13ADC7',
          purple: '#945DD6',
          orange: '#F46737',
        },
      },
      maxWidth: {
        content: '1440px',
      },
    },
  },
  plugins: [],
}
