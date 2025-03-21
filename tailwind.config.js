/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent)',
        'accent-darker': 'var(--accent-darker)',
        secondary: 'var(--secondary)',
        border: 'var(--border)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}