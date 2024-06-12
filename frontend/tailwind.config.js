/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "oklch(var(--primary-muted) / rgb(56, 37, 101))",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}