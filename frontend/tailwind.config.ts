import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        brand: 'rgb(var(--brand) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        wagreen: 'rgb(var(--accent) / <alpha-value>)',
        deep: 'rgb(var(--brand) / <alpha-value>)',
        bone: 'rgb(var(--bg) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
