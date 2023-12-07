import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      colors: {
        'primary': '#252638',
        'secondary': '#252736',
        'third': '#3D3E54',
        'title': '#212529',
        'subtitle': '#494C4F',
        'date': '#9A9595',
        'blue-primary': '#0A79BE',
        'blue-secondary': '#0069D9',
        'line': '#6E6E6E'
      },
    },
  },
  plugins: [],
}
export default config
