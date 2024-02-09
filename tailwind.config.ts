import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/components/**/*.{ts,tsx,mdx}',
    './src/app/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#252638',
        'secondary': '#3D3E54',
        'tertiary': '#212232',
        'subtitle': '#494C4F',
        'blue-primary': '#0A79BE',
        'blue-secondary': '#0069D9',
        'line-primary': '#6E6E6E',
        'line-secondary': '#BDBDBD',
        'line-tertiary': "#545454",
        'main': "#1B4154",
        'button': "#4F4F4F",
      },
      boxShadow: {
        'common': '0 0 18px 0 rgba(0, 0, 0, 0.19)',
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width',
      },
    },
  },
  plugins: [],
};
export default config;
