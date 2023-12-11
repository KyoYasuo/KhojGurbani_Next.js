import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-poppins)', 'ui-sans-serif', 'system-ui'],
      },
      transitionProperty: {
        'height': 'height'
      },
      boxShadow: {
        'common': '0 0 18px 0 rgba(0, 0, 0, 0.19)',
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
export default config
