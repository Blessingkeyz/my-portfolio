/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      // Type scale — use these instead of raw text-* sizes.
      fontSize: {
        display: ['clamp(3rem, 2rem + 4vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // hero name
        title: ['clamp(2rem, 1.5rem + 2vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }], // section titles
        headline: ['clamp(1.5rem, 1.25rem + 1vw, 2rem)', { lineHeight: '1.25', letterSpacing: '-0.01em' }], // featured project names
        heading: ['1.25rem', { lineHeight: '1.75rem' }], // card titles, brand name
        lead: ['clamp(1.125rem, 1rem + 0.4vw, 1.375rem)', { lineHeight: '1.7' }], // intros, about text
        body: ['1rem', { lineHeight: '1.75rem' }], // card text, nav, buttons
        small: ['0.875rem', { lineHeight: '1.375rem' }], // tags, contact details, meta
        caption: ['0.8125rem', { lineHeight: '1.25rem' }], // eyebrows, years, copyright
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
          card: '#FAFAFA',
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
